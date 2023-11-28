import { Button } from 'react-bootstrap';

const SectionProject = () => {
  interface projectType {
    images: string;
    title: string;
    linkSite?: string;
    linkGithub: string;
  }
  const projects: projectType[] = [
    {
      images: 'tabungan.png',
      title: 'Tabungan',
      linkSite: 'https://zegasoft-react-study.vercel.app/tabungan',
      linkGithub: 'https://github.com/ikhsanmuhamad22/zegasoft-react-study',
    },
    {
      images: 'shareing-apps.png',
      title: 'Shareings-apps',
      linkSite: 'https://shareings-apps.vercel.app/',
      linkGithub: 'https://github.com/ikhsanmuhamad22/shareings-apps',
    },
    {
      images: 'shareings-api.png',
      title: 'Shareings-api',
      linkGithub: 'https://github.com/ikhsanmuhamad22/shareings-api',
    },
    {
      images: 'open-music-api.png',
      title: 'OpenMusic-api',
      linkGithub: 'https://github.com/ikhsanmuhamad22/isan-OpenMusic',
    },
    {
      images: 'forum-api.png',
      title: 'Forum-api',
      linkGithub: 'https://github.com/ikhsanmuhamad22/forum-api',
    },
  ];
  return (
    <section id="section-project">
      <h2>These are some of my projects</h2>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            return (
              <div className="col d-flex flex-column align-items-center">
                <div className="project">
                  <img
                    key={index}
                    className="project-images"
                    src={`/images/${project.images}`}
                    alt={project.title}
                  />
                  <p className="m-3 fs-4 fw-bold">{project.title}</p>
                  <div className="d-flex gap-4 justify-content-center mt-3">
                    {project.linkSite ? (
                      <a href={project.linkSite} target="_blank">
                        <Button>Visit site</Button>
                      </a>
                    ) : null}
                    <a href={project.linkGithub} target="_blank">
                      <Button>Visit Github</Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
