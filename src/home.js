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

    welcomeNote.innerHTML = `Welcome to the <span>best</span> restaurant in town with delicious cuisines that meet your sought-after needs. Kindly go through our menu for more.`;
    slogan.textContent = 'kuizins to satisfy you!';
    orderBtn.textContent = 'order now!';
    locDivAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> #1 University of Biafra Road, Enugwu, Biafra.`
    slogan.className = 'motto';
    orderBtn.className = 'order-btn';
    welcomeDiv.className = 'welcome-info';
    locDiv.className = 'location-info';

    for (let i = 0; i < 2; i++) {
        let firstGroup, secondGroup;
        const li = document.createElement('li');
        if (i === 1) {
            firstGroup = `<i class="far fa-clock"></i> ${operationDays[4]} - ${operationDays[6]}: 8:00 AM - 11:00 PM`;
            li.innerHTML = firstGroup;
        } else {
            secondGroup = `<i class="far fa-clock"></i> ${operationDays[0]} - ${operationDays[3]}: 7:00 AM - 9:00 PM`;
            li.innerHTML = secondGroup;
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
