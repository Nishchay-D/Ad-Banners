// pages/index.tsx

import React, { useState } from "react";
import AdBanner from "../components/AdBanner";
import EditBannerTemplateBs from "../components/EditBannerTemplateBs";
import bannerData from "../public/banners.json";

type Banner = {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
};

const Home: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(bannerData);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: Banner) => {
    setBanners((prevBanners) =>
      prevBanners.map((b) => (b.id === updatedBanner.id ? updatedBanner : b))
    );
    setEditingBanner(null);
  };

  const handleCancel = () => {
    setEditingBanner(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#FAF9F6"}}>
        Ad Banners
      </h1>
      {banners.map((banner) => (
        <AdBanner
          key={banner.id}
          {...banner}
          onEdit={() => handleEdit(banner)}
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Home;
