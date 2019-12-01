import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_CLIENTE, GET_CLIENTES } from '../../services/querysGraphql'

export default function Form() {
    const [form, setForm] = useState({
        nome: '',
        email: ''
    });

    const { data } = useQuery(GET_CLIENTES, { fetchPolicy: 'no-cache' });
    const [addCliente] = useMutation(ADD_CLIENTE);
 
    function salvarCliente() {
        addCliente({ variables: { clinome: form.nome, cliemail: form.email } })
            .then(data => console.warn(data))
            .catch(error => console.warn(error))
    }

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 50 }}>Cadastro Cliente:</Text>
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'blue', borderWidth: 1 }}
                    onChangeText={nome => setForm({ ...form, nome })}
                    value={form.nome}
                    placeholder='Digite o nome'
                />
                <TextInput
                    style={{ height: 40, borderColor: 'blue', borderWidth: 1, marginTop: 5, marginBottom: 15 }}
                    onChangeText={email => setForm({ ...form, email })}
                    value={form.email}
                    placeholder='Digite o email'
                />
                <Button
                    title="Adicionar"
                    onPress={() => salvarCliente()}
                />
            </View>
            <View style={{ flex: 2, }}>
                { data &&
                    data.Clientes.map((data, index) => {
                    return (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            <Text >Nome: {data.nome}</Text>
                            <Text>  Email: {data.email}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    );
}
