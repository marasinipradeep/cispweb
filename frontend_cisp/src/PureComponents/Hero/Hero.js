import React from 'react'
import './Hero.css'

export default function Hero({children}) {
    return <header className="defaultHero">{children}</header>;
    
}
Hero.defaultProps = {
    hero: "defaultHero"
};