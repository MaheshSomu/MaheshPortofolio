import "../App.css";


export default function EducationSection() {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="education-card p-4 mb-4">
              <h4 className="education-degree mb-2">B.Tech in Computer Science & Engineering (AI & ML)</h4>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                <span className="education-institution">Mohan Babu University</span>
                <span className="education-duration">2023 - 2027</span>
              </div>
              <div className="education-details">
                <ul className="mb-2">
                  <li>CGPA: 8.86/10</li>
                  <li>Relevant Coursework: Data Structures, Algorithms, Web Development</li>
                </ul>
              </div>
            </div>

            <div className="education-card p-4 mb-4">
              <h4 className="education-degree mb-2">Intermediate</h4>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                <span className="education-institution">Vit Junior College</span>
                <span className="education-duration">2021-2023</span>
              </div>
              <div className="education-details">
                <ul className="mb-2">
                  <li>Percentage: 96.4%</li>
                  <li>Relevant Coursework: Maths, Physics, Chemistry</li>
                </ul>
              </div>
            </div>

            <div className="education-card p-4 mb-4">
              <h4 className="education-degree mb-2">High School</h4>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                <span className="education-institution">Oxford High School</span>
                <span className="education-duration">2020-2021</span>
              </div>
              <div className="education-details">
                <ul className="mb-2">
                  <li>Percentage: 100%</li>
                  <li>Subjects: Telugu, Physics, Chemistry, Mathematics, Hindi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
