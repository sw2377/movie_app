import React from 'react';
import Macaron from './Macaron';
import cakes from './cakes.json';

// 서버에서 가져온 데이터를 저장하는 변수
// const foodLike = [];
/* 아래는 json 파일로 불러옴!
const cakes = [
  {
    id: 1,
    name: 'Cookie Dough Cake',
    image: 'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg'

  },
  {
    id: 2,
    name: 'Rainbow Cake',
    image: 'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg'

  },
  {
    id: 3,
    name: 'Soft $ Moist Funfetti Cake',
    image: 'https://i.pinimg.com/236x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg'
  },
];
*/

// 자식 컴포넌트
function Food({propsId,propsName,propsImage}){ //구조분해할당
  // const {propsId,propsName,propsImage} = props;
  return (
    <>
      <h1>cake No. {propsId}</h1>
      <h2>cake Name {propsName}</h2>
      <img src={propsImage} alt="" />
    </>
  );
}

// 부모 컴포넌트
// function App() { // 함수형 컴포넌트
//   return (
//     <>
    
//       <Macaron />

//       {/* <Food 
//         propsId = "1"
//         propsName = "macaron"
//         propsImage = 'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg'
//         /> */}

//         {cakes.map(cake => (
//           <Food 
//             propsId = {cake.id}
//             propsName = {cake.name}
//             propsImage = {cake.image}
//           />
//           ))}
//         {/* 배열 cakes의 객체 하나하나를 가져와서 cake 객체의 id,name,image를 가져와서 map을 사용해 배열을 재정렬. */}
//     </>
//     // jsx 태그가 두개 이상일 경우 <div></div> 또는 <></>로 불러와야함
//   )
// }

class App extends React.Component { //클래스형 컴포넌트
  
  //생명주기함수
  constructor(props) {
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
  }
    componentDidMount(){
      console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
    }

    componentDidUpdate() {
      console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수')
    }

    componentWillUnmount() {
      console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
    }
  

  


  state = {
    count: 0,
    sum: 0,
    avg: 0,
  };

  add = () => {
    console.log('더하기');
    this.setState(current => ({ //current는 this.state
      count: current.count +1,
      sum: current.sum +1,
      avg: current.avg +1,
    }))
  }

  minus = () => {
    console.log('빼기');
    this.setState(current => ({
      count: current.count -1,
    }))
  }

  render() {
    return (
      <div>
        <h1>현재 숫자는 {this.state.count} 입니다</h1>
        <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>
      </div>
    )
  }
}

export default App;
