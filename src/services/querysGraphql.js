import { gql } from 'apollo-boost';
export const GET_CLIENTES = gql`{
    Clientes(distinct_on: email) {
        id,
        nome,
        email
    }
}
`

export const ADD_CLIENTE = gql`
    mutation ($clinome: String, $cliemail: String){
        insert_Clientes( objects: [{ nome: $clinome, email: $cliemail}])
        {
          affected_rows
        }
  }
`
