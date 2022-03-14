import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from '../core/Cliente'

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  const clientes = [
    new Cliente('Elton', 27, '1'),
    new Cliente('Rebeca', 25, '2'),
    new Cliente('Maria', 57, '3'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir... ${cliente.nome}`)
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-pink-600
      text-white
    `}> 
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor='green' className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido}
            /> 
          </>

        ) : (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}

      </Layout>
    </div>
  )
}
