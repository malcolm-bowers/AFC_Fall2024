export default function LandingPage() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundImage: "url('./assets/no-signal.webp')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                fontSize: "30px",
            }}>
            <h1
                style={{
                    color: "red",
                    textAlign: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    textShadow: "4px 6px 15px rgba(0, 0, 0, 0.85), 0px 0px 10px rgba(0, 0, 0, 0.6)"
                }}
            >
                Welcome to the Movie Database, your source for movies of all kinds.
            </h1>
        </div>
    )
}