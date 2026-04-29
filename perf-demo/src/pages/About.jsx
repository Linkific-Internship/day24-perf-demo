export default function About() {
  const images = [
    "https://picsum.photos/seed/1/400/300",
    "https://picsum.photos/seed/2/400/300",
    "https://picsum.photos/seed/3/400/300",
    "https://picsum.photos/seed/4/400/300",
    "https://picsum.photos/seed/5/400/300",
    "https://picsum.photos/seed/6/400/300",
  ]

  return (
    <div className="container">
      <h1>Lazy Image Loading</h1>
      <p>Scroll  — Images will load when visible</p>

      {images.map((src, index) => (
        <div key={index} style={{ margin: "20px 0" }}>
          <img
            src={src}
            alt={`Image ${index + 1}`}
            loading="lazy"
            width="400"
            height="300"
            style={{ borderRadius: "8px", width: "100%" }}
          />
          <p>Image {index + 1}</p>
        </div>
      ))}
    </div>
  )
}