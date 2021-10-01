const container = document.querySelector('#listContainer')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')

btn.addEventListener('click',addList)
function addList(e) {
  let tmp = document.createElement('div')
  tmp.classList.add('todoList')
  container.append(tmp)
  tmp.textContent = input.value
}

// 삭제하기 기능
// 수정하기 기능
// 체크박스 만들고 체크하면 삭제하는 거