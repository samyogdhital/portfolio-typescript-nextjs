import React from 'react';

type ThemeContextType = {
  isLight: boolean;
  handleSetIsLight: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  isLight: false,
  handleSetIsLight: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLight, setIsLight] = React.useState(false);

  React.useEffect(() => {
    setIsLight(!!window.matchMedia('(prefers-color-scheme: light').matches);
  }, []);

  const handleSetIsLight = () =>
    isLight ? setIsLight(false) : setIsLight(true);

  return (
    <ThemeContext.Provider value={{ isLight, handleSetIsLight }}>
      {children}
    </ThemeContext.Provider>
  );
};
