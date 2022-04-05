const db = require('../db')
const {Post} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      locationName: 'Paris',
      image: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
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
