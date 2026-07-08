import './Navigation.scss';


function Navigation() {
    return (
        <div className='navigation-container'>
            <div className='navigation-img'>
                <img src="/block 3/Rectangle 2.png" alt="" />
            </div>
            <div className='navigation-img-iphone'>
                    <img src="/block 3/iPhone.png" alt="" />
                </div>
                <div className='navigation-img-stock'>
                    <img src="/block 3/Акция.png" alt="" />
                </div>

                <span className='favorites'>ИЗБРАННОЕ</span>
                <span className='promotion-profile'>ПРОФИЛЬ АКЦИИ</span>
                <span className='subscriptions'>ПОДПИСКИ</span>
                <span className='map'>КАРТА</span>
                <span className='my-feed'>МОЯ ЛЕНТА</span>
                <span className='info-decription'> Вы всегда получите полную информацию об акции: подробное <br/>
                описание, бренд, магазины и торговые центры где походит акция.
                <br />
                <br />
                Также доступна возможность сразу перейти на сайт товара и купить <br />
                в рамках действующей акации.
                </span>

        </div>
    )
}









export default Navigation;