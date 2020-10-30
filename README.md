# CovidMedia

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
