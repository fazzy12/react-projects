import Img1 from './images/image12.png';
import Star from './images/Star.png';

const rate = '5.0 (6)-USA';
const nuggets = 'Life lessons with Katie Zaferes';
const price = 'from $135/person';

export default function Card() {
    return (
        <section>
            <img src={Img1} alt="sport woman" />
            <div>
                <img src={Star} alt='start svg' /> <p>{rate}</p>
                <p>{nuggets}</p>
                <p>{price}</p>

            </div>
            <img src={Img1} alt="sport woman" />
            <div>
                <img src={Star} alt='start svg' /> <p>{rate}</p>
                <p>{nuggets}</p>
                <p>{price}</p>

            </div>
            <img src={Img1} alt="sport woman" />
            <div>
                <img src={Star} alt='start svg' /> <p>{rate}</p>
                <p>{nuggets}</p>
                <p>{price}</p>

            </div>
        </section>

    );

}