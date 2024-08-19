import './App.css'
import Counter from './componets/Counter'


function App() {


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Counter App</h1>
        <div className="flex space-x-4">
          <Counter id={1} />
          <Counter id={2} />
          <Counter id={3} />
        </div>
      </div>
    </>
  )
}

export default App
