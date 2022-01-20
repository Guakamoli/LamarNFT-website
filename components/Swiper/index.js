//import styles from './index.module.scss';
////import Slider from "react-slick";
//import odom_1 from './odom_1.png'
//import odom_2 from './odom_2.png'
//import odom_3 from './odom_3.png'
//import odom_4 from './odom_4.png'
//import odom_5 from './odom_5.png'
//import odom_6 from './odom_6.png'
//import odom_7 from './odom_7.png'
//import odom_8 from './odom_8.png'

//export default class Responsive extends Component {
//  render() {
//    var settings = {
//      dots: false,
//      infinite: true,
//      speed: 500,
//      slidesToShow: 4,
//      slidesToScroll: 1,
//      initialSlide: 0,
//    };
//    return (
//      <div style={{marginBottom: '120px'}}>
//        <Slider {...settings} className={styles.Slider}>
//            <div className={styles.item}>
//                <img src={odom_1} className={styles.img}/>
//            </div>
//            <div className={styles.item}>
//                <img src={odom_2} className={styles.img}/>
//            </div>
//            <div className={styles.item}>
//                <img src={odom_3} className={styles.img}/>
//            </div>
//            <div className={styles.item}>
//            <img src={odom_4} className={styles.img}/>
//            </div>
//            <div className={styles.item}>
//            <img src={odom_5} className={styles.img}/>
//            </div>
//            <div className={styles.item}>
//                <img src={odom_6} className={styles.img}/>
//            </div>
//        </Slider>
//      </div>
//    );
//  }
//}

import styles from './index.module.scss'

export default function Swiper() {
    return (
        <div className={styles.container}>
            <div className={styles.slide}>
                <img src='/images/odom_1.png' className={styles.img}/>
                <img src='/images/odom_2.png' className={styles.img}/>
                <img src='/images/odom_3.png' className={styles.img}/>
                <img src='/images/odom_4.png' className={styles.img}/>
                <img src='/images/odom_5.png' className={styles.img}/>
                <img src='/images/odom_6.png' className={styles.img}/>
                <img src='/images/odom_7.png' className={styles.img}/>
                <img src='/images/odom_8.png' className={styles.img}/>
            </div>
        </div>
    )
}