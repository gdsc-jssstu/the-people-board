const get = (req, res) => {
    res.status(200).json('It is working!');
}

const post = (req,res) => {
    res.status(200).json(`Recieved via test/post:${req.body}`)
}



module.exports = {
    get, post 
}
