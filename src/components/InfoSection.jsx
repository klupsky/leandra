'use client';
import image from '../../public/leandra_2.png';
import ImageComponent from './ImageComponent';
import Map from './Map';

export default function InfoSection() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <Map />
        <ImageComponent image={image} />
      </div>
    </>
  );
}
