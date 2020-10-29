const SERVER = "http://localhost:3000/"

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
  } else {
    $("#landing-page").show()
    $("#register-page").hide()
    $("#login-page").hide()
    $("#login-nav").show()
    $("#logout-nav").hide()
    fetchCarousel()
    fetchCovidData()
  }
})

$(window).scroll(function () {
  $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 300)
})

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
      console.log(err)
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
}