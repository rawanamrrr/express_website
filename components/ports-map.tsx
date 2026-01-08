'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Port = {
  id: string
  name: string
  city: string
  xMobile: number
  yMobile: number
  xDesktop: number
  yDesktop: number
  imageSrc: string
  externalUrl: string
}

const ports: Port[] = [
  {
    id: 'alexandria',
    name: 'Alexandria Port',
    city: 'Alexandria, Egypt',
    xMobile: 58,
    yMobile: 28.7,
    xDesktop: 53.8,
    yDesktop: 19,
    imageSrc: '/alexandria-port.png',
    externalUrl:
      'https://www.marinetraffic.com/en/ais/details/ports/307',
  },
  {
    id: 'el-dekheila',
    name: 'El Dekheila Port',
    city: 'El Dekheila, Egypt',
    xMobile: 57,
    yMobile: 29,
    xDesktop: 53.4,
    yDesktop: 19.2,
    imageSrc: '/dekhila-port.png',
    externalUrl:
      'https://www.marinetraffic.com/en/ais/details/ports/18848',
  },
  {
    id: 'damietta',
    name: 'Damietta Port',
    city: 'Damietta, Egypt',
    xMobile: 59.5,
    yMobile: 28.6,
    xDesktop: 54.5,
    yDesktop: 19,
    imageSrc: '/damietta-port.png',
    externalUrl:
      'https://www.marinetraffic.com/en/ais/details/ports/997',
  },
  {
    id: 'port-said',
    name: 'Port Said Port',
    city: 'Port Said, Egypt',
    xMobile: 60.5,
    yMobile: 28.7,
    xDesktop: 55.1,
    yDesktop: 19,
    imageSrc: '/portsaid-port.png',
    externalUrl:
      'https://www.marinetraffic.com/en/ais/details/ports/2175',
  },
  {
    id: 'east-port-said',
    name: 'East Port Said Port',
    city: 'East Port Said, Egypt',
    xMobile: 60.5,
    yMobile: 29.4,
    xDesktop: 55,
    yDesktop: 19.6,
    imageSrc: '/portsaid-port.png',
    externalUrl:
      'https://www.marinetraffic.com/en/ais/home/centerx:32.3400/centery:31.2700/zoom:11',
  },
  {
    id: 'ein-el-sokhna',
    name: 'Ein El Sokhna Port',
    city: 'Ain Sokhna, Egypt',
    xMobile: 60.5,
    yMobile: 30.5,
    xDesktop: 55,
    yDesktop: 21.5,
    imageSrc: '/sokhna-port.png',
    externalUrl:
      'https://www.marinetraffic.com/en/ais/details/ports/3203',
  },
]

export default function PortsMap() {
  const [selectedPortId, setSelectedPortId] = useState<string | null>(null)
  const [hoveredPortId, setHoveredPortId] = useState<string | null>(null)
  const [zoomedPortId, setZoomedPortId] = useState<string | null>(null)

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const updateMatch = () => {
      setIsDesktop(mediaQuery.matches)
    }

    updateMatch()
    mediaQuery.addEventListener('change', updateMatch)

    return () => {
      mediaQuery.removeEventListener('change', updateMatch)
    }
  }, [])

  // Smooth zoom behavior on desktop: delay zoom-in/out slightly so hover feels stable
  useEffect(() => {
    if (!isDesktop) {
      setZoomedPortId(null)
      return
    }

    // If no port is currently hovered, keep the existing zoomedPortId.
    // This prevents rapid zoom-out when moving between nearby pins.
    if (!hoveredPortId) {
      return
    }

    // When hovering a pin, delay zooming to avoid jitter when moving between pins
    const timeout = window.setTimeout(() => {
      setZoomedPortId(hoveredPortId)
    }, 160)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [hoveredPortId, isDesktop])


  // Port used for display (label + pin highlight)
  const displayPortId = hoveredPortId ?? zoomedPortId ?? selectedPortId
  const displayPort =
    displayPortId != null
      ? ports.find((port) => port.id === displayPortId) ?? null
      : null

  // Port used for zoom
  // - Desktop: follow delayed zoom target (based on hover) if any, otherwise selected port
  // - Mobile: follow selected port (no hover on touch)
  const zoomTargetId = isDesktop ? (zoomedPortId ?? selectedPortId) : selectedPortId
  const zoomPort =
    zoomTargetId != null
      ? ports.find((port) => port.id === zoomTargetId) ?? null
      : null

  const activePortId = displayPortId

  const handlePortClick = (portId: string) => {
    setSelectedPortId((current) => (current === portId ? null : portId))
  }

  const defaultOrigin = '62% 32%'
  const getPortCoords = (port: Port) =>
    isDesktop
      ? { x: port.xDesktop, y: port.yDesktop }
      : { x: port.xMobile, y: port.yMobile }

  const activeCoords = zoomPort ? getPortCoords(zoomPort) : null

  const transformOrigin = activeCoords
    ? `${activeCoords.x}% ${activeCoords.y}%`
    : defaultOrigin

  // Port used for the info card
  // - Desktop: follow the active (hovered/selected) port so it appears on hover
  // - Mobile: follow the selected port (tapped pin)
  const cardPortId = isDesktop ? displayPortId : selectedPortId
  const cardPort =
    cardPortId != null
      ? ports.find((port) => port.id === cardPortId) ?? null
      : null

  const cardCoords = cardPort ? getPortCoords(cardPort) : null
  const cardTopOffset =
    cardCoords != null
      ? cardCoords.y + (isDesktop ? 4 : 1)
      : null

  return (
    <div className="w-full mx-auto">
      <div
        className="relative w-full h-[70vh] min-h-[320px] sm:h-[75vh] sm:min-h-[360px] md:h-[85vh] md:min-h-[440px] max-h-[900px] rounded-xl"
        onMouseLeave={() => {
          setHoveredPortId(null)
          setZoomedPortId(null)
          setSelectedPortId(null)
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin }}
          animate={{
            scale: zoomPort ? 3.2 : 1.5,
            x: zoomPort ? 0 : 40,
            y: zoomPort ? 0 : -20,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img
            src="/africa-map.png"
            alt="Africa map with highlighted ports"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
          {ports.map((port) => {
            const isActive = activePortId === port.id
            const { x, y } = getPortCoords(port)

            return (
              <button
                key={port.id}
                type="button"
                onClick={() => handlePortClick(port.id)}
                onMouseEnter={() => setHoveredPortId(port.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="flex flex-col items-center gap-1">
                  <span
                    className={`block w-1.5 h-1.5 rounded-full border border-white shadow-md transition-transform duration-200 ${
                      isActive ? 'bg-red-600 scale-125' : 'bg-red-500'
                    }`}
                  />
                </div>
              </button>
            )
          })}

          {cardPort && cardCoords && cardTopOffset != null && (
            <div
              className="absolute z-10 -translate-x-1/2 mt-1 w-28 sm:w-36 md:w-40 bg-white/95 text-xs text-black rounded-lg shadow-lg overflow-hidden"
              style={{ left: `${cardCoords.x}%`, top: `${cardTopOffset}%` }}
            >
              <div className="px-3 py-2 border-b border-gray-200">
                <div className="font-semibold text-xs">{cardPort.name}</div>
                <div className="text-[10px] text-gray-600">{cardPort.city}</div>
              </div>
              <div className="w-full h-20 sm:h-28 md:h-32">
                <a
                  href={cardPort.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={cardPort.imageSrc}
                    alt={cardPort.name}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="px-3 py-2 border-t border-gray-200 text-[10px] text-blue-600 text-right">
                <a
                  href={cardPort.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View on MarineTraffic
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
