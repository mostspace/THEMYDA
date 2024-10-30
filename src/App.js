import React from 'react'
import { 
  Footer, Hero, Navbar, Stats, Faqs,
} from './sections'
import styles from './style'

const App = ({ toggleTheme, theme }) => {
  return (
    <>
      <div className={`${theme === 'light' ? 'bg-white': 'bg-primary'} w-full h-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
          </div>
        </div>
        <Hero theme={theme} />
        <div className={`${theme === 'light' ? 'bg-white': 'bg-primary'} ${styles.paddingX} ${styles.flexStart} z-10`}>
          <div className={`${styles.boxWidth}`}>
            <Stats theme={theme} />
            <Faqs theme={theme} />
            <Footer theme={theme} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App