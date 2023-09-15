import { Box, Grid } from '@mui/material'
import { ChangeEvent, use, useContext, useEffect, useState } from 'react'
import { Product } from '../../interfaces/Products'
import { DataContext } from '../../providers/DataProvider'
import theme from '../../theme'
import SelectTextFields from '../Inputs/SelectTextFields'
import TextFields from '../Inputs/TextFields'

export default function SearchBar() {
  const { products, setSearchProducts } = useContext(DataContext)
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = products
    .reduce((acc: string[], curr: Product) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category)
      }
      return acc
    }, [])
    .sort((a: string, b: string) => a.localeCompare(b))

  const handleSelectCategory = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const category = target.value
    const filteredProducts = products.filter(
      (product: Product) => product.category === category
    )
    setSelectedCategory(category)

    if (category === '') {
      setSearchProducts(products)
    } else setSearchProducts(filteredProducts)
  }

  const handleChangeTextFields = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const search = target.value
    const filteredProducts = products.filter((product: Product) => {
      if (
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toFixed(2).replace('.', ',').includes(search)
      ) {
        return product
      }
    })

    setSearchProducts(filteredProducts)
  }

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gridArea: 'search',
        justifyContent: 'flex-start',
        mt: 2,
        mb: 2,
        width: '100%',
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        xl={10}
        lg={8}
        md={8}
        sm={8}
        xs={10}
      >
        <Box
          sx={{
            background: theme.white,
            display: 'flex',
            width: '100%',
          }}
        >
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item lg={8} md={6} sm={12} xs={12}>
              <TextFields
                label="Busque um produto"
                onChange={handleChangeTextFields}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <SelectTextFields
                label="Selecione uma categoria"
                data={categories}
                value={selectedCategory}
                onChange={handleSelectCategory}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}
