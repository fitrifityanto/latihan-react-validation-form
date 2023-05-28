import { useEffect, useState } from "react"

function App() {

const initialValues = {
  username:'',
  email:'',
  password:'',
  password2:''
}

const [formValues, setFormValues] = useState(initialValues)
const [formErrors, setFormErrors] = useState({})

const handleChange = (e) => {
  const {name, value} = e.target
  setFormValues({...formValues, [name]: value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  // setFormErrors(validate(formValues))
  if (validate()) {
    console.log(JSON.stringify(formValues))
  }

}

const validate = () => {

  let formErrors = {}
  let formIsValid = true
  const regex = /[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g
  if (!formValues.username) {
    formIsValid = false
    formErrors.username = 'Username is required'
  }
  if (!formValues.email) {
    formIsValid = false
    formErrors.email = 'Email is required'
  } else if (!regex.test(formValues.email)) {
    formIsValid = false
    formErrors.email = 'This is not a valid Email format'
  }
  if (!formValues.password) {
    formIsValid = false
    formErrors.password = 'Password is required'
  } else if (formValues.password.length < 4) {
    formIsValid = false
    formErrors.password = 'Password must be more than 4 character'
  } else if (formValues.password.length > 10) {
    formIsValid = false
    formErrors.password = 'Password cannot lebih than 10 character'
  }
  if (!formValues.password2) {
    formIsValid = false
    formErrors.password2 = 'Password again is required'
  } else if (formValues.password2 !== formValues.password) {
    formIsValid = false
    formErrors.password2 = 'Password dont match '
  }
  setFormErrors({...formErrors})
  return formIsValid
}

// useEffect(() => {
//   if (Object.keys(formErrors).length == 0 ) {
//     console.log(formValues)
//   }
// },[formErrors])

  return (
    <>
      <div className="max-w-md mx-auto">
      <div className="flex justify-center items-center min-h-screen "> 
          <div className="border border-black rounded p-3 w-11/12">
            <form onSubmit={handleSubmit} action="">
              <h1 className="font-bold text-3xl mb-4 text-center">Register</h1>
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input type="text"
                  id="username"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                  placeholder="enter your username"
                  className="border rounded p-2 w-full focus:outline-none " />
                <div
                  className="text-sm text-red-500 h-8 error">{formErrors.username} </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="text"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="youremail@gmail.com"
                  className="border rounded p-2 w-full focus:outline-none " />
                <div
                  className="text-sm text-red-500 h-8 error">
                {formErrors.email}
                  </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input type="password"
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="enter your password"
                  className="border rounded p-2 w-full focus:outline-none "
                  />
                <div
                  className="text-sm text-red-500 h-8"> 
                  {formErrors.password}</div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="password2">Password again</label>
                <input type="password"
                  id="password2"
                  name="password2"
                  value={formValues.password2}
                  onChange={handleChange}
                  placeholder="your password again"
                  className="border rounded p-2 w-full focus:outline-none "
                  />
                <div
                  className="text-sm text-red-500 h-8">
                    {formErrors.password2}
                  </div>
              </div>
              <button type="submit"
                className="rounded w-full py-2 mt-2 bg-black text-white">Sign Up</button>
            </form>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
