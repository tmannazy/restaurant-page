const menuPage = () => {
    const menuDiv = document.createElement('div');
    const MenuFactory = (foodItem, img, price) => {
        return { foodItem, img, price }
    };
    const menuItems = [
        {
            item: 'jollof rice',
            pic: './979b6738e304bf6b8d61.jpeg',
            amount: '₦' + 100
        },
        {
            item: 'beans & plantain',
            pic: './7261376b0f85b2df4def.jpeg',
            amount: '₦' + 150
        },
        {
            item: 'abacha',
            pic: './78ec4d764f6517ff367b.jpeg',
            amount: '₦' + 300
        },
        {
            item: 'edikang ikong',
            pic: './f2dc9de373e0f91ff4bb.jpg',
            amount: '₦' + 350
        },
        {
            item: 'okro soup',
            pic: './71fd64c8456c0e32818a.webp',
            amount: '₦' + 250
        },
        {
            item: 'egusi soup & fufu',
            pic: './0ff14ebc7194bb20a838.jpg',
            amount: '₦' + 300
        }
    ];

    menuDiv.className = 'menu-container';
    menuItems.forEach(items => {
        const div = document.createElement('div'),
            listedItems = MenuFactory(items.item, items.pic, items.amount),
            itemSpan = document.createElement('span'),
            priceSpan = document.createElement('span'),
            itemImg = document.createElement('img');

        div.className = 'menu-item';
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