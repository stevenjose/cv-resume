import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';

export const About = ({avatar, name, profession, bio, address, social, email}) => {
  return(
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <Social social={social} email={email} />
    </div>
  );
};

About.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  address: PropTypes.string,
};
