import { About } from "../components/About"
import { YoutubeVideo } from "../components/YoutubeVideo"
import { SocialLinks } from "../components/SocialLinks"
import { DailymotionVideo } from "../components/DailymotionVideo"
import { Works } from '../components/Works'

export const Home = () => {
    return (
        
        <main>
            <About/>
            <YoutubeVideo id="Wi4HyNsVSJ8"/>
            <YoutubeVideo id="aFV3NaS5nhk"/>
            <SocialLinks/>
        </main>
    )
}