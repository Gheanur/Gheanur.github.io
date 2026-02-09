
    function loadHTML(id, file) {
      fetch(file)
        .then(res => res.text())
        .then(data => {
          document.getElementById(id).innerHTML = data;
        });
    }

    // PORTOFOLIO

    loadHTML('navbar', 'layout/navbar.html');
    loadHTML('tentang', 'item/tentang.html');
    loadHTML('pendidikan', 'item/pendidikan.html');
    loadHTML('projek', 'item/projek.html');
    loadHTML('skil', 'item/skill.html');
    loadHTML('pengalaman', 'item/pengalaman.html');
    loadHTML('kepanitiaan', 'item/kepanitiaan.html');
    loadHTML('prestasi', 'item/prestasi.html');
    loadHTML('galeri', 'item/galeri.html');
    loadHTML('sosial', 'item/sosial.html');
    loadHTML('footer', 'layout/footer.html');

