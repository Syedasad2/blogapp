export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      res.status(200).json(["yes it's working"])
    } else {
  res.status(200).json(["allBlogs"]);
  // Handle any other HTTP method
    }
  }