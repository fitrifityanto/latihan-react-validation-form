import { useEffect, useRef, useState } from "react"

const errorMsg = [
  {
    id: 1,
    name: 'username',
    msg: 'username is required',
  },
]
function App() {
const usernameRef = useRef()
const emailRef = useRef()

const [dataRegister, setDataRegister] = useState(
  {
    username:'',
    email:'',
    password:'',
    password2:'',
  },
)

const [errorMsg, setErrorMsg] =useState('')



const isValidEmail = (email) => {
  const re = /[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g
  return re.test(String(email).toLowerCase())
}

const setError = (element) => {
  const inputControl = element.parentElement
  // const errorDisplay = inputControl.querySelector('.error')

  // errorDisplay.innerText = message
  return inputControl
}

const validateInputs = () => {
  // const elementUsername = document.getElementById('username')
  // const elementUsername = usernameRef.current
  // const inputControl = elementUsername.parentElement
  // const errorDisplay = inputControl.querySelector('.error')
  // console.log(inputControl)
  console.log(setError(usernameRef.current))



  const usernameValue = dataRegister.username.trim()
  const emailValue = dataRegister.email.trim()

  // if (usernameValue === '') {

  //   setError(usernameRef.current, 'username is required')
  
  // } 

  // if (emailValue === '') {
  //   setError(emailRef.current, 'email is required')
    
  // } else if (!isValidEmail(emailValue)) {

  //   setError(emailRef.current, 'email wrong')
 
  // } 

 

}

const handleSubmit = (e) => {
  e.preventDefault()  
  const isValid = validateInputs()


    setDataRegister(
      {
        username:dataRegister.username,
        email:dataRegister.email,
        password:dataRegister.password,
        password2:dataRegister.password2,
      },
    )
  
      const JSONdata = JSON.stringify(dataRegister)
    if (!isValid) {
      
      console.log(JSONdata)
 
    }
  
  // console.log(elementUsername)

}


useEffect(() => {

}, [])

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-xs border border-black rounded p-3">
          <form action="">
            <h1 className="font-bold text-3xl mb-4 text-center">Register</h1>
            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input type="text"
                ref={usernameRef}
                id="username"
                name="username"
                value={dataRegister.username}
                onChange={e => {
                  setDataRegister({...dataRegister, username:e.target.value})
                }}
                placeholder="enter your username"
                className="border rounded p-2 w-full " />
              <div
                className="text-sm text-red-500 h-8 error"> </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input type="text"
                ref={emailRef}
                id="email"
                name="email"
                value={dataRegister.email}
                onChange={e => {
                  setDataRegister({...dataRegister, email:e.target.value})
                }}
                placeholder="youremail@gmail.com"
                className="border rounded p-2 w-full " />
              <div
                className="text-sm text-red-500 h-8 error">
               
                </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input type="password"
                id="password"
                name="password"
                value={dataRegister.password}
                onChange={e => {
                  setDataRegister({...dataRegister, password:e.target.value})
                }}
                placeholder="enter your password"
                className="border rounded p-2 w-full "
                 />
              <div
                className="text-sm text-red-500 h-8"></div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password2">Password again</label>
              <input type="password"
                id="password2"
                name="password2"
                value={dataRegister.password2}
                onChange={e => {
                  setDataRegister({...dataRegister, password2:e.target.value})
                }}
                placeholder="your password again"
                className="border rounded p-2 w-full "
                 />
              <div
                className="text-sm text-red-500 h-8"></div>
            </div>
            <button type="submit"
              onClick={handleSubmit}
              className="border rounded w-full py-2 mt-2 bg-black text-white">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
