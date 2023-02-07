import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {

    const { transactions } = useContext(TransactionsContext)

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Income</span>
                    <ArrowCircleUp size={32} color={"#00B37E"}/>
                </header>
                <strong>R$ 17.005,32</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Outcome</span>
                    <ArrowCircleDown size={32} color={"#F75A68"}/>
                </header>
                <strong>R$ 17.005,32</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={"#FFFFFF"}/>
                </header>
                <strong>R$ 17.005,32</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}