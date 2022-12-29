/* eslint-disable prettier/prettier */
import { StyleSheet, Button, View } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';

export default function App() {

  const makePayment = () => {
    var options = {
      description: 'ToneOp HEALTH & NUTRITION APP',
      image: 'https://yt3.ggpht.com/YNVX0sfjT6L_OXxUWTsLhFnXRY3RD5M0VajLxDjHreqUCp88TXcMFJm7KVzrlnDBs2UUe8l6=s900-c-k-c0x00ffffff-no-rj',
      currency: 'INR',
      key: 'rzp_test_ow1GzkqaBMnb1p', // Your api key
      amount: '5000',
      name: 'ToneOp',
      prefill: {
        email: 'sandeep.aasre@toneop.com',
        contact: '9632587410',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
    // eslint-disable-next-line no-undef
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  return (
    <View style={styles.container}>
      <Button style={styles.payButton} title="Make a Payment"
      onPress={makePayment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  payButton: {
marginTop: 50,
  },
});
