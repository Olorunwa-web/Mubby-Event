import image1 from './assets/image.png';
import image2 from './assets/image (1).png';
import image3 from './assets/image (2).png';
import loactionicon from './assets/location.svg';
import dateicon from './assets/Page-1.svg';
import ticketicon from './assets/ticket-svgrepo-com.svg';
// =================================================================
import event1 from './assets/image (3).png';
import event2 from './assets/image (4).png';
import event3 from './assets/image (5).png';
import event4 from './assets/image (6).png';
import event5 from './assets/image (7).png';
import event6 from './assets/image (8).png';
import event7 from './assets/image (9).png';
import event8 from './assets/image (10).png';
import event9 from './assets/image (11).png';
import event10 from './assets/image (12).png';
import event11 from './assets/image (13).png';
import event12 from './assets/image (14).png';


// ===============================================
import eventall1 from './assets/Frame 1171276721.png'
import eventall2 from './assets/Frame 1171276722.png'
import eventall3 from './assets/Frame 1171276723.png'

// =================================================
import image4 from './assets/image (18).png';
import image5 from './assets/image (16).png';
import image6 from './assets/image (17).png';

export const navbarlink = [
    {
        id: 1,
        name: "Home",
        path: "",
    },
    {
        id: 1,
        name: "Events",
        path: "/dashboard/event",
    },
    {
        id: 1,
        name: "Create Event",
        path: "/dashboard/createevent",
    }
   
]


export const UpcomingEvent = [
    {
        id:1,
        title:'Iron Maiden World Tour 2024',
        host: 'Iron Maiden',
        Category:'Concert',
        Images: image1,
        icon: loactionicon,
        calender: dateicon,
        ticket: ticketicon,
        venue:'Teslim Balogun Stadium, Surlere',
        date:'Aug 30, 2024',
        tick:'Regular, VIP'

    },
    {
        id:2,
        title:'Digital Marketing Course Part',
        host: 'Mubarak Johnson',
        Category:'Education',
        Images: image2,
        icon: loactionicon,
        calender: dateicon,
        ticket: ticketicon,
        venue:'Online',
        date:'Oct 30, 2024',
        tick:'Regular, VIP, VVIP'

    },
    {
        id:3,
        title:'Detty December House Party',
        host: 'Party Freaks',
        Category:'Party',
        Images: image3,
        icon: loactionicon,
        calender: dateicon,
        ticket: ticketicon,
        venue:'Euphoria house 9',
        date:'Oct 30, 2024',
        tick:'VIP, Regular'

    }
]


export const Event = [
    {
        id:1,
        eventpic: eventall1,
    },
    {
        id:2,
        eventpic: eventall2,
    },
    {
        id:3,
        eventpic: eventall3,
    },
]


export const EventNear = [
    {
        id:1,
        title:'Anthony Joshua VS Dubois',
        host: 'World Boxing Federation',
        Category:'Sport',
        Images: image6,
        icon: loactionicon,
        calender: dateicon,
        ticket: ticketicon,
        venue:'Teslim Balogun Stadium, Surlere',
        date:'Aug 30, 2024',
        tick:'Regular, VIP, Ringside'

    },
    {
        id:2,
        title:'Mainland Block Party',
        host: 'Dj Chicken',
        Category:'Party',
        Images: image5,
        icon: loactionicon,
        calender: dateicon,
        ticket: ticketicon,
        venue:'Teslim Balogun Stadium, Surlere',
        date:'Oct 30, 2024',
        tick:'Free'

    },
    {
        id:3,
        title:'The Experience 2024',
        host: 'Mubby Money',
        Category:'Education',
        Images: image4,
        icon: loactionicon,
        calender: dateicon,
        ticket: ticketicon,
        venue:'Tafawa Balewa Square, Obalande',
        date:'Oct 30, 2024',
        tick:'Free'

    }
]
