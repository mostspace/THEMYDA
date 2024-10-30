import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          '&:before': {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(theme.palette.grey[500], 0.32),
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(theme.palette.grey[200], 0.32), // Hover color
          },
    
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Initial border color
              backgroundColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'white', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', // Border color when focused
            },
          },
  
          // Style for input autofill color and shadow handling
          '& input:-webkit-autofill': {
            '-webkit-text-fill-color': '#ffffff',
            '-webkit-box-shadow': '0 0 0 100px transparent inset',
            'transition': 'background-color 5000s ease-in-out 0s',
          },
          '& input:-webkit-autofill:focus': {
            'caret-color': 'white !important', // Caret color when focused with autofill
          },
        },
      },
    },
    
    
  };
}
