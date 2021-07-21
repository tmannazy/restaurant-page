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
            const userDetails = document.createElement('input'),
                label = document.createElement('label'),
                inputDiv = document.createElement('div'),
                labelDiv = document.createElement('div');
            userDetails.setAttribute('type', 'text');
            userDetails.setAttribute('id', item);
            label.setAttribute('for', item);
            labelDiv.setAttribute('class', 'form-label');
            inputDiv.setAttribute('class', 'form-input');
            label.textContent = item;
            labelDiv.appendChild(label);
            inputDiv.appendChild(userDetails);
            form.append(labelDiv, inputDiv);
            formDiv.append(form);
        } else if (item === 'message') {
            const textarea = document.createElement('textarea'),
                label = document.createElement('label'),
                labelDiv = document.createElement('div');
            textarea.setAttribute('placeholder', 'Your feedback helps us serve better...')
            label.setAttribute('for', item);
            labelDiv.setAttribute('class', 'form-label');

            label.textContent = 'Your Message';
            labelDiv.appendChild(label);
            form.append(labelDiv, textarea);
            formDiv.append(form);
        }
        else if (item === 'button') {
            const button = document.createElement(item);
            button.setAttribute('type', 'submit');
            button.innerHTML = `<i class="fas fa-paper-plane"></i>Submit`;
            form.append(button);
        }
        else {
            const p = document.createElement(item);
            p.setAttribute('class', 'form-info');
            p.textContent = '...we listen when you speak';
            form.append(p);
        }
    });

    formDiv.className = 'form-container';
    locationAddr.className = 'addr';
    contactContainer.className = 'contact-container';
    locationDiv.className = 'location-container';
    h2.textContent = 'Contact Us';
    locationAddr.innerHTML = `<i class="fas fa-map-marker-alt"></i> #1 University of Biafra Road, Enugwu, Biafra.`
    locationDiv.append(locationAddr);
    contactContainer.append(h2, formDiv, locationDiv);

    return contactDiv.appendChild(contactContainer);
}

export {
    contactPage
}