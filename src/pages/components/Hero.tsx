import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__top">
        <div className="container">
          <Image
            className="hero__partnerLogo"
            src="/images/cisco-partner-o.png"
            alt="Cisco Partner Logo"
            height="90"
            width="90"
          />
        </div>
      </div>
      <div className="hero__bottom">
        <div className="container">
            <h1>
              Lorem ipsum dolor sit amet. Est culpa veritatis sed similique
              magni sed asperiores ratione aut molestiae
            </h1>
            <p>
              Lorem ipsum dolor sit amet. Et voluptatem autem vel error nihil
              aut unde aliquid ut eaque ducimus id eius harum in modi nulla. Qui
              doloribus accusantium a dolorem consectetur et consectetur
              consequatur et impedit necessitatibus et dolorem voluptas est
              officiis magni et voluptas nemo. Ut Quis reprehenderit et officia
              tempora nam itaque laborum est internos.
              </p>
        </div>
      </div>
    </section>
  );
}
