import { Button } from './components/Button'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl text-white mb-4">Button Variants</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
export default App