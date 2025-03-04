import { useState } from 'react'

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
)

const StatisticLine = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{text === "Positive" ? `${value}%` : value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, count, average, positive }) => {
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine value={good} text="Good" />
          <StatisticLine value={neutral} text="Neutral" />
          <StatisticLine value={bad} text="Bad" />
          <StatisticLine value={count} text="All" />
          <StatisticLine value={average} text="Average" />
          <StatisticLine value={positive} text="Positive" />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)
  const [average, setAverage] = useState(0)
  const [avgSum, setAvgSum] = useState(0)
  const [positive, setPositive] = useState(0)

  const manageClick = (state, setState, avgWeight) => {
    const newAvgSum = avgSum + avgWeight
    setState(state + 1)
    setCount(count + 1)
    setAvgSum(newAvgSum)
    setAverage(newAvgSum/(count + 1))
    avgWeight === 1 ? setPositive((good + 1) * 100 / (count + 1)) : setPositive(good * 100 / (count + 1))
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button label="Good" onClick={() => manageClick(good, setGood, 1)} />
      <Button label="Neutral" onClick={() => manageClick(neutral, setNeutral, 0)} />
      <Button label="Bad" onClick={() => manageClick(bad, setBad, -1)} />
      {
        count ?
        <Statistics good={good} neutral={neutral} bad={bad} count={count} average={average} positive={positive} /> :
        <p>No feedback given</p>
      }
      
    </div>
  )
}

export default App