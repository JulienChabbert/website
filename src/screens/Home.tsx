import { About } from "../components/About"
import { YoutubeVideo } from "../components/YoutubeVideo"
import { SocialLinks } from "../components/SocialLinks"
import { DailymotionVideo } from "../components/DailymotionVideo"

export const Home = () => {
    return (
        <main>
            <About/>
            <YoutubeVideo id="Wi4HyNsVSJ8"/>
            <YoutubeVideo id="aFV3NaS5nhk"/>
            <DailymotionVideo id="x3lnp8j?"/>
            <SocialLinks/>
        </main>
    )
}