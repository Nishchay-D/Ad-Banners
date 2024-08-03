// components/EditBannerTemplateBs.tsx

import React, { useState } from "react";

type Banner = {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
};

type EditBannerTemplateBsProps = {
  banner: Banner;
  onSave: (updatedBanner: Banner) => void;
  onCancel: () => void;
};

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  banner,
  onSave,
  onCancel,
}) => {
  const [editedBanner, setEditedBanner] = useState<Banner>(banner);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedBanner({ ...editedBanner, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedBanner({ ...editedBanner, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#363737",
        boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.2)",
        padding: "30px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        zIndex: 1000,
        transform: "translateY(0)",
        transition: "transform 0.3s ease",
      }}
    >
      <h3 style={{ margin: "0 0 20px", color: "#FAF9F6" }}>Edit Banner</h3>
      <p style={{color: "#FAF9F6"}}>Title</p>
      <input
        type="text"
        name="title"
        value={editedBanner.title}
        onChange={handleChange}
        placeholder="Title"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "1em",
        }}
      />
      <p style={{color: "#FAF9F6"}}>Description</p>
      <textarea
        name="description"
        value={editedBanner.description}
        onChange={handleChange}
        placeholder="Description"
        rows={3}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "1em",
        }}
      />
      <p style={{color: "#FAF9F6"}}>Button</p>
      <input
        type="text"
        name="cta"
        value={editedBanner.cta}
        onChange={handleChange}
        placeholder="CTA"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "1em",
        }}
      />
      <p style={{color: "#FAF9F6"}}>Images</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{
          marginBottom: "15px",
          fontSize: "1em",
          display: "block",
          width: "100%",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={handleSave}
          style={{
            padding: "10px 25px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            flex: 1,
            marginRight: "10px",
          }}
        >
          Save
        </button>
        <button
          onClick={onCancel}
          style={{
            padding: "10px 25px",
            background: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            flex: 1,
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
