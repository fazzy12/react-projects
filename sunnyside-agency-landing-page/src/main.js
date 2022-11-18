import React from   'react';

export default function Main() {
    return(

        <main className='main'>

        <section className='main--section-1'>
            <div className='main--section-1_left'>
                <div className='main--section-text'>
                <h1 className='main--section-header'>Transform your brand</h1>
                <p className='main--section-para'>We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="http://www.jjjd.com">Learn more</a>
                </div>
            </div>
            <div className='main--section-1_right'>
                <img src="../images/desktop/image-transform.jpg" alt='the egg'/>
            </div>
        </section>


        <section className='main--section-2'>
            <div className='main--section-2_left'>
                <img src="../images/desktop/image-stand-out.jpg" alt='the egg'/>
            </div>
            <div className='main--section-2_right'>
                <div className='main--section-text'>
                <h1 className='main--section-header'>Stand out to the right audience</h1>
                <p className='main--section-para'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <a href="http://www.jjjd.com">Learn more</a>
                </div>
            </div>
        </section>

        <section className='section--3'>
            <div>
                <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="http://www.jjjd.com">Learn more</a>
            </div>
            <div>
                <img src="../images/desktop/image-transform.jpg" alt='the egg'/>
            </div>
        </section>
            
        </main>
    )
    
}