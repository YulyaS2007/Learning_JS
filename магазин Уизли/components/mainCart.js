class MainCart {
   
    createMain() {
        this.element = document.createElement('div');
        this.element.classList.add('mainCart');
    }

    render() {
        this.createMain();
        return this.element;
    }
}

const mainCart = new MainCart().render();
export default mainCart;