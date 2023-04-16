import journey from '../assets/images/hero/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import ideas from '../assets/images/hero/airfocus-f2C59x5uvn8-unsplash.jpg';
import business from '../assets/images/hero/nasa-Q1p7bh3SHj8-unsplash.jpg';
import technology from '../assets/images/hero/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import student from '../assets/images/hero/annie-spratt-QckxruozjRg-unsplash.jpg';
import { mdiFormTextboxPassword, mdiWifi, mdiLaptop, mdiListBoxOutline, mdiFaceAgent, mdiDownload, mdiBulletinBoard, mdiMicrosoftOnedrive } from '@mdi/js';
import { mdiPrinter, mdiLibrary, mdiCloudCircle, mdiCalendar, mdiLaptopAccount, mdiAccountWrench } from '@mdi/js';
import windows from '../assets/images/bits/windows7end.jpg';
import phishing from '../assets/images/bits/phishingthumb.jpg';
import pirates from '../assets/images/bits/pirates_have_no_shame_thumb2018-03-05.jpg';
import charger from '../assets/images/bits/charger_thumb_0.jpg';
import ships from '../assets/images/bits/loose_lips_sink_ships_thumb_2018-04-03.jpg';
import pirates2 from '../assets/images/bits/pirates_bury_their_treasure_for_a_reason_thumb_2018-02-15.jpg';
import honeytrap from '../assets/images/bits/honeytrap_thumb.jpg';
import cursed from '../assets/images/bits/beware_of_cursed_software_thumb_2018-01-13.jpg';


export const navLinks = [
    {
        id: "services",
        title: "Services",
    },
    {
        id: "faq",
        title: "FAQ",
    },
    {
        id: "events",
        title: "Events",
    },
    {
        id: "bits",
        title: "Bits & Bytes",
    },
    {
        id: "about",
        title: "About",
    }
];

export const heroSlides = [
    {
        id: "journey",
        title: "We support students and staff in the journey of discovery",
        image: journey,
    },
    {
        id: "ideas",
        title: "We transform client ideas into results",
        image: ideas,
    },
    {
        id: "business",
        title: "We enhance business processes and enable better decision making through improved outcome measurement",
        image: business,
    },
    {
        id: "technology",
        title: "We deliver integrated technology solutions to improve collaboration and communication across the college community",
        image: technology,
    },
    {
        id: "student",
        title: "We leverage technology to enable student engagement and success",
        image: student,
    },
]

export const quickActions = [
    {
        id: "reset",
        title: "Reset Password",
        icon: mdiFormTextboxPassword
    },
    {
        id: "network",
        title: "Network Access",
        icon: mdiWifi
    },
    {
        id: "rental",
        title: "Equipment Rental",
        icon: mdiLaptop
    },
    {
        id: "eform",
        title: "Submit an eForm",
        icon: mdiListBoxOutline
    },
    {
        id: "analyst",
        title: "Speak with an Agent",
        icon: mdiFaceAgent
    },
    {
        id: "file-storage",
        title: "File Storage OneDrive",
        icon: mdiMicrosoftOnedrive
    },
    {
        id: "software",
        title: "Download Software",
        icon: mdiDownload
    },
    {
        id: "whats-new",
        title: "Whats New in ITS?",
        icon: mdiBulletinBoard
    },
]

export const servicesOptions = [
    {
        id: "student",
        title: "Student",
        services: [
            {
                id: "print",
                title: "Copy / Print / Scan / Fax",
                icon: mdiPrinter
            },
            {
                id: "open-access",
                title: "Open Access Learning Spaces",
                icon: mdiLibrary
            },
            {
                id: "remote-student",
                title: "Working remotely for Students",
                icon: mdiCloudCircle
            },
            {
                id: "services-staff",
                title: "Services for Employees",
                icon: mdiAccountWrench
            }
        ]
    },
    {
        id: "employees",
        title: "Employees",
        services: [
            {
                id: "email",
                title: "Email & Calendaring",
                icon: mdiCalendar
            },
            {
                id: "conferencing",
                title: "Audio, Video, Conferencing",
                icon: mdiLaptopAccount
            },
            {
                id: "remote-staff",
                title: "Working remotely for Staff",
                icon: mdiCloudCircle
            },
            {
                id: "services-staff",
                title: "Services for Employees",
                icon: mdiAccountWrench
            }
        ]
    }
]

