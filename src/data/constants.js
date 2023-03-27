import journey from '../assets/images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg';
import ideas from '../assets/images/airfocus-v89zhr0iBFY-unsplash.jpg';
import business from '../assets/images/microsoft-365-oUbzU87d1Gc-unsplash.jpg';
import technology from '../assets/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import student from '../assets/images/annie-spratt-QckxruozjRg-unsplash.jpg';
import { mdiFormTextboxPassword, mdiWifi, mdiLaptop, mdiListBoxOutline, mdiFaceAgent, mdiDownload, mdiBulletinBoard, mdiMicrosoftOnedrive } from '@mdi/js';
import { mdiPrinter, mdiLibrary, mdiCloudCircle, mdiCalendar, mdiLaptopAccount, mdiAccountWrench } from '@mdi/js';


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
        id: "international",
        title: "International",
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
        title: "We deliver integrated technology solutions to improve collaboration and communication across the Humber community",
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
        answer: `A friendly Client Support Analyst is waiting to help you with almost any technical assistance you need.   You can get connected with the I.T. Support Centre at 416.675.6622 X8888 or via a web chat by visiting humber.ca/techtalk.  

        Our drop-in support locations are:
        
        Tech Zone – H109 (North)
        Monday to Friday: 7:30 a.m. - 7:30 p.m.
        
        A212 (Lakeshore)
        Monday to Friday: 7:30 a.m. - 7:30 p.m.
        
        International Graduate School (IGS)
        59 Hayden Street, 5th floor
        Monday to Friday: 7:30 a.m. - 4:30 p.m.`
    },
    {
        id: "question-2",
        title: "What is My Username and Password?",
        answer: `Your username was created as soon as you accepted your admission or employment at Humber College .  Generally speaking, it is in the format 'n' followed by 8 digits (n12345678), but could be 4 letters/4 numbers (abcd1234), or simply your last name and part of your first name (smithj).  If you have forgotten your username, please contact the I.T. Support Centre at 416.675.6622 X8888, supportcentre@humber.ca, or humber.ca/techtalk.

        Your password was generated at the same time, and is made up of uppercase, lowercase, numbers, and special characters .  It was emailed to you at the email address Humber College has on record.  If you have forgotten your password, navigate to myAccount.humber.ca, simply visit the website and click on 'Forgot Password'.  If you have not subscribed, please contact the I.T. Support Centre at 416.675.6622 X8888, supportcentre@humber.ca, or humber.ca/techtalk.`
    },
    {
        id: "question-3",
        title: "How Can I Get My Password Reset?",
        answer: `Your password was generated as soon as you accepted your admission or employment, has uppercase, lowercase, numbers, and special characters, and was emailed to you at the email address Humber College has on record.   If you have forgotten your password, and have subscribed at myAccount.humber.ca, simply visit the website and click on 'Forgot Password'.  If you have not subscribed, please contact the I.T. Support Centre at 416.675.6622 X8888, supportcentre@humber.ca, or humber.ca/techtalk.`
    },
    {
        id: "question-4",
        title: "Where Should I Store My Data Files?",
        answer: `Students and Staff both have access to 1 TB of OneDrive space on which to store their data files.  Files are secure and can be accessed anywhere, anytime, anyhow by visiting humber.ca/microsoft365 and logging in with your Humber credentials (the same username and password students use for access to myHumber, Blackboard, or for staff, your Humber email account).  Click on the OneDrive icon to access your storage.`
    },
    {
        id: "question-5",
        title: "How Do I Connect to the Wireless Network?",
        answer: `myWi-Fi@Humber is a secure, high-speed, wireless Internet solution available across all Humber campuses (but not Guelph-Humber) for use by Humber and Guelph-Humber students, employees, suppliers, and guests.

        If you know your username and password, choose myWifi@Humber as your network connection, enter your credentials, and connect.
        
        For step-by-step instructions for various devices, please download the myWi-Fi@Humber Quick Reference Guide.`
    },
    {
        id: "question-6",
        title: "Where Do I Download Work-At-Home Software?",
        answer: `Students:

        Select software from Microsoft is available for students to download for use on a personal computing device at no cost. An active HMail account is required. Titles include Windows (Upgrade), Office Professional, and Office for Mac. Look for the “Work-at-home” link on our Web site. Limit of one copy of each title per student.
        
        Employees:
        
        Select software from Microsoft is available for employees to download for use on a personal computing device at a small cost. An active Humber College email account is required. Titles include Windows (Upgrade), Office Professional, and Office for Mac. Look for the “Work-at-home” link on our Web site. Limit of one copy of each title per employee.`
    },
]

export const visitInfo = {
    hours: "Monday to Friday: 7:30 a.m. - 7:30 p.m.",
    location: `Tech Zone – H109 (North)
    Monday to Friday: 7:30 a.m. - 7:30 p.m.
    
    A212 (Lakeshore)
    Monday to Friday: 7:30 a.m. - 7:30 p.m.
    
    International Graduate School (IGS)
    59 Hayden Street, 5th floor
    Monday to Friday: 7:30 a.m. - 4:30 p.m.`
}

export const footerLinks = [
    {
        id: "students",
        title: "Students",
        links: [
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
            },
            {
                id: "international-students",
                title: "International Students"
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
                title: "+1 (416) 675-3111"
            },
            {
                id: "email-address",
                title: "enquiry@humber.ca"
            },
            {
                id: "careers",
                title: "Careers at Humber"
            }
        ]
    },
];
