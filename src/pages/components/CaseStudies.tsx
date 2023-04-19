import CaseStudy from "./CaseStudy";

export default function CaseStudies() {
  return (
    <section className="caseStudies">
        <div className="container">
          <div className="caseStudies__headings">
          <h2>Case studies</h2>
          <hr ></hr>
          <h3>Lorem Ipsum Dolor Sit Amet.</h3>
          <br></br>
          <h3>
            <b>Below are some case studies...</b>
          </h3>
        </div>
            <div className="caseStudies__container">
              <CaseStudy id="1"/>
              <CaseStudy id="2"/>
            </div>
        </div>
    </section>
  );
}
