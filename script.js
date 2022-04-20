     //HAMBURGER MENU

     document.querySelector('.hamburger-menu-container').addEventListener('click', () => {
        document.querySelector('.mini-nav-container').classList.toggle('change');
      })

    // ABOUT PAGE SCROLL UP BTN LATE APPEAR ON PHOTO-DEETS PAGE
    
    lateScroll = document.getElementById("chevron-btn");
    
    var myScrollFunction = function() {
      var y = window.scrollY;
      if (y > 1200) {
        lateScroll.className = "scroll-up-btn show"
      } else {
        lateScroll.className = "scroll-up-btn hide"
      }
    };
    
    window.addEventListener("scroll", myScrollFunction);

//FORM SUBMIT CONTACT PAGE

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}  