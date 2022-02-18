import style from './TEAM.module.scss'
const urlImgAndy_Ly = '/assets/Andy_Ly_Metagunner.webp'
const urlImgHO = '/assets/HO-ANH_Metagunner.webp'
const urlImgDUONG = '/assets/DUONG_Metagunner.webp'
const urlImgTAN = '/assets/TAN_Metagunner.webp'
const urlImgAN = '/assets/AN_Metagunner.webp'
const urlImgTHIEN = '/assets/THIEN_Metagunner.webp'
const urlImgSteven = '/assets/Steven_Metagunner.webp'
const urlImgMINH = '/assets/MINH_Metagunner.webp'
const urlImgMee_Ahn = '/assets/Mee-Ahn_Metagunner.webp'
const urlTitle = '/assets/Team_Metagunner.webp'

function Advisors(){
    return(
        <section className={style.Advisors} id='TEAM'>
        <div className="container">
            <div className={style.AdvisorsTitle}>
                <img src={urlTitle} alt=""/>
            </div>
        </div>
            <div className={style.AdvisorsWrapperTop}>
                <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                    <div className={style.AdvisorsWrapperTopItemTop}>
                        <img src={urlImgAndy_Ly} alt=""/>
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
                        <img src={urlImgSteven} alt=""/>
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
                        <img src={urlImgMee_Ahn} alt=""/>
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