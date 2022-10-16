import { 
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material"
import {isMobile} from 'react-device-detect';
import { Car } from "../../types/Car";
import dayjs from 'dayjs';
import { useAtom } from "jotai";
import { isBookCarModalOpenAtom,CarOpenModalAtom } from "../../atoms";



export const CarCard = ({car } : {car : Car}) => {
    const [_showModal , setShowModal] = useAtom(isBookCarModalOpenAtom)
    const [_ , setCarOpenModal] = useAtom(CarOpenModalAtom)
    return (
        <Card 
            sx={{ minWidth: isMobile ? 325 : 345 , maxWidth: isMobile ? 325 : 345 }} 
            style={{cursor:"pointer"}}
            onClick = {() => {
                setShowModal(true)
                setCarOpenModal(car)
            }}
        >
            <div onClick={()=>({})}>
            <CardHeader
                title={car.classType}
            />
            <CardMedia
                component="img"
                height="180"
                image={car.imgUrl}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h6" color="text.primary">
                    <>
                        {`${car.price}$ / day`}
                    </>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {car.from &&  ` Booked from ${dayjs(car.from).format('DD/MM/YYYY')}`}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {car.to &&  ` Booked to ${dayjs(car.to).format('DD/MM/YYYY')}`}
                </Typography>
                        
            </CardContent>
            </div>
            
        </Card>
    )
}