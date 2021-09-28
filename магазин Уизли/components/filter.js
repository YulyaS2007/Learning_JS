export const filter = function(id) {
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