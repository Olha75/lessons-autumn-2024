
// let documentActions=(e)=>{
//     const targetElement=e.target

//     if(targetElement.closest('.actions-header__burger')){
//         document.documentElement.classList.toggle('open-menu')
//     }
// }

// document.addEventListener('click', documentActions)





let documentActions = (e) => {
    const targetElement = e.target;

    // Відкрити/закрити меню при кліку на бургер
    if (targetElement.closest('.actions-header__burger')) {
        document.documentElement.classList.toggle('open-menu');
    }

    // Закриття меню при кліку на посилання
    if (targetElement.closest('.menu-link')) {
        document.documentElement.classList.remove('open-menu');
    }
}

document.addEventListener('click', documentActions);






