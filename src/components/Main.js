import { Content, Header } from 'antd/es/layout/layout'
import React from 'react'
import style from  "./Main.module.css"
import Template from './Template'
import Review from './Review'
const Main = () => {
    return (
        <div>
            <Header>
                <div style={{ width: "100%", height: "90%", objectFit: "contain" }}>
                    <img src='https://traya.health/cdn/shop/files/TrayaLogoWhite_250x_73a5d7e5-bd9b-4089-8e81-80249caeac61.webp?v=1662534292&width=200'></img>
                </div>
            </Header>
            <Content className={style.container}>
                <Template/>
            
            </Content>
        </div>
    )
}

export default Main
