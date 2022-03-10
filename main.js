//обработчик событий, handler, слушатель, listener, подписчик, subscriber => Функция
//function({.....}) => объект, со сведениями о произошедшим событии
// event, ev, e => объект, со сведениями о произошедшим событии


const sm = document.getElementById('small')

const onClickHandler1 = () => alert('Yo')
const onClickHandler2 = () => alert('Hey')
const onClickHandler3 = (e) => console.log(e)
const onClickHandler4 = (e) => console.dir(e)
const onClickHandler5 = (e) => {
    e.stopPropagation()

    if (e.currentTarget.id === 'small') {
        alert(e.target.id)
    }
}



sm.onclick = onClickHandler1 // setаем
sm.onclick = onClickHandler2 // setаем
sm.onclick = null // setаем

const md = document.getElementById('medium')
const bg = document.getElementById('big')

/*sm.addEventListener('click', onClickHandler4)*/
md.addEventListener('click', onClickHandler4)
bg.addEventListener('click', onClickHandler4)

/*sm.addEventListener('click',onClickHandler5)*/

const superHandler = (e) => {
    e.stopPropagation()
    if (e.target.tagName === "BUTTON") {
        alert(e.target.id)
    }
    alert(12)
}

sm.addEventListener('click',superHandler)


