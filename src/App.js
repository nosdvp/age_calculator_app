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

  const [buttonStyle, setButtonStyle] = useState('line__buttonCorrect')

  const [errorMessage, setErrorMessage] = useState('')

  const [stateForLineYearly, setStateForLineYearly] = useState('showData__years_default')
  const [stateForLineMonth, setStateForLineMonth] = useState('showData__months_default')
  const [stateForLineDay, setStateForLineDay] = useState('showData__days_default')

  const date = new Date

  const getDate = date.getDate(); 
  const getMonth = date.getMonth() + 1;
  const getYear = date.getFullYear();

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

  const calcDate = () => {

    if(Number(inputDay) === getDate){
      setconfirmDay(0)
    }else if(Number(inputDay) < getDate){
      setconfirmDay(getDate - Number(inputDay))
    }else{
      setconfirmDay(countDayInMonth - (Number(inputDay) - getDate))
    }

    if(Number(inputMonth) === getMonth && Number(inputDay) === getDate){
      setConfirmMonth(0)
    }else if(Number(inputMonth) === getMonth){
      setConfirmMonth(0)
    }else if(Number(inputMonth) < getMonth && Number(inputDay) <= getDate){
      setConfirmMonth(getMonth - inputMonth)
    }else if(Number(inputMonth) < getMonth && Number(inputDay) > getDate){
      setConfirmMonth(getMonth - inputMonth - 1)
    }else if(Number(inputMonth) > getMonth && Number(inputDay) <= getDate){
      setConfirmMonth(12 - (Number(inputMonth) - getMonth))
    }else{
      setConfirmMonth(12 - (Number(inputMonth) - getMonth) - 1)
    }

    if(Number(inputMonth) > getMonth ||
      (Number(inputMonth) === getMonth && Number(inputDay) > getDate)
    ){
      setConfirmYear(getYear - Number(inputYear) - 1)
    }else{
      setConfirmYear(getYear - Number(inputYear))
    }
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

        <section className='boxContent__error'>
          <p>{errorMessage}</p>
        </section>

        <section className='line'>
          <div className='line__lineBlock'></div>
          <button className={buttonStyle} onClick={() => {
            if (inputDay === '' || inputMonth === '' || inputYear === '') {
              setButtonStyle('line__buttonIncorrect')
              setErrorMessage('Please text you date of birdth')
              setStateForLineYearly('showData__years_error')
              setStateForLineMonth('showData__months_error')
              setStateForLineDay('showData__days_error')
            } else {
              setButtonStyle('line__buttonCorrect')
              calcDate()
              setErrorMessage('')
              setStateForLineYearly('showData__years_default')
              setStateForLineMonth('showData__months_default')
              setStateForLineDay('showData__days_default')
            }
            }}>
            <img src={img}/>
          </button>
        </section>

        <section className='showData'>
          <div className='showData__years'>
            {confirmYear === '' ? <p className={stateForLineYearly}>--</p> : <p className='showData__years_default'>{confirmYear}</p>}
            <p>years</p>
          </div>

          <div className='showData__months'>
            {confirmMonth === '' ? <p className={stateForLineMonth}>--</p> : <p className='showData__months_default'>{confirmMonth}</p>}
            <p>months</p>
          </div>

          <div className='showData__days'>
            {confirmDay === '' ? <p className={stateForLineDay}>--</p> : <p className='showData__days_default'>{confirmDay}</p>}
            <p>days</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
