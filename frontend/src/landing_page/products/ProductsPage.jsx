import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={"media/images/products-kite.png"}
        head={"Kite"}
        headDescription={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        googlePlayURL={
          "https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        }
        appleStoreURL={
          "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        }
        learnMoreURL={"https://kite-demo.zerodha.com/dashboard"}
        tryDemoURL={"https://kite-demo.zerodha.com/dashboard"}
        tryDemo={"Try Demo"}
        learnMore={"Learn More"}
      />
      <RightSection
        imageURL={"media/images/products-console.png"}
        head={"Console"}
        headDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnMore={"Learn More"}
        learnMoreUrl={"/product"}
      />
      <LeftSection
        imageURL={"media/images/products-coin.png"}
        head={"Coin"}
        headDescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        googlePlayURL={
          "https://play.google.com/store/apps/details?id=com.zerodha.coin"
        }
        appleStoreURL={
          "https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554"
        }
        tryDemo={"Coin"}
        tryDemoURL={"https://coin.zerodha.com/"}
      />
      <RightSection
        imageURL={"media/images/products-kiteconnect.png"}
        head={"Kite Connect API"}
        headDescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnMore={"Learn More"}
        learnMoreUrl={"https://kite.trade/"}
      />
      <LeftSection
        imageURL={"media/images/varsity-products.png"}
        head={"Varsity mobile"}
        headDescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        googlePlayURL={
          "https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        }
        appleStoreURL={
          "https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
        }
      />
      <Universe />
    </>
  );
}

export default ProductsPage;
