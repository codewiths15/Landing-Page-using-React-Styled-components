import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { Socialstyles } from './styles/Social.styed'

export default function SocialIcons(){
    return(
    <Socialstyles>
        <li>
            <a href="https://www.twitter.com">
                <FaTwitter/>
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com">
                <FaFacebook/>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com">
                <FaLinkedin/>
            </a>
        </li>
    </Socialstyles>
    )
}