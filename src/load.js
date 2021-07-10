const initialFunc = () => {
    const h1 = document.createElement('h1');
    const info = document.createElement('p');
    const img = document.createElement('img');
    const divC = document.createElement('div');
    h1.textContent = 'kuizin!';
    info.textContent = 'Welcome to the best restaurant in town with the best kuizins that meet your sought-after needs. Kindly go through our menu for more.';
    img.src = '../src/carolina-marinelli-PkbyxvkGWcU-unsplash.jpg';
    divC.append(h1, info, img);
    return divC;
}

export {
    initialFunc
}
