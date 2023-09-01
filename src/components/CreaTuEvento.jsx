import { useState } from "react";
import { useForm } from "react-hook-form"

const CreaTuEvento = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data)
    }


    /* agregar foto */
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  /* agregar video */
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  return (
    <div className="container">
        <h1 className='crea-tu-evento-tittle'>Crea tu evento!</h1>
        <form className='crea-tu-evento-formulario' onSubmit={handleSubmit(enviar) }>
            
            <h6>Nombre del evento:</h6>
            <input type="text" placeholder='Nombre del evento' {...register("nombre")} />

            <h6 className="crea-tu-evento-desripcion">Descripción del evento:</h6>
            <textarea name="" cols="60" rows="5" placeholder='Describe tu evento' {...register("descripcion")}  ></textarea>

            <h6 className="crea-tu-evento-categoria">Categoría del evento</h6>
            <input type="text" placeholder='Escriba la categoria del evento' {...register("categoria")} />

            <h6 className="crea-tu-evento-edad">Evento para mayores</h6>
            <select {...register("edad")} >
                <option>SI</option>
                <option>NO</option>
            </select> 

            <h6 className="crea-tu-evento-fechaInicio">Fecha y hora del inicio del evento</h6>
            <select {...register("diaInicio")} >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
            </select> 
            <select {...register("mesInicio")} >
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Mayo</option>
                <option>Junio</option>
                <option>Julio</option>
                <option>Agosto</option>
                <option>Septiembre</option>
                <option>Octubre</option>
                <option>Noviembre</option>
                <option>Diciembre</option>
            </select> 
            <select {...register("añoInicio")} >
                <option>2023</option>
                <option>2024</option>
            </select> 
            <select {...register("horarioInicio")} >
                <option>01:00</option>
                <option>01:15</option>
                <option>01:30</option>
                <option>01:45</option>
                <option>02:00</option>
                <option>02:15</option>
                <option>02:30</option>
                <option>02:45</option>
                <option>03:00</option>
                <option>03:15</option>
                <option>03:30</option>
                <option>03:45</option>
                <option>04:00</option>
                <option>04:15</option>
                <option>04:30</option>
                <option>04:45</option>
                <option>05:00</option>
                <option>05:15</option>
                <option>05:30</option>
                <option>05:45</option>
                <option>06:00</option>
                <option>06:15</option>
                <option>06:30</option>
                <option>06:45</option>
                <option>07:00</option>
                <option>07:15</option>
                <option>07:30</option>
                <option>07:45</option>
                <option>08:00</option>
                <option>08:15</option>
                <option>08:30</option>
                <option>09:45</option>
                <option>10:00</option>
                <option>10:15</option>
                <option>10:30</option>
                <option>10:45</option>
                <option>11:00</option>
                <option>11:15</option>
                <option>11:30</option>
                <option>11:45</option>
                <option>12:00</option>
                <option>12:15</option>
                <option>12:30</option>
                <option>12:45</option>
                <option>13:00</option>
                <option>13:15</option>
                <option>13:30</option>
                <option>13:45</option>
                <option>14:00</option>
                <option>14:15</option>
                <option>14:30</option>
                <option>14:45</option>
                <option>15:00</option>
                <option>15:15</option>
                <option>15:30</option>
                <option>15:45</option>
                <option>16:00</option>
                <option>16:15</option>
                <option>16:30</option>
                <option>16:45</option>
                <option>17:00</option>
                <option>17:15</option>
                <option>17:30</option>
                <option>17:45</option>
                <option>18:00</option>
                <option>18:15</option>
                <option>18:30</option>
                <option>18:45</option>
                <option>19:00</option>
                <option>19:15</option>
                <option>19:30</option>
                <option>19:45</option>
                <option>20:00</option>
                <option>20:15</option>
                <option>20:30</option>
                <option>20:45</option>
                <option>21:00</option>
                <option>21:15</option>
                <option>21:30</option>
                <option>21:45</option>
                <option>22:00</option>
                <option>22:15</option>
                <option>22:30</option>
                <option>22:45</option>
                <option>23:00</option>
                <option>23:15</option>
                <option>23:30</option>
                <option>23:45</option>
            </select> 



            <h6 className="crea-tu-evento-fechaFinalizacion">Fecha y hora de finalización del evento</h6>
            <select {...register("diaFinalizacion")} >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
            </select> 
            <select {...register("mesFinalizacion")} >
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Mayo</option>
                <option>Junio</option>
                <option>Julio</option>
                <option>Agosto</option>
                <option>Septiembre</option>
                <option>Octubre</option>
                <option>Noviembre</option>
                <option>Diciembre</option>
            </select> 
            <select {...register("añoFinalizacion")} >
                <option>2023</option>
                <option>2024</option>
            </select> 
            <select {...register("horarioFinalizacion")} >
                <option>01:00</option>
                <option>01:15</option>
                <option>01:30</option>
                <option>01:45</option>
                <option>02:00</option>
                <option>02:15</option>
                <option>02:30</option>
                <option>02:45</option>
                <option>03:00</option>
                <option>03:15</option>
                <option>03:30</option>
                <option>03:45</option>
                <option>04:00</option>
                <option>04:15</option>
                <option>04:30</option>
                <option>04:45</option>
                <option>05:00</option>
                <option>05:15</option>
                <option>05:30</option>
                <option>05:45</option>
                <option>06:00</option>
                <option>06:15</option>
                <option>06:30</option>
                <option>06:45</option>
                <option>07:00</option>
                <option>07:15</option>
                <option>07:30</option>
                <option>07:45</option>
                <option>08:00</option>
                <option>08:15</option>
                <option>08:30</option>
                <option>09:45</option>
                <option>10:00</option>
                <option>10:15</option>
                <option>10:30</option>
                <option>10:45</option>
                <option>11:00</option>
                <option>11:15</option>
                <option>11:30</option>
                <option>11:45</option>
                <option>12:00</option>
                <option>12:15</option>
                <option>12:30</option>
                <option>12:45</option>
                <option>13:00</option>
                <option>13:15</option>
                <option>13:30</option>
                <option>13:45</option>
                <option>14:00</option>
                <option>14:15</option>
                <option>14:30</option>
                <option>14:45</option>
                <option>15:00</option>
                <option>15:15</option>
                <option>15:30</option>
                <option>15:45</option>
                <option>16:00</option>
                <option>16:15</option>
                <option>16:30</option>
                <option>16:45</option>
                <option>17:00</option>
                <option>17:15</option>
                <option>17:30</option>
                <option>17:45</option>
                <option>18:00</option>
                <option>18:15</option>
                <option>18:30</option>
                <option>18:45</option>
                <option>19:00</option>
                <option>19:15</option>
                <option>19:30</option>
                <option>19:45</option>
                <option>20:00</option>
                <option>20:15</option>
                <option>20:30</option>
                <option>20:45</option>
                <option>21:00</option>
                <option>21:15</option>
                <option>21:30</option>
                <option>21:45</option>
                <option>22:00</option>
                <option>22:15</option>
                <option>22:30</option>
                <option>22:45</option>
                <option>23:00</option>
                <option>23:15</option>
                <option>23:30</option>
                <option>23:45</option>
            </select> 

            <h6 className="crea-tu-evento-provincia">Provincia:</h6>
            <select {...register("provincia")} >
                <option>Buenos Aires</option>
                <option>Catamarca</option>
                <option>Chaco</option>
                <option>Chubut</option>
                <option>Córdoba</option>
                <option>Corrientes</option>
                <option>Entre Ríos</option>
                <option>Formosa</option>
                <option>Jujuy</option>
                <option>La Pampa</option>
                <option>La Rioja </option>
                <option>Mendoza</option>
                <option>Misiones</option>
                <option>Neuquén</option>
                <option>Río Negro</option>
                <option>Salta</option>
                <option>San Juan</option>
                <option>San Luis</option>
                <option>Santa Cruz</option>
                <option>Santa Fe</option>
                <option>Santiago del Estero</option>
                <option>Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                <option>Tucumán</option>
            </select>

            <h6 className="crea-tu-evento-localidad">Localidad:</h6>
            <input type="text" placeholder="Ingrese la localidad" {...register("localidad")} />

            <h6 className="crea-tu-evento-direccion">Dirección:</h6>
            <input type="text" placeholder="Ingrese la dirección" {...register("direccion")} />

            <h6 className="crea-tu-evento-lugar">Lugar del evento:</h6>
            <input type="text" placeholder="Ingrese lugar del evento" {...register("lugar")} />

            <h6 className="crea-tu-evento-foto">Agregar foto:</h6>
            <input type="file" onChange={handleFileChange} accept="image/*" {...register("foto")} />
                {selectedFile && (
                  <div>
                    <h2>Vista previa:</h2>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Imagen seleccionada"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                )}    

            
            <h6 className="crea-tu-evento-video">Agregar video:</h6>
            <input type="file" onChange={handleVideoChange} accept="video/*" />
                {selectedVideo && (
                <div>
                    <h2>Vista previa:</h2>
                    <video controls width="100%">
                    <source src={URL.createObjectURL(selectedVideo)} type={selectedVideo.type} />
                    Tu navegador no admite la reproducción de videos.
                    </video>
                </div>
                )}

            <h6 className="crea-tu-evento-terminos"> <input type="checkbox"/> Acepto los términos y condiciones</h6>

            <button className="crea-tu-evento-btn" type='submit'> CREAR EVENTO </button>
        </form>
        
    </div>
  )
}

export default CreaTuEvento