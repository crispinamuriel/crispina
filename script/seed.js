'use strict'

const db = require('../server/db')
const {User, Project, Info, Contact} = require('../server/db/models/index')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const projects = await Promise.all([
    Project.create({
      title: 'Calibrate Membership',
      content: 'Sign-up and payment flow for Calibrate members',
      imageUrl: 'calibrate.png',
      projectUrl: 'https://apply.joincalibrate.com/oymr'
    }),
    Project.create({
      title: 'Join Calibrate',
      content: 'Calibrate marketing website',
      imageUrl: 'calibrate2.png',
      projectUrl: 'https://www.joincalibrate.com'
    }),
    Project.create({
      title: 'EnCoMPASS',
      content: 'An educational app for students & teacher collaboration',
      imageUrl: 'encompass.png',
      projectUrl: 'https://encompass.mathematicalthinking.org/',
      gitHubUrl: 'https://github.com/crispinamuriel/encompass'
    }),
    Project.create({
      title: 'Codewords',
      content: 'A multiplayer game based on the board game Codenames',
      imageUrl: 'codewords.png',
      projectUrl: 'https://codenames.adaptable.app/',
      gitHubUrl: 'https://github.com/crispinamuriel/Codewords'
    }),
    Project.create({
      title: 'LoveLaces',
      content: 'An e-commerce full stack application for women’s shoes',
      imageUrl: 'Shoes.png',
      projectUrl: 'https://lovelaces.adaptable.app/',
      gitHubUrl: 'https://github.com/crispinamuriel/Lovelaces'
    }),
    Project.create({
      title: 'Recipe App',
      content: 'A single page application to store user recipes',
      imageUrl: 'recipe.png',
      projectUrl: 'https://muriel-recipe-app.netlify.com/',
      gitHubUrl: 'https://github.com/crispinamuriel/recipe-app'
    })
  ])

  const info = await Promise.all([
    Info.create({
      title: 'Technical Skills',
      content:
        'JavaScript (ES6+), TypeScript, HTML5, CSS, React.js, Redux.js, Node.js, Express.js, PostgreSQL, Python, Django, SQL, RDBMS, Babel, Webpack, Git, GitHub, AJAX, RESTful APIs, JSON, WebSockets, Socket.io, Webhooks, Jest, Jasmine, Mocha, Chai, Enzyme, Cypress, Selenium, LocalStorage, Full Stack Development, Heroku, Google OAuth, Agile, SCRUM, JIRA, Confluence, Pair Programming, UI/UX, Linux, Bash, Browserify, Vue.js, Vuetify, Ember.js',
      imgUrl: 'dev-logos.png'
    }),
    Info.create({
      title: 'Professional Background',
      content:
        'My passions are Tech, Learning, and Education. I have credentials to teach elementary school in California and New York. As a user of educational apps in my classroom, I was always inspired at how technology seemed to motivate my class to learn. I loved my time spent working with children and am proud to have contributed to the EdTech field that reaches many children in a meaningful way. \n \n For the past three years I have immersed myself in coding and constructing full stack applications for various clients. Working with JavaScript, TypeScript, and Python has been an exhilarating journey, allowing me to unleash my creativity within the realm of web application development. I have been actively participating in diverse projects as a Full Stack Developer, notably collaborating on an an educational app, a fintech app, a health tech app, signup and payment flows, marketing websites, and an insurance processing app.',
      imgUrl: 'education.jpg'
    }),
    Info.create({
      title: 'Personal Background',
      content:
        "I'm a transplant from Southern California. I grew up and attended college in Bakersfield, CA. I'm now living in New York, with my wonderful husband. I enjoy visiting all the diverse food options and welcoming community here.",
      imgUrl: 'queens.jpg'
    }),
    Info.create({
      title: 'Professional Interests',
      content:
        "I've attended a few AWS Loft events and single-day 'bootcamps' about Machine Learning, Internet of Things, and Blockchain. I am interested in learning more about these topics. If you feel like you want to discuss anything tech, let's connect on LinkedIn and chat! The next languages I'm looking to learn next  are Rust, C#, and Java. I hope to learn a little more about AWS, GraphQL, Docker, and Kubernetes.",
      imgUrl: 'iot.jpg'
    }),
    Info.create({
      title: 'Personal Interests',
      content:
        'I love to cook, I bake my own pizza from scratch, and I roll my own sushi. I also love to play video games. My interest in gaming started when I was about 6 years old with an ATARI my parents borrowed from a relative. Ever since then I have been an avid gamer. Please ask me about my favorite NES/SNES games or soundtracks!',
      imgUrl: 'personal.jpg'
    })
  ])

  const contact = await Promise.all([
    Contact.create({
      title: 'Email',
      imgUrl: 'gmail.png',
      url: 'crispinamuriel@gmail.com'
    }),
    Contact.create({
      title: 'LinkedIn',
      imgUrl: 'linkedin.png',
      url: 'https://www.linkedin.com/in/crispinarmuriel'
    }),
    Contact.create({
      title: 'Github',
      imgUrl: 'github.png',
      url: 'https://github.com/crispinamuriel'
    })
  ])

  console.log(
    `seeded ${users.length} users, ${projects.length} projects, ${
      info.length
    } info, and ${contact.length} contacts`
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
