const body = document.querySelector('body')
const buttons = document.querySelectorAll('.btn')
const h1 = document.querySelector('.wrapper h1')
// buttons.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         e.preventDefault()
//         if (e.target.id === 'brown') {
//             body.style.backgroundColor = e.target.id
//             h1.style.color = "#fafafa"
//         }
//         if (e.target.id === 'pink') {
//             body.style.backgroundColor = e.target.id
//             h1.style.color = "#212121"
//         }
//         if (e.target.id === 'green') {
//             body.style.backgroundColor = e.target.id
//             h1.style.color = "#fafafa"
//         }
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id
//             h1.style.color = "#212121"
//         }
//         if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id
//             h1.style.color = "#f5f5f5"
//         }
//         if (e.target.id === 'gray') {
//             body.style.backgroundColor = e.target.id
//             h1.style.color = "#f5f5f5"
//         }
//         if (e.target.id === 'red') {
//             body.style.backgroundColor = e.target.id
//             h1.style.color = "#f5f5f5"
//         }
//         if (e.target.id === 'purple') {
//             body.style.backgroundColor = e.target.id
//             h1.style.color = "#f5f5f5"
//         }
//     })
// })


buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let _id = e.target.id
        switch (_id) {
            case 'brown':
                body.style.backgroundColor = _id
                break;
            case 'pink':
                body.style.backgroundColor = _id
                h1.style.color = '#212121'
                break;
            case 'green':
                body.style.backgroundColor = _id
                h1.style.color = '#f5f5f5'
                break;
            case 'yellow':
                body.style.backgroundColor = _id
                h1.style.color = '#212121'
                break;
            case 'blue':
                body.style.backgroundColor = _id
                h1.style.color = '#f5f5f5'
                break;
            case 'gray':
                body.style.backgroundColor = _id
                break;
            case 'red':
                body.style.backgroundColor = _id
                break;
            case 'purple':
                body.style.backgroundColor = _id
                break;
            default:
                body.style.backgroundColor = '#2b2d42'
                break;
        }
    })
})