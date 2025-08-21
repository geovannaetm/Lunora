import estilos from './Produtos.module.css'

export default function Produtos(){
    return(
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Nossos Produtos</h2>
                <p>
                    Aqui, reunismo as fragrâncias mais sofisticadas do mercado, trazendo para você marcas renomadas e essências marcantes que trazem luxo, elegância e personalidade.
                </p>

                <p>
                    Autenticidade garantida | As melhores marcas do mundo | Envio Rápido e seguro
                </p>

                <div className={estilos.perfume_img}>
                    <div className={estilos.card_perfume}>
                        <span className={estilos.selo}>Mais vendido</span>
                        <h3>Lunora Bloom 50 ml</h3>
                        <picture>
                            <img src='./foto1.png' alt='LunoraBloom'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 434,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
                


               
                    <div className={estilos.card_perfume}>
                        <span className={estilos.seloNovo}>Novo</span>
                        <h3>Lunora Cristalli 30 ml</h3>
                        <picture>
                            <img src='./foto2.png' alt='LunoraCristalli'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 425,80</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
               

                
                    <div className={estilos.card_perfume}>
                      
                        <h3>Lunora Noir 70 ml</h3>
                        <picture>
                            <img src='./foto3.png' alt='LunoraNoir'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 520,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
                


                    <div className={estilos.card_perfume}>
                      
                        <h3>Rosé Heels 120 ml</h3>
                        <picture>
                            <img src='./foto4.png' alt='RoséHeels'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 820,80</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
                

                </div>




            </div>
        </section>
    )
}