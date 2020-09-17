class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-85971174-5"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-85971174-5');
                </script>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                <link rel="shortcut icon" href="public/image/icon.jpg" type="image/x-icon">
                <link rel="stylesheet" href="public/css/style.css">
                <script data-ad-client="ca-pub-9948846020316779" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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