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
    console.log(`Ecluir... ${cliente.nome}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-pink-600
      text-white
    `}> 
      <Layout titulo="Cadastro Simples">
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido}
        /> 
      </Layout>
    </div>
  )
}
