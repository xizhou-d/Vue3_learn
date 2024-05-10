import Loading from '../assets/loading.svg'

// export default {
//     // 根据 binding.value 的值，决定创建或删除 img 元素
//     mounted(el, binding) {
//         console.log('el', el)
//         console.log('binding', binding)
//         if (binding.value) {
//             // 创建 img 元素
//             if (!getLoadingImg(el)) {
//                 const img = createLoadingImg()
//                 img.src = Loading
//             }
//         } else {
//             console.log('删除 img 元素')
//         }
//     },
//     updated(el, binding) {
//         console.log('el', el)
//         console.log('binding', binding)
//         if (binding.value) {
//             // 创建 img 元素
//             if (!getLoadingImg(el)) {
//                 const img = createLoadingImg()
//                 img.src = Loading
//             }
//         } else {
//             console.log('删除 img 元素')
//         }
//     }
// }

export default (el, binding) => {
    const curImg = getLoadingImg(el)
    if (binding.value) {
        // 创建 img 元素
        if (!curImg) {
            const img = createLoadingImg()
            img.src = Loading
            el.appendChild(img)
        }
    } else {
        if (curImg) {
            curImg.remove()
        }
        console.log('删除 img 元素')
    }
}

const getLoadingImg = (el) => {
    return el.querySelector('img[data-status=loading]')
}

const createLoadingImg = () => {
    const img = document.createElement('img')
    img.dataset.status = 'loading'

    return img
}
