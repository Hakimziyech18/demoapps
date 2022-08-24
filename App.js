import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native';
import styled from 'styled-components/native';
import {Button as Btn, TextInput as Input, Card, Title, Paragraph} from 'react-native-paper';

const BtnBox = styled.View`
  border:1px solid purple;
  padding:4px;
  border-radius:8px;
  margin-top:20px;
`;
const ChatBox = styled.View`
  position:absolute;
  bottom: 10px;
  right: 10px;
  background-color:yellow;
  border-radius:50px;
  padding:5px;
  box-shadow: 5px -5px 8px black;
`;

const Results = styled.View`
  padding:10px;
  border-radius:8px;
  background-image:linear-gradient(pink,skyblue);
`;

export default function App() {
  const [revenue,setRevenue] = useState(0);
  const [expenses,setExpenses] = useState(0);
  const [status,setStatus] = useState(false);

  function TaxCalculator  () {
    const profit = revenue - expenses;
    const cit = (20/100) * revenue;
    const vat = (7.5/100) * profit;
    const total = cit + vat;
    return(
      <Results>
        <Text style={styles.summaryLine}>Your Revenue :{revenue}</Text>
        <Text style={styles.summaryLine}>Your Expense :{expenses}</Text>
        <Text style={styles.summaryLine}>Your Profit :{profit}</Text>
        <Text style={styles.summaryLine}>CIT Tax :{cit}</Text>
        <Text style={styles.summaryLine}>VAT Tax :{vat}</Text>
        <Text style={styles.summaryLine}>Total Tax to Pay :{total}</Text>

        <BtnBox>
          <Card style={{marginBottom:20}}>
            <Card.Cover source={{uri:'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg'}}/>
            <Card.Content>
              <Title>Hire A Licenced Auditor</Title>
              <Paragraph>

              </Paragraph>
              <Btn mode='contained' color='oldplace'>Learn more</Btn>
            </Card.Content>
          </Card>
          <Text style={{textAlign:'center',fontSize:24,marginBottom:10}}>Send report to your email</Text>
          <Input label='email address' style={{marginBottom:10}}/>
          <Btn mode='contained' color='purple'> SEND </Btn> 
        </BtnBox>
      </Results>
    )
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.logoWrapper}>
        <Image 
          source={require('./assets/images/download.jpg')}
          style={styles.logo}
          />
        <Text style={styles.heading}>Company Tax Calculator</Text>  
      </View>

      {status == true ? TaxCalculator(): null}
      <TextInput 
      style={styles.input} 
      placeholder='Total revenue'
      onChangeText={(revenueInput) => setRevenue(revenueInput)}
      />
      <TextInput 
      style={styles.input} 
      placeholder='Total expense'
      onChangeText={(expenseInput) => setExpenses(expenseInput)}
      />

      <Button title='CALCULATE TAX' onPress={() => { 
        TaxCalculator;
        setStatus(true);
        }}/>

        <ChatBox onClick={() => {
        alert('Welcome to Whatsapp');
        }}>
          <Image style={styles.chat} source={require('./assets/images/whatsapp.png')} />
        </ChatBox>
      
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  input:{
    paddingHorizontal:20,
    paddingVertical:14,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:50,
    marginVertical:5
  },
  logoWrapper:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  summaryLine:{
    borderBottomWidth:1,
    borderBottomColor:'blue',
    fontSize:20,
    marginBottom:4,
  },
  heading:{
    fontSize:28
  },
  logo:{
    width:80,
    height:80,
    borderRadius:50,
  },
  chat:{
    width:60,
    height:60,
  },
})