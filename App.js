/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // state는 자동 재렌더링 변동시 자동으로 html에 반영되게 만들고 싶으면 사용
  // 변수 : 자동 재렌더링 안 됨, 자주 안 바뀌면 사용
  let [subTitle, subTitleSet] = useState(['자바 공부', '알고리즘 공부', '쇼핑']);
  let [likeCnt, likeCntSet] = useState([0, 0, 0])
  let [modal, modalSet] = useState(false);
  let [pageNum, pageNumSet] = useState(0);
  let [inputValue, inputValueSet] = useState('');

  return (
    <div className="App">
      <div className='App-Nav'>
        <h2>Junsgi</h2>
      </div>
      <button onClick={()=>{
        var s = [...subTitle];
        s.sort()
        subTitleSet(s);
      }}>정렬 버튼</button>
      <div className='App-Body'>

        {
          subTitle.map((value, i)=>{
            return (
              <div className='list' key = {i}>
              <h4 onClick={()=>{
                modalSet(true);
                pageNumSet(i);
              }}>{subTitle[i]} 
              </h4>
              <span onClick={()=>{
                var c = [...likeCnt];
                c[i] += 1;
                likeCntSet(c);
              }}>😜</span> <b>{likeCnt[i]} </b>
              <p>2023년 7월 23일 발행</p>
              </div>
            );
          })
        }
      </div>

      <div className='inputZone'>
        <input onChange={(text)=>{
            console.log(text.target.value);
            inputValueSet(text.target.value)
          }}></input><br></br>
      </div>
      <button onClick={() => {
        var temp = [...subTitle];
        var tcnt = [...likeCnt];
        temp.unshift(inputValue);
        tcnt.unshift(0);
        subTitleSet(temp);
        likeCntSet(tcnt);
        }}>저장</button>

      <div className='ModalZone'>
        {
          modal === true
          ? <Modal value = {subTitle} i = {pageNum}/>
          : null
        }
      </div>
    </div>
  );
}

// 컴포넌트
// 1. 대문자로 시작
// 2. return () 안에 HTML
// 3. <함수></함수>
// 의미없는 div but 하나로 묶어야 한다면 <></>

// 큰 페이지들 반환할 때
// 자주 변경된다면
// 반복적 html 축약
function Modal(props){
  return (
    <div className='Modal'>
      <h2>{props.value[props.i]}</h2>
      <h3>내용</h3>
      <h3>날짜</h3>
    </div>
  )
}
export default App;
