
import './App.css'
import ReuseAbleForm from './Components/ReuseAbleForm/ReuseAbleForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data)
  }

  const handleUpdateProfile = data => {
    console.log('sign update data', data)
  }

  return (
    <>
      <ReuseAbleForm
      formTitle={'Sign Up'} // pass as props
      handleSubmit={handleSignUpSubmit}
      />

      <ReuseAbleForm 
      formTitle={'Profile Update'} // pass as props
      submitBtnText='Update' // pass as fixed props
      handleSubmit={handleUpdateProfile}     
      />

    </>
  )
}

export default App
