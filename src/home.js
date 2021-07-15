const homePage = () => {
    const welcomeDiv = document.createElement('div'),
        welcomeNote = document.createElement('p'),
        slogan = document.createElement('p'),
        orderBtn = document.createElement('button'),
        locDiv = document.createElement('div'),
        locDivAddress = document.createElement('p'),
        locDivList = document.createElement('ul'),
        operationDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        homePageContainer = document.createElement('main');

    welcomeNote.textContent = 'Welcome to the best restaurant in town with the best cuisines that meet your sought-after needs. Kindly go through our menu for more.';
    slogan.textContent = 'Cuisines That Satisfy';
    orderBtn.textContent = 'Order Now';
    locDivAddress.textContent = '#1 University of Biafra Road, Enugwu, Biafra.'
    orderBtn.className = 'order-btn';
    welcomeDiv.className = 'welcome-info';
    locDiv.className = 'location-info';

    for (let i = 0; i < 2; i++) {
        let firstGroup, secondGroup;
        const li = document.createElement('li');
        if (i === 1) {
            firstGroup = `${operationDays[4]} - ${operationDays[6]}: 8:00 a.m. - 11:00 p.m.`;
            li.textContent = firstGroup;
        } else {
            secondGroup = `${operationDays[0]} - ${operationDays[3]}: 7:00 a.m. - 9:00 p.m.`;
            li.textContent = secondGroup;
        }
        locDivList.appendChild(li);
    }

    welcomeDiv.append(welcomeNote, slogan, orderBtn);
    locDiv.append(locDivAddress, locDivList);
    homePageContainer.append(welcomeDiv, locDiv);
    return homePageContainer;
}

export {
    homePage
}
