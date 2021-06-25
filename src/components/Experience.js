import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import logoEpayco from '../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 180,
    height:180,
    padding: 10,
    margin: 15,
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:340,
    textAlign: 'center'
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
}));



const Experience = (props) => {

  const classes = useStyles();

  const avatarEpayco = logoEpayco;

  const myExperience = (
    <div>
      {
        props.experience.map((exp) => {

          const jobs = exp.jobTitle + '@' + exp.company;

          return <div key={exp.id}>
            <div className="row" key={exp.id}>
              <div className="col-md-6 col-lg-4 col-sm-12">
                <img className="img-thumbnail" src={exp.logo} alt={exp.company} />
              </div>
              <div className="col-sm-12 col-md-8">
                  <h3>{ jobs }</h3>
                  <p>{exp.jobDescription}</p>
              </div>
            </div>
          </div>
        }

        )}
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

export default Experience;
