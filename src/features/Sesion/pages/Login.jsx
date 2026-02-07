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
                <p> Continuar con Facebook</p>
              </div>
              <div className="login_google">
                <img src="/public/icons/google.png" alt="" />
                <p> Continuar con Google</p>                
                </div>

              <div className="ordivisor">
                <span class="mini-span"></span>
                <p>or</p>
                <span class="mini-span"></span>
              </div>
              </div>


              <form className="login_div_three">
                <div className="login_email">
                  <input
                    type="email"
                    placeholder="Enter work email"
                    required
                  />
                </div>

                <div className="login_pass">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <button id="login" type="submit">
                  Iniciar Sesión
                </button>
              </form>

            <div className="login_div_four">
                <p>By continuing, you agree to the Terms of Service and Privacy Policy</p>
                <p>Registrate en ToolsCat. Registrarse</p>
            </div>                       
        </div>
        <div className="login_derecho">
                <img src="/public/Logo/Gato3.png" alt="" />
                <h1>ToolsCat</h1>
        </div>
    </main>
  )
}

export default Login
