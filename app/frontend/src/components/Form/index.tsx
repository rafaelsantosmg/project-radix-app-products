import { formP } from '@/styles/style-form'
import { useMutation } from '@apollo/client'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useContext, useState } from 'react'
import { CREATE_PRODUCT, GET_PRODUCTS } from '../../graphql/productQuery'
import { DataContext } from '../../providers/DataProvider'
import TextFields from '../Inputs/TextFields'

export default function Form() {
  const router = useRouter()
  const { products } = useContext(DataContext)
  const [values, setValues] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    errors: {
      name: '',
      description: '',
      category: '',
      price: '',
    },
  })
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const validateValues = () => {
    const errors = Object.values(values.errors).filter((error) => error !== '')
    if (errors.length === 0) {
      return true
    }
    return false
  }

  function validatePrice(numeroStr: string): boolean | undefined {
    try {
      const numero = parseFloat(numeroStr.replace(',', '.'))
      if (!isNaN(numero)) {
        return true
      }
    } catch (error) {
      return false
    }
  }

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validatePrice(values.price)) {
      return alert('O preço deve ser maior que 0.')
    }
    if (!validateValues()) {
      return alert('Preencha todos os campos para continuar.')
    }
    try {
      await createProduct({
        variables: {
          id: String(products.length + 1).trim(),
          name: values.name.trim(),
          description: values.description.trim(),
          category: values.category.trim(),
          price: Number(values.price.replace(',', '.').trim()),
        },
        refetchQueries: [GET_PRODUCTS],
      })
      router.push('/home', { scroll: false })
    } catch (error) {
      alert('Erro ao cadastrar produto.' + error)
    } finally {
      setValues({
        name: '',
        description: '',
        category: '',
        price: '',
        errors: {
          name: '',
          description: '',
          category: '',
          price: '',
        },
      })
    }
  }

  const handleCancel = () => {
    setValues({
      name: '',
      description: '',
      category: '',
      price: '',
      errors: {
        name: '',
        description: '',
        category: '',
        price: '',
      },
    })
    router.push('/home', { scroll: false })
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value === '') {
      setValues({
        ...values,
        errors: {
          ...values.errors,
          [target.name]: 'Campo obrigatório',
        },
      })
    } else {
      setValues({
        ...values,
        errors: {
          ...values.errors,
          [target.name]: '',
        },
      })
    }
  }

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          xl={8}
          lg={10}
          md={8}
          sm={8}
          xs={10}
          spacing={2}
          sx={{ mt: 4 }}
        >
          <Grid item xs={12}>
            <Typography variant="h3">Cadastro de Produtos</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextFields
              label="Nome"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {values.errors.name && (
              <Typography sx={formP}>{values.errors.name}</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextFields
              label="Descrição"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {values.errors.description && (
              <Typography sx={formP}>{values.errors.description}</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextFields
              label="Categoria"
              name="category"
              values={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {values.errors.category && (
              <Typography sx={formP}>{values.errors.category}</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextFields
              label="Preço"
              name="price"
              values={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {values.errors.price && (
              <Typography sx={formP}>{values.errors.price}</Typography>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          xl={8}
          lg={10}
          md={8}
          sm={8}
          xs={10}
          sx={{ mt: 4 }}
          justifyContent="space-between"
        >
          <Grid>
            <Button variant="contained" color="success" type="submit">
              Cadastrar
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="error"
              type="button"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
