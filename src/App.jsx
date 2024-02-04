
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
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
      <h1>Form Guru</h1>
      <Grandpa />
      <ReuseAbleForm
      formTitle={'Sign Up'} // pass as props
      handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>sign up</h2>
        <p>testing children for sign up</p>
      </div>  
      </ReuseAbleForm>

      <ReuseAbleForm 
      formTitle={'Profile Update'} // pass as props
      submitBtnText='Update' // pass as fixed props
      handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>testing children for update profile</p>
        </div>
      </ReuseAbleForm>

    </>
  )
}

export default App
