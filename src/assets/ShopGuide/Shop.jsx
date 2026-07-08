import './Shop.scss';


function Shop() {
    return (
        <div className="img-shop">
            <img src="block 1/Layer 1 copy 1.png" alt="" />
            <div className='top-panel'>
            <div className="icon">
                <img src="block 1/Property 1=VK.png" alt="D" />
                <img src="block 1/Property 1=Twitter.png" alt="" />
                <img src="block 1/Property 1=Instagram.png" alt="" />
                <img src="block 1/Property 1=Faebook.png" alt="" />
                <img src="block 1/Property 1=OK.png" alt="" />
            </div>
            <button className='btn-shop'>СТАТЬ ПАРТНЕРОМ</button>
            </div>

            <div className='phone'>
            <img src="block 1/Phone.png" alt="" />
            </div>

            <div className='menu-shop'>
                <img src="block 1/Frame 3.png" alt="" />
            </div>

            <div className='menu-entry'>
                <img src="block 1/Frame 2.png" alt="" />
            </div>

            <button className='btn-app'>
                <img className='icon-app' src="block 1/Vector.png" alt="" />
                <div className='btn-text'>
                    <span className="btn-subtitle">Download on the</span>
                    <span className="btn-title">App Store</span>
                </div>
            </button>

            <button className='btn-play'>
                <img src="block 1/Group.png" alt="" />
                <div className='btn-info'>
                    <span className='subtitle'>GET IT ON</span>
                    <span className="text">Google Play</span>
                </div>
            </button>

            <button className='btn-down'>
                 <span className='down-subtitle'>ВНИЗ</span>
                <img src="block 1/Vector 1.png" alt="" />
                <span className='down-title'>ВНИЗ</span>
            </button>
        </div>
    )
}


export default Shop;