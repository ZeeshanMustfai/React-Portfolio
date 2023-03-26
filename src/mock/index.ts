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
  icon: designIcon
},

{
  title: 'Development',
  icon: developementIcon
},
{
  title: 'Maintenance',
  icon: maintenanceIcon
},

]

export const projectsList = [
  {
    id:'pabau-1',
    name: 'Pabau',
    image: p1,
    link: 'https://www.pabau.com/',
    description: 'Pabau is a leading clinic management software system used by the best clinics to save time, empower growth, and craft the perfect patient experience.'
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