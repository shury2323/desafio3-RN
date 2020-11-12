import React from 'react'
import {ScrollView, Text, StyleSheet,Image, SafeAreaView, View, Dimensions} from 'react-native'

let ScreenHeight = Dimensions.get("window").height;
export default class PeopleDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "people": props.route.params.people
        }
    }
    render(){
      console.log(this.state.people)
        return(
            <ScrollView style = {style.scroll}>
            <SafeAreaView>
            <View style = {style.container}>
              <Image style = {style.picture} source = {{uri: this.state.people.imagem}} />
              <Text style = {style.title}>Nome e sobrenome:</Text>
              <Text style = {style.text}>{this.state.people.nome.name}</Text>
              <Text style = {style.title}>Gênero: </Text>
              <Text style = {style.text}> {this.state.people.genero}</Text>
              <Text style = {style.title}>Email:</Text>
              <Text style = {style.text}>{this.state.people.email}</Text>
              <Text style = {style.title}>Aniversário:</Text>
              <Text style = {style.text}> {this.state.people.aniversario}</Text>
              <Text style = {style.title}>Idade:</Text>
              <Text style = {style.text}>{this.state.people.idade}</Text>
            </View>
            </SafeAreaView>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create(
  {
    scroll: {
      flex: 1,
      backgroundColor: '#FFF',  
    },

    line: {
      height: 100, borderBottomWidth: 1, borderBottomColor: '#000', alignItems: 'center', flexDirection: 'row'
    },

    text: {
      fontFamily: "Arial", fontSize: 25, textAlign: "center", display: "flex" ,flexWrap: 'wrap', justifyContent: 'center'
    },

    picture: {
      aspectRatio: 1, margin: 40, height: 256, width: 256, justifyContent: 'center', display: 'flex', alignItems: "center"
    },
    title: {
      fontFamily: "Arial", fontSize: 30, textAlign: "center", display: "flex" ,flexWrap: 'wrap', justifyContent: 'center', fontWeight: 'bold', marginBottom: 10, marginTop: 10
    },
    container:{
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2', flex: 1,
    }
  }
)
