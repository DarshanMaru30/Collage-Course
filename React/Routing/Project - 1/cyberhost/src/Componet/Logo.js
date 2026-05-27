import React from 'react'
import s1 from '../Images/s-1.png'
import s2 from '../Images/s-2.png'
import s3 from '../Images/s-3.png'
import s4 from '../Images/s-4.png'
import Container from 'react-bootstrap/Container';
import OwlCarousel from 'react-owl-carousel';

export default function Logo() {
    const red = {
        responsive: {
          0: {
            items : 3,
          },
          768 : {
            items : 5,
          }
        }
    
      }
    return (
        <div>
            <Container>
                <OwlCarousel className='owl-theme img logo' loop={true} autoplay={true} margin={10} dots={false} {...red}>
                    <div class='item'>
                        <img src={s1} className='w-100'></img>
                    </div>
                    <div class='item'>
                        <img src={s2} className='w-100'></img>
                    </div>
                    <div class='item'>
                        <img src={s3} className='w-100'></img>
                    </div>
                    <div class='item'>
                        <img src={s4} className='w-100'></img>
                    </div>
                </OwlCarousel>
            </Container>
        </div>
    )
}
