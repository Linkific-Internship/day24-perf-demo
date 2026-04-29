# React Performance Optimization Demo

Live Demo: https://perf-demo.netlify.app

## What I Built
A React app demonstrating core performance optimization techniques.

## Techniques Implemented

### 1. React.memo
- Prevents unnecessary re-renders when props don't change
- Demo: Click counter — Child component does not re-render

### 2. useMemo
- Caches expensive calculation results
- Demo: Type in input — calculation does not re-run

### 3. useCallback
- Keeps function reference stable across renders
- Demo: Unrelated state change does not re-render memo'd child

### 4. Code Splitting (React.lazy + Suspense)
- Each page loads as separate JS chunk
- Demo: Check Network tab — chunks load on demand

### 5. Virtual List
- 10,000 items — only 10 rows render in DOM at once
- Built without external library using Intersection Observer logic

### 6. Lazy Image Loading
- Images load only when visible in viewport
- Uses native loading="lazy" attribute

## Tech Stack
- React 18
- Vite
- Netlify (deployment)

## Key Learnings
- React.memo only helps when props are stable
- useCallback is needed to make memo work with callbacks
- Code splitting reduces initial bundle size
- Virtualization is critical for large lists