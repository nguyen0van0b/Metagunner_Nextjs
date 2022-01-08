// import imgSC from '../../media/standard-crypto.95688a10.png'
// import imgRC from '../../media/raptor-capital.152fe148.png'
// import imgIL from '../../media/icetea-labs.38a1c529.png'
// import imgEC from '../../media/everse-capital.f1830d8c.png'
// import imgMagnus from '../../media/magnus-capital.027e1ec0.png'
// import imgX21 from '../../media/x21.6cb4d9a9.png'
// import imgMC from '../../media/metrix-capital.60512ea7.png'


import style from './investors.module.scss'

function Investors(){
    return(
        <section className={style.investors} id='investors'>
            <div className='container'>
                <h2 className='title' data-aos="fade-up">our <span>investors</span></h2>
                <div className={style.investorsWrapper} data-aos="flip-down" data-aos-delay="300">
                    {/* <Image src={imgSC} alt=""/>
                    <Image src={imgRC} alt=""/>
                    <Image src={imgIL} alt=""/>
                    <Image src={imgEC} alt=""/>
                    <Image src={imgMagnus} alt=""/>
                    <Image src={imgX21} alt=""/>
                    <Image src={imgMC} alt=""/> */}
                </div>
            </div>
        </section>
    )
}
export default Investors