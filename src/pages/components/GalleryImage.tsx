import Image from "next/image";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function GalleryImage({ image }: {image: string}) {
  return (
    <div className="galleryImage">
      <div className="galleryImage__top">
        <div className="galleryImage__overlay">
          <Image
            className="galleryImage__overlayImage"
            src="/images/cisco-partner-o.png"
            alt=""
            height="175"
            width="175"
          />
          <button className="galleryImage__button">Read More<KeyboardArrowRightIcon /></button>
        </div>
        <Image
          className="galleryImage__image"
          src={image}
          alt=""
          height="500"
          width="500"
        />
      </div>
      <div className="galleryImage__bottom">Lorem Ipsum Dolor Sit Amet</div>
    </div>
  );
}
