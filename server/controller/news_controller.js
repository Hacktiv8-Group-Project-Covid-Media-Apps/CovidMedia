const axios = require('axios')

class News {
    static articleNew(req, res) {
        axios.get('http://newsapi.org/v2/top-headlines?' +
            'country=id&' +
            'category=health&' +
            'apiKey=a1eb475f63c54ef9b55b28124fc93405')
            .then(data => {
                res.status(200).json(data.data.articles);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = News