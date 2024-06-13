const { EVNEWS } = require('arenaev-vehicles-news');

async function npmtes(){

    const news = await EVNEWS()
    console.log(await news.allnews())
    console.log(await news.latest_news())
    console.log(await news.fromlink("https://www.arenaev.com/the_eu_to_impose_additional_tariffs_on_chinesemade_evs_if_negotiations_fall_through-news-3626.php"))
    
}
npmtes()