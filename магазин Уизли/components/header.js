class Header {
    create() {
        
        this.element = document.createElement('div');
        this.element.classList.add('header');
    }

    render() {
        this.create();

        this.element.innerHTML = `
        <div class="header">
                <div class="logo">
                    <img src="/images/logo.jpg" alt="#">
                    <h2>Weasleys' Wizard Wheezes</h2>
                </div>

                <nav class="nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#shop">Shop</a></li>
                        <li><a href="/#contacts">Contacts</a></li>
                        <li></li>
                        <li><a href="/#cart">Cart <span class="bill">   </span></a></li>
                    </ul>
                </nav>
            </div>

            <div class="main" id="store">



            </div>    
        `;

        return this.element;
    }
}

const header = new Header().render();
export default header;