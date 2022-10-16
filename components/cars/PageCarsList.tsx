import { 
    Grid,
} from "@mui/material"
import axios from "axios";
import { useAtom } from "jotai";
import React from "react";
import { activePageAtom, fromDateFilterAtom, pagesAtom, toDateFilterAtom, whichCarTabAtom } from "../../atoms";

import { Car } from "../../types/Car";
import { CarCard } from "./CarCard";

export const CarsList = () => {
    const [cars,setCars] = React.useState<Car[]>([])
    const [currTab,_] = useAtom(whichCarTabAtom)
    const [page, _setActivePage] = useAtom(activePageAtom);
    const [_numberOfPages,setNumberOfPages] = useAtom(pagesAtom);
    const [fromDateValue,_setFromDateValue] = useAtom(fromDateFilterAtom)
    const [toDateValue,_setToDateValue] = useAtom(toDateFilterAtom)

    
    React.useEffect(() => {        
        const getCars = async () => {
            const url = currTab == 0 ? `/api/availableBooking/${page}` : (currTab == 1 ? `/api/pastBooking/${page}?from=${fromDateValue?.format("YYYY/MM/DD")}&to=${toDateValue?.format("YYYY/MM/DD")}` : `/api/upcomingBooking/${page}?from=${fromDateValue?.format("YYYY/MM/DD")}&to=${toDateValue?.format("YYYY/MM/DD")}` )
            const { data } = await axios.get(url)
            setCars(data.cars)
        }
        getCars()
    },[page,currTab,fromDateValue,toDateValue])

    React.useEffect(() => {
        const countCars = async () => {
            const url = currTab == 0 ? `/api/availableBooking/count` : (currTab == 1 ? `/api/pastBooking/count?from=${fromDateValue?.format("YYYY/MM/DD")}&to=${toDateValue?.format("YYYY/MM/DD")}` : `/api/upcomingBooking/count?from=${fromDateValue?.format("YYYY/MM/DD")}&to=${toDateValue?.format("YYYY/MM/DD")}` )
            const { data } = await axios.get(url)
            setNumberOfPages(data.count)
        }

        countCars()
    },[currTab,fromDateValue,toDateValue,setNumberOfPages])

    return (
            <Grid container spacing={3} >
                {cars.map((car : Car) => 
                    <Grid item key={car.id} >
                        <CarCard car = {car} />
                    </Grid>
                )}
            </Grid>
    )
}