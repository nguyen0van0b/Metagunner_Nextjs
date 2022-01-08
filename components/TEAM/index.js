import style from './TEAM.module.scss'
const urlImgPHU = '/assets/PHU.webp'
const urlImgHO = '/assets/HO-ANH.webp'
const urlImgDUONG = '/assets/DUONG.webp'
const urlImgTAN = '/assets/TAN.webp'
const urlImgAN = '/assets/AN.webp'
const urlImgTHIEN = '/assets/THIEN.webp'
const urlImgPHUOC = '/assets/PHUOC.webp'
const urlImgMINH = '/assets/MINH.webp'
const urlImgMEO = '/assets/MEO.webp'
const urlTitle = '/assets/Team.webp'

function Advisors(){
    return(
        <section className={style.Advisors} id='TEAM'>
        <div className="container">
            <div className={style.AdvisorsTitle}>
                <img src={urlTitle} alt=""/>
            </div>
            {/* <h2 className="title" data-aos="fade-up">Our <span>TEAM</span></h2> */} 
        </div>
            <div className={style.AdvisorsWrapperTop}>
                <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                    <div className={style.AdvisorsWrapperTopItemTop}>
                        <img src={urlImgPHU} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperTopItemBottom}>
                        <div className={style.name}>
                            <h5>Andy Ly</h5>
                        </div>
                        <div className={style.position}>Founder/Chief Executive Officer</div>
                        <div className={style.background}>
                        Founder of KOG Studio <br></br><br></br>
                        Chief Operating Officer of BEUS <br></br><br></br>
                        4+ years of experience in E-commerce in the global retail market<br></br><br></br>
                        7+ years of experience in E-business and Digital Media</div>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                    <div className={style.AdvisorsWrapperTopItemTop}>
                        <img src={urlImgHO} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperTopItemBottom}>
                        <div className={style.name}>
                            <h5>Ho Le</h5>
                        </div>
                        <div className={style.position}>Chief Operating Officer</div>
                        <div className={style.background}>
                        Founder of Nuca Streaming Entertainment<br></br><br></br>
                        Founder of Nuca<br></br><br></br>
                        4+ years of experience in software engineering at top software companies in Vietnam: Sunshine Tech, Plustus Fintech, Transaction Technologies, Shopiness, SPLUS-SOFTWARE</div>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                    <div className={style.AdvisorsWrapperTopItemTop}>
                        <img src={urlImgTAN} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperTopItemBottom}>
                        <div className={style.name}>
                            <h5>Tony Pham</h5>
                        </div>
                        <div className={style.position}>Chief Technology Officer</div>
                        <div className={style.background}>
                        Chief Technology Officer of Nuca<br></br><br></br>
                        Chief Technology Officer of Nuca Streaming Entertainment<br></br><br></br>
                        3+ years experience as Full-stack Developer in Transaction Technologies for the stock market<br></br><br></br>
                        2+ years experience as Blockchain Developer</div>
                    </div>
                </div>
                
                <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                    <div className={style.AdvisorsWrapperTopItemTop}>
                        <img src={urlImgDUONG} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperTopItemBottom}>
                        <div className={style.name}>
                            <h5>Duong Vu</h5>
                        </div>
                        <div className={style.position}>Product Lead/Game Designer</div>
                        <div className={style.background}>
                        Chief Technology Officer of BEUS <br></br><br></br>
                        Senior Game Developer at X-Game <br></br><br></br>
                        7+ years of experience in software engineering in top Japan software companies: Rakuten Seimei Kikan, Sony Mobile Communications, Luvna.<br></br><br></br>
                        5+ years of experience managing software product outsourcing globally, especially in Japan.</div>
                    </div>
                </div>
            </div>
            <div className={style.AdvisorsWrapperBottom}>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="400">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgPHUOC} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name} href="">
                            <h3>Steven Lee</h3>
                        </div>
                        <p>Full-stack Developer</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="600">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgTHIEN} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                    <div className={style.name} href="">
                            <h3>Thien Nguyen</h3>
                        </div>
                        <p>Marketing Manager</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="600">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgAN} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                    <div className={style.name}>
                            <h3>An Ngo</h3>
                        </div>
                        <p>Project Leader</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="600">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgMEO} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name}>
                            <h3>Mee-Ahn Nguyen</h3>
                        </div>
                        <p>Lead Designer</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="600">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgMINH} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name}>
                            <h3>Minh Le</h3>
                        </div>
                        <p>Communications Leader</p>
                    </div>
                </div>
               
                
            </div>
    </section>
    )
}
export default Advisors