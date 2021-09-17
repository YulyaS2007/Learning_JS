"use strict";

class User {
    constructor(id, firstName, email, address, phone) {
        this.dataUser = {
            id: id, 
            firstName: firstName, 
            email: email, 
            address: address, 
            phone: phone
        };
    };

    set editUser(newDataUser) {
        for(let key in newDataUser) if (this.dataUser[key] && newDataUser[key]) this.dataUser[key] = newDataUser[key];

        // this.dataUser = {
        //     id: this.dataUser.id, 
        //     firstName: newDataUser.firstName || this.dataUser.firstName,
        //     email: newDataUser.email || this.dataUser.email,
        //     address: newDataUser.address || this.dataUser.address,
        //     phone: newDataUser.phone || this.dataUser.phone
        // };
    };

    get editUser() {
        return this.dataUser;
    };
};


class Contacts {
    constructor() {
        this.contactsUsers = [];
    };

    set addUser(newDataUser) {
        let id;
        if(this.contactsUsers && this.contactsUsers.length == 0) {
            id = 1;
        } else {
            let arrUsers = this.contactsUsers[this.contactsUsers.length-1].dataUser.id;
            id = arrUsers + 1;
        };

        let userNew = new User(id, newDataUser.firstName, newDataUser.email, newDataUser.address, newDataUser.phone);

        this.contactsUsers.push(userNew);
    };

    get addUser() {
        return this.contactsUsers;
    };

    edit(id, updateInfo) {
        let updateUser = this.contactsUsers.find(item => item.dataUser.id == id);
        updateUser.editUser = updateInfo;
    };

    remove(id) {
        this.contactsUsers = this.contactsUsers.filter(item => {
            return item.dataUser.id != id;
        });
    };
};


class ContactsApp extends Contacts{
    constructor() {
        super();

        this.app();

        let storageTime = this.getCookie("storageTime");
        if (!storageTime) localStorage.removeItem("users");
    };    

    app() {
        this.submit = $.search(".submit", document);
        const clear = $.search(".clear", document);

        this.mainWrapper = $.search(".mainWrapper", document);
        this.listContacts = $.create("div").classAdd("list__contacts");
        this.contactListTable = $.create("table").classAdd("contactListTable");
        this.delAll = $.create("button").classAdd("del__all").html("Delete All");

        this.titeleList = $.create("thead").classAdd("titeleList");
        this.trTheadList = $.create("tr").html(`
            <th>№</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th><p>DEL</p></th>
        `);

        this.submit.addEventListener('click', event => {
            event.preventDefault();
            this.checkedForm();    
        });
        
        clear.addEventListener('click', event => {
            this.clear();
        });

        this.delAll.addEventListener('click', event => {
            this.delAllButtom();
        });

        const data = this.storage || [];
        
        if (data.length > 0) {
            this.contactsUsers = data;
            this.updateList();
        }
    };

    setCookie(name, value, options = {}) {

        options = {
          path: '/',
          // при необходимости добавьте другие значения по умолчанию
          ...options
        };
      
        if (options.expires instanceof Date) {
          options.expires = options.expires.toUTCString();
        }
      
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }
      
        document.cookie = updatedCookie;
    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    set storage(data) {
        localStorage.setItem('users', JSON.stringify(data));

        //cookies
        this.setCookie("storageTime", true, {
            path: '/',
            'max-age': 10
            // 864000 сек. 10 днях
        })
    }

    get storage() {
        let data = localStorage.getItem('users') || [];

        if (data.length == 0) return;

        data = JSON.parse(data) || [];

        if (!data || data.length == 0) return;
        
        data = data.map(user => {
            user = new User(user.dataUser.id, user.dataUser.firstName, user.dataUser.email, user.dataUser.address, user.dataUser.phone);
            return user;
        });

        return data;
    }


