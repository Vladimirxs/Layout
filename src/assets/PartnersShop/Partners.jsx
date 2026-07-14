import './Partners.scss';


function Partners() {
    return (
        <div className='our-partners-shop'>
            <div className='img-partners'>
                <img src="block 5/Rectangle 4.png" alt="" />
            </div>

            <div className='img-banner-partners'>
                <img  className="prada-logo" src="/block 5/Prada.png" alt="" />
                <img  className="nike-logo" src="block 5/Nike.png" alt="" />
                <img  className="tsum-logo" src="block 5/TSUM.png" alt="" />
                <img  className="adidas-logo" src="block 5/Adidas.png" alt="" />
                <img  className="gum-logo" src="block 5/GUM.png" alt="" />
                <img  className="zara-logo" src="block 5/Zara.png" alt="" />
                <img  className="pazolini-logo" src="block 5/Pazolini.png" alt="" />
            </div>

            <div className='arrow-banner'>
                <img  className="banner-one" src="block 5/Ellipse 2.png" alt="" />
                <img  className="arrow-one" src="block 5/Vector 2.png" alt="" /> 
                <img  className="banner-two" src="block 5/Ellipse 2.png" alt="" />
                <img  className="arrow-two" src="block 5/Vector 2 (1).png" alt="" />
            </div>

            <span className='info-partners'> Хотите стать Партнёром? <br />
            Напишите нам про ваши акции узнают все.
            </span>

            <span className='our-partners'>НАШИ ПАРТНЁРЫ</span>

            <button className='btn-partners'>СТАТЬ ПАРТНЕРОМ</button>
        </div>
    )
}



export default Partners;