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
        tick:'Regular, VIP',
        word: `Legendary British heavy metal brand Iron Maiden rocked the stage at Teslim Balogun Stadium in Surulere, Lagos, delivering an electrifying performance that left fans in awe. With thier iconic stage presence, powerful vocals, and epic guitar solos, iron Maiden treated the crowd to a night of timeless and fan favorites. The stadium buzzed with energy as thousands of metalheads sang along to hits like "The Tropper" and "Run to the Hills," making a historic moments in Nigeria's scene. it was an unforgettable concert, cemeneting Iron Maiden's legacy as global heavy metal icons.`

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
        tick:'Regular, VIP, VVIP',
        word: 'Digital Marketing Course teaches individuals how to promote products, services, or brands online using various digital channels. These courses are ideal for beginners, entrepreneurs, and professionals looking to enhance their digital marketing skills. They are available online or offline and may offer certifications upon completion.'

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
        tick:'VIP, Regular',
        word: 'Euphoria by House 9 is a premier social venue in Lagos, Nigeria, offering short-term rentals, event spaces, gaming, and food take-out services. In December 2024, they hosted the "Yellowlyfe" end-of-year party on October 30th at 6 PM, with an entry fee of ₦2,000. While specific details about a "Detty December" house party at Euphoria by House 9 are not available, the term "Detty December" refers to the festive and lively events that take place in Nigeria during December. For a glimpse into such celebrations,'

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
        Category:'Music',
        Images: image4,
        icon: loactionicon,
        calender: dateicon,
        ticket: ticketicon,
        venue:'Tafawa Balewa Square, Obalande',
        date:'Oct 30, 2024',
        tick:'Free'

    }
]
