class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                <link rel="shortcut icon" href="public/image/icon.jpg" type="image/x-icon">
                <link rel="stylesheet" href="public/css/style.css">
                <title>KPTN</title>
            </head>
            <body>
                    <header>
                    <div class="flex-header">
                        <div class="content-header">
                            <div class="item logo">
                                <img src="public/image/icon.jpg" class="active">
                                <h1>KPTN</h1>
                            </div>
                            <div class="item berger">
                                <i class="material-icons">table_rows</i>
                            </div>
                        </div>
                    </div>

                    <nav>
                        <div class="flex-nav">
                            <ul class="content-nav active">
                                <li class="item"><a href="index.html">Home</a></li>
                                <li class="item"><a href="blogs.html">Blogs</a></li>
                                <li class="item"><a href="contact.html">Contacts</a></li>
                                <li class="item"><a href="about.html">About</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        

            </body>

        </html>
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);