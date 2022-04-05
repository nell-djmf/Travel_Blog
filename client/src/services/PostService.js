import Client from './'

export const GetPost = async () => {
  try {
    const res = await Client.get('./:_id')
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostComment = async () => {
  try {
    await Client.post('./:_id', comment)
  } catch (error) {
    throw error
  }
}