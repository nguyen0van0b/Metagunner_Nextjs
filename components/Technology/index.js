const logo1 = '/assets/chainlink.webp'
const title = '/assets/TECH.webp'
const binance = '/assets/binance-smart-chain.webp'
const Unity = '/assets/Unity_Technologies.webp'
import style from './Technology.module.scss'

function Technology(){
    return(
    <section className={style.technologys} id='partners'>
        <div className="container">
            <div className={style.technologystitle}>
                        <img src={title} alt=""/>
            </div>
            <div className={style.technologysWrapper} data-aos="flip-up" data-aos-once="true" data-aos-delay="300">
                <img src={logo1} alt=""/>
                <img src={binance} alt=""/>
                <img src={Unity} alt=""/>
             
            </div>
        </div>
    </section>
    )
}
export default Technology