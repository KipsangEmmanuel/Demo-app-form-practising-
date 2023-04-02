// manipulate the DOM using js
let body = document.querySelector('body')
body.style.backgroundColor = 'lightgrey'
function changeTopic(topic) {
    let h2 = document.querySelector('h2')
    h2.id = 'heading'
    h2.textContent = topic
}
changeTopic('Emmanuel Practising')

function collectData() {
    //collect the data fro the form
    let form = document.querySelector('#record')
    // console.log(form)
    form.addEventListener("submit", (event) => {
        event.preventDefault()
      //logic
      let formData = {
        fullName: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      }
    //   console.log(formData)
    form.reset()//this helps to reset the form after submitting the details
    })
}
collectData()

function displayFeedback() {
    //first grab the form
    let feedbackForm = document.querySelector('#feedback-form')
    // console.log(feedbackForm)
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let feedbackInput = e.target.feedback.value
        // console.log(feedbackInput)

        let p = document.querySelector('#para')
        // console.log(p)
        p.textContent = feedbackInput

        let sec = document.querySelector('#Section')
        sec.appendChild(p)
        feedbackForm.reset()

    })

}
displayFeedback()