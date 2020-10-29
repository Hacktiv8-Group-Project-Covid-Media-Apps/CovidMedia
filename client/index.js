
const SERVER = "http://localhost:3000/"

$(document).ready(function () {
  const token = localStorage.getItem("token")
  if (token) {
    $("#landing-page").show()
    $("#Emergency-page").hide()
    $("#register-page").hide()
    $("#login-page").hide()
    $("#login-nav").hide()
    $("#logout-nav").show()
    fetchCarousel()
  } else {
    $("#landing-page").show()
    $("#Emergency-page").hide()
    $("#register-page").hide()
    $("#login-page").hide()
    $("#login-nav").show()
    $("#logout-nav").hide()
    fetchCarousel()
  }

})

$(window).scroll(function () {
  $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 200)
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

function showEmergency(e) {
  e.preventDefault()
  $("#Emergency-page").show()
  dataRumahSakit('All')
  $("#landing-page").hide()
  $("#register-page").hide()
  $("#login-page").hide()
}


function dataRumahSakit(prov) {
  $.ajax({
    method: "GET",
    url: SERVER + "covid/data/hospital"
  })
  .done(response => {
    console.log(prov)
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
      if(data.province === prov) {
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
  $("#main-content").hide()
  localStorage.removeItem("token")
  $("#login-email").val("")
  $("#login-password").val("")
}