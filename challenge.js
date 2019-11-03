let isPaused = true

document.addEventListener('DOMContentLoaded',function(){
  let counter = document.querySelector('#counter')
  let plus = document.getElementById("+")
  let minus = document.getElementById("-")
  let heart = document.getElementById('<3')
  let pause = document.querySelector("#pause")
  let likecounter = document.querySelector('.likes')
  let formT = document.querySelector('#comment-form')
  let heartHash = {}
  let timer = setInterval(increment, 1000)

  heart.addEventListener('click', likeHeart )
  plus.addEventListener('click', increment)
  minus.addEventListener('click', decrement)
  pause.addEventListener('click', pauseIt)

  function decrement(){
    counter.innerText = parseInt(counter.innerText) - 1
  }
  function increment(){
    counter.innerText = parseInt(counter.innerText) + 1
  }

  function likeHeart(){
  if(heartHash[counter.innerText]){
    heartHash[counter.innerText]++
  } else {
    heartHash[counter.innerText] = 1
  }
    likecounter.innerHTML = ""
    for(let num in heartHash){
      let newNum = document.createElement('li')
      newNum.innerText = `${num} has been liked ${heartHash[num]} ${heart.innerText}`
      likecounter.append(newNum)
    }
  }

  function toggleButt(){
    if(isPaused){
      minus.disabled = true
      plus.disabled = true
      heart.disabled = true
      document.querySelector('#submit').disabled = true
      pause.innerText = "Resume"
    } else {
      document.querySelector('#submit').disabled = false
      minus.disabled = false
      plus.disabled = false
      heart.disabled = false
      pause.innerText = "Pause"
    }
  }

  function pauseIt(){
    if(isPaused){
      toggleButt()
      clearInterval(timer)
      timer = 0
      isPaused = false
    } else {
      timer = setInterval(increment, 1000)
      toggleButt()
      isPaused = true
    }
  }

  formT.addEventListener('submit', function(){
    event.preventDefault()
    let divList = document.querySelector('#list')
    let comment = event.target['new-comment'].value
    let createACommentUL = document.createElement('ul')
    divList.append(createACommentUL)
    let createACommentLI = document.createElement('li')
    createACommentLI.innerText = comment
    createACommentUL.append(createACommentLI)
  })

})
