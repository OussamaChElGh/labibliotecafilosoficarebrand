import "./globals.css"; // Ensure styles are applied

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: "120px" }}>
      <section className="hero">
        <h1 className="hero-title">
          Descubre el <span className="text-gold">Conocimiento</span>
        </h1>
        <p className="hero-subtitle">
          Explora la colección más completa de ensayos filosóficos, resúmenes de libros clásicos y recursos para entender el mundo.
        </p>
        <div className="hero-actions">
          <a href="/articulos" className="btn-primary">Explorar Artículos</a>
        </div>
      </section>

      <section className="featured-section">
        <h2>Últimas Reflexiones</h2>
        <div className="card-grid">
          {/* Skeleton Cards for initial preview */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-panel article-card">
              <div className="card-image-placeholder"></div>
              <div className="card-content">
                <h3>Título del Artículo {i}</h3>
                <p>Un breve extracto de la reflexión filosófica para atrapar al lector...</p>
                <a href={`/articulo-${i}`} className="read-more">Leer más →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
