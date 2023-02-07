import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form/dist/useForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller } from 'react-hook-form/dist/controller'

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    
    const {
        control,
        register,
        handleSubmit,
        formState: 
            {
                isSubmitting
            }
        } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        console.log(data)
    }
    
    return (
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text" 
                        placeholder='Description' 
                        required
                        {...register('description')}
                    />
                    <input 
                        type="number" 
                        placeholder='Price' 
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input 
                        type="text"
                        placeholder='Category'
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton type='button' variant='income' value='income'>
                                        <ArrowCircleUp size={24}/>
                                        Income
                                    </TransactionTypeButton>

                                    <TransactionTypeButton type='button' variant='outcome' value='outcome'>
                                    <ArrowCircleDown size={24}/>
                                        Outcome
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />
                
                    <button type='submit' disabled={isSubmitting}>Save</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}