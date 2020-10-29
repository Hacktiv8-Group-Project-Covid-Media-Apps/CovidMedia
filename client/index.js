const SERVER = "http://localhost:3000/"

$(document).ready(function () {
  const token = localStorage.getItem("token")
  if (token) {
    $("#landing-page").show()
    $("#register-page").hide()
    $("#login-page").hide()
    fetchCarousel()
  } else {
    $("#landing-page").hide()
    $("#register-page").show()
    $("#login-page").hide()
  }
})

function showLogin(e) {
  e.preventDefault()
  $("#register-page").hide()
  $("#login-page").show()
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
    for(let i = 0; i <5; i++) {
      
      const title = response[i].title
      console.log(title, "<<<==Title")
      const description = response[i].description
      const image = response[i].urlToImage
      let type = "carousel-item"
      if (i === 0) {
        type += " active"
      }

      const html = ` 
      <div class="${type}">
      <!--Mask color-->
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
      $("#carousel-headline").empty().append(html)
      
    }
  })
  .fail(err => {
    console.log(err)
  })
}

function logout() {
  $("#login-page").show()
  $("#main-content").hide()
  localStorage.removeItem("token")
  $("#login-email").val("")
  $("#login-password").val("")
}