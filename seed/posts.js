const db = require('../db')
const {Post} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      locationName: 'Paris',
      image: "https://en.wikipedia.org/wiki/File:La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_ao%C3%BBt_2014_(2).jpg",
      description: "Paris (nicknamed the 'City of light') is the capital city of France, and the largest city in France. The area is 105 square kilometres (41 square miles), and around 2.15 million people live there. If suburbs are counted, the population of the Paris area rises to 10.7 million people.",
      comment: []
    }
  ]
  await Post.insertMany(posts)
}
const run = async () => {
  await main()
  db.close()
}

run()
