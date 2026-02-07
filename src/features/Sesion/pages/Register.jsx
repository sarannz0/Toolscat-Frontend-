import '../styles/Register.css'


function Register() {

  return (
    <main className='register_main'>
        <div className="register_izquierdo">

            <div className="register_cat_logo">
                <img src="/public/Logo/Gato.png" alt="" />
            </div>
            <div className="register_div_one">
                <h1>Ingresar a ToolsCat</h1>
            </div>
            <div className="register_div_two">
              <div className="register_facebook">
              <img id='img_face' src="/public/icons/facebook.png" alt="" />              
                <p> Continuar con Facebook</p>
              </div>
              <div className="register_google">
                <img src="/public/icons/google.png" alt="" />
                <p> Continuar con Google</p>                
                </div>

              <div className="ordivisor">
                <span class="mini-span"></span>
                <p>or</p>
                <span class="mini-span"></span>
              </div>
              </div>


              <form className="register_div_three">
                <div className="register_email">
                  <input
                    type="email"
                    placeholder="Enter work email"
                    required
                  />
                </div>

                <div className="register_pass">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="register_pass2">
                  <input
                    type="password"
                    placeholder="Confirma la contraseña"
                    required
                  />
                </div>

                <button id="register" type="submit">
                  Registrarme
                </button>
              </form>

            <div className="register_div_four">
                <p>By continuing, you agree to the Terms of Service and Privacy Policy</p>
                <p>Registrate en ToolsCat. Registrarse</p>
            </div>                       
        </div>
        <div className="register_derecho">
                <img src="/public/Logo/Gato3.png" alt="" />
                <h1>ToolsCat</h1>
        </div>
    </main>
  )
}

export default Register
