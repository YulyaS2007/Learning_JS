import app from "../pages/shop.js";
import mainCart from "../components/mainCart.js";


class AppCart {
    constructor() {

        this.data = app.data;
        
        this.render();
    }

    render() {

        const appElemMain = document.querySelector('.main');

        appElemMain.innerHTML = " ";

        appElemMain.append(mainCart);

        let cartTitle = document.createElement("h2");
        cartTitle.innerHTML = "Your selected products:"

        let divTitle = document.createElement("div");
        divTitle.classList.add("thingCard");
        divTitle.innerHTML = "<div>Photo sproduct</div><div>Description product</div><div>Cost product</div><div>Amount</div><div>Total cost</div>";


            mainCart.append(divTitle);


        this.data.forEach(elem => {
            let div = document.createElement("div");
            div.classList.add("thingCard");

            div.innerHTML = `
            ${elem.photo}` + 
            `${elem.title}` + 
            `${elem.cost}` +
            `<div><form><input id="amount" value="1" type="namber"></div><form>` +
            `<div>шт</div>`;
            
            mainCart.append(div);
        })

    }

}

let app1 = new AppCart();
export default app1;
