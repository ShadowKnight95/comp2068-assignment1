var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',
  message: 'This is my assignment 1 home page. It lists displays all of my previous assignments and labs that I have completed in Nodejs and Expressjs.',
  servicesT: 'Services:',
  servicesM: 'If you would like to view all of my skills in the web development field please click on the Services Tab.',
  projectsT: 'Projects:',
  projectsM: 'Click on the Projects Tab to view all of my projects that I have completed in Nodejs and Expressjs.',
  aboutmeT: 'About Me:',
  aboutmeM: 'This tab is dedicated to telling you a bit about me. Feel free to check it out!',
  contactmeT: 'Contact Me:',
  contactmeM: 'If you wish to contact me please click on the Contact Me Tab.'
  });
});

/* GET services page. */
var skills = ['HTML', 'CSS', 'PHP', 'JavaScript', 'MYSQL', 'MongoDB', 'ExpressJS', 'NodeJS'];
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',
  message: 'This is my services page. It displays all of the services I can provide.',
  skillsT: 'Skills:',
  skills: skills
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
  message: 'These are the projects that I have completed so far in Nodejs and Expressjs. Please click on the links to view the pages.Note: Pages will open in a septerate window for your convinience.',
  projectsT: 'Projects:',
  githubT: 'GitHub Link: ',
  githubM: 'Here is my GitHub link to view more of my projects.'
  });
});

/* GET about me page. */
router.get('/about-me', function(req, res, next) {
  res.render('aboutme', { title: 'About Me',
  message: 'Hi, my name is Zac Force. I have studied at Georgian College for a year and I am at the start of my second year. Among many of my talents Java stands to be my best. However I am confident in my abilities in HTML, CSS, PHP, MYSQL, and in learning new skills that I do not already posses.',
  messageT: 'Details About Me',
  messageA: 'Age: 19',
  messageH: 'Height: 6 feet 2 inches',
  messageL: 'Languages: English',
  messageU: 'Unique Attribute: Likes learning new things.',
  messageG: 'Gender: Male'
  });
});

/* GET contact me page. */
router.get('/contact-me', function(req, res, next) {
  res.render('contactme', { title: 'Contact Info',
  message: 'Please get into touch with me if you ever want to discuss my skills and abilities.',
  messageN: 'Name: Zac Force',
  messageP: 'Phone Number: 705-722-2343',
  messageE: 'Email: zac@outlook.com'
  });
});

module.exports = router;
