const SERVER = "http://localhost:3000/"

$(document).ready(function () {
  const token = localStorage.getItem("token")
  if (token) {
    $("#main-content").show()
    $("#register-page").hide()
    $("#login-page").hide()
  } else {
    $("#main-content").hide()
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
      $("#main-content").show()
      $("#register-page").hide()
      $("#login-page").hide()
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