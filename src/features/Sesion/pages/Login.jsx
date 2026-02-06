import '../styles/Login.css'


function Login() {

  return (
    <main className='login_main'>
        <div className="login_izquierdo">

            <div className="login_cat_logo">
                <img src="/public/Logo/Gato.png" alt="" />
            </div>
            <div className="login_div_one">
                <h1>Ingresar a ToolsCat</h1>
            </div>
            <div className="login_div_two">
              <div className="login_facebook">
              <img id='img_face' src="/public/icons/facebook.png" alt="" />              
                <p> Continuar con Github</p>
              </div>
              <div className="login_google">
                <img src="" alt="" />
                <p> <img src="/public/icons/google.png" alt="" />Continuar con Google</p>                
                </div>

              <div className="ordivisor">
                <span></span>
                <p>or</p>
                <span></span>
              </div>
              </div>


            <div className="login_div_three">
              <div className="login_email">
                  <p>Enter work email</p>
              </div>
              <div className="login_pass">
              <p>Password</p>                
                </div>
                <button id='login'>Iniciar Sesión</button>
            </div> 
            <div className="login_div_four">
                <p>By continuing, you agree to the Terms of Service and Privacy Policy</p>
                <p>Registrate en ToolsCat. Registrarse</p>
            </div>                       
        </div>
        <div className="login_derecho">

        </div>
    </main>
  )
}

export default Login
