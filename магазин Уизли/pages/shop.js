import mainShop from "../components/mainShop.js";


class AppShop {
    constructor() {
        this.data = [];

        this.init();
    }

    init() {
        let self = this;

        const getEffects = async function() {

            const appElemMain = document.querySelector('.main');

            appElemMain.innerHTML = " ";
            appElemMain.append(mainShop);   

            let result = await self.effects();
        };
        
        getEffects();

// ---------------------------------------------------
        this.searchCart();
    }

    filter(id) {
        if (!id) return;
    
        let container = document.querySelectorAll('#' + id);
        
        if (container.length == 0) return;
        container = container[0];
    
        let filters = container.querySelectorAll('ul.filter li');
        let items = container.querySelectorAll('ul.list li');
    
        if (filters.length == 0 || items.length == 0) return;
    
        const go = function(event) {
    
            const name = event.target.dataset.filter;
    
            if (!name) return;
    
            filters.forEach(element => {
                element.removeAttribute('active');
            });
    
            event.target.setAttribute('active', "");
    
            items.forEach(element => {
                element.classList.remove('hide');
    
                if (name != 'all' && element.dataset.filter != name) {
                    element.classList.add('hide');
                }
            });
        };
    
        filters.forEach(element => {
            element.addEventListener('click', go);
        });
    };

    nextSlideAll (id) {
        if (!id) return;
        let slides = document.querySelectorAll('#' + id + ' .slide');
        setInterval(nextSlide,2000);        
        let currentSlide = 0;
        
        function nextSlide() {
            slides[currentSlide].className = 'slide';
            currentSlide = (currentSlide+1)%slides.length;
            slides[currentSlide].className = 'slide showing';
        };
    }

    effects() {
        this.filter('store');

        setInterval(this.nextSlideAll('fakewand'),2000);
        setInterval(this.nextSlideAll('broom'),2000);
        setInterval(this.nextSlideAll('emblem'),2000);
        setInterval(this.nextSlideAll('quill'),2000);
    };   

    searchCart() {
        let arrCatalog = document.querySelectorAll(".library_page");

        arrCatalog.forEach(item =>{
            let pageDescription = item.querySelector(".description_page");

            let addCart = document.createElement("p");
            addCart.classList.add("add__cart");
            addCart.innerHTML = "+";

            pageDescription.append(addCart);

            let id;

            addCart.addEventListener('click', event => {

                if (addCart.hasAttribute('data-id')) {
                    this.onAdd(event, id);
                } else {  
                    let arrMax = document.querySelectorAll("[data-id]");

                    if (!arrMax || arrMax.length == 0) {
                        id=1;
                    } else {
                        let idMax = arrMax.length;
                        id = idMax + 1;
                    }

                    addCart.setAttribute('data-id', `${id}`);

                    this.onAdd(event, id);
                }
            });
        }); 
    }

    onAdd(event, id) {        
        let bill = document.querySelector(".bill");
        bill.innerHTML ="";

        let li = event.target.closest("li");

        const newThing = {
            photo: li.querySelector(".flip").outerHTML,
            title: li.querySelector("h4").outerHTML,
            cost: li.querySelector(".cost").outerHTML,
            idThing: id
        }

        this.data.push(newThing);
        
        bill.innerHTML = `${this.data.length}`;

        return this.data;
    }
}

let app = new AppShop();
export default app;
