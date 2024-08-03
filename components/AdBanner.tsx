// components/AdBanner.tsx

import React from "react";

type AdBannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
};

const AdBanner: React.FC<AdBannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
  return (
    <div
      className="ad-banner"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        borderRadius: "12px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
      }}
    >
      <div style={{ flex: "1", minWidth: "250px" }}>
        <h2 style={{ margin: "0 0 10px", fontSize: "1.8em", color: "#fff" }}>
          {title}
        </h2>
        <p style={{ margin: "0 0 10px", color: "#ddd" }}>{description}</p>
        <button
          style={{
            padding: "12px 25px",
            background: "#0070f3",
            color: "#fff",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1em",
          }}
        >
          {cta}
        </button>
      </div>
      <img
        src={image}
        alt={title}
        style={{
          maxWidth: "200px",
          borderRadius: "10px",
          flexShrink: 0,
        }}
      />
      <button
        onClick={onEdit}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
      >
        🖍
      </button>
    </div>
  );
};

export default AdBanner;
