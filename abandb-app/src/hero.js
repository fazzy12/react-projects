import heroImg from './images/Group.png'

export default function HeroSection() {
    return(
        <section className='hero-section'>
            <img src={heroImg} alt="Hero Section" className='hero-image'/>
            <h1 className='hero-heading'>online experience</h1>
            <p className='hero-text '>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}