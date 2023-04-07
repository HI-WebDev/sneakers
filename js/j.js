// let card = document.querySelector('.products .card');
// let div = document.querySelector('.products .card .options');
// let image = document.querySelector('.products .card .image');


// image.addEventListener("mouseenter", function () {
//     //create div
//     let div = document.createElement('div')
//     //set attribute
//     div.classList = 'options'

//     //create span1
//     let span1 = document.createElement('span')
//     //set class
//     span1.classList = 'op'
//     // create svg
//     let svg1 = document.createElement('i')
//     //set classLIst
//     svg1.classList = 'fa-solid '
//     svg1.classList = ' fa-heart'
//     // append svg to span1
//     span1.appendChild(svg1)


//     //create span2
//     let span2 = document.createElement('span')
//     //set class
//     span2.classList = 'op'
//     // create svg
//     let svg2 = document.createElement('i')
//     //set classLIst
//     svg2.classList = 'fa-solid '
//     svg2.classList = ' fa-share'
//     // append svg to span1
//     span2.appendChild(svg2)

//     //append spans to div
//     div.appendChild(span1)
//     div.appendChild(span2)

//     //append div to the card
//     card.appendChild(div)



// })


// start image slider

let thumb = document.querySelectorAll('.about .thumb .image .slide');
let thumbArr = Array.from(thumb);
let MainImage = document.querySelector('.about .principale img');


thumbArr.forEach((ele) => {
    ele.addEventListener('click', function (e) {
        thumbArr.forEach((ele) => {
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add('active')
        MainImage.src = e.currentTarget.src
    })
})


// end image slider