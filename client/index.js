const SERVER = "http://localhost:3000/"

//global variable
let latest = []
let sidebar = []
let main = []

$(document).ready(function () {
  const token = localStorage.getItem("token")
  if (token) {
    $("#landing-page").show()
    $("#register-page").hide()
    $("#login-page").hide()
    $("#login-nav").hide()
    $("#logout-nav").show()
    fetchCarousel()
    fetchCovidData()
    fetchLatestNews()
    fetchCovidNews()
    fetchNews('hiburan')
  } else {
    $("#landing-page").show()
    $("#register-page").hide()
    $("#login-page").hide()
    $("#login-nav").show()
    $("#logout-nav").hide()
    fetchCarousel()
    fetchCovidData()
    fetchLatestNews()
    fetchCovidNews()
    fetchNews('hiburan')
  }
})

$(window).scroll(function () {
  $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 300)
})

function afterLogin() {
  $("#landing-page").show()
  $("#register-page").hide()
  $("#login-page").hide()
  $("#login-nav").hide()
  $("#logout-nav").show()
  fetchCarousel()
  fetchCovidData()
}

function showLogin(e) {
  e.preventDefault()
  $("#register-page").hide()
  $("#login-page").show()
  $("#landing-page").hide()
}

function showRegister(e) {
  e.preventDefault()
  $("#register-page").show()
  $("#login-page").hide()
}

function register(e) {
  e.preventDefault()
  const email = $("#register-email").val()
  const password = $("#register-password").val()
  $.ajax({
    method: "POST",
    url: SERVER + "user/register",
    data: {
      email,
      password
    }
  })
    .done(response => {
      $("#register-page").hide()
      $("#login-page").show()
      $("#login-email").val(email)
    })
    .fail(err => {
      $("#modal-error").modal("show")
      const html = `
      <div class="row d-flex justify-content-center align-items-center">

          <p ${err.msg}
          </p>

          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      `
      $("#errors-detail").empty().append(html)
    })
}

function login(e) {
  e.preventDefault()
  const email = $("#login-email").val()
  const password = $("#login-password").val()
  $.ajax({
    method: "POST",
    url: SERVER + "user/login",
    data: {
      email,
      password
    }
  })
    .done(response => {
      const token = response.token
      localStorage.setItem("token", token)
      $("#landing-page").show()
      $("#register-page").hide()
      $("#login-page").hide()
      $("#login-nav").hide()
      $("#logout-nav").show()
      fetchCarousel()
      fetchCarousel()
      fetchCovidData()
      fetchLatestNews()
      fetchCovidNews()
      fetchNews('hiburan')
    })
    .fail(err => {
      $("#modal-error").modal("show")
      const html = `
          <p ${err.msg}
          </p>
      `
      $("#errors-detail").empty().append(html)
    })
}



// GOOGLE API
function onSignIn(googleUser) {
  var google_access_token = googleUser.getAuthResponse().id_token;
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/user/googleLogin',
    data: {
      google_access_token
    }
  })
    .done(response => {
      localStorage.setItem('token', response.access_token)
      afterLogin()
    })
    .fail(err => {
      console.log(err)
    })
}

function fetchCarousel() {
  $.ajax({
    method: "GET",
    url: SERVER + "news/covid"
  })
    .done(response => {
      $("#carousel-headline").empty()
      for (let i = 0; i < 4; i++) {

        const title = response[i].title
        const description = response[i].description
        const image = response[i].urlToImage
        let type = "carousel-item"
        if (i === 0) {
          type += " active"
        }

        const html = ` 
        <div class="${type}">
          <div class="view">
              <img class="d-block w-100" src="${image}"
               alt="Second slide">
              <div class="mask rgba-black-strong"></div>
          </div>
          <div class="carousel-caption">
            <h3 class="h3-responsive">${title}</h3>
            <p>${description}</p>
          </div>
       </div>
      `
        $("#carousel-headline").append(html)
      }
    })
    .fail(err => {
      console.log(err)
    })
}

function fetchCovidData() {
  $.ajax({
    method: "GET",
    url: SERVER + "covid/data"
  })
    .then(response => {
      const { positif, dirawat, sembuh, meninggal, lastUpdate } = response.total
      let html = []
      for (const key in response.penambahan) {
        if (response.penambahan[key] > 0) {
          html.push(`
          <p class="text-center increasing">(+${response.penambahan[key]})</p>
          `)
        } else {
          html.push(`
          <p class="text-center decreasing">(${response.penambahan[key]})</p>
          `)
        }
      }
      $("#card-positif").empty().append(`
      <h2 class="text-center">Positif</h2>
      <h1 class="text-center">${positif}</h1>
      ${html[0]}
      `)
      $("#card-dirawat").empty().append(`
      <h2 class="text-center">Dirawat</h2>
      <h1 class="text-center">${dirawat}</h1>
      ${html[1]}
      `)
      $("#card-sembuh").empty().append(`
      <h2 class="text-center">Sembuh</h2>
      <h1 class="text-center">${sembuh}</h1>
      ${html[2]}
      `)
      $("#card-meninggal").empty().append(`
      <h2 class="text-center">Meninggal</h2>
      <h1 class="text-center">${meninggal}</h1>
      ${html[3]}
      `)
      $("#card-data-covid").empty().append(`
      <p class="text-muted"> *Last update: ${lastUpdate} </p>
      `)
    })
    .fail(err => {
      console.log(err)
    })
}

