import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TextInput, Pressable } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { sexos } from "@/utils/sexos";


export default function App(){
    const [newRegister, setNew] = useState(false);
    const [isStudant, setStudent] = useState(false);
    const [sexo, setSexo] = useState();
    const [user, setUser] = useState("");
    const [limit, setLimit] = useState(1000)

    const sexoItems = sexos.map((value: any, index: any) => {
        return <Picker.Item key={index} value={value.key} label={value.value}/>
    })

    const openAccount = () => {
        setNew(false);
        const conta = Math.random() * 900000;
        const msg = `Abertura da conta ${conta.toFixed(0)}-1 para o usuário ${user} com o limite de R$ ${limit.toFixed(2)}`
        alert(msg);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Banco Sujeito</Text>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Novo cadastro?</Text>
                <Switch
                    value={newRegister}
                    onValueChange={(value) => setNew(value)}
                    trackColor={{false: "##121212", true: "#c5c504"}}
                    thumbColor={newRegister ? "#c5c504" : "#121212"}
                />
            </View>
            {newRegister ? <TextInput style={styles.input} placeholder="Nome completo" value={user} onChangeText={(value) => setUser(value)}/> : null}
            {newRegister ? <TextInput style={styles.input} placeholder="Idade"/> : null}
            {newRegister ? <Picker
                style={styles.picker}
                selectedValue={sexo}
                onValueChange={(value, index) => setSexo(value)}
            >
                {sexoItems}
            </Picker>
            : null}
            {/* {newRegister ? <Slider progress={progress} minimumValue={min} maximumValue={max}/> : null} */}
            {newRegister ?             
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "95%"}}>
                <Text style={styles.label}>Estudante?</Text>
                <Switch
                    value={isStudant}
                    onValueChange={(value) => setStudent(value)}
                    trackColor={{false: "##121212", true: "#c5c504"}}
                    thumbColor={isStudant ? "#c5c504" : "#121212"}
                />
            </View> : null}   
            {newRegister ? 
            <Pressable
                style={styles.button}
                onPress={() => openAccount()}
            >
                <Text>Abrir Conta</Text>
            </Pressable> : null} 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
        gap: 10
    },
    title: {
        fontSize: 32,
        fontWeight: "bold"
    },
    containerInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40
    },
    label: {
        fontSize: 18
    },
    input: {
        backgroundColor: "#ece9ab",
        width: "95%",
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 5
    },
    picker: {
        color: "#000",
        width: "95%", 
        height: 40
    },
    button: {
        backgroundColor: "#ece9ab",
        width: "30%",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});