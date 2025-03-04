const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => (
  parts.map((part) => <Part part={part} key={part.id} />)
)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return <p><strong>Number of exercises {total}</strong></p>
}

const Course = ({ course }) => {
  const { id, name, parts } = course

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course