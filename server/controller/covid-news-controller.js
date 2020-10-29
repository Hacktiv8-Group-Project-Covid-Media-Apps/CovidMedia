const axios = require('axios')

class CovidController{

    static async data(req, res, next){
        try {
            let data = await axios({
                method: 'get',
                url: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/more'
            })
            res.status(200).json(data.data)
        } catch (err) {
            next(err)
        }
    }

    static async dataProvinsi(req, res, next){
        try {
            let data = await axios({
                method: 'get',
                url: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi'
            })
            res.status(200).json(data.data)
        } catch (err) {
            next(err)
        }
    }

    static async dataDaily(req, res, next){
        try {
            let data = await axios({
                method: 'get',
                url: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian'
            })
            res.status(200).json(data.data)
        } catch (err) {
            next(err)
        }
    }

    static async hospital(req, res, next){
        try {
            let data = await axios({
                method: 'get',
                url: 'https://dekontaminasi.com/api/id/covid19/hospitals'

            })
            res.status(200).json(data.data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = CovidController