export const useTheme = () => ({
  theme: {
    dark: false,
    colors: {
      text: '#000',
      primary: '#fe6e32',
    },
  },
  toggleTheme: jest.fn(),
});

export const useStyles = () => ({
  container: {},
  header: {},
  row: {},
  heading2: {},
  productCard: {},
  productImage: {},
  productInfo: {},
  productTitle: {},
  productPrice: {},
  loaderContainer: {},
  body: {},
  modal: {},
  modalContent: {},
  primaryButton: {},
  buttonText: {},
});
