import Client from './'

export const GetPost = async () => {
  try {
    const res = await Client.get('api')
    console.log(res)
    return res.data.posts
  } catch (error) {
    throw error
  }
}

export const PostComments = async () => {
  try {
    await Client.post('/:_id')
  } catch (error) {
    throw error
  }
}
