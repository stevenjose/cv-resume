import React from 'react';

const Social = ({social, email}) => {
  const socialNetworks = (
    <ul>
      {social.map((socialNetwork) =>
        <li key={socialNetwork.name}>
          <a href={socialNetwork.url} target='_blank' rel="noopener noreferrer">
            <i className={'fa fa-' + socialNetwork.name + '-square'}></i>
          </a>
        </li>
      )}
    </ul>

  );
  return (
    <div>
      <div className="social">
        {socialNetworks}
      </div>
      <hr/>
      <div>
        Correo: { email }
      </div>
    </div>
  )
};

export default Social;
