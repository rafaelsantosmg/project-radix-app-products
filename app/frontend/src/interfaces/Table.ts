import { Order } from '../Types'
import { Product } from './Products'

export interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Product
  ) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

export interface HeadCell {
  disablePadding: boolean
  id: keyof Product
  label: string
  numeric: boolean
}
