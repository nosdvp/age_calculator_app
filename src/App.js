import { useState } from 'react';
import './App.css';
import img from './img/icon-arrow.svg'

function App() {

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const date = new Date

  const getDate = date.getDate(); //день
  const getMonth = date.getMonth() //месяц
  const getYear = date.getFullYear() //

  console.log(getYear)

  return (
    <div className="wrapper">
      <main className='boxContent'>
        <section className='boxContent__enterData'>
          <div className='boxContent__enterData_day'>
            {day > 31 ? <p className='boxContent__enterData_day_error'>DAY</p> : <p className='boxContent__enterData_day_correct'>DAY</p>}
            <input
              className={day > 31 ? 'boxContent__enterData_day_inputError' : 'boxContent__enterData_day_inputCorrect'}
              placeholder='DD'
              type='number'
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            {day > 31 ? <p>Must be a valid day</p> : <p></p>}
          </div>

          <div className='boxContent__enterData_month'>
            {month > 12 ? <p className='boxContent__enterData_month_error'>MONTH</p> : <p className='boxContent__enterData_month_correct'>MONTH</p>}
            <input
              className={month > 12 ? 'boxContent__enterData_month_inputError' : 'boxContent__enterData_month_inputCorrect'}
              placeholder='MM'
              type='number'
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            {month > 12 ? <p>Must be a valid month</p> : <p></p>}
          </div>

          <div className='boxContent__enterData_year'>
            {getYear < year ? <p className='boxContent__enterData_year_error'>YEAR</p> : <p className='boxContent__enterData_year_correct'>YEAR</p>}
            <input
              className={getYear < year ? 'boxContent__enterData_year_inputError' : 'boxContent__enterData_year_inputCorrect'}
              placeholder='YY'
              type='number'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            {getYear < year ? <p>Must be in the past</p> : <p></p>}
          </div>
        </section>

        <section className='line'>
          <div className='line__lineBlock'></div>
          <button className='line__button'>
            <img src={img}/>
          </button>
        </section>

        <section className='showData'>
          <div className='showData__years'>
            {year === '' ? <p>--</p> : <p>{year}</p>}
            <p>years</p>
          </div>

          <div className='showData__months'>
            {month === '' ? <p>--</p> : <p>{month}</p>}
            <p>months</p>
          </div>

          <div className='showData__days'>
            {day === '' ? <p>--</p> : <p>{day}</p>}
            <p>days</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
