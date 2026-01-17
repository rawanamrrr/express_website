'use client'

interface ProductCategory {
  title: string
  items: string[]
}

export default function Products() {
  const column1: ProductCategory[] = [
    {
      title: 'ENGINE & DECK STORES',
      items: [
        'CLOTHING',
        'ROPES & HAWSERS.',
        'HOSE & COUPLINGS.',
        'PETROLEUM PRODUCTS.',
        'HARDWARE.',
        'LAVATORY EQUIPMENT.',
        'CLEANING MATERIAL EQUIPMENT.',
        'PNEUMATIC & ELECTRIC TOOLS.',
        'HAND TOOLS.',
        'CUTTING TOOLS.',
        'MEASURING TOOLS.',
        'METAL SHEETS & BARS.',
        'SCREW & NUTS.',
        'PIPE & TUBES.',
        'VALVES & COCKS.',
        'PACKING & JOINTING.',
        'WIELDING EQUIPMENT.',
        'MACHINERY EQUIPMENT.',
        'MARINE PAINT.',
        'PAINTING EQUIPMENT.',
        'SAFETY PROTECTIVE GEAR.',
        'BRUSHES AND MATS.',
      ],
    },
  ]

  const column2: ProductCategory[] = [
    {
      title: 'CABIN STORES',
      items: ['Cloth and linen products.', 'TABLEWARE & GALLEY UTENSILS.'],
    },
    {
      title: 'BRIDGE STORE & ELECTRICAL STORE',
      items: [
        'Pneumatic and electrical tools.',
        'ELECTRICAL EQUIPMENT AND NAVIGATIONAL LIGHTS.',
      ],
    },
    {
      title: 'Safety Equipment Stores',
      items: [
        'IMO safety signs, symbols and flags.',
        'LIFE JACKETS, AND LIFEBUOYS, LIFEBUOY LIGHT, ETC.',
        'IMMERSION SUITS, FIREMAN SUIT, GASTIGHT SUIT, ETC.',
        'FIREFIGHTING EQUIPMENT.',
        'HYDROSTATIC RELEASE.',
      ],
    },
    {
      title: 'ANTI-PIRACY EQUIPMENT',
      items: [
        'Razor & Barbed Wire.',
        'RESCUE DUMMY',
        'Chemical Toilet.',
        'NIGHT-VISION BINOCULARS.',
      ],
    },
    {
      title: 'FRESH PROVISION',
      items: ['Fresh', 'Grocery.', 'FROZEN.'],
    },
    {
      title: 'SIM4CREW',
      items: [
        'Exclusive distributor in Egypt.',
        'MORE COVERAGE – MORE DATA – BETTER PRICES.',
      ],
    },
  ]

  const renderColumn = (categories: ProductCategory[]) => {
    return (
      <div className="h-full flex flex-col border border-gray-200 bg-white shadow-sm">
        {categories.map((category) => (
          <div key={category.title}>
            <div className="bg-accent text-white text-center font-semibold py-3 text-xs sm:text-sm uppercase tracking-wide">
              {category.title}
            </div>
            <ul className="divide-y divide-gray-200">
              {category.items.map((item, index) => (
                <li
                  key={index}
                  className={`py-3 px-4 text-center text-xs sm:text-sm ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="pb-24">
      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        {renderColumn(column1)}
        {renderColumn(column2)}
      </div>
    </section>
  )
}
