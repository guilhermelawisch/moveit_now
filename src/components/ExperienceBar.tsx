import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';
import { CompletedChallenges } from './CompletedChallenges';

export function ExperienceBar() {
	const { currentExperience, experienceNextLevel } = useContext(ChallengesContext);

	const percentToNextLevel = Math.round(currentExperience * 100) / experienceNextLevel;

	return (
		<header className={styles.experienceBar}>
			<span>0 xp</span>
			<div>
				<div style={{ width: `${percentToNextLevel}%` }}/>

				<span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
					{currentExperience} xp
				</span>
			</div>
			<span>{experienceNextLevel} xp</span>
		</header>
	);
}