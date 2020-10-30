# CovidMedia

News API for get news in News_Controller

**Create getHeadline**
----
    Get top headline news for spesific category country Indonesia, Health and sorted by publishedAt with API Key

* **URL**

    `/news`

* **Method:**
    
    `GET` 

* **URL Params**

    None

* **Data Params**
    
    None

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:** 
  ```json
    {
        "source": {
            "id": null,
            "name": "Pikiran-rakyat.com"
        },
        "author": "Karimul Huda",
        "title": "Ketahui Obat Asam Lambung yang Bisa Dilakukan di Rumah - Ringtimes Banyuwangi - Pikiran Rakyat",
        "description": "Asam lambung dapat menimbulkan komplikasi dan berbagai penyakit lainya yang bisa mengancam keselamatan kita.",
        "url": "https://ringtimesbanyuwangi.pikiran-rakyat.com/gaya-hidup/pr-17888648/ketahui-obat-asam-lambung-yang-bisa-dilakukan-di-rumah",
        "urlToImage": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2020/08/09/115976204.jpg?v=175",
        "publishedAt": "2020-10-30T06:30:00Z",
        "content": "RINGTIMES BANYUWANGI Asam lambung jangan di anggap sepele karena asam lambung dapat menimbulkan komplikasi yang mengancam keselamatan kita.\r\nDilihat dari kacamata medis, sakit asam lambung dikenal de… [+885 chars]"
    }
  ```

* **Error Response:**

  * **Code:** 500 BAD REQUEST <br />
  

**Create getCovidNews**
----
    Get covid news from News API

* **URL**

    `/news/covid`

* **Method:**
    
    `GET` 

* **URL Params**

    None

* **Data Params**
    
    None

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:** 
  ```json
  [
        {
        "source": {
            "id": null,
            "name": "Detik.com"
        },
        "author": "Yudistira Imandiar",
        "title": "Semangat Sumpah Pemuda Jadi Modal Indonesia Lawan Pandemi COVID-19",
        "description": "Ikrar Sumpah Pemuda 92 tahun lalu mengikat semangat persatuan para pemuda dan seluruh elemen bangsa bersatu membawa Indonesia menjadi lebih baik.",
        "url": "https://news.detik.com/berita/d-5234739/semangat-sumpah-pemuda-jadi-modal-indonesia-lawan-pandemi-covid-19",
        "urlToImage": "https://awsimages.detik.net.id/api/wm/2020/09/15/wiku-adisasmito_169.jpeg?wid=54&w=650&v=1&t=jpeg",
        "publishedAt": "2020-10-30T06:05:07Z",
        "content": "Jakarta - Ikrar Sumpah Pemuda 92 tahun lalu mengikat semangat persatuan para pemuda dan seluruh elemen bangsa bersatu membawa Indonesia menjadi lebih baik. Semangat tersebut masih relevan untuk terus… [+1551 chars]"
        }
    ]
  ```

* **Error Response:**

  * **Code:** 500 BAD REQUEST <br />
  

-------
**Create allNews**
----
    Get all news from CNN News API

* **URL**

    `/news/allnews`

* **Method:**
    
    `GET` 

* **URL Params**

    None

* **Data Params**
    
    None

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:** 
  ```json
    {
        "judul": "VIDEO: Setan Merah Terbenam Meriam?",
        "link": "https://www.cnnindonesia.com/olahraga/20201030131330-146-564153/video-setan-merah-terbenam-meriam",
        "poster": "https://akcdn.detik.net.id/visual/2020/10/30/thumbnail-video-3_169.jpeg?w=140&q=90",
        "tipe": "Olahraga",
        "waktu": "12 menit yang lalu"
    }
  ```

* **Error Response:**

  * **Code:** 500 BAD REQUEST <br />
  
-------
**Create newsCategory**
----
    Get spesific news with parameter

* **URL**

    `/news/category`

* **Method:**
    
    `POST` 

* **URL Params**

    category = req.body.category

* **Data Params**
    
    category = health

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:** 
  ```json
    [
        {
        "judul": "VIDEO: Setan Merah Terbenam Meriam?",
        "link": "https://www.cnnindonesia.com/olahraga/20201030131330-146-564153/video-setan-merah-terbenam-meriam",
        "poster": "https://akcdn.detik.net.id/visual/2020/10/30/thumbnail-video-3_169.jpeg?w=140&q=90",
        "tipe": "Olahraga",
        "waktu": "12 menit yang lalu"
        }
    ]
  ```

* **Error Response:**

  * **Code:** 500 BAD REQUEST <br />

-------
-------
**Create detailNews**
----
    Get news with parameter category from CNN News API

* **URL**

    `/news/detailnews`

* **Method:**
    
    `POST` 

* **URL Params**

    category = req.body.category

* **Data Params**
    
    url: https://www.cnnindonesia.com/nasional/20201029134123-32-563940/gibran-anak-jokowi-ingin-solo-jadi-destinasi-wisata-olahraga

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:** 
  ```json
    [
        {
        "body": "\n                        Jakarta, CNN Indonesia -- Calon wali kota Solo yang juga anak Presiden Joko Widodo (Jokowi), Gibran Rakabuming Raka menginginkan Kota Solo menjadi destinasi wisata olahraga selepas Piala Dunia U-20. Solo disebut bakal menjadi salah satu tuan rumah kejuaraan yang digelar Oktober 2021 itu.,
        "judul": "\n                    Gibran Anak Jokowi Ingin Solo Jadi Destinasi Wisata Olahraga                ",
        "poster": "https://akcdn.detik.net.id/visual/2020/10/29/gibran-rakabuming-raka-1_169.jpeg?w=650"
        }
    ]
  ```

