function switchMenu() {
    let berger = document.querySelector('.berger');
    let menuItems = document.querySelector('.content-nav')
    berger.addEventListener('click', function () {
        menuItems.classList.toggle('active');
    });
}
switchMenu();