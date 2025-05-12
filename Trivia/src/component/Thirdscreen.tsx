import Settings from '../assets/Settings.png';
import Timer from '../assets/Timer.png';
import Femalegame from '../assets/Femalegame.png';
import Malegame from '../assets/Malegame.png'
import Text from '../assets/Text.png'
import '../Third.css';

function Thirdscreen() {

    return(
        <div className='main'>
          <div className='settings'>
            <img src={Settings} alt="Settings Bar" />
          </div>
        <div className='Timer-container'>
          <div id='Timer'>
            <img src={Timer} alt="Timer" />
            1:00
          </div>
        </div>
        <div className='Slide-container'>
          <div className='value'>600</div>
          <div className="timer-slider">
            <div className="slider-section blue-section"></div>
            <div className="slider-section orange-section"></div>
            
            <div className="vertical-guide"></div>
            <div className="slider-handle-top"></div>
            <div className="slider-handle-bottom"></div>
          </div>
          <div className='value'>400</div>
        </div>
        <div className='Avatar-container'>
          <div className='Avatar1'>
            <img src={Femalegame} alt="Female Avatar" />
            <h4 className='btn1'>You</h4>
          </div>
          <div className='Avatar2'>
            <img src={Malegame} alt="Male Avatar" />
            <h3 className='btn2'>geeky32</h3>
          </div>
          <div><img src={Text} alt="text-img" className='text-img'/></div>
        </div>
        <div className='indicator' >Question 1 of 6</div>
        <div className='question-container'>
          <h2>Who wrote the play "Romeo and Juliet"?</h2>
        </div>
        <div className='options-container'>
          <button className='option' id='option-A'>
            <span className='option-label'>A</span>
            <span className='option-text'>Williams Shakespeare</span>
          </button>
          <button className='option' id='option-B'>
            <span className='option-label'>B</span>
            <span className='option-text'>Charles Dickens</span>
          </button>
          <button className='option' id='option-C'>
            <span className='option-label'>C</span>
            <span className='option-text'>Jane Austen</span>
          </button>
          <button className='option' id='option-D'>
            <span className='option-label'>D</span>
            <span className='option-text'>Mark Twain</span>
          </button>
        </div>
      </div>
    );
}

export default Thirdscreen;