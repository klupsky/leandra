'use client';
import Image from 'next/image';

export default function ImageComponent({ image, imageAlt }) {
  return (
    <div className="w-full lg:h-auto lg:w-1/2 aspect-square">
      {image && (
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            layout="fill"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
