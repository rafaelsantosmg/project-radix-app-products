import fs from 'fs/promises'
import path from 'path'
import { Product } from '../models/Product'

// Utilizei o método "loadDataFromFile e  saveDataToFile" para carregar e salvar os dados do arquivo JSON
// pois é a maneira mais simples pra mim e ja tinha feito algo parecido em um projeto da trybe

const filePath = path.resolve(__dirname, '../services/products.json')

export async function loadDataFromFile() {
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(jsonData)
    return data
  } catch (error) {
    console.error('Erro ao carregar dados do arquivo:', error)
  }
}

export async function saveDataToFile(data: Product[]) {
  try {
    const jsonData = JSON.stringify(data, null, 2)
    await fs.writeFile(filePath, jsonData, 'utf-8')
  } catch (error) {
    throw error
  }
}
