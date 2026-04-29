import { useState, useRef } from 'react'

const ALL_ITEMS = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
}))

const ITEM_HEIGHT = 48
const VISIBLE_COUNT = 10

export default function VirtualList() {
  const [scrollTop, setScrollTop] = useState(0)

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT)
  const visibleItems = ALL_ITEMS.slice(startIndex, startIndex + VISIBLE_COUNT)

  return (
    <div className="container">
      <h1>Virtual List</h1>
      <p>10,000 items — only {VISIBLE_COUNT} Rows are rendered</p>
      <br />
      <div
        onScroll={(e) => setScrollTop(e.target.scrollTop)}
        style={{
          height: 400,
          overflowY: 'auto',
          border: '1px solid #e2e8f0',
          borderRadius: 8,
          position: 'relative'
        }}
      >
        <div style={{ height: ALL_ITEMS.length * ITEM_HEIGHT }}>
          {visibleItems.map((item, i) => (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: (startIndex + i) * ITEM_HEIGHT,
                width: '100%',
                height: ITEM_HEIGHT,
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
                borderBottom: '1px solid #e2e8f0',
                background: item.id % 2 === 0 ? '#f7fafc' : '#fff',
              }}
            >
              #{item.id} — {item.name}
            </div>
          ))}
        </div>
      </div>
      <p style={{ marginTop: 12, color: '#718096', fontSize: '0.85rem' }}>
       There are only {VISIBLE_COUNT} nodes in the DOM - check the Devtools Elements tab
      </p>
    </div>
  )
}