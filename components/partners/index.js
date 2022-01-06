// import imgilluvium from '../../media/illuvium.1b3b3e99.png'
// import imggamefi from '../../media/gamefi.f1bea293.png'
// import imgderace from '../../media/derace.ce76ce89.png'
// import imgoracles from '../../media/supra-oracles.0bd69769.png'
// import imgfinance from '../../media/scv-finance.4edd06dd.png'
// import imgtalken from '../../media/talken.aa70fb6f.png'
import style from './partners.module.scss'

function Partners(){
    return(
    <section className={style.partners} id='partners'>
        <div className="container">
            <h2 className="title" data-aos="fade-up">our <span>partners</span></h2>
            <div className={style.partnersWrapper} data-aos="flip-up" data-aos-delay="300">
                {/* <img src={imgilluvium} alt=""/>
                <img src={imggamefi} alt=""/>
                <img src={imgderace} alt=""/>
                <img src={imgoracles} alt=""/>
                <img src={imgfinance} alt=""/>
                <img src={imgtalken} alt=""/> */}
            </div>
        </div>
    </section>
    )
}
export default Partners