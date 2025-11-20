"use client";

const Map = () => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden border border-border">
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3404.6270502005073!2d31.809225075607824!3d31.42439997425813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI1JzI3LjgiTiAzMcKwNDgnNDIuNSJF!5e0!3m2!1sen!2seg!4v1763593684412!5m2!1sen!2seg"
          className="absolute top-0 left-0 w-full h-full"
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