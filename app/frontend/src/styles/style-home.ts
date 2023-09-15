export const styleHome = {
  main: {
    width: '100%',
    color: '#fff',
    '& > .MuiBox-root > .MuiBox-root': {
      p: 1,
      justifyContent: 'center',
      fontSize: '0.875rem',
      fontWeight: '700',
    },
  },
  mainWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 1,
    gridTemplateRows: 'auto',
    gridTemplateAreas: `"header header header header" 
    "search search search search" "table table table table"`,
  },
}
