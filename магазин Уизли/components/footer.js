class Footer {
    create() {
        
        this.element = document.createElement('div');
        this.element.classList.add('.footer');
    }

    render() {
        this.create();

        this.element.innerHTML = `
        <p class="sign">Создатель сайта: <abbr title="Хорошая девочка)">Юлия Соколовская</abbr></p>        
        `;

        return this.element;
    }
}

const footer = new Footer().render();
export default footer;