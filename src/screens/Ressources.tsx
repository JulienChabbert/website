import { PiLink } from 'react-icons/pi'


export const Ressources = () => {
    return (
        <main>
            <h3 className="mb-4 font-extrabold text-3xl">Ressources de la chaine</h3>

            <ul>
                <li className="flex items-center"><PiLink className="mr-3"/><a className="hover:underline" href="https://Python.org">Telecharger Python</a></li>
                <li className="flex items-center"><PiLink className="mr-3"/><a className="hover:underline" href="https://github.com">Telecharger Pack ressources pygame</a></li>
                <li className="flex items-center"><PiLink className="mr-3"/><a className="hover:underline" href="game.html">Jouer a Snake</a></li>
            </ul>
        </main>
    )
}