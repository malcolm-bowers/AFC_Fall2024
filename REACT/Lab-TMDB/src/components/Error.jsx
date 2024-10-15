export default function Error() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundPosition: "center center",
            height: "100vh",
            backgroundImage: "url('/src/assets/no-signal.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            fontSize: "30px",
        }}>
            <h1 style={{
                color: "red",
                textAlign: "center",
                padding: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                textShadow: "4px 6px 15px rgba(0, 0, 0, 0.85), 0px 0px 10px rgba(0, 0, 0, 0.6)"
            }}>
                Sorry we have run out of butter to keep the machine working...
            </h1>
        </div>
    );
}