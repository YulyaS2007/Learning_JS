const DOM = function() {
    this.element = null;

    const html = function(content) {
        this.innerHTML = content;
        return this;
    };

    const insert = function(to, before) {
        if (!before) to.append(this);
        else to.insertBefore(this, before);

        return this;
    };

    const attr = function(name, value) {
        if (name && !value) return this.getAttribute(name);

        if (name && value) this.setAttribute(name, value);
        return this;
    };

    const classAdd = function(name) {
        if (name) this.classList.add(name);
        return this;
    };

    const classRemove = function(name) {
        if (name) this.classList.remove(name);
        return this;
    };

    this.search = function(selector, element) {
        if (!element) element = this;

        let result = element.querySelectorAll(selector);

        result.forEach((element) => {
            for (key in this.methods) {
                element[key] = this.methods[key];
            };
        });

        if (result.length == 1) result = result[0];

        return result;
    };

    this.methods = {
        html: html,
        insert: insert,
        search: this.search,
        attr: attr,
        classAdd: classAdd,
        classRemove: classRemove
    };

    this.create = function(name) {
        this.element = document.createElement(name);

        for (key in this.methods) this.element[key] = this.methods[key];

        return this.element;
    };
};

const $ = new DOM();
