import { FunctionComponent, SetStateAction } from "react"
import { Transaction } from "../../utils/types"
import { Dispatch } from "react"
export type SetTransactionApprovalFunction = (params: {
  transactionId: string
  newValue: boolean
}) => Promise<void>

type TransactionsProps = { transactions: Transaction[] | null, checklist: Record<string, boolean>; // Assuming checklist is a Record<string, boolean>
setChecklist: Dispatch<SetStateAction<Record<string, boolean>>>;}

type TransactionPaneProps = {
  transaction: Transaction
  loading: boolean
  approved?: boolean
  setTransactionApproval: SetTransactionApprovalFunction
}

export type TransactionsComponent = FunctionComponent<TransactionsProps>
export type TransactionPaneComponent = FunctionComponent<TransactionPaneProps>
