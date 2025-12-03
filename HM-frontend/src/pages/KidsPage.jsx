import React from "react";
import { useOutletContext } from "react-router-dom";
import SectionHero from "../components/SectionHero";
import PromoGrid from "../components/PromoGrid";
import CategoryGrid from "../components/CategoryGrid";
import EditorialSpotlight from "../components/EditorialSpotlight";
import ProductHighlights from "../components/ProductHighlights";
import { sectionContent } from "../data/sectionContent";

const KidsPage = () => {
  const {
    searchQuery = "",
    favourites = [],
    onToggleFavourite,
    onAddToCart,
  } = useOutletContext() || {};

  const content = sectionContent.kids;

  return (
    <div className="space-y-16 px-4">
      <SectionHero {...content.hero} />
      <PromoGrid promos={content.promos} />
      <CategoryGrid {...content.categorySection} />
      <EditorialSpotlight {...content.editorial} />
      <ProductHighlights
        {...content.highlights}
        searchQuery={searchQuery}
        favourites={favourites}
        onToggleFavourite={onToggleFavourite}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default KidsPage;
