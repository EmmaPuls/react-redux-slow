export type GlobalTheme = {
    colors: {
        primary: string;
        secondary: string;
        error: string;
        text: string;
        background: string;
    };
    spacing: (multiplier: number) => string;
  };
  
  const globalTheme: GlobalTheme = {
    colors: {
        primary: '#7FB069',
        secondary: '#E6AA68',
        error: '#CA3C25',
        text: '#1D1A05',
        background: '#FFFBBD',
    },
    spacing: (multiplier: number) => `${multiplier * 8}px`,
  };
  
  export default globalTheme;
  