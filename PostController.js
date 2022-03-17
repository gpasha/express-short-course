import PostService from './PostService.js'

class PostController {
  async create(req, res) {
    try {
      console.log('req.files:', req.files.image)
      const post = await PostService.create(req?.body, req?.files?.image)
      console.log('post:', post)
      return res.json(post)
    } catch (error) {
      res.status(500).json('Server error: ' + error)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (error) {
      res.status(500).json('Server error: ' + error)
    }
  }
  
  async getOne(req, res) {
    try {
      const { id } = req.params
      const post = await PostService.getOne(id)
      return res.json(post)
    } catch (error) {
      res.status(500).json('Server error: ' + error)
    }
  }
  
  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req?.body)
      return res.json(updatedPost)
    } catch (error) {
      res.status(500).json('Server error: ' + error)
    }
  }
  
  async delete(req, res) {
    try {
      const post = await PostService.delete(req?.params?.id)
      return res.json(post)
    } catch (error) {
      res.status(500).json('Server error: ' + error)
    }
  }
}

export default new PostController()