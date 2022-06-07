const ULplaylist = document.querySelector('.playlist');
const profileBtn = document.querySelector('.profile-btn');
const profileMenu = document.querySelector('.profile-menu');
const profile = document.querySelector('.profile');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const overlay = document.querySelector('.overlay');
const dotMenu = document.querySelector('.dot-menu');
const dotProfile = document.querySelector('.dot-profile');
const dotIcon = document.querySelector('.dot-icon');

const playlists = ["Water Lofi", "Táo", "Quen tại nghe hoài", "Futuristic", "Water Lofi", "Táo", "Quen tại nghe hoài", "Futuristic", "Water Lofi", "Táo", "Quen tại nghe hoài", "Futuristic", "Water Lofi", "Táo", "Quen tại nghe hoài", "Futuristic"]

playlists.forEach(playlist => {
    const LIplaylist = document.createElement('li');
    LIplaylist.innerHTML = `
    <a href="" class="text-white opacity-80 leading-7 hover:opacity-100 hover:duration-300 hover:ease-in-out leading-8">
        ${playlist}
    </a>
    `;
    ULplaylist.appendChild(LIplaylist);
})

profileBtn.addEventListener('click', () => {
    profileMenu.classList.toggle('hidden');
})

profile.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

dotIcon.addEventListener('click', () => {
    dotMenu.classList.toggle('hidden');
})

dotProfile.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    dotMenu.classList.add('hidden');
})

