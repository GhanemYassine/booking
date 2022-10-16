import { Car } from "../../../types/Car"

export const LIMIT_PER_PAGE = 6

let instance: DataManager

var pastCarsBooking : Car[] = [
    {id:21,classType:"Clio 2003",imgUrl:"https://w7.pngwing.com/pngs/660/236/png-transparent-car-renault-clio-mercedes-renault-5-renault-clio-compact-car-car-subcompact-car.png",price:80 , from : "2022/01/01" , to : "2022/01/01"},
    {id:22,classType:"Clio 2004",imgUrl:"https://www.audioledcar.com/26724-large_default/pack-led-lampen-renault-clio-ii-phase-ii-2001-2005.jpg",price:80 , from : "2022/01/01" , to : "2022/01/01"},
    {id:23,classType:"Clio 2030",imgUrl:"https://5.imimg.com/data5/EF/MK/GLADMIN-26313515/renault-clio-car-250x250.png",price:80 , from : "2022/01/01" , to : "2022/01/01"},
    {id:24,classType:"Volkswagen",imgUrl:"https://purepng.com/public/uploads/large/purepng.com-volkswagenvolkswagenvolkswagen-carvolkswagen-automobilesvolkswagen-vehicles-1701527682039xdva4.png",price:80 , from : "2022/01/01" , to : "2022/01/01"},
    {id:25,classType:"Volkswagen 2000",imgUrl:"https://w7.pngwing.com/pngs/367/402/png-transparent-geneva-motor-show-volkswagen-cc-sports-car-volkswagen-sport-coupe-gte-yellow-car-compact-car-sedan-car.png",price:80 , from : "2022/01/01" , to : "2022/01/01"},
    {id:26,classType:"Volkswagen 2001",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/VW_Polo_BlueGT_2014_fvl.jpg/220px-VW_Polo_BlueGT_2014_fvl.jpg",price:80 , from : "2022/01/01" , to : "2022/01/01"},
]

var upcomingCarsBooking : Car[] = [
    {id:14,classType:"Lada 2000",imgUrl:"https://cdn.pixabay.com/photo/2021/03/11/11/28/car-6086831_1280.png",price:80 , from : "2022/11/01" , to : "2022/11/01"},
    {id:15,classType:"Lada 1999",imgUrl:"https://w7.pngwing.com/pngs/663/87/png-transparent-moskvitch-2140-car-drawing-lada-4x4-car-sedan-pencil-transport.png",price:80 , from : "2022/11/01" , to : "2022/11/01"},
    {id:16,classType:"Porche",imgUrl:"https://e7.pngegg.com/pngimages/533/1020/png-clipart-porsche-930-2017-porsche-911-porsche-911-carrera-4s-cabriolet-porsche-panamera-porsche-convertible-car.png",price:80,from : "2022/11/01" , to : "2022/11/01"},
    {id:17,classType:"Porche 2022",imgUrl:"https://w1.pngwing.com/pngs/962/851/png-transparent-luxury-porsche-car-2017-porsche-911-sports-car-2010-porsche-911-porsche-911-gt2-2018-porsche-911-gt3.png",price:80,from : "2022/11/01" , to : "2022/11/01"},
    {id:18,classType:"Porche 2008",imgUrl:"https://w7.pngwing.com/pngs/115/492/png-transparent-porsche-911-gt2-sports-car-porsche-cayman-porsche-photography-car-vehicle.png",price:80,from : "2022/11/01" , to : "2022/11/01"},
    {id:19,classType:"Porche 2001",imgUrl:"https://p.kindpng.com/picc/s/162-1627361_iris-porsche-gt3-price-in-india-hd-png.png",price:80 , from : "2022/11/01" , to : "2022/11/01"},
    {id:20,classType:"Clio",imgUrl:"https://w7.pngwing.com/pngs/314/479/png-transparent-renault-megane-car-renault-espace-renault-clio-iv-renault-compact-car-car-subcompact-car.png",price:80,from : "2022/11/01" , to : "2022/11/01"},
]

var availableCars : Car[] = [
    {id:1,classType:"AUDI",imgUrl:"https://www.freepnglogos.com/uploads/car-png/car-png-transparent-car-images-pluspng-0.png",price:80},
    {id:2,classType:"Mercedes Benz E class",imgUrl:"https://i.pinimg.com/originals/49/17/c0/4917c017c89fcd6cb5fd6d7161daa5a8.png",price:80},
    {id:3,classType:"BMW M5 203",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS535pHDqBKy_JHkNykTkLLgUQvxR77LnboeBLIS5qPSzWLdR7DjRKcZV16LdzOAfkjOSM&usqp=CAU",price:80},
    {id:4,classType:"Blue BMW M2",imgUrl:"https://i.pinimg.com/originals/e7/85/86/e785862c4ed9f1cc8d5fa58350d03266.png",price:80},
    {id:5,classType:"BMW X5",imgUrl:"https://w7.pngwing.com/pngs/660/760/png-transparent-bmw-x5-car-bmw-m5-bmw-5-series-white-bmw-compact-car-sedan-black-white.png",price:80},
    {id:6,classType:"Mercedes Benz S",imgUrl:"https://purepng.com/public/uploads/large/51506279779c6rntanvyoznezpyppnhohayyxtzb1fw4pyobj8vrqyxl5jgyo0x8wqtg9rcqmi0ddeo5f0xplr20eua2fmf3maooz8epuincm94.png",price:80},
    {id:7,classType:"Mercedes Benz C",imgUrl:"https://e7.pngegg.com/pngimages/5/923/png-clipart-2013-mercedes-benz-c-class-2014-mercedes-benz-c-class-2012-mercedes-benz-c-class-car-mercedes-compact-car-sedan.png",price:80},
    {id:8,classType:"Mercedes Benz C 3000",imgUrl:"https://www.kindpng.com/picc/m/544-5441066_2020-mercedes-benz-c-300-sedan-hd-png.png",price:80},
    {id:9,classType:"Mercedes C3000 4Matic",imgUrl:"https://i.pinimg.com/originals/32/64/58/3264580a5576a5638ebd9933aef5f0cb.jpg",price:80},
    {id:10,classType:"Toyota Etios",imgUrl:"https://brightcabs.com/wp-content/uploads/2015/08/jaipurajmertoyotataxi.png",price:80},
    {id:11,classType:"Honda Civic",imgUrl:"https://w7.pngwing.com/pngs/94/822/png-transparent-10th-generation-white-honda-civic-sedan-2018-honda-civic-honda-civic-type-r-2017-honda-civic-2016-honda-civic-honda-white-car-compact-car-sedan-car-accident-thumbnail.png",price:80},
    {id:12,classType:"Lada russian",imgUrl:"https://w1.pngwing.com/pngs/66/599/png-transparent-car-lada-avtovaz-lada-riva-vaz2101-vaz2103-lada-kalina-lada-priora.png",price:80},
    {id:13,classType:"Lada 2002",imgUrl:"https://w7.pngwing.com/pngs/365/631/png-transparent-lada-limousine-free-and-edited-russia-lada-riva-classic-eastern-europe-bulgaria-avtovaz-soviet-union.png",price:80},
]
class DataManager {
    
    getUpcomingCars(){
        return upcomingCarsBooking
    }

    getPastCarsBooking(){
        return pastCarsBooking
    }

    getAvailableCars(){
        return availableCars
    }

    bookCar(idCar : number,from : string , to : string){
        const car = availableCars.find(e=>e.id === idCar)
        if(!car){
            return
        }
        const indx = availableCars.indexOf(car)
        availableCars.splice(indx,1)        
        upcomingCarsBooking = [...upcomingCarsBooking,{...car,from : from, to : to} as Car]
    }
}

export const dataManagerInstance  = (() => {

    const creatInstance = () => {
        instance = Object.freeze(new DataManager())
        console.log("Created new instance");
        return instance
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = creatInstance();
            }
            return instance;
        }
    };
})()