    updateList() {
        this.contactListTable.html("");

        this.listContacts.insert(this.mainWrapper);
        this.contactListTable.insert(this.listContacts);
        this.titeleList.insert(this.contactListTable);
        this.trTheadList.insert(this.titeleList);
        const contactListBody = $.create("tbody").classAdd("contactListBody");
        contactListBody.insert(this.contactListTable);

        this.delAll.insert(this.listContacts);

        const data = this.addUser;
        data.forEach(contact => {
            const tr = $.create("tr");
            const tdNamber = $.create("td").html(`${contact.dataUser.id}`).attr("id", "tdName" + `${contact.dataUser.id}`);
            const tdName = $.create("td").html(`${contact.dataUser.firstName}`).attr("id", "tdName" + `${contact.dataUser.id}`);
            const tdEmail = $.create("td").html(`${contact.dataUser.email}`).attr("id", "tdEmail" + `${contact.dataUser.id}`);
            const tdAddress = $.create("td").html(`${contact.dataUser.address}`).attr("id", "tdAddress" + `${contact.dataUser.id}`);
            const tdPhone = $.create("td").html(`${contact.dataUser.phone}`).attr("id", "tdPhone" + `${contact.dataUser.id}`);

            const tdEdit = $.create("td").html(`
            <p class="edit">EDIT</p>
            `);
            const tdDel = $.create("td").html(`
            <p class="del">DEL</p>
            `);

            tr.insert(contactListBody);
            tdNamber.insert(tr);

            tdName.insert(tr);
            tdName.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });
            tdName.addEventListener('blur', event => {
                event.target.focus();
            });
            tdName.addEventListener('keyup', event => {
                this.onSave(event, contact.dataUser.id, 'firstName');
            });

            tdEmail.insert(tr);
            tdEmail.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });
            tdEmail.addEventListener('blur', event => {
                event.target.focus();
            });
            tdEmail.addEventListener('keyup', event => {
                this.onSave(event, contact.dataUser.id, 'email');
            });

            tdAddress.insert(tr);
            tdAddress.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });
            tdAddress.addEventListener('blur', event => {
                event.target.focus();
            });
            tdAddress.addEventListener('keyup', event => {
                this.onSave(event, contact.dataUser.id, 'address');
            });

            tdPhone.insert(tr);
            tdPhone.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });
            tdPhone.addEventListener('blur', event => {
                event.target.focus();
            });
            tdPhone.addEventListener('keyup', event => {
                event.target.focus();
                this.onSave(event, contact.dataUser.id, 'phone');
            });


            tdEdit.insert(tr);
            tdEdit.addEventListener('click', event => {
                this.onEdit(event, contact.dataUser.id);
            });

            tdDel.insert(tr);
            tdDel.addEventListener('click', event => {
                this.onRemove(event, contact.dataUser.id);
            });     
        });

        this.storage = data;
    };

    checkedForm() {    
        let nameU = $.search("#firstNameLabel", document).value;
        let emailU = $.search("#emailLabel", document).value;
        let addressU = $.search("#addressLabel", document).value;
        let phoneU = $.search("#phoneLabel", document).value;  

        if(!nameU || !emailU || !addressU || !phoneU) {
            alert("Check and fill in all fields!");
            return false;
        };

        if (this.submit.dataset.action != "edit") {
            this.onAdd();
        }  else {
            let id = this.submit.dataset.id;
            const updateInfo = {
                firstName: `${nameU}`, 
                email: `${emailU}`, 
                address: `${addressU}`, 
                phone: `${phoneU}`
            };

            this.edit(id, updateInfo);

            $.search("#formNewUser", document).reset(""); //очищает поля формы
            this.updateList();        
            this.submit.removeAttribute("data-action");
            this.submit.removeAttribute("data-id");
        };
    };

    onAdd() {
        const nameU = $.search("#firstNameLabel", document);
        const emailU = $.search("#emailLabel", document);
        const addressU = $.search("#addressLabel", document);
        const phoneU = $.search("#phoneLabel", document);

        const newDataUser = {
            firstName: `${nameU.value}`, 
            email: `${emailU.value}`, 
            address: `${addressU.value}`, 
            phone: `${phoneU.value}`
        };

        nameU.value = '';
        emailU.value = '';
        addressU.value = '';
        phoneU.value = '';

        this.addUser = newDataUser;
        this.updateList();
    };

    onEdit(event, id) { 
        let user = this.contactsUsers.filter(function(user) {
            if (user.dataUser.id == id) return user.dataUser;
        });
            
        let nameU = $.search("#firstNameLabel", document);
        let emailU = $.search("#emailLabel", document);
        let addressU = $.search("#addressLabel", document);
        let phoneU = $.search("#phoneLabel", document); 

        nameU.value = user[0].dataUser.firstName;
        emailU.value = user[0].dataUser.email;
        addressU.value = user[0].dataUser.address;
        phoneU.value = user[0].dataUser.phone;

        this.submit.dataset.action = "edit";
        this.submit.dataset.id = `${id}`;
    };

    onSave(event, id, key) {
        if (event.code != 'Enter' && event.code != 'NumpadEnter') return;  
        
        event.target.setAttribute('contenteditable', false); 

        const updateInfo = {};
        updateInfo[key] = event.target.textContent;
        this.edit(id, updateInfo);
        event.target.setAttribute('contenteditable', false);
        this.updateList();  
    };
    
    onRemove(event, id) {
        this.remove(id);
        this.updateList();
    };

    clear() {
        const nameU = $.search("#firstNameLabel", document);
        const emailU = $.search("#emailLabel", document);
        const addressU = $.search("#addressLabel", document);
        const phoneU = $.search("#phoneLabel", document);
        
        nameU.value = '';
        emailU.value = '';
        addressU.value = '';
        phoneU.value = '';
    };

    delAllButtom() {
        this.listContacts.html("");
        this.contactsUsers = [];
        this.updateList();
        this.listContacts.html("");
    };
};


window.addEventListener('load', function() {
    new ContactsApp();
});