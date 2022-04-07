import Client from './'

export const GetPost = async () => {
  try {
    const res = await Client.get('api')
    return res.data.posts
  } catch (error) {
    throw error
  }
}