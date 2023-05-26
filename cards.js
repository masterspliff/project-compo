import React, { useRef, useEffect, useState } from 'react';
import styles from './FuturisticCard.module.css';

const FuturisticCard = () => {
    const screenRef = useRef(null);
    const [name, setName] = useState("SPALL-LINER");
    
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        const screen = screenRef.current;

        const mouseEnterHandler = event => {  
            let iteration = 0;
            let interval = null;
            
            clearInterval(interval);
            
            interval = setInterval(() => {
                setName(
                    name
                        .split("")
                        .map((letter, index) => {
                            if(index < iteration) {
                                return name[index];
                            }
                        
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("")
                );
                
                if(iteration >= name.length){ 
                    clearInterval(interval);
                }
                
                iteration += 1 / 3;
            }, 30);
        }

        screen.addEventListener('mouseenter', mouseEnterHandler);

        return () => {
            screen.removeEventListener('mouseenter', mouseEnterHandler);
        }
    }, []);

    return (
        <div ref={screenRef} className={styles.screen}>
            <div className={styles.screenImage}></div>
            <div className={styles.screenOverlay}></div>
            <div className={styles.screenContent}>
                <div className={styles.screenIcon}></div>
                <div className={styles.screenUser}>
                    <span className={styles.name}>{name}</span>
                    <a className={styles.link} href="" target="_blank" rel="noreferrer"></a>
                </div>
            </div>
            <div id="blob" className={styles.blob}></div>
            <div id="blur" className={styles.blur}></div>
        </div>
    );
}

export default FuturisticCard;
