import React from "react";
import SectionHero from "../components/SectionHero";
import PromoGrid from "../components/PromoGrid";
import CategoryGrid from "../components/CategoryGrid";
import EditorialSpotlight from "../components/EditorialSpotlight";
import ProductHighlights from "../components/ProductHighlights";
import { sectionContent } from "../data/sectionContent";

const KidsPage = () => {
  const content = sectionContent.kids;

  return (
    <div className="space-y-16 px-4">
      <SectionHero {...content.hero} />
      <PromoGrid promos={content.promos} />
      <CategoryGrid {...content.categorySection} />
      <EditorialSpotlight {...content.editorial} />
      <ProductHighlights {...content.highlights} />
    </div>
  );
};

export default KidsPage;