* **Error Response:**

  * **Code:** 500 BAD REQUEST <br />
  



-------
**Create covidNews**
----
    
    Get news with with spesific topic covid from CNN API

* **URL**

    `/news/covidNews`

* **Method:**
    
    `GET` 

* **URL Params**

    None

* **Data Params**
    
    None

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:** 
  ```json
    [
        {
        "judul": "Fakta Miris Petani, Profesi Dibanggakan Jokowi ke Anak Muda",
        "link": "https://www.cnnindonesia.com/ekonomi/20201030134349-532-564166/fakta-miris-petani-profesi-dibanggakan-jokowi-ke-anak-muda",
        "poster": "https://akcdn.detik.net.id/visual/2020/07/07/panen-padi-di-bekasi_169.jpeg?w=270&q=90",
        "tipe": "Ekonomi",
        "waktu": " • 26 menit yang lalu"
        }
    ]
  ```

* **Error Response:**

  * **Code:** 500 BAD REQUEST <br />
  



-------
**Create searchNews**
----
    
    Get news by searching with parameter from CNN API news

* **URL**

    `/news/search`

* **Method:**
    
    `POST` 

* **URL Params**

    query = req.body.query

* **Data Params**
    
    query = covid

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:** 
  ```json
    [
        {
        "judul": "Cerita Khloe Kardashian Positif Covid: Ini Sangat Menakutkan",
        "link": "https://www.cnnindonesia.com/hiburan/20201030132944-234-564164/cerita-khloe-kardashian-positif-covid-ini-sangat-menakutkan",
        "poster": "https://akcdn.detik.net.id/visual/2017/09/29/bc746dce-ff90-4091-87b4-1ce27d2f858b_169.jpg?w=270&q=90",
        "tipe": "Hiburan",
        "waktu": " • 56 menit yang lalu"
    },
    ]
  ```

* **Error Response:**

  * **Code:** 500 BAD REQUEST <br />



-------
=======
## User Register

* ### URL

```
http:localhost:3000/users/register
```

* ### Method:

    `POST`

* ### URL Params

    `None`

* ### Data Params

```json
{
    "email": "user@gmail.com",
    "password": "user"
}
```

* ### Success Response:

`Status: 200`
```json
{
    "id": 6,
    "email": "user@gmail.com"
}
```
* ### Error Response:

`Status: 400`
```
{
    "msg": "Email tidak Valid, Password tidak boleh kosong"
}

{
    "msg": "Email tidak boleh kosong, Email tidak Valid"
}

{
    "msg": "Email tidak boleh kosong, Email tidak Valid, Password tidak boleh kosong"
}

{
    "msg": "User.email cannot be null, Password tidak boleh kosong"
}

{
    "msg": "User.password cannot be null, Email tidak boleh kosong, Email tidak Valid"
}

{
    "msg": "User.email cannot be null, User.password cannot be null"
}
```
----------------------------------

## User Login

* ### URL

```http
http:localhost:3000/users/login
```

* ### Method:

    `POST`

* ### URL Params

    `None`

* ### Data Params

 ```json
{
    "email": "user@gmail.com",
    "password": "user"
}
```

* ### Success Response:

`Status: 200`
```json
{
    "id": 6,
    "email": "user@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJuYWltQGdtYWlsLmNvbSIsImlhdCI6MTYwNDA0MTMzOH0.nusWIqZFrLAO7T1Lz5V4GZaG2x3IKDpYytqCGRwkl3o"
}
```
* ### Error Response:

`Status: 401`
```json
{
    "msg": "Email atau Password anda tidak Valid"
}

{
    "msg": "Interal Server Error"
}
```

----------------------------------------------
<br>
<br>

# Covid Media 3rd API

## Data Covid 19 indonesia

* ### URL
```http
http:localhost:3000/covid/data
```

* ### Method:

    `POST`

* ### Success Response:

    `Status: 200`

```json
{
    "total": {
        "positif": 404048,
        "dirawat": 60569,
        "sembuh": 329778,
        "meninggal": 13701,
        "lastUpdate": "2020-10-29T08:38:36.000Z"
    },
    "penambahan": {
        "positif": 3565,
        "dirawat": -509,
        "sembuh": 3985,
        "meninggal": 89,
        "tanggal": "2020-10-29",
        "created": "2020-10-29T08:38:36.000Z"
    },
    "data": {
        "odp": 68888,
        "pdp": 0,
        "total_spesimen": 4463884,
        "total_spesimen_negatif": 2426658
    }
}
```
* ### Error Response:

    `Status: 500`
```json
{
    "msg": "Interal Server Error"
}
```

--------------------------------------------------

## Data Covid 19 Hospital Indonesia

* ### URL
```http
http:localhost:3000/covid/data/hospital
```

* ### Method:

    `POST`

* ### Success Response:

    `Status: 200`

```json
[
    {
        "name": "RS UMUM DAERAH  DR. ZAINOEL ABIDIN",
        "address": "JL. TGK DAUD BEUREUEH, NO. 108 B. ACEH",
        "region": "KOTA BANDA ACEH, ACEH",
        "phone": "(0651) 34565",
        "province": "Aceh"
    },
    {
        "name": "RS UMUM DAERAH CUT MEUTIA KAB. ACEH UTARA",
        "address": "JL. BANDA ACEH-MEDAN KM.6 BUKET RATA LHOKSEUMAWE",
        "region": "KOTA LHOKSEUMAWE, ACEH",
        "phone": "(0645) 46334",
        "province": "Aceh"
    }
]
```
* ### Error Response:

    `Status: 500`
```json
{
    "msg": "Interal Server Error"
}
```
