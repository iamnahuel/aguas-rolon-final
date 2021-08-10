import Recat, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/registrarse.css';
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

export default function Registrarse(props) {

    const refNombre = useRef(null);
    const refApellido = useRef(null);
    const refCorreo = useRef(null);
    const refCelular = useRef(null);
    const refUsuario = useRef(null);
    const refClave = useRef(null);
    const refDireccion = useRef(null);
    const [error, setError] = useState(null);

    const registrar = async () => {
        const data = {
            "nombre": refNombre.current.value,
            "apellido": refApellido.current.value,
            "correo": refCorreo.current.value,
            "celular": refCelular.current.value,
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value,
            "direecion": refDireccion.current.value
        };
        console.log(data);
        const resp = await enviarDate(URL_LOGIN, data);
        console.log('Respuesta del evento: ', resp);

        // props.acceder(resp.conectado)
        setError(resp.error)
    }


    return (
        <div className="registrarse">
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-heder text-center"><h3>Registrarse</h3></div>

                        <div className="card-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon1">
                                        🙎🙎‍♂️
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    aria-label="nombre"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon2">
                                        🙎🙎‍♂️
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    aria-label="apellido"
                                    aria-describedby="basic-addon2"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon3">
                                        📧
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    aria-label="correo"
                                    aria-describedby="basic-addon3"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon4">
                                        📱
                                    </span>
                                </div>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Celular"
                                    aria-label="celular"
                                    aria-describedby="basic-addon4"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon5">
                                        @
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Usuario"
                                    aria-label="usuario"
                                    aria-describedby="basic-addon5"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon6">
                                        🔒
                                    </span>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Clave"
                                    aria-label="clave"
                                    aria-describedby="basic-addon6"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon7">
                                        📍
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Direccion"
                                    aria-label="direccion"
                                    aria-describedby="basic-addon7"
                                />
                            </div>

                            <button onClick={registrar} className="btn btn-info btn-lg btn-block">Registrarse</button>
                            <br />
                            <Link to="/">
                                <button className="btn btn-info btn-lg btn-block">Cancelar</button>
                            </Link>
                        </div>





                    </div>
                </div>
            </div>
        </div>
    )
}