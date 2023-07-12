// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const init=() => {
  const likeObj = document.querySelectorAll('.like-glyph')
  likeObj.forEach(element =>{
    element.addEventListener('click', e => {
      e.preventDefault()
      if(element.innerHTML===EMPTY_HEART){
        mimicServerCall()
        .then(resp =>{
          element.innerHTML=FULL_HEART
          element.className='activated-heart'
        })
        .catch(() =>{
          modal.classList.remove('hidden')
          setTimeout( ()=>modal.className='hidden', 3000)
        })
      } else {
        element.innerHTML=EMPTY_HEART
        element.classList.remove('activated-heart')
      }
    })
    })
}

document.addEventListener('DOMContentLoaded', init)



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
