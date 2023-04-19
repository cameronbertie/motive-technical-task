import Image from "next/image";

export default function Infographic() {
    
  return (
    <section className="infographic">
        <div className="container">
          <h2>Lorem ipsum dolor sit amet. Et sint expedita sit voluptatem ipsam ut nostrum porro. Ea mollitia facilis</h2>
          <p>Lorem ipsum dolor sit amet. Et sint expedita sit voluptatem ipsam ut nostrum porro. Ea mollitia facilis et assumenda porro ut natus iure aut excepturi repellat vel exercitationem autem ut optio soluta. Rem eius amet ab Quis iusto ex perferendis quibusdam qui dolorum omnis ad tempora inventore sit maxime dolorem ab voluptate corrupti ntore sit maxime dolorem ab volupta ntore sit maxime dolorem ab.</p>
          <div className="infographic__CTA"><button>❤️ CTA ❤️</button></div>
          <Image
            className="infographic__image"
            src="/images/NSC_Cisco_Infographic.png"
            alt=""
            height="1080"
            width="1920"
          />
      </div>
    </section>
  );
}
