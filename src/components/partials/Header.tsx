import Image from "next/image";
import { FaSearch } from 'react-icons/fa'
import styles from '@/styles/Home.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src="/logo.png" alt="logo" width={300} height={150} />
            <button>
                <FaSearch color="white" size={30} />
            </button>
        </div>
    )
}