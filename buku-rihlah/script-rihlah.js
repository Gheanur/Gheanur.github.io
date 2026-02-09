function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// navbar wali
loadHTML('navbar-wali', '/buku-rihlah/navbar-wali.html');


// footer global
loadHTML('footer', '/layout/footer.html');
