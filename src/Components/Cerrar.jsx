const CloseCircle = ({ size = 40, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#f8cfcf",
        border: "4px solid white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxSizing: "border-box",
        position: "absolute",
        top: "-8px",
        right: "-8px"
      }}
    >
      <span
        style={{
          fontSize: size * 0.3,
          fontWeight: "bold",
          color: "black",
          lineHeight: 1
        }}
      >
        ×
      </span>
    </div>
  );
};

export default CloseCircle;
