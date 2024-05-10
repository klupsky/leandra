import Image from 'next/image';
import cocktail1 from '../../public/cocktail_1.svg';
import headline from '../../public/headline.svg';
import map from '../../public/map.svg';

export default function CocktailCard({ cocktailImage, cocktailName }) {
  return (
    <div className="flex flex-col bg-blue w-fit">
      <div className="flex bg-blue">
        <div className="border-2 border-blue bg-white w-50 h-50">
          <Image src={cocktailImage} alt={cocktailName} />
        </div>
        <div className="w-2 h-2 bg-green"></div>
      </div>
      <div className="w-2 h-2 bg-green"></div>
    </div>
  );
}
