import style from './footer.module.scss'
const imgLogo = '/assets/Logo_Metagunner.webp'
const imgTelegram = '/assets/telegram.svg'
const imgDiscord = '/assets/discord.svg'
const imgTwitter = '/assets/twitter.svg'
const imgGithub = '/assets/githubbbb.svg'
const imgMedium = '/assets/medium.svg'
const imgFacebook = '/assets/facebook.svg'

function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.footerWrapper}>
                <div className={style.footerWrapperLogo}>
                <img src={imgLogo} alt=""/>
                </div>
                {/* <p>The first Racing Game on BSC Deathroad aims to become a comprehensive gaming ecosystem built for next generation racers, who utilize racing skills to enjoy the real racing expericence and to earn tradable valuable digital assets.</p> */}
                <div className={style.footerWrapperSocial}>
                    <a href="https://t.me/MetaGunnerChannel" target="_blank" rel="noopener noreferrer"><img src={imgTelegram} alt=""/></a>
                    <a href="https://discord.gg/3dNjuDMjcB" target="_blank" rel="noopener noreferrer"><img src={imgDiscord} alt=""/></a>
                    <a href="https://twitter.com/MetaGunner_io" target="_blank" rel="noopener noreferrer"><img src={imgTwitter} alt=""/></a>
                    {/* <a href="/" target="_blank" rel="noopener noreferrer"><img src={imgGithub} alt=""/></a>  */}
                    <a href="https://metagunner.medium.com" target="_blank" rel="noopener noreferrer"><img src={imgMedium} alt=""/></a>
                    <a href="https://www.facebook.com/Meta-Gunner-104600948766397" target="_blank" rel="noopener noreferrer"><img src={imgFacebook} alt=""/></a>
                </div>
                {/* <ul className={style.footerWrapperNav}>
                    <li>Launch APP</li>
                    <li>Marketplace</li>
                    <li>How to play</li>
                </ul> */}
                <p className={style.copyright}>Copyright © 2021 MetaGunner All rights reserved.</p>
            </div>
            <div className={style.footerMenu}>
                <div className={style.footerMenuAbout}>
                    <h2>ABOUT</h2>
                    <ul>
                        <li><a href="#features">FEATURES</a></li>
                        <li><a href="#NFTsItem">NFT CARD</a></li>
                        <li><a href="#character">CHARACTER</a></li>
                        <li><a href="#roadmap">ROADMAP</a></li>
                        <li><a href="#tokenomics">TOKENOMICS</a></li>
                        <li><a href="#TEAM">TEAM</a></li>
                    </ul>
                </div>
                <div className={style.footerMenuFAQ}>
                    <h2>FAQ</h2>
                    <ul>
                        <li><a href="https://whitepaper.metagunner.io/faq/disclaimer" target="_blank" rel="noreferrer">Disclaimer</a></li>
                        <li><a href="https://whitepaper.metagunner.io/" target="_blank" rel="noreferrer">Whitepaper</a></li>
                        <li><a href="mailto:contact@metagunner.io">Contact@metagunner.io</a></li>
                    </ul>
                </div>
            </div>
    </footer>
    )
}
export default Footer