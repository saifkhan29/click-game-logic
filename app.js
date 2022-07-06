const items = document.querySelectorAll('.item');
const clickableScreen = document.querySelector('.main-container')
const itemsTop = [];

function getItemsHeight(){
    itemsTop.length = 0;
    items.forEach((item,idx) => {
        var rect = item.getBoundingClientRect();
        itemsTop.push(rect.top)
        // console.log(idx, rect.top, item.offsetTop)
    })
    console.log(itemsTop)
}


let itemIndex;
function getLargestNum(){
    itemIndex = 0;
    
    let largest = 0;
    itemsTop.forEach((each,idx) => {
        if(each > largest){
            largest = each;
            itemIndex = idx
        };
    });
    console.log(largest)
}

clickableScreen.addEventListener('click', () => {
    getItemsHeight();
    getLargestNum();
    items[itemIndex].classList.add('red')
})


// setInterval(() => {
//     var rect2 = items[17].getBoundingClientRect();
//     console.log(rect2.top)

// }, 500)