function fetchLatestNews() {
  $.ajax({
    method: "GET",
    url: SERVER + "news/allnews"
  })
    .done(res => {
      latest = [];
      $("#latest-news-p1").empty()
      $("#latest-news-p2").empty()
      for (let i = 0; i < 8; i++) {
        const image = res[i].poster
        const title = res[i].judul
        const category = res[i].tipe
        const publishedAt = res[i].waktu
        latest.push(res[i].link)
        const html = `
        <div class="col-md-3" style="float:left">
                <div class="card mb-2">
                  <img class="card-img-top"
                    src="${image}" alt="Card image cap">
                  <div class="card-body latest-news-card">
                    <h4 class="card-title">${title}</h4>
                    <p class="card-text">${category}</p>
                    <p class="card-text"><i class="far fa-clock news-icon"></i> ${publishedAt}</p>
                    <a onclick= "showNews(id)" id="latest-${i}" class="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>
        `
        if (i <= 3) {
          $("#latest-news-p1").append(html)
        } else {
          $("#latest-news-p2").append(html)
        }
      }
    })
    .fail(err => {
      console.log(err)
    })
}

function fetchCovidNews() {
  $.ajax({
    method: "GET",
    url: SERVER + "news/covidnews"
  })
    .done(res => {
      sidebar = [];
      $("#covid-news").empty()
      for (let i = 0; i < 4; i++) {
        const image = res[i].poster
        const title = res[i].judul
        const category = res[i].tipe
        const publishedAt = res[i].waktu
        sidebar.push(res[i].link)
        const html = `
        <div class="card covid-news-card">
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <img src="${image}" alt="" class="news-image-sidebar">
              <button onclick="showNews(id)" id="sidebar-${i}"  onclick="showNews(id)" class="btn-read">Read</button>
            </div>
            <div class="col">
              <h6>${title}</h6>
              <p class="card-text">${category}</p>
              <p class="card-text"><i class="far fa-clock news-icon"></i> ${publishedAt}</p>
            </div>
          </div>
        </div>
        </div>        
        `
        $("#covid-news").append(html)
      }
    })
    .fail(err => {
      console.log(err)
    })
}

function fetchNews(category) {
  $.ajax({
    method: "POST",
    url: SERVER + "news/category",
    data: {
      category
    }
  })
    .done(res => {
      main = []
      let categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)
      $("#main-news-content-title").empty().append(`
      Berita ${categoryTitle}
      `)
      $("#main-news-content").empty()
      for (let i = 0; i < 9; i++) {
        const image = res[i].poster
        const title = res[i].judul
        const category = res[i].tipe
        const publishedAt = res[i].waktu
        main.push(res[i].link)
        const html = `
        <div class="card news-content-card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-5">
                      <img
                        src="${image}"
                        alt="card-news-img" class="card-news-img">
                      <button id="main-${i}" onclick="showNews(id)" class="btn-read">Read</button>
                    </div>
                    <div class="col">
                      <h6>${title}</h6>
                      <p class="card-text">${category}</p>
                      <p class="card-text"><i class="far fa-clock news-icon"></i> ${publishedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
        `
        $("#main-news-content").append(html)
      }
    })
    .fail(err => {
      console.log(err)
    })
}

function searchNews(e) {
  e.preventDefault()
  $(window).scrollTop($('#main-news-content-title').offset().top);
  const query = $("#search-bar").val()
  $.ajax({
    method: "POST",
    url: SERVER + "news/search",
    data: {
      query
    }
  })
    .done(res => {
      main = []
      $("#main-news-content-title").empty().append(`
      Search Result "${query}"
      `)
      $("#main-news-content").empty()
      let count = 0
      res.forEach(news => {
        const image = news.poster
        const title = news.judul
        const category = news.tipe
        const publishedAt = news.waktu
        main.push(news.link)
        const html = `
        <div class="card news-content-card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-5">
                      <img
                        src="${image}"
                        alt="card-news-img" class="card-news-img">
                      <button id="main-${count}" onclick="showNews(id)" class="btn-read">Read</button>
                    </div>
                    <div class="col">
                      <h6>${title}</h6>
                      <p class="card-text">${category}</p>
                      <p class="card-text"><i class="far fa-clock news-icon"></i> ${publishedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
        `
        $("#main-news-content").append(html)
      })
    })
    .fail(err => {
      console.log(err)
    })
}

function showNews(param) {
  const arr = param.split('-')
  let url;
  if (arr[0] === "latest") {
    url = latest[+arr[1]]
  } else if (arr[0] === "sidebar") {
    url = sidebar[+arr[1]]
  } else {
    url = main[+arr[1]]
  }
  $.ajax({
    method: "POST",
    url: SERVER + "news/detailnews",
    data: {
      url
    }
  })
    .done(res => {
      $('#modal-news').modal('show')
      const img = res[0].poster
      const title = res[0].judul
      let body = res[0].body
      body.replace("\n", "<br>")
      const html = `
      <img class=" mx-auto d-block" src="${img}"
      alt="poster-news">
      <h1 class="text-center">${title}</h1>
      <p>${body}</p>      
      `
      $("#news-detail").empty().append(html)
    })
    .fail(err => {
      console.log(err)
    })
}

function dataRumahSakit(prov) {
  $.ajax({
    method: "GET",
    url: SERVER + "covid/data/hospital"
  })
    .done(response => {
      $("#data-rs").empty()
      response.forEach(data => {
        const html = `
      <tr>
      <td> ${data.name}</td>
      <td> ${data.address}</td>
      <td> ${data.phone}</td>
      <td> ${data.region}</td>
      </tr>
      `
        if (data.province === prov) {
          $("#data-rs").append(html)
        } else if (prov === "All") {
          $("#data-rs").append(html)
        }
      })
    })
    .fail(err => {
      console.log(err)
    })
}

function logout() {
  $("#landing-page").hide()
  $("#login-page").show()
  localStorage.removeItem("token")
  $("#login-email").val("")
  $("#login-password").val("")
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}