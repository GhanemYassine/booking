import {  Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Fade, Modal, Slide, TextField, Typography } from "@mui/material"
import { useAtom } from "jotai";
import { isBookCarModalOpenAtom,CarOpenModalAtom, whichCarTabAtom, activePageAtom, pagesAtom } from "../../atoms";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { isMobile } from "react-device-detect";
import axios from "axios"

const Transition = React.forwardRef(function Transition(
props: TransitionProps & {
    children: React.ReactElement<any, any>;
},
ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  
export const BookCarModal = () => {
    const [car , _s] = useAtom(CarOpenModalAtom)
    const [showModal , setShowModal] = useAtom(isBookCarModalOpenAtom)
    const [_ss,setCurrTab] = useAtom(whichCarTabAtom)
    const [_sss, setActivePage] = useAtom(activePageAtom);
    const [_ssss,setNumberOfPages] = useAtom(pagesAtom);

    const [fromDateValue, setFromDateValue] = React.useState<Dayjs | null>(
        dayjs('2022/11/02'),
      );
    const [toDateValue, setToDateValue] = React.useState<Dayjs | null>(
        dayjs('2022/12/28'),
    );

    const handleFromDateChange = (newValue: Dayjs | null) => {
        if(newValue! > toDateValue!){
            setFromDateValue(dayjs(''))
        }
        else{
            setFromDateValue(newValue);
        }
        };

        const handleToDateChange = (newValue: Dayjs | null) => {
        if(newValue! < fromDateValue!){
            setToDateValue(dayjs(''))
        }
        else{
            setToDateValue(newValue);
        }
    };    

    return (
     <Dialog
            open={showModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={()=>{setShowModal(false)}}
            aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{car?.classType}</DialogTitle>
        <DialogContent>
            <Card 
                sx={{ minWidth: isMobile ? 325 : 345 , maxWidth: isMobile ? 325 : 345 }} 
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={car?.imgUrl}
                    alt="Paella dish"
                />
                <br/>
                {  car?.from ?  
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
                </CardContent> :
                <CardActions>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="From"
                            inputFormat="MM/DD/YYYY"
                            value={fromDateValue}
                            disablePast={true}
                            onChange={handleFromDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DesktopDatePicker
                            label="To"
                            inputFormat="MM/DD/YYYY"
                            value={toDateValue}
                            disablePast={true}
                            onChange={handleToDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    
                </CardActions>
                }
            </Card>
        </DialogContent>
        {    car?.from ? null :
            <DialogActions>
                <Button onClick={async () => {
                    setShowModal(false)                    
                    await axios.get(`/api/bookCar?from=${fromDateValue?.format("YYYY/MM/DD")}&to=${toDateValue?.format("YYYY/MM/DD")}&idCar=${car?.id}`)
                    const {data} = await axios.get(`/api/upcomingBooking/count?from=${fromDateValue?.format("YYYY/MM/DD")}&to=${toDateValue?.format("YYYY/MM/DD")}`)
                    setNumberOfPages(data.count)
                    setActivePage(data.count)
                    setCurrTab(2)
                }}>
                    Book Car
                </Button>
            </DialogActions>
        }
      </Dialog>
    )
}