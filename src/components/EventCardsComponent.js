import React from 'react'
import { Button, Card } from 'react-bootstrap'

// const EventCardsComponent = (props) => {
//     console.log(props)
//     return (
//         <>
//             <Card style={{ width: '18rem', marginTop: '30px', marginLeft: '20px' }}>
//                 <Card.Img variant="top" src={props.background} />
//                 <Card.Body>
//                     <Card.Title>{props.namaKegiatan}</Card.Title>
//                     <Card.Text>
//                         {props.deskripsi}
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//         </>
//     )
// }
const EventCardsComponent = ({ background, namaKegiatan, deskripsi }) => {

    return (
        <>
            <Card style={{ width: '18rem', marginTop: '30px', marginLeft: '20px' }}>
                <Card.Img variant="top" src={background} />
                <Card.Body>
                    <Card.Title>{namaKegiatan}</Card.Title>
                    <Card.Text>
                        {deskripsi}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default EventCardsComponent
