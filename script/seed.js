'use strict'

const db = require('../server/db')
const {User, Project, Info, Contact} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const projects = await Promise.all([
    Project.create({
      title: 'Codewords',
      content: 'A multiplayer game based of of the board game Codenames',
      imageUrl: 'codewords.png',
      projectUrl: 'https://codewords-1909-gracehopper.herokuapp.com/'
    }),
    Project.create({
      title: 'LoveLaces',
      content: 'An e-commerce fullstack application for women’s shoes',
      imageUrl: 'Shoes.jpg',
      projectUrl: 'https://grace-shopper-lovelaces.herokuapp.com/'
    }),
    Project.create({
      title: 'Recipe App',
      content: 'A single page application to store user recipes',
      imageUrl: 'recipe.jpeg',
      projectUrl: 'https://muriel-recipe-app.netlify.com/'
    })
  ])

  const info = await Promise.all([
    Info.create({
      title: 'Technical Skills',
      content:
        'JavaScript (es6+), HTML5, CSS, React.js, Redux.js, Node.js, Express.js, PostgreSQL, Sequelize, SQL, RDBMS, Babel, Webpack, Git, GitHub, AJAX, REST, APIs, JSON, WebSockets, Socket.io, Jasmine, Mocha, Chai, Enzyme, LocalStorage, uuid, Full Stack Development, Heroku, Google OAuth, Agile, SCRUM, Pair Programming, UI/UX, Web Design',
      imgUrl: 'dev-logos.png'
    }),
    Info.create({
      title: 'Professional Background',
      content:
        'My passions are Tech, Learning, and Education. I have credentials to teach elementary school in California and New York. As a user of educational apps in my classroom, I was always inspired at how tech seemed to motivate my class to learn.  I loved my time spent working with children and hope to one day contribute to the EdTech field, that reaches thousands children in a meaningful way. I have been coding and building fullstack applications for over a year. JavaScript is fun to work with and I love how creative I can be with it.',
      imgUrl: 'education.jpg'
    }),
    Info.create({
      title: 'Personal Background',
      content:
        "I'm a transplant from Southern California. I grew up and attended college in Bakersfield, CA. My family is still living there now, and I fly home every chance I get. I'm now living in New York, with my wonderful husband. I like living here because I enjoy visiting all the diverse food options here.",
      imgUrl: 'queens.jpg'
    }),
    Info.create({
      title: 'Professional Interests',
      content:
        "I've attended a few AWS Loft events and single-day 'bootcamps' about Machine Learning, Internet of Things, and Blockchain. I am interested in learning more about these topics. If you feel like you want to discuss TensorFlow, let's have some grab some tea and chat together! The next languages I'm looking to learn next  are Python, Typescript, and Java.",
      imgUrl: 'iot.jpg'
    }),
    Info.create({
      title: 'Personal Interests',
      content:
        'I love to cook, I bake my own pizza from scratch, and I roll my own sushi. I also love to play video games. My interest in gaming started when I was about 6 years old with an ATARI my parents borrowed from a relative. Ever since then I have been an avid gamer. Please ask me about NES/SNES games or soundtracks!',
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
      url: 'https://www.linkedin.com/in/crispinarmuriel/'
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
