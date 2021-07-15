const contactPage = () => {
    const contactDiv = document.createElement('div'),
        contactContainer = document.createElement('div'),
        h2 = document.createElement('h2'),
        formDiv = document.createElement('div'),
        form = document.createElement('form'),
        locationDiv = document.createElement('div'),
        locationAddr = document.createElement('p'),
        formElements = ['p', 'name', 'email', 'message', 'button'];


    formElements.forEach(item => {
        if (item === 'name' || item === 'email') {
            const formItems = document.createElement('input');
            formItems.setAttribute('type', 'text');
            form.appendChild(formItems);
            formDiv.append(form);
        } else if (item === 'message') {
            const textarea = document.createElement('textarea');
            form.appendChild(textarea);
            formDiv.append(form);
        }
        else if (item === 'button') {
            const button = document.createElement(item);
            button.setAttribute('type', 'button');
            button.textContent = 'Submit';
            form.append(button);
        }
        else {
            const p = document.createElement(item);
            p.setAttribute('class', 'form-info');
            p.textContent = 'we love your words :)';
            form.append(p);
        }
    });

    formDiv.className = 'form-container';
    locationAddr.className = 'addr';
    contactContainer.className = 'contact-container';
    locationDiv.className = 'location-container';
    locationAddr.textContent = '#1 University of Biafra Road, Enugwu, Biafra.'
    locationDiv.append(locationAddr);
    contactContainer.append(h2, formDiv, locationDiv);

    return contactDiv.appendChild(contactContainer);
}

export {
    contactPage
}