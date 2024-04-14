import { useState } from 'react'

import * as FAIcons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Icon.module.css'

function Icon() {
	const [icon, setIcon] = useState(null)

	const iconList = Object.keys(FAIcons)

	const handleClick = () => {
		setTimeout(() => {
			const randomIcon =
				FAIcons[iconList[Math.floor(Math.random() * iconList.length)]]
			setIcon(randomIcon)
		}, 3000)
	}

	return (
		<div className={classes.container}>
			<div className={classes['icon-wrapper']}>
				{icon && <FontAwesomeIcon icon={icon} size='4x' />}
			</div>
			<button className={classes.button} onClick={handleClick}>
				Generate random icon
			</button>
		</div>
	)
}

export default Icon
