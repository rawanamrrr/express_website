"use client";

const Map = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Port+of+Damietta/@31.3861111,31.8199999,15z/data=!4m6!3m5!1s0x14f9e3a4f7e7b2b1:0x1e5e5e5e5e5e5e5e!8m2!3d31.3861111!4d31.8199999!16s%2Fm%2F0h6z8f3?entry=ttu', '_blank');
  };

  return (
    <div 
      className="w-full aspect-video rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-90 transition-opacity"
      onClick={handleMapClick}
      title="Click to open in Google Maps"
    >
      <div className="relative w-full h-0 pb-[56.25%]"> 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.8637999999996!2d31.819999999999995!3d31.3861111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e3a4f7e7b2b1%3A0x1e5e5e5e5e5e5e5e!2sPort%20of%20Damietta!5e0!3m2!1sen!2seg!4v1630000000000!5m2!1sen!2seg"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Damietta Port Location"
        />
      </div>
      <p className="text-sm text-foreground/60 mt-2 text-center">
        Damietta Port, sector1, office2, Egypt
      </p>
    </div>
  );
};

export default Map;