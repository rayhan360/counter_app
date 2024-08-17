import './App.css'
import Counter from './componets/Counter'
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Counter App</h1>
        <div className="flex space-x-4">
          <Counter id={1} />
          <Counter id={2} />
          <Counter id={3} />
        </div>
        <div>
          <p>Window Width: {width}px</p>
          <p>Window Height: {height}px</p>
        </div>
      </div>
    </>
  )
}

export default App
