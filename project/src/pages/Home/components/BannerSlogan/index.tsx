import { BannerContainer, BannerContent, SkillItem, SkillsContent, TextContent } from "./styles"

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'


import imgBanner from '../../../../assets/home-image.png'


export const BannerSlogan = () => {
    return (
        <BannerContainer>
            <div className="linear">
            <BannerContent>
            <div>
                <TextContent>
                    <h2>
                        Encontre o café perfeito para qualquer hora do dia  
                    </h2>
                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                </TextContent>

                <SkillsContent>
                    <SkillItem >
                        <div className="primary">
                            <ShoppingCart size={20} weight='fill'/>
                        </div>
                        <span>Compra simples e segura</span>
                    </SkillItem>
                    <SkillItem>
                        <div className="secundary">
                            <Package size={20} weight='fill'/>
                        </div>
                        <span>Compra simples e segura</span>
                    </SkillItem>
                    <SkillItem >
                        <div className="tertiary">
                            <Timer size={20} weight='fill'/>
                        </div>
                        <span>Compra simples e segura</span>
                    </SkillItem>
                    <SkillItem >
                        <div className="quaternary">
                            <Coffee size={20} weight='fill'/>
                        </div>
                        <span>Compra simples e segura</span>
                    </SkillItem>
                </SkillsContent>
                
            </div>

            <img src={imgBanner} alt="" />
            </BannerContent>

            </div>
        </BannerContainer>
    )
}