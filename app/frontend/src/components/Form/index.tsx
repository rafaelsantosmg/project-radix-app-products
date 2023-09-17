import { useMutation } from '@apollo/client'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useContext, useState } from 'react'
import { CREATE_PRODUCT, GET_PRODUCTS } from '../../graphql/productQuery'
import { DataContext } from '../../providers/DataProvider'
import theme from '../../theme'
import { TFormErrors, TFormValues } from '../../types'
import SelectTextFields from '../Inputs/SelectFields'
import TextFields from '../Inputs/TextFields'
import LoaderSpinner from '../LoaderSpinner'

const style = {
  p: {
    color: theme.red,
    ml: 1,
  },
}

export default function Form() {
  const router = useRouter()
  const { products, categories } = useContext(DataContext)
  const [values, setValues] = useState<TFormValues>({
    name: '',
    description: '',
    price: '',
  })
  const [errors, setErrors] = useState<TFormErrors>({
    name: '',
    description: '',
    category: '',
    price: '',
  })
  const [category, setCategory] = useState<string>('')
  const [newCategory, setNewCategory] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const resetFields = (): void => {
    setValues({
      name: '',
      description: '',
      price: '',
    })
  }

  const resetErrors = (): void => {
    setErrors({
      name: '',
      description: '',
      category: '',
      price: '',
    })
  }

  const validateEmptyValues = (): boolean => {
    return Object.values(values).some((value) => value === '')
  }

  const validateErrors = (): boolean => {
    return Object.values(errors).some((error) => error !== '')
  }

  const validatePrice = (numeroStr: string): boolean | undefined => {
    if (numeroStr === '') {
      return true
    }
    try {
      const numero = parseFloat(numeroStr.replace(',', '.'))
      if (!isNaN(numero)) {
        return true
      }
    } catch (error) {
      return false
    }
  }

  const handleSubmit = async (
    event: ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    setLoading(true)
    try {
      await createProduct({
        variables: {
          id: String(products.length + 1).trim(),
          name: values.name.trim(),
          description: values.description.trim(),
          category: category.trim(),
          price: Number(values.price.replace(',', '.').trim()),
        },
        refetchQueries: [GET_PRODUCTS],
      })
      setTimeout(() => {
        router.push('/home', { scroll: false })
      }, 900)
    } catch (error) {
      alert('Erro ao cadastrar produto! ' + error)
    } finally {
      resetFields()
      resetErrors()
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  const handleCancel = (): void => {
    router.push('/home', { scroll: false })
    resetFields()
    resetErrors()
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    if (target.name === 'price') {
      if (!validatePrice(target.value)) {
        setErrors({
          ...errors,
          [target.name]: 'Insira um preço válido',
        })
      } else {
        setErrors({
          ...errors,
          [target.name]: '',
        })
        setValues({
          ...values,
          [target.name]: target.value,
        })
      }
    } else {
      setValues({
        ...values,
        [target.name]: target.value,
      })
    }
  }

  const handleChangeCategory = ({
    target,
  }: SelectChangeEvent<string>): void => {
    setCategory(target.value)
    if (target.value !== '') {
      setErrors({
        ...errors,
        category: '',
      })
    } else {
      setErrors({
        ...errors,
        category: 'Campo obrigatório',
      })
    }
  }

  const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    if (target.value === '') {
      setErrors({
        ...errors,
        [target.name]: 'Campo obrigatório',
      })
    } else {
      setErrors({
        ...errors,
        [target.name]: '',
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gridArea: 'form',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <Grid container xl={10} lg={8} md={8} sm={8} xs={10} rowGap={2}>
            <Grid item xs={12} sx={{ mt: 1, mb: 1 }}>
              <Typography variant="h4">Cadastro de Produtos</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextFields
                label="Nome"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && (
                <Typography sx={style.p}>{errors.name}</Typography>
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
              {errors.description && (
                <Typography sx={style.p}>{errors.description}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                sx={{ mt: -2 }}
                control={<Checkbox defaultChecked />}
                label="Nova Categoria"
                checked={newCategory}
                onChange={() => {
                  setNewCategory(!newCategory)
                  setCategory('')
                }}
              />
              {!newCategory ? (
                <SelectTextFields
                  label="Selecione uma categoria"
                  options={categories}
                  value={category}
                  onChange={handleChangeCategory}
                />
              ) : (
                <TextFields
                  label="Insira uma nova categoria"
                  name="category"
                  values={category}
                  onChange={handleChangeCategory}
                  onBlur={handleBlur}
                />
              )}
              {errors.category && (
                <Typography sx={style.p}>{errors.category}</Typography>
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
              {errors.price && (
                <Typography sx={style.p}>{errors.price}</Typography>
              )}
            </Grid>
          </Grid>
          <Grid
            container
            xl={10}
            lg={8}
            md={8}
            sm={8}
            xs={10}
            sx={{ mt: 4 }}
            justifyContent="flex-end"
          >
            <Grid>
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={validateErrors() || validateEmptyValues()}
              >
                Cadastrar
              </Button>
            </Grid>
            <Grid sx={{ ml: 5 }}>
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
        </>
      )}
    </form>
  )
}
