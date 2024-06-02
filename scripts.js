document.addEventListener('DOMContentLoaded', () => {
    const profile = {
        name: "Embrace the darkness 🌑",
        error: "Project's Of Anakin:<br><br>",
        profilePicture: "anakinss.jpg",
        views: localStorage.getItem('views') ? parseInt(localStorage.getItem('views')) : 0 // localStorage'dan alınan veya başlangıç değeri
    };

    // Görüntüleme sayısını artır ve localStorage'a kaydet
    profile.views += 1;
    localStorage.setItem('views', profile.views);

    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-error').innerHTML = profile.error;
    document.getElementById('profile-picture').src = profile.profilePicture;
    document.querySelector('.views').textContent = `👁 ${profile.views}`;

    // Ekrana tıklama veya tuş basma olaylarını yakala
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('background-video');
    const profileDiv = document.querySelector('.profile');
    const muteButton = document.getElementById('mute-button');
    const muteIcon = muteButton.querySelector('img');

    const enterSite = (event) => {
        event.preventDefault();  // Varsayılan davranışı engelle
        event.stopPropagation(); // Olayın yukarı taşmasını engelle
        overlay.style.display = 'none';
        video.style.display = 'block';
        profileDiv.style.display = 'block';
        video.muted = false; // Ses aç
        video.volume = 1.0; // Ses seviyesini en yükseğe ayarla
        video.play();
    };

    const toggleMute = () => {
        if (video.muted) {
            video.muted = false;
            muteIcon.src = 'unmute.png';
        } else {
            video.muted = true;
            muteIcon.src = 'mute.png';
        }
    };

    overlay.addEventListener('click', enterSite);
    document.addEventListener('keydown', enterSite);
    muteButton.addEventListener('click', toggleMute);
});
