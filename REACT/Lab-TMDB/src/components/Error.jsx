export default function Error() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <h1 style={{
                color: "red",
                textAlign: "center",
                padding: "20px",
                textShadow: "4px 6px 15px rgba(0, 0, 0, 0.85), 0px 0px 10px rgba(0, 0, 0, 0.6)"
            }}>
                Sorry we have run out of butter to keep the machine working...
            </h1>
        </div>
    );
}