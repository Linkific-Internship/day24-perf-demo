import { useState, memo, useMemo, useCallback } from "react"

// Child component - without memo
const Child = memo(function Child({ name }) {
  console.log("Child rendered!")
  return <div>Name: {name}</div>
})

// Parent component
export default function Home() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  function slowFunction(num) {
  console.log("Slow function running...")
  for (let i = 0; i < 1000000; i++) {} // 1 million, 1 billion nahi
  return num * 2
}

  const result = useMemo(() => {
    return slowFunction(count)
  }, [count])

  const handleClick = useCallback(() => {
  console.log("Button clicked!")
    }, []) 

  return (
  <div className="container">
    <h1>React Performance Demo</h1>

    <div className="card">
      <p><strong>React.memo + useCallback</strong></p>
      <p>The child will only re-render when the name changes</p>
    </div>

    <button className="action" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
    <p>useMemo Result: <strong>{result}</strong></p>

    <div className="card">
      <p><strong>useMemo Demo</strong></p>
      <p>Type with — slow function will not run</p>
    </div>

    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type Something..."
    />

    <Child name="Golu" onClick={handleClick} />
  </div>
)
}