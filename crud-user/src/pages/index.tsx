import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Elton', 27, '1'),
    new Cliente('Rebeca', 24, '2'),
    new Cliente('Maria', 57, '3'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir... ${cliente.nome}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-pink-600
      text-white
    `}> 
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor='green' className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido}
        /> 
      </Layout>
    </div>
  )
}
