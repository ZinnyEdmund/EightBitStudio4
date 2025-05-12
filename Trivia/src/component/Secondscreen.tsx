// // import React from 'react';
// import '../style.css';

// // Define props interface with TypeScript
// interface SecondScreenProps {
//   // Game state props
//   question: string;
//   options: Array<{id: string, text: string}>;
//   currentQuestionNumber: number;
//   totalQuestions: number;
  
//   // Score props
//   leftScore: number;
//   rightScore: number;
  
//   // Timer props
//   timeRemaining: string;
  
//   // Player props
//   playerName: string;
//   opponentName: string;
//   playerHasAnswered: boolean;
  
//   // Event handlers
//   onSelectAnswer: (answerId: string) => void;
// }

// function SecondScreen(props: SecondScreenProps) {
//   // Using props instead of hardcoded values
//   const { 
//     question, 
//     options, 
//     currentQuestionNumber, 
//     totalQuestions, 
//     leftScore, 
//     rightScore,
//     // timeRemaining,
//     // playerName,
//     // opponentName,
//     // playerHasAnswered,
//     // onSelectAnswer
//   } = props;
  
//   // You can provide default values if props aren't passed
//   const displayQuestion = question || "Who wrote the play \"Romeo and Juliet\"?";
//   const displayOptions = options || [
//     { id: "A", text: "William Shakespeare" },
//     { id: "B", text: "Charles Dickens" },
//     { id: "C", text: "Jane Austen" },
//     { id: "D", text: "Mark Twain" }
//   ];
//   const displayCurrentQuestion = currentQuestionNumber || 1;
//   const displayTotalQuestions = totalQuestions || 6;
//   // const displayLeftScore = leftScore || 200;
//   // const displayRightScore = rightScore || 100;

//   return (
//     <div className="game-container">
//       {/* Timer section */}
//       <div className="timer-container">
//         <div className="timer-icon">
//           <img src={"{Timer}"} alt="Timer" />
//         </div>
//         <div className="timer-value">{props.timeRemaining || "1:00"}</div>
//       </div>

//       {/* Players and score section */}
//       <div className="players-container">
//         {/* Left player */}
//         <div className="player left-player">
//           <div className="avatar-container">
//             <img src={"{Femalegame}"} alt="Female Avatar" className="avatar-img" />
//             {props.playerHasAnswered && (
//               <div className="player-bubble">
//                 <span>You got it!</span>
//               </div>
//             )}
//           </div>
//           <div className="player-name">{props.playerName || "You"}</div>
//         </div>

//         {/* Center score and progress bar */}
//         <div className="score-container">
//           <div className="score-slider">
//             <div className="score-value left-score">{leftScore}</div>
//             <div className="slider-container">
//               <div className="slider-track">
//                 <div className="slider-section blue-section"></div>
//                 <div className="slider-section white-section"></div>
//                 <div className="slider-section orange-section"></div>
//                 <div className="slider-handle"></div>
//               </div>
//             </div>
//             <div className="score-value right-score">{rightScore}</div>
//           </div>
//         </div>

//         {/* Right player */}
//         <div className="player right-player">
//           <div className="avatar-container">
//             <img src={"{Malegame}"} alt="Male Avatar" className="avatar-img" />
//           </div>
//           <div className="player-name">{props.opponentName || "geeky32"}</div>
//         </div>
//       </div>

//       {/* Question section */}
//       <div className="question-container">
//         <div className="question-indicator">
//           Question {displayCurrentQuestion} of {displayTotalQuestions}
//         </div>
//         <div className="question-text">{displayQuestion}</div>
        
//         <div className="options-container">
//           {displayOptions.map((option) => (
//             <div 
//               key={option.id} 
//               className="option-item"
//               onClick={() => props.onSelectAnswer && props.onSelectAnswer(option.id)}
//             >
//               <div className="option-identifier">{option.id}</div>
//               <div className="option-text">{option.text}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SecondScreen;







import Settings from '../assets/Settings.png';
import Timer from '../assets/Timer.png';
import Femalegame from '../assets/Femalegame.png';
import Malegame from '../assets/Malegame.png'
import Text from '../assets/Text.png'
import '../style.css';

function Secondscreen() {

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
          <div className='value'>200</div>
          <div className="timer-slider">
           
           <div className="colors">
            <div className="slider-section blue-section"></div>
            <div className="slider-section white-section"></div>
            <div className="slider-section orange-section"></div>
           </div>
            
            <div className="vertical-guide"></div>
            <div className="slider-handle-top"></div>
            <div className="slider-handle-bottom"></div>
          </div>
          <div className='value'>100</div>
        </div>

        <div className='Avatar-container'>
          <div className='Avatar1'>
            <img src={Femalegame} alt="Female Avatar" />
            <h4 className='btn1'>You</h4>
          </div>
          <div className='Avatar2'>
            <img src={Malegame} alt="Male Avatar" />
            <h3 className='btn2'>geky32</h3>
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

export default Secondscreen;