const axios = require('axios')

class News {
    static getHeadline(req, res, next) {
        axios.get('http://newsapi.org/v2/top-headlines?' +
            'country=id&' +
            'category=health&' +
            'sortBy=publishedAt&' +
            'apiKey=a1eb475f63c54ef9b55b28124fc93405')
            .then(data => {
                res.status(200).json(data.data.articles);
            })
            .catch(err => {
                next(err);
            })
    }

    static getCovidNews(req, res, next) {
        axios.get('https://newsapi.org/v2/everything?' +
            'qInTitle=covid+Indonesia&' +
            'sortBy=publishedAt&' +
            'apiKey=a1eb475f63c54ef9b55b28124fc93405')
            .then(data => {
                res.status(200).json(data.data.articles);
            })
            .catch(err => {
                next(err);
            })
    }

    static getCovidHeadlines(req, res, next) {
        axios.get('https://dekontaminasi.com/api/id/covid19/hospitals')
            .then(data => {
                console.log(data)
                res.status(200).json(data.data);
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = News