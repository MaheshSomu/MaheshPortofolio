import { useState } from 'react';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      icon: '🛒',
      title: 'FarmchainX – Agricultural Traceability Network',
      description: 'FarmchainX is an agricultural traceability system that tracks crops from farm to consumer, ensuring transparency, real-time tracking, and easy access to product information.',
      technologies: ['React JS','Spring Boot','Bootstrap','MySQL'],
      github: 'https://github.com/MaheshSomu/FarmchainX.git',
      category: 'fullstack'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      github: 'https://github.com',
      category: 'frontend'
    },
    {
      id: 3,
      icon: '🎬',
      title: 'Movie Database Website',
      description: 'Interactive movie database with search, filtering, and user ratings powered by external APIs.',
      technologies: ['React', 'REST APIs', 'Bootstrap', 'Axios'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      category: 'frontend'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        {/* Tab Navigation */}
        <div className="d-flex justify-content-center mb-5 flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`project-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-image">
                  {project.icon}
                </div>
                <div className="project-body">
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links mt-auto">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> View Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
