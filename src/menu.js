const menuPage = () => {
    const menuDiv = document.createElement('div');
    const MenuFactory = (foodItem, img, price) => {
        return { foodItem, img, price }
    };
    const menuItems = [
        {
            item: 'jollof rice',
            pic: './jollof.jpeg',
            amount: 'N' + 100
        },
        {
            item: 'beans',
            pic: './beans.jpeg',
            amount: 'N' + 150
        },
        {
            item: 'abacha',
            pic: '.src/abacha.jpeg',
            amount: 'N' + 300
        }
    ];

    menuItems.forEach(items => {
        const div = document.createElement('div');
        let itemSpan = document.createElement('span');
        let priceSpan = document.createElement('span');
        let itemImg = document.createElement('img');
        const listedItems = MenuFactory(items.item, items.pic, items.amount);
        itemSpan.textContent = listedItems.foodItem;
        priceSpan.textContent = listedItems.price;
        itemImg.src = listedItems.img;
        div.append(itemImg, itemSpan, priceSpan);
        menuDiv.appendChild(div);
    });
    return menuDiv;

}

export {
    menuPage
}