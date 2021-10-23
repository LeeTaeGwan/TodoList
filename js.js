const container = document.querySelector('#listsContainer')
const input = document.querySelector('#inputText')
const btn = document.querySelector('#btn')
const checkbox = document.querySelector('.checkBtn')
const item = document.querySelector('.listP')

btn.addEventListener('click',addList)
input.addEventListener('keydown', addList)

let count = 1;
function addList(e) {
  
  if(e.type === 'click' || e.key === 'Enter'){
    let div = document.createElement('div')
    div.classList.add('list')
    if(count === 9) {
      count = 1;  // 왜 class가 10부터 삭제버튼이 안먹지?
      div.classList.add(`list${count}`)
    } else {
      div.classList.add(`list${count}`)
    }

    let checkBtn = document.createElement('input')
    checkBtn.setAttribute('type','checkbox')
    checkBtn.addEventListener('click',lineThrough)
    checkBtn.classList.add(`checkBtn${count}`)

    let delBtn = document.createElement('input')
    delBtn.classList.add('delBtn')
    delBtn.classList.add(`delBtn${count}`)
    delBtn.setAttribute('type', 'button')
    delBtn.setAttribute('value', '삭제')
    delBtn.addEventListener('click',delDiv)

    let p = document.createElement('p')
    p.classList.add(`listP${count}`)

    container.append(div)
    div.append(checkBtn)
    div.append(p)
    div.append(delBtn)
    p.textContent = input.value
    count++
  }
  
}


function lineThrough(e) {

  let num = e.target.classList[0]
    num = num[num.length-1]

  if(e.target.checked === true) {
    let text = document.querySelector(`.listP${num}`)
    text.style.textDecoration = 'line-through'
  }
  else if(e.target.checked === false) {
    let text = document.querySelector(`.listP${num}`)
    text.style.textDecoration = 'none';
  }
}

function delDiv(e) {
  let num = e.target.classList[1]
  num = num[num.length - 1]
  let div = document.querySelector(`.list.list${num}`)
  div.remove()
}


// 삭제하기 기능
// 체크박스 만들고 체크하면 취소선