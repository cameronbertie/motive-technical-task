import Image from "next/image";
import GalleryImage from "./GalleryImage";

export default function Gallery() {
    
  return (
    <section className="gallery">
        <div className="container">
        <div className="gallery__container">
          <GalleryImage image="/images/Driving_Differentiation.png" />
          <GalleryImage image="/images/Customer_Journey.png" />
          <GalleryImage image="/images/Distribution.png" />
          <GalleryImage image="/images/Transforming_Retail.png" />
        </div>
      </div>
    </section>
  );
}
