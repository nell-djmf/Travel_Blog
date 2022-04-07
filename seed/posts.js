const db = require('../db')
const {Post} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      locationName: "Paris",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      description: "Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 square kilometres (41 square miles), making it the 34th most densely populated city in the world in 2020. Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts, and has sometimes been referred to as the capital of the world. The City of Paris is the centre and seat of government of the region and province of Île-de-France, or Paris Region, with an estimated population of 12,997,058 in 2020, or about 18 percent of the population of France, making it in 2020 the largest metropolitan area in Europe, and 14th largest in the world in 2015. The Paris Region had a GDP of €709 billion ($808 billion) in 2017. According to the Economist Intelligence Unit Worldwide Cost of Living Survey in 2018, Paris was the second most expensive city in the world, after Singapore and ahead of Zürich, Hong Kong, Oslo, and Geneva. Another source ranked Paris as most expensive, on par with Singapore and Hong Kong, in 2018. ",
      comment: []
    },
    {
      locationName: "Rio de Janeiro",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg",
      description: "Rio de Janeiro, or simply Rio, literally River of January, is the second-most populous city in Brazil and the sixth-most populous in the Americas. Rio de Janeiro is the capital of the state of the same name, Brazil's third-most populous state, after São Paulo and Minas Gerais. Part of the city has been designated as a World Heritage Site, named \"Rio de Janeiro: Carioca Landscapes between the Mountain and the Sea\", on 1 July 2012 as a Cultural Landscape. Founded in 1565 by the Portuguese, the city was initially the seat of the Captaincy of Rio de Janeiro, a domain of the Portuguese Empire. In 1763, it became the capital of the State of Brazil, a state of the Portuguese Empire.",
      comment: []
    },
    {
      locationName: "Tokyo",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Shibuya_Crossing_%28181547621%29.jpeg",
      description: "Tokyo, historically Tokio and officially the Tokyo Metropolis (東京都, Tōkyō-to), is the capital and largest city of Japan. Its metropolitan area is the most populous in the world, with an estimated 37.468 million residents in 2018. Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of Japan's main island of Honshu. Tokyo is the political and economic center of the country, as well as the seat of the Emperor of Japan and the national government. As of 2021, the prefecture has an estimated population of 14.04 million.",
      comment: []
    },{
      locationName: "Kolkata",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/ITC_Royal_Bengalz.jpg",
      description: "Kolkata, also known as Calcutta is the capital of the Indian state of West Bengal. Located on the eastern bank of the Hooghly River, the city is approximately 80 kilometres (50 mi) west of the border with Bangladesh. It is the primary business, commercial, and financial hub of Eastern India and the main port of communication for North-East India. According to the 2011 Indian census, Kolkata is the seventh-most populous city in India, with a population of 45 lakh (4.5 million) residents within the city limits, and a population of over 1.41 crore (14.1 million) residents in the Kolkata Metropolitan Area. It is the third-most populous metropolitan area in India. In 2021, Kolkata metropolitan area crossed 1.5 crore (15 million) registered voters. The Port of Kolkata is India's oldest operating port and its sole major riverine port. Kolkata is regarded as the Cultural Capital of India.",
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
