import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loading from './Loading';
import { Card, CardBody, CardTitle, CardFooter, Button } from 'shards-react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 30,
    height: 30,
    margin: 5,
    background: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  techBadge: {
    display: 'inline-block',
    padding: '2px 8px',
    margin: '3px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    backgroundColor: '#6c757d',
    color: 'white',
  },
}));

/** Known tech logos available in /cv-resume/img/ */
const TECH_LOGOS = {
  javascript: 'javascript.png',
  angular: 'angular.png',
  react: 'react.png',
  java: 'java.png',
  node: 'node.png',
  php: 'php.png',
  laravel: 'laravel.png',
  symfony: 'symfony.png',
};

/** Default tech stack for Mecalux role */
const DEFAULT_TECH_STACK = ['java', 'spring', 'angular', 'alfresco'];

const BUTTON_THEMES = ['info', 'success', 'secondary', 'danger'];

const randomButtonTheme = () =>
  BUTTON_THEMES[Math.floor(Math.random() * BUTTON_THEMES.length)];

const TechStack = ({ technologies, classes }) => {
  const urlBase = '/cv-resume/img/';
  const techList = technologies && technologies.length > 0 ? technologies : DEFAULT_TECH_STACK;

  return (
    <p>
      {techList.map((tech) => {
        const techKey = tech.toLowerCase();
        const logoFile = TECH_LOGOS[techKey];
        if (logoFile) {
          return (
            <img
              key={techKey}
              className={classes.image}
              src={urlBase + logoFile}
              alt={tech}
              title={tech}
            />
          );
        }
        return (
          <span key={techKey} className={classes.techBadge} title={tech}>
            {tech}
          </span>
        );
      })}
    </p>
  );
};

const ExperienceCard = ({ exp, classes }) => {
  const jobTitle = `${exp.jobTitle} @ ${exp.company}`;
  return (
    <div className="mt-4 text-center col-md-6" key={exp.id}>
      <Card className="shadow p-3 bg-gradient-primary mt-4 rounded">
        <CardBody>
          <CardTitle>{jobTitle}</CardTitle>
          <p>{exp.jobDescription}</p>
          <TechStack technologies={exp.technologies} classes={classes} />
        </CardBody>
        <CardFooter className="text-center">
          <Button squared theme={randomButtonTheme()}>
            <a
              className={classes.link}
              href={exp.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              {exp.company}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const Experience = () => {
  const classes = useStyles();
  const userState = useSelector((state) => state.user);

  const hasExperience = userState.experience && userState.experience.length > 0;

  return (
    <div className="title">
      <i className="fa fa-briefcase"></i>
      <h2>Experiencia</h2>
      <hr />
      <div>
        {hasExperience ? (
          <div className="row mt-4 p-4">
            {userState.experience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} classes={classes} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Experience;
