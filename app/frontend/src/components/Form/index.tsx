/* eslint-disable react-hooks/exhaustive-deps */
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
import { ChangeEvent, useContext, useEffect, useState } from 'react'
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

export default function Form(): JSX.Element {
  const router = useRouter()
  const { products, categories } = useContext(DataContext)
  const [values, setValues] = useState<TFormValues>({
    name: '',
    description: '',
    category: '',
    price: '',
  })
  const [errors, setErrors] = useState<TFormErrors>({
    name: '',
    description: '',
    category: '',
    price: '',
  })
  const [newCategory, setNewCategory] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [firstRender, setFirstRender] = useState<boolean>(true)
  const [createProduct] = useMutation(CREATE_PRODUCT)

  useEffect(() => {
    if (!firstRender) {
      if (values.category === '') {
        setErrors({
          ...errors,
          category: 'Campo obrigatório',
        })
      } else {
        setErrors({
          ...errors,
          category: '',
        })
      }
    } else {
      setFirstRender(false)
    }
  }, [values])

  const resetFields = (): void => {
    setValues({
      name: '',
      description: '',
      category: '',
      price: '',
    })
    setNewCategory(false)
  }

  const resetErrors = (): void => {
    setErrors({
      name: '',
      description: '',
      category: '',
      price: '',
    })
  }

  const validateResetFields = Object.values(values).some(
    (value) => value !== ''
  )

  const validateEmptyValues = Object.values(values).some(
    (value) => value === ''
  )

  const validateErrors = Object.values(errors).some((error) => error !== '')

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
          category: values.category.trim(),
          price: Number(values.price.replace(',', '.').trim()),
        },
        refetchQueries: [GET_PRODUCTS],
      })
      setTimeout(() => {
        router.push('/home', { scroll: false })
      }, 800)
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
    if (validateResetFields) {
      resetFields()
      resetErrors()
    } else {
      router.push('/home', { scroll: false })
    }
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    if (target.name === 'price') {
      if (!validatePrice(target.value)) {
        setErrors({
          ...errors,
          [target.name]: 'Insira um preço válido',
        })
        setValues({
          ...values,
          [target.name]: target.value,
        })
      } else {
        setErrors({
          ...errors,
          [target.name]: '',
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
    setValues({
      ...values,
      category: target.value,
    })
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

  const handleClearField = (): void => {
    setValues({
      ...values,
      category: '',
    })
    setErrors({
      ...errors,
      category: 'Campo obrigatório',
    })
  }

  const handleClose = (): void => {
    if (values.category === '') {
      setValues((prevState) => ({
        ...prevState,
      }))
    }
  }

  const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>): void => {
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
    } else if (target.value === '') {
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
          <Grid container md={8} xs={10} rowGap={2}>
            <Grid
              item
              xs={12}
              sx={{
                mb: 1,
                mt: 1,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: theme.black,
                  '@media (max-width: 600px)': {
                    fontSize: '1.3rem',
                  },
                }}
              >
                Cadastro de Produtos
              </Typography>
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
                  setValues({
                    ...values,
                    category: '',
                  })
                }}
              />
              {!newCategory ? (
                <SelectTextFields
                  clearField={handleClearField}
                  label="Selecione uma categoria"
                  onChange={handleChangeCategory}
                  options={categories}
                  value={values.category}
                  onClose={handleClose}
                />
              ) : (
                <TextFields
                  label="Insira uma nova categoria"
                  name="category"
                  values={values.category}
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
            md={8}
            xs={10}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              mt: 4,
              width: '100%',
              '& .MuiButton-root': {
                '&:first-of-type': {
                  mr: 2,
                },
                '&:last-of-type': {
                  ml: 2,
                },
                fontSize: '1rem',
                height: '2.5rem',
                width: '30%',
              },
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                '& .MuiButton-root': {
                  '&:first-of-type': {
                    mr: 0,
                  },
                  '&:last-of-type': {
                    mt: 4,
                    ml: 0,
                  },
                  fontSize: '1rem',
                  height: '2.5rem',
                  width: '100%',
                },
              },
            }}
          >
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={validateErrors || validateEmptyValues}
            >
              Cadastrar
            </Button>

            <Button
              variant="contained"
              color="error"
              type="button"
              onClick={handleCancel}
            >
              {validateResetFields ? 'Limpar Campos' : 'Cancelar'}
            </Button>
          </Grid>
        </>
      )}
    </form>
  )
}
