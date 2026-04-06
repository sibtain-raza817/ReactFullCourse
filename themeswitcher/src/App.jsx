import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4">
        <div className="max-w-md mx-auto">
          <div className="flex justify-end mb-8 p-4">
            <ThemeBtn />
          </div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App