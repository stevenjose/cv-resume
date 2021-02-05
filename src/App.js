import { About } from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import { Skills } from './components/Skills';
import img1 from './assets/img/jgla.jpeg';

function App() {

  const person = {
    avatar: img1,
    name: 'José Gregorio López Arias',
    profession: 'Full Stack Developer',
    bio: 'Desarrollador de Aplicaciones móviles y web Mi experiencia: '+
        'He participado en proyectos pequeños, medianos y grandes, bajo estándares de calidad.' +
        'Con más de 9 años de experiencia en área de desarrollo de software, '+
        'participando en todas sus fases del desarrollo de aplicaciones web y moviles con Angular, Ionic, Vue, NodeJs,'+
        'Java, Laravel, Lumen, Symfony, ReactJs, Elastic Search, Metodologías: Scrum.',
    email:'lopezajoseg@gmail.com',
    address: 'Miranda, Venezuela.',
    social: [
      {name: 'github', url: 'https://github.com/stevenjose/'},
      {name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/'},
    ],
    experience: [
      {jobTitle: 'Desarrollador Full Stack', company: 'ePayco', startDate: 'Agosto 2020', endDate: 'Present', jobDescription: 'Desarrollar nuevos modulos y darle mantenimiento a lo existentes usando tecnologias de alto nivel ElasticSearch, Symfony, Vuejs.'},
      {jobTitle: 'Desarrollador Full-Stack', company: 'Strapp Internacional', startDate: 'Julio 2019', endDate: 'Julio 2020', jobDescription: 'Desarrollar apliaciones moviles y web usando las siguientes tecnologias: Ionic, Angular, Symfony, Firebase, Mysql, NodeJs'},
      {jobTitle: 'Senior Developer', company: 'Banco de Venezuela', startDate: 'Agosto 2015', endDate: 'Julio 2019', jobDescription: 'Desarrollar soluciones empresariales de alta rentabilidad usando tecnologias: Java, Oracle, MysqlServer, Pentaho, Angular'},
      {jobTitle: 'Tesoria de Seguridad Social', company: 'Analista de Sistemas', startDate: 'Septiembre 2014', endDate: 'Julio 2015', jobDescription: 'Desarrollar aplicaiones web usando el framework Yii y base datos Mysql, creación y implementación del intranet institucional y sistemas internos'},
      {jobTitle: 'INPSASEL', company: 'Analista de Sistemas', startDate: 'Octubre 2013', endDate: 'Julio 2014', jobDescription: 'Desarrollar aplicaiones web usando el framework KumbiaPhp y base datos Mysql, creación y implementación de sistemas internos'},

    ],
    education: [
      {degree: 'Maestria Atomica', institution: 'MIT', startDate: 'Jan 2016', endDate: 'Jan 2017', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      {degree: 'Ingenieria Atomica', institution: 'Harvard', startDate: 'Jan 2014', endDate: 'Decenber 2015', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
    ],
    certificate: [
      {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
      {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
    ],
    skills: [
      {name: 'HTML5', percentage: '95%'},
      {name: 'CSS', percentage: '90%'},
      {name: 'JavaScript', percentage: '95%'},
      {name: 'Angular', percentage: '95%'},
      {name: 'VueJS', percentage: '78%'},
      {name: 'Ionic', percentage: '85%'},
      {name: 'ReactJS', percentage: '68%'},
      {name: 'NodeJs', percentage: '75%'},
      {name: 'PHP', percentage: '85%'},
      {name: 'Symfony', percentage: '85%'},
      {name: 'Laravel', percentage: '85%'},
      {name: 'ElasticSearch', percentage: '65%'},
      {name: 'Mysql', percentage: '65%'},
      {name: 'Postgresql', percentage: '65%'},
      {name: 'Oracle', percentage: '65%'},
      {name: 'Mongo', percentage: '55%'},
      {name: 'Firebase', percentage: '55%'},

    ]
  };

  return (
    <header className="App">
      <div className='wrapper'>
        <div className='sidebar'>
          <About
            avatar={person.avatar}
            name={person.name}
            profession={person.profession}
            bio={person.bio}
            address={person.address}
            social={person.social}
            email ={person.email}/>
        </div>
        <div className='content-wrapper'>
            <div className='content'>
              <Experience experience={person.experience} />
              <hr/>
              <Education education={person.education} />
              <hr/>
              <Certificate certificate={person.certificate} />
              <hr/>
              <Skills skills={person.skills} />
            </div>
        </div>
      </div>
    </header>
  );
}

export default App;
