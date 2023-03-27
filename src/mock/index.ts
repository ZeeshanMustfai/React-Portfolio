import { bootstrapIcon, cssIcon, designIcon, developementIcon, figmaIcon, gitIcon, htmlIcon, jsIcon, maintenanceIcon, mongodbIcon, mysqlIcon, nodeIcon, reactIcon, scssIcon, typescriptIcon } from "../assets/icons";
import { p1, p2, p3 } from "../assets/images";

export const skillsList = [
 { name: 'Html 5',
  icon: htmlIcon 
} ,
{ name: 'Css3',
  icon: cssIcon 
} ,
{ name: 'Sass',
  icon: scssIcon
} ,
{ name: 'Javascript',
  icon: jsIcon 
} ,
{ name: 'React',
  icon: reactIcon 
} ,
{ name: 'Bootstrap',
  icon: bootstrapIcon 
} ,
{ name: 'Git',
  icon: gitIcon 
} ,
{ name: 'Figma',
  icon: figmaIcon 
} ,
{ name: 'Node js',
  icon: nodeIcon 
} ,
{ name: 'MySql',
  icon: mysqlIcon 
} ,
{ name: 'Mongodb',
  icon: mongodbIcon
} ,
{ name: 'Typescript',
  icon: typescriptIcon
} ,
]

export const servicesList = [
{
  title: 'Design',
  icon: designIcon,
  description: `I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.`
},

{
  title: 'Development',
  icon: developementIcon,
  description: `I will convert figma or xd design into full functional and responsive web app. Also I will right tests for checking individual functionality of React/Next js components.`
},
{
  title: 'Maintenance',
  icon: maintenanceIcon,
  description: `I will give 100 percent maintenance facility to our clients after project delivery`
},

]

export const projectsList = [
  {
    id:'pabau-1',
    name: 'Pabau',
    image: p1,
    link: 'https://www.pabau.com/',
    description: 'Pabau is a clinic management software system used by the best clinics to save time, empower growth, and craft the perfect patient experience.'
  },
  {
    id:'skrap-1',
    name: 'Skrap',
    image: p2,
    link: 'https://skrap.co.uk/home',
    description: `Construction hire, made simple.Order through the UK's leading procurement platform for waste management, aggregates, and plant hire.`
  },
  {
    id:'gart-1',
    name: 'Gart-Gallery',
    image: p3,
    link: 'https://gart.gallery/',
    description: `Contemporary Art Online
    Immerse in Eastern European Art
    through your Heart
    G.ART. The largest online catalog of selected Eastern European artists`
  }
]

