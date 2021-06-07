import React from 'react'; // 컴포넌트 만들기
import PropTypes from 'prop-types';

//함수형 컴포넌트
function Macaron(){
    return (
        <h1>I Love macaron!!</h1> // 2줄이상 입력시 괄호()작성
    );
}

//클래스형 컴포넌트
// class Macaron extends React.Component{
//     render(){
//         return (
//             <h1>I Love macaron!!!</h1>
//         );
//     }
// }

//npm install prop-types : props 자료형 검사
Macaron.propTypes = {
    propsid: PropTypes.number.isRequired,
    propsname: PropTypes.string.isRequired,
    propsimage: PropTypes.string
  }


export default Macaron; // 컴포넌트 내보내기