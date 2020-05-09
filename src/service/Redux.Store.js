import {createStore} from "redux";
import Reducer from "./Redux.Reducer";

let Store = {
    email : '' ,
    firstName : '' ,
    lastName : '' ,
    facilities : [{
        id: 1,
        name : "Franca" ,
        type : "Hotel" ,
        address : "Pljevlja" ,
        phone : "069069069" ,
        photo : "https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg?h=1000&w=1500&fit=crop&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txt%3DFree+Stock+Photos%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10" ,
        rating : "3.5" ,
    } ,
        {
            id: 2,
            name : "Franca1" ,
            type : "Hotel" ,
            address : "Pljevlja" ,
            phone : "069069069" ,
            photo : "https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg?h=1000&w=1500&fit=crop&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txt%3DFree+Stock+Photos%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10" ,
            rating : "3.8" ,
        } ,
        {
            id: 3,
            name : "Franca2" ,
            type : "Hotel" ,
            address : "Pljevlja" ,
            phone : "069069069" ,
            photo : "https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg?h=1000&w=1500&fit=crop&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txt%3DFree+Stock+Photos%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10" ,
            rating : "4.1" ,
        } ,
    ],
    currentFacility : {}

};

Store = createStore ( Reducer , Store );

export default Store;