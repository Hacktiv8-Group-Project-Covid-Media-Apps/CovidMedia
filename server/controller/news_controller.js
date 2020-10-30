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

    static allNews(req, res, next) {
        axios.get('https://www.news.developeridn.com/')
            .then(data => {
                res.status(200).json(data.data.data)
            })
            .catch(err => {
                next(err)
            })
    }

    static newsCategory(req, res, next) {
        const category = req.body.category

        axios.get(`https://www.news.developeridn.com/${category}`)
            .then(data => {
                res.status(200).json(data.data.data)
            })
            .catch(err => {
                next(err)
            })
    }

    static detailNews(req, res, next) {
        const url = req.body.url
        axios.get(`https://www.news.developeridn.com/detail/?url=${url}`)
            .then(data => {
                res.status(200).json(data.data.data)
            })
            .catch(err => {
                next(err)
            })
    }
    static covidNews(req, res, next) {
        axios.get('https://www.news.developeridn.com/search/?q=covid')
            .then(data => {
                res.status(200).json(data.data.data)
            })
            .catch(err => {
                next(err)
            })
    }

    static searchNews(req, res, next) {
        const query = req.body.query
        axios.get(`https://www.news.developeridn.com/search/?q=${query}`)
            .then(data => {
                res.status(200).json(data.data.data)
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = News