import { FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa'

export const SocialLinks = () => {
    return(
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Mes réseaux sociaux</h3>

            <ul className="mt-5 mb-10">
                <li className='flex items-center'><FaYoutube/><a className="hover:text-[blue]" href="https://youtube.com">Youtube</a></li>
                <li className='flex items-center'><FaTwitter/><a className="hover:text-[blue]" href="https://twitter.com">Twitter</a></li>
                <li className='flex items-center'><FaDiscord/><a className="hover:text-[blue]" href="https://discord.gg">Discord</a></li>
            </ul>
        </section>
    )
}