<h2 align="center"> ARENAEV VEHICLES NEWS </h2>

<div id="logo" align= "center">
<a>
<object type="image/svg+xml" data="https://st.arenaev.com/i/logo/arenaevcolor-neg.svg"><img src="https://st.arenaev.com/i/logo/arenaevcolor-neg-bg.gif" alt="ArenaEV.com"></object>
<span>ArenaEV.com</span></a>
</div>

<h4 align="center">

🗞️ This is UnOfficial Electric Vehicles News Information Web Scraper. Created By [Mr Nima](https://github.com/DarkMakerofc). </br>

 </h4>
 
 [ Using This Npm Package ]
* [Get All News](#allnews)
* [Get News Using Link](#latest)
* [Get Latest News](#fromlink)


</br>

#### ⬇️ Install Package 
     npm install arenaev-vehicles-news
or 

     yarn add arenaev-vehicles-news

</br>

#### ➡️ Require Package 
     const { EVNEWS } = require('arenaev-vehicles-news')

#### ▶️ Start Package 
     const news = await EVNEWS()
     
     
#### 📝 Get All News List 

<a name= "allnews">

```
news.allnews()  
.then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

```

#### ✅ All News Result 

```
{
   "creator": "MR NIMA",
   "status": true,
   "result": [
     {
          "title": "The EU to impose additional tariffs on Chinese-made EVs if negotiations fall through",
          "link": "https://www.arenaev.com/the_eu_to_impose_additional_tariffs_on_chinesemade_evs_if_negotiations_fall_through-news-3626.php",
          "date": "12 June 2024",
          "image": "https://st.arenaev.com/news/23/12/byd-factory-hungary/-344x215/arenaev_000.jpg",
          "shortDesc": "The Chinese EV exports in Europe are another step closer to higher tariffs. After Turkiye announced its hefty 40% tariff on Chinese car imports a couple of days ago, the European Commission came out with a preliminary decision as well."
     },
     {
          "title": "Apple showcases next-gen CarPlay at WWDC",
          "link": "https://www.arenaev.com/apple_carplay_is_ready_for_revolution-news-3625.php",
          "date": "12 June 2024",
          "image": "https://st.arenaev.com/news/24/06/apple-carplay-ready-for-revolution/-344x215/arenaev_001.jpg",
          "shortDesc": "Apple used its WWDC event to showcase the progress it made with the next generation of CarPlay. Initially announced in 2022 the upcoming CarPlay system is finally coming this year and the company now showed what we can expect from it."
     },
     {
          "title": "Germany's EV industry largest in Europe, China leads globally",
          "link": "https://www.arenaev.com/germanys_ev_industry_largest_in_europe_globally_only_2nd_to_china-news-3624.php",
          "date": "12 June 2024",
          "image": "https://st.arenaev.com/news/24/06/germany-ev-industry-largest-in-europe/-344x215/arenaev_001.jpg",
          "shortDesc": "Germany has solidified its position as Europe's leading electric vehicle manufacturer. In 2023, German automakers produced a staggering 1.27 million electric cars, comprising both battery electric vehicles and plug-in hybrids. This figure places..."
     },
     {
          "title": "Lotus Emeya sets new charging record",
          "link": "https://www.arenaev.com/lotus_emeya_charges_from_10_to_80_in_record_time-news-3623.php",
          "date": "11 June 2024",
          "image": "https://st.arenaev.com/news/24/06/lotus-emeya-charging/-344x215/arenaev_000.jpg",
          "shortDesc": "The Lotus Emeya was unveiled last year and it went on sale in China before orders started in the EU and UK back in March of this year (with deliveries coming between July and September). To drive up some hype (are the order books emptier than..."
     },
     {
          "title": "Alpine A290 unveiling scheduled for June 13 at the 24 Hours of Le Mans",
          "link": "https://www.arenaev.com/alpine_a290_unveiling_scheduled_for_june_13_at_the_24_hours_of_le_mans-news-3622.php",
          "date": "11 June 2024",
          "image": "https://st.arenaev.com/news/24/06/alpine-a290-unveiling-scheduled-for-june-13/-344x215/arenaev_001.jpg",
          "shortDesc": "Alpine is set to unveil its first all-electric urban sports car, the A290, on June 13 at the prestigious 24 Hours of Le Mans. This is a new chapter in Alpine's story as it unveils its first fully electric model."
     },
     {
          "title": "Tesla starts hiring once again, numerous job offerings in sales and services",
          "link": "https://www.arenaev.com/tesla_starts_hiring_once_again_numerous_job_offerings_in_sales_and_services-news-3621.php",
          "date": "10 June 2024",
          "image": "https://st.arenaev.com/news/24/01/tesla-berlin-gigafactory-and-volvo-belgian-plant-on-pause/-344x215/arenaev_001.jpg",
          "shortDesc": "Tesla has been going through a rough patch in the last couple of quarters and the company even resorted to mass layoffs. It is estimated that around 15-20% of Tesla's staff were let go earlier this quarter. Elon Musk even fired the team behind..."
     },
     {
          "title": "Hyundai teases the Inster, the cheap EV version of the Casper",
          "link": "https://www.arenaev.com/hyundai_teases_the_inster_the_cheap_ev_version_of_the_casper-news-3620.php",
          "date": "11 June 2024",
          "image": "https://st.arenaev.com/news/24/06/hyundai-inster-teaser/-344x215/arenaev_000.jpg",
          "shortDesc": "Back in January we heard that Hyundai was working on an EV that would be based on the Casper ICE model sold in Korea. And now the brand has started teasing it, while also revealing its name: Inster. We're not sure why Hyundai thought it a good idea..."
     },
     {
          "title": "XPeng reveals official image of Mona M03",
          "link": "https://www.arenaev.com/xpeng_reveals_official_image_of_mona_m03-news-3619.php",
          "date": "11 June 2024",
          "image": "https://st.arenaev.com/news/24/06/xpeng-reveals-official-image-of-mona-m03/-344x215/arenaev_001.jpg",
          "shortDesc": "XPeng, the Chinese electric vehicle manufacturer, has just revealed the first official image and name of its highly anticipated new model – the XPeng Mona M03. This compact electric sedan is the inaugural model in XPeng's new Mona series, a..."
     },
     {
          "title": "Stellantis posts record sales in Europe",
          "link": "https://www.arenaev.com/stellantis_posts_record_sales_in_europe-news-3618.php",
          "date": "10 June 2024",
          "image": "https://st.arenaev.com/news/24/06/stellantis-posts-record-sales-in-europe/-344x215/arenaev_001.jpg",
          "shortDesc": "European auto giant Stellantis continues its electrifying ascent in 2024, securing an 18.5% market share in the first five months with a 1.8% increase in sales volume compared to 2023. This success is amplified by its leading position in key markets..."
     },
     {
          "title": "Lynk & Co Zero electric sedan teased ahead of official launch",
          "link": "https://www.arenaev.com/lynk___co_zero_electric_sedan_teased_ahead_of_official_launch-news-3617.php",
          "date": "10 June 2024",
          "image": "https://st.arenaev.com/news/24/06/lynk-co-zero-electric-sedan-teased-ahead-of-official-launch/-344x215/arenaev_001.jpg",
          "shortDesc": "Lynk & Co, the Geely and Volvo joint venture brand specializing in plug-in hybrids, is ready to enter the all-electric vehicle arena with its upcoming Zero electric sedan. Set to debut on June 12, the Zero EV has been generating much interest in the..."
     },
     {
          "title": "Turkiye imposes a 40% tariff on Chinese car imports",
          "link": "https://www.arenaev.com/turkey_imposes_a_hefty_40_tariff_on_chinese_car_imports-news-3616.php",
          "date": "09 June 2024",
          "image": "https://st.arenaev.com/news/24/02/byd-price-chopping-spree-han-and-tang-evs-get-cheaper/-344x215/arenaev_001.jpg",
          "shortDesc": "In 2023, Turkey imposed additional tariffs on Chinese EVs and introduced a couple of regulations regarding maintenance and after-market service. Now, the country is imposing 40% tariffs on all Chinese car imports to protect its local..."
     },
     {
          "title": "Musk confirms Tesla Model Y is not getting a refresh this year",
          "link": "https://www.arenaev.com/musk_confirms_tesla_model_y_is_not_getting_major_overhaul_this_year_-news-3615.php",
          "date": "10 June 2024",
          "image": "https://st.arenaev.com/news/24/06/tesla-model-y-no-major-overhaul-this-year/-344x215/arenaev_001.jpg",
          "shortDesc": "Tesla enthusiasts anticipating a major makeover of its most popular Model Y electric crossover will have to wait a bit longer. CEO Elon Musk dispelled rumors swirling around an imminent refresh of the vehicle, stating definitively that no such thing..."
     },
     {
          "title": "Hyundai Ioniq 5 77.4 kWh AWD review",
          "link": "https://www.arenaev.com/hyundai_ioniq_5_774_kwh_awd_review-news-3598.php",
          "date": "09 June 2024",
          "image": "https://st.arenaev.com/news/24/05/hyundai-ioniq-5-review/-344x215/arenaev_149.jpg",
          "shortDesc": "In recent years Hyundai managed to boost its reputation significantly, its car now desirable to a huge number of people. One of the models that contributed a lot to this is the Ioniq 5, which we are reviewing today. It is a model that stands out..."
     },
     {
          "title": "Huawei and Chery reveal their answer to Tesla Model Y - Luxeed S9",
          "link": "https://www.arenaev.com/huawei_and_chery_reveal_their_answer_to_tesla_model_y__luxeed_s9-news-3614.php",
          "date": "07 June 2024",
          "image": "https://st.arenaev.com/news/24/06/huawei-and-chery-reveal-luxeed-s9/-344x215/arenaev_001.jpg",
          "shortDesc": "Huawei and Chery have unveiled their latest creation – the Luxeed S9. This sleek SUV coupe is poised to become a direct competitor to the popular Tesla Model Y, boasting an impressive array of features and technology at a competitive price."
     },
     {
          "title": "Kia EV4 sedan spotted for the first time, looks a lot like the initial concept",
          "link": "https://www.arenaev.com/kia_ev4_sedan_spotted_for_the_first_time_looks_a_lot_like_the_initial_concept-news-3613.php",
          "date": "06 June 2024",
          "image": "https://st.arenaev.com/news/24/06/kia-ev4-spotted/-344x215/arenaev_000.jpg",
          "shortDesc": "Kia is building a robust EV lineup and has already announced the EV5, EV9 EV3 and the refreshed EV6. What's missing is the EV4 - Kia's take on electric sedans. Well, we now get to see one in the wild, although fully wrapped in camo."
     },
     {
          "title": "Xiaomi ramps up SU7 production, offers lucrative salaries to acquire more workers",
          "link": "https://www.arenaev.com/xiaomi_ramps_up_su7_production_offers_lucrative_salaries_and_hires_more_workers-news-3612.php",
          "date": "07 June 2024",
          "image": "https://st.arenaev.com/news/24/06/xiaomi-offers-lucrative-salaries-and-hires-more-workers/-344x215/arenaev_001.jpg",
          "shortDesc": "Demand surges for Xiaomi's SU7 model. And trying to keep up with its fast-growing order book, Xiaomi is doing all it can to ramp up production. The company is now looking for new factory workers, offering attractive salaries and bonuses, while also..."
     },
     {
          "title": "Rivian refreshes the R1S and R1T with more power, performance, and range",
          "link": "https://www.arenaev.com/rivian_refreshes_the_r1s_and_r1t_with_more_power_performance_and_range-news-3611.php",
          "date": "06 June 2024",
          "image": "https://st.arenaev.com/news/24/06/rivian-r1s-r1t-refresh/-344x215/arenaev_000.jpg",
          "shortDesc": "Rivian's much-anticipated refresh for the R1S and R1T is finally here. The company calls the new models \"second generation\", as they have allegedly been \"completely reengineered through hundreds of hardware improvements, performance upgrades, a..."
     },
     {
          "title": "Ford Explorer EV production kicks off in Germany with new battery",
          "link": "https://www.arenaev.com/lfppowered_ford_explorer_ev_production_kicks_off_in_germany-news-3610.php",
          "date": "06 June 2024",
          "image": "https://st.arenaev.com/news/24/06/lfp-powered-ford-explorer-ev-production-kicks-off/-344x215/arenaev_001.jpg",
          "shortDesc": "The all-electric Ford Explorer has finally rolled off the production line in Cologne, Germany, marking a significant milestone for Ford's European EV lineup. The model was delayed to accommodate a switch from nickel-manganese-cobalt (NMC) to..."
     },
     {
          "title": "Zeekr to soon start shipping its RHD Zeekr X, first stop probably Hong Kong",
          "link": "https://www.arenaev.com/zeekr_to_soon_start_shipping_its_rhd_zeekr_x_first_stop_probably_hong_kong-news-3609.php",
          "date": "06 June 2024",
          "image": "https://st.arenaev.com/news/24/06/rhd-zeekr-x-production-start/-344x215/arenaev_000.jpg",
          "shortDesc": "The Zeekr X was announced a little over a year ago and the first vehicles hit the streets last fall, but only in mainland China and Europe. Today, the company announced it started production of the right-hand drive model."
     },
     {
          "title": "Mercedes-Benz forges alliance with Chinese Momenta for next-gen electric CLA",
          "link": "https://www.arenaev.com/mercedesbenz_forges_alliance_with_chinese_momenta_for_nextgen_electric_cla-news-3608.php",
          "date": "06 June 2024",
          "image": "https://st.arenaev.com/news/24/06/mercedes-benz-forges-alliance-with-chinese-momenta/-344x215/arenaev_001.jpg",
          "shortDesc": "Mercedes-Benz has announced its collaboration with Chinese startup Momenta to develop a state-of-the-art intelligent driving solution. This groundbreaking system is set to be integrated into Mercedes-Benz's forthcoming all-electric CLA model,..."
     }
   ]
}
```
</a>

</br>
</br>


#### 📝 Fetch Latest News

<a name= "latest">

```
news.latest_news()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

```

#### ✅ Latest News Result

```
{
   "creator": "MR NIMA",
   "status": true,
   "result": {
     "title": "The EU to impose additional tariffs on Chinese-made EVs if negotiations fall through",
     "date": "12 June 2024",
     "link": "https://www.arenaev.com/the_eu_to_impose_additional_tariffs_on_chinesemade_evs_if_negotiations_fall_through-news-3626.php",
     "image": "https://st.arenaev.com/news/23/12/byd-factory-hungary/-828x414/arenaev_000.jpg",
     "short_desc": "Each manufacturer will get an individual import tax.",
     "full_desc": "The Chinese EV exports in Europe are another step closer to higher tariffs. After Turkiye announced its hefty 40% tariff on Chinese car imports a couple of days ago, the European Commission came out with a preliminary decision as well.\nThe European Commission started an investigation back in October last year to find out if Chinese EV makers are benefiting from unfair subsidies by the Chinese government. And as expected, the commission found that subsidies received by the Chinese BEV manufacturers are skewing the playing field and are slowly eroding the local BEV manufacturing.\nThat's why the commission will seek to negotiate with Chinese authorities to convince them to discontinue the practices it deems unfair. Should those negotiations fail it suggests imposing additional tariffs. The two parties will try to settle this in a WTO (World Trade Organization) compatible manner. The issue should be resolved by July 4 and if not, the following tariffs will be imposed.\nBYD will get a 17.4% tax, Geely - 20% and SAIC - 38.1%. Other Chinese manufacturers will also be subjected to increased tariffs. Those who assisted the EU Commission's investigation but weren't sampled will be subject to a weighted average of 21% tax, while those who refused to cooperate will get the highest 38.1% tax.\nThere are exceptions, of course. For instance, Tesla will likely get individually calculated duty for vehicles produced in China and imported into the EU. Other manufacturers are free to file a request for a review and will get an individually calculated import duty within 9 months.\n"
   }
}

```
</a>
</br>
</br>

#### 📝 Get News From Link

<a name= "fromlink">

```
news.fromlink("https://www.arenaev.com/the_eu_to_impose_additional_tariffs_on_chinesemade_evs_if_negotiations_fall_through-news-3626.php")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### ✅ Latest News Result

```
{
   "creator": "MR NIMA",
   "status": true,
   "result": {
     "title": "The EU to impose additional tariffs on Chinese-made EVs if negotiations fall through",
     "date": "12 June 2024",
     "link": "https://www.arenaev.com/the_eu_to_impose_additional_tariffs_on_chinesemade_evs_if_negotiations_fall_through-news-3626.php",
     "image": "https://st.arenaev.com/news/23/12/byd-factory-hungary/-828x414/arenaev_000.jpg",
     "short_desc": "Each manufacturer will get an individual import tax.",
     "full_desc": "The Chinese EV exports in Europe are another step closer to higher tariffs. After Turkiye announced its hefty 40% tariff on Chinese car imports a couple of days ago, the European Commission came out with a preliminary decision as well.\nThe European Commission started an investigation back in October last year to find out if Chinese EV makers are benefiting from unfair subsidies by the Chinese government. And as expected, the commission found that subsidies received by the Chinese BEV manufacturers are skewing the playing field and are slowly eroding the local BEV manufacturing.\nThat's why the commission will seek to negotiate with Chinese authorities to convince them to discontinue the practices it deems unfair. Should those negotiations fail it suggests imposing additional tariffs. The two parties will try to settle this in a WTO (World Trade Organization) compatible manner. The issue should be resolved by July 4 and if not, the following tariffs will be imposed.\nBYD will get a 17.4% tax, Geely - 20% and SAIC - 38.1%. Other Chinese manufacturers will also be subjected to increased tariffs. Those who assisted the EU Commission's investigation but weren't sampled will be subject to a weighted average of 21% tax, while those who refused to cooperate will get the highest 38.1% tax.\nThere are exceptions, of course. For instance, Tesla will likely get individually calculated duty for vehicles produced in China and imported into the EU. Other manufacturers are free to file a request for a review and will get an individually calculated import duty within 9 months.\n"
   }
}
```
</a>

# Author : [@mrnima](https://github.com/darkmakerofc)

All news rights belong to [www.arenaev.com](https://www.arenaev.com) site