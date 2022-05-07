import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App () {
  const [questions, setQuestions] = useState(data)
  const dataExtraction = data.map(({ id, title, info }) => {
    return <SingleQuestion key={id} title={title} info={info} />
  })
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section>
          {dataExtraction}
        </section>
      </div>
    </main>
  )
}

export default App
