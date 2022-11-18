import Img1 from './images/image12.png';
import Img2 from './images/wedding-photography 1.png'
import Img3 from './images/mountain-bike 1.png';
import Star from './images/Star.png';

const rate = '5.0 (6)-USA';
const nuggets = 'Life lessons with Katie Zaferes';

export default function Card() {
    return (
        <div className='card'>
            <img src={Img1} alt="sport woman" className='card--image'/>
            <div className='card--stats'>
                <img src={Star} alt='start svg' className='card--star' /> 
                <span>5.0</span>
                <span classname='gray' >(6)-</span>
                <span className='gray'>USA</span>
            </div>
                <p>{nuggets}</p>
                <p> <span className='bold'>from $135</span> / person</p>




            <img src={Img2} alt="woman on wedding dress" />
            <div>
                <img src={Star} alt='start svg' /> <p>{rate}</p>
                <p>{nuggets}</p>
               

            </div>
            <img src={Img3} alt="bicycle" />
            <div>
                <img src={Star} alt='start svg' /> <p>{rate}</p>
                <p>{nuggets}</p>
               

            </div>
        </div>

    );

}