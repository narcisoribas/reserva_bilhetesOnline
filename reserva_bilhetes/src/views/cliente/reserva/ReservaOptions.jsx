import { AuthContext } from 'functions/context';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, CardBody } from 'reactstrap'
import { api } from 'services/server';


/**
 * 
 * @returns 
 * {
    "id": 1,
    "origem": "Luanda",
    "destino": "Malange",
    "horario_id": 1,
    "preco": 2345,
    "extensao": "14km",
    "duracao": "5h",
    "n_paragem": 22,
    "total_ocupantes": 333,
    "desconto": 10,
    "user_id": 2,
    "estado": "activo",
    "created_at": "2023-11-09 13:36:37",
    "updated_at": "2023-11-09 13:36:37",
    "local_embarque_id": 1,
    "hora": "14:30"
}
 */





function ReservaOptions() {
    const {reservarViagem}=useContext(AuthContext)
    const navigate = useNavigate();
    const { origem, destino } = useParams()

    const [disabledButton,setDisabledButton]=useState(false)

    const [rotas, setRotas] = useState()

    function handleReservarViagem(){
        reservarViagem(rotas)
        setDisabledButton(true)
    }
    useEffect(() => {
        async function routes() {
            api.get(`rotas/show/${origem}/${destino}`)
                .then((response) => {
                    setRotas(response.data)
                }).catch((err) => {
                    console.log(err)
                })
        }

        routes();

    }, [])

    return (
        <div className='container pb-5'>





<Card>
    <CardBody className='d-flex row'>
        <div className='d-flex flex-xl-column py-3 px-3' style={{ gap: '2rem' }}>
            <span>🌑</span>
            <span>🕚</span>
            <span>🌑</span>
        </div>

        <div className='d-flex flex-xl-column py-3 px-3  ' style={{ gap: '2rem' }}>
            <span>{rotas?.horario_id}</span>
            <span>{ rotas?.duracao}</span>
            <span>12:00</span>
        </div>

        <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold col-md-4 ' style={{ gap: '2rem' }}>
            <span >{rotas?.local_embarque_id}</span>
            <span>{rotas?.n_paragem} escalas</span>

        </div>

        <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{ gap: '2rem', fontSize: '1.5rem' }}>

            <span className='mt-5'>  {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "kzs",
      }).format(Number(rotas?.preco))}</span>

        </div>

        <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{ gap: '2rem' }}>
            <button className="btn buttonColorBackground  mt-5" type="button" role='button' disabled={disabledButton} onClick={handleReservarViagem} >Reservar</button>

        </div>
    </CardBody>
</Card>











            <Card>
                <div className='d-flex py-3 px-3 font-weight-bold ml-5'>
                    <button onClick={() => navigate("/resumoViagem")} className="btn buttonColorBackground col-md-5 py-3" type="button" role='button' >Finalizar</button>
                </div>
            </Card>
        </div>
    )
}

export default ReservaOptions
