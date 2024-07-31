import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const socials = [
    {icon: <FaGithub />, path: "https://github.com/irfan19977" },
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/irfan-adi-prastyo2705" },
    {icon: <FaInstagram />, path: "https://www.instagram.com/mas_irf34?igsh=c2t3Y3NoNXYydHYy" },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social