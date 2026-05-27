import './../styles/home.css';
import { FaQuoteLeft } from "react-icons/fa";

import about from './../image/asset 29.jpeg';
import test1 from './../image/asset 31.jpeg';
import abc from './../image/asset 54.jpeg';
import Header from './Header';
import Course from './Course';
import Choose from './Choose';
import Counter from './Counter';
import Company from './Company';
import Demanded from './Demanded';
import Banner from './Banner';
import Footer from './Footer';


const header = ['Home','Courses','Activities','Blog','Know Us','Get In Touch','Student Zone'];

const banner = [
    {img:require('./../image/asset 1.webp')},
    {img:require('./../image/asset 2.webp')},
    {img:require('./../image/asset 3.webp')},
    {img:require('./../image/asset 4.webp')},
    {img:require('./../image/asset 5.webp')},
    {img:require('./../image/asset 6.jpeg')},
    {img:require('./../image/asset 7.webp')},
    {img:require('./../image/asset 8.webp')},
    {img:require('./../image/asset 9.webp')},
    {img:require('./../image/asset 10.webp')},
]

const course = [
    {
        title:"Development Course",
        button:"Know More..!",
        url : require('./../image/asset 22.webp')
    },
    {
        title:"Design Course",
        button:"Know More..!",
        url : require('./../image/asset 14.webp')
    },
    {
        title:"Programming IT",
        button:"Know More..!",
        url : require('./../image/asset 17.webp')
    },
    {
        title:"Tready Course",
        button:"Know More..!",
        url : require('./../image/asset 20.webp')
    },
    {
        title:"Civil-Mech Engineering",
        button:"Know More..!",
        url : require('./../image/asset 25.webp')
    },
    {
        title:"Business Development",
        button:"Know More..!",
        url : require('./../image/asset 28.webp')
    }
]

const choose = [
    {
        img:require('./../image/read1`.png'),
        title:"Industry Experts As Trainers",
        desc:"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
    },
    {
        img:require('./../image/read2.png'),
        title:"Latest Curriculum",
        desc:"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."
    },
    {
        img:require('./../image/read3.png'),
        title:"Latest Technology",
        desc:"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
    },
    {
        img:require('./../image/read4.png'),
        title:"Interview Assistance",
        desc:"At the end of each training,our training instructor will go through the possible technical questions you may be asked."
    },
    {
        img:require('./../image/read5.png'),
        title:"Free Upgradation",
        desc:"We will be provided free upgradation for any newer version of the course you have."
    },
    {
        img:require('./../image/read6.png'),
        title:"Lifetime Support",
        desc:"We will provide you lifetime support on all the courses you learned from us."
    }
]

const counter = [
    {
        img:require('./../image/c1.png'),
        no:'18000+',
        title:"HAPPY STUDENTS"
    },
    {
        img:require('./../image/c2.png'),
        no:'10+',
        title:"CERTIFICATION APPROVAL"
    },
    {
        img:require('./../image/c3.png'),
        no:'100+',
        title:"CERTIFIED TEACHERS"
    },
    {
        img:require('./../image/c4.png'),
        no:'12000+',
        title:"STUDENTS PLACED"
    }
]

const company = [
    {
        img:require('./../image/asset 40.png')
    },
    {
        img:require('./../image/asset 41.png')
    },
    {
        img:require('./../image/asset 42.png')
    },
    {
        img:require('./../image/asset 43.png')
    },
    {
        img:require('./../image/asset 44.png')
    },
    {
        img:require('./../image/asset 45.png')
    }
]

const list = [
    'Adobe xd design course',
    'Game design training institute in surat',
    'C programming language training institute in katargam',
    'Advance nodejs training institute in surat',
    'game design class in Mota Varachha',
    'codeigniter training course',
    'Graphics design training in katargam',
    'Best flutter training institute',
    'Graphics design training course',
    'Best flutter training institute',
    'Graphics design training course',
    'Blender 3d design course',
    'Creo parametrics mechanical training course',
    'computer institutes in yogichowk',
    'mechanical engineering training institute in Mota Varachha',
    'Maya animation training institute',
    'Advance Unity 3d training institute in surat',
    'PHP training institute in varachha',
    'Advance react js training institute in surat',
    'spoken english class in adajan',
    'Latest technology course',
    'Civil engineering training institute in Mota Varachha'
]

const foot = ['About Us','Blogs','Join Us','Company Login','Certificate verification'];

const branch = ['Katargam','Mota varachha','Adajan','Navsari'];

function Home() {
    return (
        <>

            {/* Top Info Section Start */}

            <Header header={header} />

            {/* Top Info Section End */}

            
            {/* Banner Section Start */}

            <Banner url={banner} />

            {/* Banner Section End */}


            {/* Courese Section Start */}

            <Course course={course} />

            {/* Courese Section End */}

            {/* About Us Section Start */}

            <div className="m_about space-y">
                <div className='bg'>
                    <div className="about">
                        <div className="heading">
                            <div className="sub_title">ABOUT US</div>
                            <h6>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h6>
                        </div>
                        <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                        <div className="btn">
                            <div className="button">Enroll Now..!</div>
                        </div>
                    </div>
                    <div className="video">
                        <div className="img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section End */}

            {/*  Counter Section End */}

            <Counter counter={counter} />

            {/*  Counter Section End */}

            {/*  Student Section Start */}

            <div className="space-y">
                <div className="container">
                    <div className="d-flex">
                        <div className="student">
                            <div className="heading">
                                <span className='sub_title'>HAPPY STUDENTS</span>
                                <h2>ALUMNI SPEAK</h2>
                            </div>
                            <div className="test">
                                <FaQuoteLeft className='quote' />
                                <p className="content">
                                    Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training.
                                </p>
                                <div className="desc d-flex">
                                    <div className="img">
                                        <img src={test1} alt="" />
                                    </div>
                                    <div className="user">
                                        <h6>KOLADIYA MANSI</h6>
                                        <span className='default'>UI/UX Designer</span>
                                        <span className='muted'>@ Patoliya Infotech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="shape">
                                <img src={abc} alt="" width={'100%'} />
                            </div>
                            <div className="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Student Section End */}

            {/*  Creative Section End */}

            <Choose choose={choose} />

            {/*  Creative Section End */}

            {/*  partners Section Start */}

            <Company img={company} />

            {/*  partners Section End */}

            {/* Widget Section Start */}

            <Demanded list={list} />

            {/* Widget Section End */}

            {/* Footer Section Start */}

            <Footer foot={foot} house={branch} />

            {/* Footer Section End */}


        </>
    );
}

export default Home;
