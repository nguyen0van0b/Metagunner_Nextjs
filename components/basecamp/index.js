import style from './basecamp.module.scss'
import clsx from 'clsx';
import React from "react";
const urlVideo = '/assets/basecamp_vid.mp4'
const urlimg = '/assets/Basecamp.webp'
const urlimgmb = '/assets/basecamp-500x700.webp'

function Basecamp(){
    return(
        <section className={style.basecamp} id='basecamp'>
            <div className={clsx('container',style.basecampContainer)}>
                <div className={style.basecampTitle}>
                    <img src={urlimg} alt=""/>
                </div>
            </div>
            <video src={urlVideo} autoPlay='autoplay' muted='muted' loop='loop'></video>
            <img src={urlimgmb} alt=""/>
            <div className={style.basecampTitleP}>
                <p>Basecamp is the place for soldiers to rest and heal after fighting in fierce battles. Basecamp owners can get more rewards without going into monster fights, reduce ammo recovery time for weapons, and have more chance to receive items such as Weapon Cards, Character Cards... </p>
            </div>
        </section>
    )
}
export default Basecamp