export const faqQuestions = [
    {
        id: "question-1",
        title: "How Do I Access Technical Services?",
        answer: `A friendly Client Support Analyst is waiting to help you with almost any technical assistance you need. You can get connected with the I.T. Support Desk at 123.456.7890 X8888 or via a web chat by visiting college.ca/techhelp.  

        Our drop-in support locations are:
        
        Tech Space (North)
        Monday to Friday: 7:30 a.m. - 7:30 p.m.
        
        Help Desk (Lakeshore)
        Monday to Friday: 7:30 a.m. - 7:30 p.m.
        
        International Student School
        Monday to Friday: 7:30 a.m. - 4:30 p.m.`
    },
    {
        id: "question-2",
        title: "What is My Username and Password?",
        answer: `Your username was created as soon as you accepted your admission or employment at College .  Generally speaking, it is in the format '#' followed by 8 digits (#12345678), but could be 4 letters/4 numbers (abcd1234), or simply your last name and part of your first name (smithj).  If you have forgotten your username, please contact the I.T. Support Desk, supportdesk@college.ca, or college.ca/techhelp.

        Your password was generated at the same time, and is made up of uppercase, lowercase, numbers, and special characters.  It was emailed to you at the email address College has on record.  If you have forgotten your password, navigate to myAccount.college.ca, simply visit the website and click on 'Forgot Password'.  If you have not subscribed, please contact the I.T. Support Desk at 123.456.7890 X8888, supportcentre@college.ca, or college.ca/techhelp.`
    },
    {
        id: "question-3",
        title: "How Can I Get My Password Reset?",
        answer: `Your password was generated as soon as you accepted your admission or employment, has uppercase, lowercase, numbers, and special characters, and was emailed to you at the email address College has on record.   If you have forgotten your password, and have subscribed at myAccount.college.ca, simply visit the website and click on 'Forgot Password'.  If you have not subscribed, please contact the I.T. Support Desk at 123.456.7890 X8888, supportdesk@college.ca, or college.ca/techhelp.`
    },
    {
        id: "question-4",
        title: "Where Should I Store My Data Files?",
        answer: `Students and Staff both have access to 1 TB of OneDrive space on which to store their data files.  Files are secure and can be accessed anywhere, anytime, anyhow by visiting college.ca/microsoft365 and logging in with your College credentials (the same username and password students use for access to myCollege, Blackboard, or for staff, your College email account).  Click on the OneDrive icon to access your storage.`
    },
    {
        id: "question-5",
        title: "How Do I Connect to the Wireless Network?",
        answer: `myWi-Fi@College is a secure, high-speed, wireless Internet solution available across all College campuses for use by College students, employees, suppliers, and guests.

        If you know your username and password, choose myWifi@College as your network connection, enter your credentials, and connect.
        
        For step-by-step instructions for various devices, please download the myWi-Fi@College Quick Reference Guide.`
    },
    {
        id: "question-6",
        title: "Where Do I Download Work-At-Home Software?",
        answer: `Students:

        Select software from Microsoft is available for students to download for use on a personal computing device at no cost. An active HMail account is required. Titles include Windows (Upgrade), Office Professional, and Office for Mac. Look for the “Work-at-home” link on our Web site. Limit of one copy of each title per student.
        
        Employees:
        
        Select software from Microsoft is available for employees to download for use on a personal computing device at a small cost. An active College email account is required. Titles include Windows (Upgrade), Office Professional, and Office for Mac. Look for the “Work-at-home” link on our Web site. Limit of one copy of each title per employee.`
    },
]

export const visitInfo = {
    hours: "Monday to Friday: 7:30 a.m. - 7:30 p.m.",
    location: `Tech Space
    Monday to Friday: 7:30 a.m. - 7:30 p.m.
    
    Help Desk
    Monday to Friday: 7:30 a.m. - 7:30 p.m.
    
    International Student School (ISS)
    Monday to Friday: 7:30 a.m. - 4:30 p.m.`,
    north: `1234 North College Blvd, 
    Etobicoke, ON 
    A1B 2C3`,
    south: `1234 South College Blvd W, 
    Etobicoke, ON 
    A1B 2C3`
}

export const bytesImages = [
    {
        id: "image-1",
        title: "We support students and staff in the journey of discovery",
        description: "Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur. Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur.",
        image: windows,
    },
    {
        id: "image-2",
        title: "How to spot a phishing scam",
        description: "Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur. Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur.",
        image: phishing,
    },
    {
        id: "image-3",
        title: "Important Notice: Health Canada Warning",
        description: "Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur. Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur.",
        image: charger,
    },
    {
        id: "image-4",
        title: "Loose Lips Sink Ships",
        description: "Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur. Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur.",
        image: ships,
    },
    {
        id: "image-5",
        title: "Pirates Have No Shame",
        description: "Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur. Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur.",
        image: pirates,
    },
    {
        id: "image-6",
        title: "Pirates Bury their Treasure for a Reason",
        description: "Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur. Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur.",
        image: pirates2,
    },
    {
        id: "7",
        title: "Do Not Fall for the Honeytrap",
        description: "Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur. Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur.",
        image: honeytrap,
    },
    {
        id: "8",
        title: "Beware of Cursed Software",
        description: "Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur. Do incididunt pariatur irure deserunt aliqua velit amet tempor consectetur.",
        image: cursed,
    },
]

export const footerLinks = [
    {
        id: "students",
        title: "Students",
        links: [
            {
                id: "international-students",
                title: "International Students"
            },
            {
                id: "programs",
                title: "Programs"
            },
            {
                id: "admissions",
                title: "Admissions"
            },
            {
                id: "global",
                title: "Global"
            },
            {
                id: "student-life",
                title: "Student Life"
            }
        ]
    },
    {
        id: "resources",
        title: "Resources",
        links: [
            {
                id: "community",
                title: "Community Resources"
            },
            {
                id: "alumni",
                title: "Alumni and Donors"
            },
            {
                id: "counsellors",
                title: "Guidance Counsellors"
            },
            {
                id: "tour",
                title: "Book a Tour"
            }
        ]
    },
    {
        id: "employees",
        title: "Employees",
        links: [
            {
                id: "employees-partners",
                title: "Employees and Partners"
            },
            {
                id: "faculty-staff",
                title: "Faculty and Staff"
            },
            {
                id: "directory",
                title: "Directory"
            }
        ]
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                id: "phone",
                title: "+1 (123) 456-7890"
            },
            {
                id: "email-address",
                title: "enquiry@college.ca"
            },
            {
                id: "careers",
                title: "Careers at College"
            }
        ]
    },
]
