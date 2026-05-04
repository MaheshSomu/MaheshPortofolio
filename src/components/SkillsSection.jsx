export default function SkillsSection() {
  const skills = [
    'Java', 'Python', 'React', 'JavaScript', 'HTML5', 'CSS3',
    'Spring Boot', 'MySQL',
    'Bootstrap', 'Git', 'REST APIs',
    'Responsive Design', 'Problem Solving', 'Communication'
  ];
  const skillCategories = [
    {
      category: 'Programming Languages',
      items: ['Java','Python','JavaScript']
    },
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      category: 'Backend',
      items: ['Spring Boot','Spring Security','Servlets','JSP']
    },
    {
      category: 'Development Tools & Version Control',
      items: ['Maven', 'IntelliJ IDEA', 'Eclipse','Git']
    }
  ];
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <h4 className="skills-overview-title text-center mb-4">
              All Technologies
            </h4>
            <div className="skills-container text-center">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="col-lg-6 col-md-12 mb-4">
              <div className="skill-category-card p-4"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <h5 className="skill-category-title">
                  <i className="fas fa-cube" style={{ marginRight: '10px' }}></i>
                  {category.category}
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.items.map((item, i) => (
                    <span key={i} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
