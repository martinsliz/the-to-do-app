import { useState } from 'react'
import ListHeader from './components/ListHeader'
import './index.css'

function App() {
  return (
    <>
      <div className="app">
        <ListHeader listName={'🛫 Vacation Checklist'} />
      </div>
    </>
  )
}

export default App
