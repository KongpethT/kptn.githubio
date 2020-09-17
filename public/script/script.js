function switchMenu() {
    let berger = document.querySelector('.berger');
    let menuItems = document.querySelector('.content-nav')
    berger.addEventListener('click', function () {
        menuItems.classList.toggle('active');
    });
}

function ModalBox() {
    // Get the modal
    const modal = document.querySelector('#myModal');
    const itemBlogs = document.querySelectorAll('.item-blogs');
    const span = document.querySelector('.close');
    const objContent = document.querySelector('#obj-content');

    itemBlogs.forEach(function (item) {
        item.addEventListener('click', function (e) {
            objContent.data = '';
            const href = e.path[1].href;
            modal.style.display = "block";
            let page = href.split('#');
            console.log(page[1]);
            objContent.data = `./${page[1]}/index.html`;
            console.log(objContent.data);
        });

    });

    span.addEventListener('click', function () {
        modal.style.display = "none";
    });
    span.onclick = function () {

    }

}

window.onload = function () {
    switchMenu();
    ModalBox();
}
