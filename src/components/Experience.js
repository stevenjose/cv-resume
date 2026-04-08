import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loading from './Loading';
import { Card, CardBody, CardTitle, CardFooter, Button } from "shards-react";
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 180,
    height: 180,
    padding: 10,
    margin: 15,
  },
  image: {
    width: 30,
    height: 30,
    margin: 5,
    background: 'white'
  },
  p: {
    fontSize: '3rem',
  },
  root: {
    width: '100%',
    maxWidth: 960,
    backgroundColor: theme.palette.background.paper,
    fontSize: '3rem'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  sombra: {
    boxShadow: "-1px 3px 23px -6px rgba(102,33,102,1)"
  },
  techBadge: {
    display: 'inline-block',
    backgroundColor: '#e9ecef',
    color: '#343a40',
    borderRadius: '4px',
    padding: '2px 8px',
    margin: '3px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  dateLocation: {
    fontSize: '0.85rem',
    color: '#6c757d',
    marginBottom: '8px'
  }
}));

const urlBase = '/cv-resume/img/';

const TECH_IMAGES = {
  java: urlBase + 'java.png',
  angular: urlBase + 'angular.png',
  react: urlBase + 'react.png',
  javascript: urlBase + 'javascript.png',
  node: urlBase + 'node.png',
};

const Experience = () => {
  const classes = useStyles();
  const userState = useSelector((state) => state.user);

  const myExperience = (
    <div>
      {
        (userState.experience && userState.experience.length > 0)
          ? <div className="row mt-4 p-4">{Carga(userState.experience, classes)}</div>
          : <Loading />
      }
    </div>
  );

  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>Experiencia</h2>
      <hr />
      {myExperience}
    </div>
  );
};

const Carga = (experience, classes) => {
  return experience.map((exp) => {
    const jobs = exp.jobTitle + ' @ ' + exp.company;
    return (
      <div className={"mt-4 text-center col-md-6"} key={exp.id}>
        <Card className={"shadow p-3 bg-gradient-primary mt-4 rounded"}>
          <CardBody>
            <CardTitle>{jobs}</CardTitle>
            {(exp.location || exp.startDate) && (
              <p className={classes.dateLocation}>
                {exp.location && <span><i className="fa fa-map-marker" /> {exp.location}</span>}
                {exp.location && exp.startDate && ' · '}
                {exp.startDate && (
                  <span>
                    <i className="fa fa-calendar" /> {exp.startDate}
                    {exp.endDate && ` – ${exp.endDate}`}
                  </span>
                )}
              </p>
            )}
            <p>{exp.jobDescription}</p>
            {exp.technologies && exp.technologies.length > 0
              ? renderTechBadges(exp.technologies, classes)
              : renderDefaultTechImages(classes)
            }
          </CardBody>
          <CardFooter className="text-center">
            <Button squared theme={randomTheme()}>
              <a className={classes.link} href={exp.web} target="_blank" rel="noreferrer">{exp.company}</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  });
};

const renderTechBadges = (technologies, classes) => (
  <p>
    {technologies.map((tech) =>
      TECH_IMAGES[tech.toLowerCase()]
        ? <img key={tech} className={classes.image} src={TECH_IMAGES[tech.toLowerCase()]} alt={tech} title={tech} />
        : <span key={tech} className={classes.techBadge}>{tech}</span>
    )}
  </p>
);

const renderDefaultTechImages = (classes) => (
  <p>
    <img className={classes.image} src={TECH_IMAGES.java} alt="Java" title="Java" />
    <img className={classes.image} src={TECH_IMAGES.angular} alt="Angular" title="Angular" />
    <img className={classes.image} src={TECH_IMAGES.javascript} alt="JavaScript" title="JavaScript" />
    <img className={classes.image} src={TECH_IMAGES.react} alt="React" title="React" />
    <img className={classes.image} src={TECH_IMAGES.node} alt="Node.js" title="Node.js" />
  </p>
);

const randomTheme = () => {
  const themes = ["info", "success", "secondary", "danger"];
  return themes[Math.floor(Math.random() * themes.length)];
};

export default Experience;

