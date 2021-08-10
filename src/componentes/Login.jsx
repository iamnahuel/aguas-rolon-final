import Recat, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/login.css';
import logo from '../img/logo.png';
const URL_LOGIN = "http://localhost/ws-login/login.php";



//funcion para enviar datos a la base de datos
const enviarDate = async (url, data) => {
    const respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //console.log(respuesta);
    const json = await respuesta.json();
    //  console.log(json);
    return json;
}



export default function Login(props) {

    const refUsuario = useRef(null);
    const refClave = useRef(null);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        const data = {
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value
        };
        console.log(data);
        const resp = await enviarDate(URL_LOGIN, data);
        console.log('Respuesta del evento: ', resp);

       // props.acceder(resp.conectado)
        setError(resp.error)
    }

    return (
        <div className="login">
             <img className="logo" src= {logo}/>
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-heder text-center"><h3>Aguas Rolon</h3></div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon1">
                                        @
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Usuario"
                                    aria-label="usuario"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario} />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon2">
                                        🔒
                                    </span>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Clave"
                                    aria-label="clave"
                                    aria-describedby="basic-addon2"
                                    ref={refClave} />
                            </div>
                           
                                {
                                    error &&
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                }
                            
                            <button onClick={handleLogin} className="btn btn-info btn-lg btn-block">Acceder</button>
                            <br />
                            <Link to="/registrarse">
                            <button className="btn btn-info btn-lg btn-block">Registrarse</button>
                            </Link>
                            <div className="card-footer">
                                <span>¿Olvido su contraseña?    </span><a href="http://">Recuperar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}