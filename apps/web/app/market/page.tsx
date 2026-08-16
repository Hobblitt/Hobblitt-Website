import { marketListings } from "@/content/market";
import { MarketHeader } from "@/components/market/market-header";
import { FeaturedListing } from "@/components/market/featured-listing";
import { StandardIndex } from "@/components/market/standard-index";
import { OffMenuRequest } from "@/components/market/off-menu-request";

export default function MarketPage() {
  // Split data based on the 'featured' flag
  const featuredListing = marketListings.find((l) => l.featured);
  const standardListings = marketListings.filter((l) => !l.featured);

  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col px-margin py-10 md:py-16">
      {/* 1. Broadsheet Header */}
      <MarketHeader />

      {/* 2. Featured Asset (if one exists in the data) */}
      {featuredListing && <FeaturedListing listing={featuredListing} />}

      {/* 3. The Standard Roster Table */}
      <StandardIndex listings={standardListings} />

      {/* 4. The Telegraph Custom Request Slip */}
      <OffMenuRequest />
    </div>
  );
}
