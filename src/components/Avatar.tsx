import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

//Passando todas as props de uma imagem por meio do ImgHTLAttributes
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
       {...props}
        />
    )
}