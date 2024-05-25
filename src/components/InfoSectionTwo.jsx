'use client';
import image from '../../public/leandra_1.png';
import ImageComponent from './ImageComponent';
import Menu from './Menu';

export default function InfoSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <ImageComponent image={image} />
        <Menu />
      </div>
    </>
  );
}
