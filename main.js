const NameSignup = document.getElementById('signupname')
const EmailSignup = document.getElementById('singupemail')
const PassSignup = document.getElementById('signuppassword')
const BtnSignup = document.getElementById('btnsign')
const cheak = document.getElementById('cheakS')

let usersInfo = [];


if (JSON.parse(localStorage.getItem('info')) != null) {
    usersInfo = JSON.parse(localStorage.getItem('info'))
}

function signup() {
    if (NameSignup?.value == '' || EmailSignup?.value == '' || PassSignup?.value == '') {
        cheak.innerHTML = `<span class="text-danger my-3" >All inputs are requierd</span>`
    } else {
        for (let i = 0; i < usersInfo.length; i++) {
            if (usersInfo[i].email?.toLowerCase() == EmailSignup.value?.toLowerCase()) {
                cheak.innerHTML = `<span class="text-danger my-3">Email already exist</span>`
                return false
            }
        }
        getData()
        cheak.innerHTML = `<span class="text-success my-3" >Success</span>`

    }

}

function getData() {
    let user = {
        name: NameSignup?.value,
        email: EmailSignup?.value,
        password: PassSignup?.value
    }
    usersInfo.push(user);
    localStorage.setItem('info', JSON.stringify(usersInfo))
    // console.log(usersInfo)
    location.href = '\index.html'
}

BtnSignup?.addEventListener('click', function () {
    signup()
})


//login

const LoginEmail = document.getElementById('emailLogin')
const LoginPass = document.getElementById('passLogin')
const logBtn = document.getElementById('btnsignup')
const cheakSignin = document.getElementById('cheakSignIn')


function SignIn() {
    if (LoginEmail?.value == '' || LoginPass?.value == '') {
        cheakSignin.innerHTML = `<span class="text-danger text-center">All inputs are requierd</span>`
    } else {
        for( var i = 0 ; i<usersInfo.length; i++) {
        if (usersInfo[i].email?.toLowerCase() == LoginEmail.value?.toLowerCase() && LoginPass.value?.toLowerCase() == usersInfo[i].password?.toLowerCase()) {

            cheakSignin.innerHTML = `<span class="text-success text-center">Success</span>`
            localStorage.setItem('userName', JSON.stringify(usersInfo[i].name))
            location.href = `\welcome.html`
            return
        }else if (usersInfo[i].email?.toLowerCase() == LoginEmail.value?.toLowerCase() && LoginPass.value?.toLowerCase() != usersInfo[i].password?.toLowerCase()) {
            cheakSignin.innerHTML = `<span class="text-danger text-center">password incorrect</span>`
        }else{
            cheakSignin.innerHTML = `<span class="text-danger text-center">you should sign up first</span>`
        }
    }
   
}

    
}


logBtn?.addEventListener('click', function () {
    SignIn()
})


//Welcomepage

const welcomepage = document.getElementById('welcome')
let userLog = localStorage.getItem('userName')

welcomepage.innerHTML = `<h1 class=" w-50 p-5">Welcome ${userLog}</h1>`