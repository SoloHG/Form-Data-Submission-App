document.addEventListener('DOMContentLoaded',() => {
    let form = document.getElementById("form")    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let message = document.getElementById("message").value

        if(name&&email&&message){
            alert("Form submited!")
            
        } 
        else{
            alert("Form incomplete!")
        }
})

})
 