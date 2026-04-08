import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loading from './Loading';
import { Card, CardBody, CardTitle,CardFooter,Button } from "shards-react";
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 180,
    height:180,
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
  sombra:{
    boxShadow: "-1px 3px 23px -6px rgba(102,33,102,1)"
  }
}));


const logo = "/cv/img/";

const MECALUX_TECH = [
  { file: 'java.png',       alt: 'Java' },
  { file: 'angular.png',    alt: 'Angular' },
  { file: 'javascript.png', alt: 'JavaScript' },
  { file: 'react.png',      alt: 'React' },
  { file: 'node.png',       alt: 'Node.js' },
  { file: 'php.png',        alt: 'PHP' },
  { file: 'symfony.png',    alt: 'Symfony' },
  { file: 'laravel.png',    alt: 'Laravel' },
];

const Experience = () => {

  const classes =    useStyles();
  const useState = useSelector((state) => state.user);
  const myExperience = (
    <div>
      {
        (useState.experience && useState.experience.length > 1) ? <div className="row mt-4 p-4">{(Carga(useState.experience, classes))}</div>: <Loading />
      }
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>Experiencia</h2>
      <hr/>
      {myExperience}
    </div>
  )

};

const Carga = (experience, classes)=>{
      const urlBase = '/cv-resume/img/';
      return (experience.map((exp) => {

          const jobs = exp.jobTitle + '@' + exp.company;
          return <div className={"mt-4 text-center col-md-6"} key={exp.id}>
                    <Card className={"shadow p-3 bg-gradient-primary mt-4 rounded"}>
                    <CardBody>
                      <CardTitle>{ jobs }</CardTitle>
                      {exp.jobDescription}
                      <p>
                        {MECALUX_TECH.map((tech) => (
                          <img
                            key={tech.alt}
                            className={ classes.image }
                            src={urlBase + tech.file}
                            alt={tech.alt}
                            title={tech.alt}
                          />
                        ))}
                      </p>

                    </CardBody>
                    <CardFooter className="text-center">
                      <Button squared theme={ ramdow('button') }>
                        <a className={classes.link} href={exp.web} target="_blank">{ exp.company }</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

        })
      )
  }

const ramdow = (val) => {
    let valor = [];
    if(val == 'button')
    {
      valor =
      [
        "info",
        "success",
        "secondary",
        "danger"
      ]
    }
    if(val=='sombra'){
      valor =
      [
        "bg-light",
        "bg-white",
        "bg-dark"
      ]
    }
    if(val=='col'){
      valor =
      [
        "col-md-10",
        "col-md-8",
        "col-md-6",
        "col-md-5",
        "col-md-4",
      ]
    }

    var result = valor[Math.floor(Math.random() * 3)];
    return result;
  };

export default Experience;
