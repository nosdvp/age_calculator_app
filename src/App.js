import { useState } from 'react';
import './App.css';
import img from './img/icon-arrow.svg'

function App() {

  const [inputDay, setInputDay] = useState('')
  const [confirmDay, setconfirmDay] = useState('')

  const [inputMonth, setInputMonth] = useState('')
  const [confirmMonth, setConfirmMonth] = useState('')

  const [inputYear, setInputYear] = useState('')
  const [confirmYear, setConfirmYear] = useState('')

  const date = new Date

  const getDate = date.getDate(); //день
  const getMonth = date.getMonth() //месяц
  const getYear = date.getFullYear() //

  const calcDate = () => {
    setconfirmDay(inputDay)
    setConfirmMonth(inputMonth)
    setConfirmYear(inputYear)
  } 

  let countDayInMonth

  if(inputMonth === '2' && inputYear % 4 === 0){
    countDayInMonth = 29
  }else if(inputMonth === '2'){
    countDayInMonth = 28
  }else if(inputMonth === '4' || 
           inputMonth === '6' || 
           inputMonth === '9' ||
           inputMonth === '11'){
    countDayInMonth = 30
  }else{
    countDayInMonth = 31
  }

  return (
    <div className="wrapper">
      <main className='boxContent'>
        <section className='boxContent__enterData'>
          <div className='boxContent__enterData_day'>
            {inputDay > countDayInMonth ? <p className='boxContent__enterData_day_error'>DAY</p> : <p className='boxContent__enterData_day_correct'>DAY</p>}
            <input
              className={inputDay > countDayInMonth ? 'boxContent__enterData_day_inputError' : 'boxContent__enterData_day_inputCorrect'}
              placeholder='DD'
              type='number'
              value={inputDay}
              onChange={(e) => setInputDay(e.target.value)}
            />
            {inputDay > countDayInMonth ? <p>Must be a valid day</p> : <p></p>}
          </div>

          <div className='boxContent__enterData_month'>
            {inputMonth > 12 ? <p className='boxContent__enterData_month_error'>MONTH</p> : <p className='boxContent__enterData_month_correct'>MONTH</p>}
            <input
              className={inputMonth > 12 ? 'boxContent__enterData_month_inputError' : 'boxContent__enterData_month_inputCorrect'}
              placeholder='MM'
              type='number'
              value={inputMonth}
              onChange={(e) => setInputMonth(e.target.value)}
            />
            {inputMonth > 12 ? <p>Must be a valid month</p> : <p></p>}
          </div>

          <div className='boxContent__enterData_year'>
            {getYear < inputYear ? <p className='boxContent__enterData_year_error'>YEAR</p> : <p className='boxContent__enterData_year_correct'>YEAR</p>}
            <input
              className={getYear < inputYear ? 'boxContent__enterData_year_inputError' : 'boxContent__enterData_year_inputCorrect'}
              placeholder='YY'
              type='number'
              value={inputYear}
              onChange={(e) => setInputYear(e.target.value)}
            />
            {getYear < inputYear ? <p>Must be in the past</p> : <p></p>}
          </div>
        </section>

        <section className='line'>
          <div className='line__lineBlock'></div>
          <button className='line__button' onClick={calcDate}>
            <img src={img}/>
          </button>
        </section>

        <section className='showData'>
          <div className='showData__years'>
            {confirmYear === '' ? <p>--</p> : <p>{confirmYear}</p>}
            <p>years</p>
          </div>

          <div className='showData__months'>
            {confirmMonth === '' ? <p>--</p> : <p>{confirmMonth}</p>}
            <p>months</p>
          </div>

          <div className='showData__days'>
            {confirmDay === '' ? <p>--</p> : <p>{confirmDay}</p>}
            <p>days</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
