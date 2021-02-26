import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode
}

interface ChallengesContextData {
  level: number;
  currentXP: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(10);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio!! :D', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentXP + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentXP(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentXP,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}
