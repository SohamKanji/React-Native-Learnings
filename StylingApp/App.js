import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  //border
  // return (
  //   <SafeAreaView>
  //     <View
  //       style={{
  //         borderWidth: 1,
  //         borderTopWidth: 5,
  //         borderBottomWidth: 10,
  //         borderLeftWidth: 3,
  //         borderRightWidth: 20,
  //         borderColor: '#15099d',
  //         borderRadius: 10,
  //         borderTopLeftRadius: 20,
  //         borderBottomLeftRadius: 20,
  //         borderTopRightRadius: 30,
  //         borderBottomRightRadius: 30,
  //       }}>
  //       <Text>Hello World</Text>
  //     </View>
  //   </SafeAreaView>
  // );
  // margin
  // return (
  //   <SafeAreaView>
  //     <View
  //       style={{
  //         backgroundColor: 'red',
  //         margin: 10,
  //         marginVertical: 50,
  //       }}>
  //       <Text>Hello World1</Text>
  //     </View>
  //     <View
  //       style={{
  //         backgroundColor: 'red',
  //       }}>
  //       <Text>Hello World2</Text>
  //     </View>
  //   </SafeAreaView>
  // );
  // padding
  // return (
  //   <SafeAreaView>
  //     <View
  //       style={{
  //         backgroundColor: 'red',
  //         padding: 10,
  //       }}>
  //       <Text>Hello World1</Text>
  //     </View>
  //     <View
  //       style={{
  //         backgroundColor: 'red',
  //         margin: 10,
  //       }}>
  //       <Text>Hello World2</Text>
  //     </View>
  //   </SafeAreaView>
  // );
  // positioning
  // return (
  //   <SafeAreaView>
  //     <View style={{position: 'relative', backgroundColor: 'green'}}>
  //       <View
  //         style={{
  //           backgroundColor: 'red',
  //           padding: 50,
  //           margin: 50,
  //           zIndex: 1,
  //         }}>
  //         <Text>Hello World1</Text>
  //       </View>
  //       <View
  //         style={{
  //           backgroundColor: 'red',
  //           margin: 10,
  //           position: 'absolute',
  //           top: 10,
  //           left: 5,
  //           right: 10,
  //           bottom: 10,
  //           zIndex: 2,
  //         }}>
  //         <Text>Hello World2</Text>
  //       </View>
  //     </View>
  //   </SafeAreaView>
  // );
  // Text styling
  return (
    <SafeAreaView>
      <Text
        style={{
          color: 'red',
          fontFamily: 'Arial',
          fontSize: 70,
          fontStyle: 'italic',
          fontWeight: 'bold',
          lineHeight: 200,
          textAlign: 'right',
        }}>
        Hello World1
      </Text>
    </SafeAreaView>
  );
};

export default App;
