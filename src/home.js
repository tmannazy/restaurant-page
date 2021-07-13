const homePage = () => {
    const h1 = document.createElement('h1');
    const info = document.createElement('p');
    // const
    const homePageContainer = document.createElement('div');

    h1.textContent = 'kuizin!';
    info.textContent = 'Welcome to the best restaurant in town with the best kuizins that meet your sought-after needs. Kindly go through our menu for more.';




    homePageContainer.append(h1, info);




    return homePageContainer;
}

export {
    homePage
}
