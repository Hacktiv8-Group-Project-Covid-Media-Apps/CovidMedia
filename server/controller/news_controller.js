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
    static allNews(req, res, next){
        axios.get('https://www.news.developeridn.com/')
        .then(data => {
            // console.log(data);
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static nationalNews(req,res,next){
        axios.get('https://www.news.developeridn.com/nasional')
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static internationalNews(req,res,next){
        axios.get('https://www.news.developeridn.com/internasional')
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static economicNews(req,res,next){
        axios.get('https://www.news.developeridn.com/ekonomi')
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static sportNews(req,res,next){
        axios.get('https://www.news.developeridn.com/olahraga')
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static techNews(req,res,next){
        axios.get('https://www.news.developeridn.com/teknologi')
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static entertainment(req,res,next){
        axios.get('https://www.news.developeridn.com/hiburan')
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static lifetyle(req,res,next){
        axios.get(' 	https://www.news.developeridn.com/gaya-hidupp')
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static detailNews(req,res,next){ 
        const url = req.body.url
        axios.get(`https://www.news.developeridn.com/detail/?url=${url}`)
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }
    static findNews(req,res,next){
        axios.get('https://www.news.developeridn.com/search/?q=covid')
        .then(data=>{
            res.status(200).json(data.data.data)
        })
        .catch(err =>{
            next(err)
        })
    }

    
}

module.exports = News