import { View, Text , Button} from 'react-native'
import React, { useEffect, useState } from 'react'


export default function ustate (){
    const [number,setNumber] = useState(0);

    // useEffect{()=>{
    //     console.log('Number:', number);
    //     return ()=> {console.log('Cleaned Up');
    //     }
    // },[number]} //dependency arry

    return (
        <View>
          <Text>{number}</Text>
          <Button title="+"
           onPress={()=> {
            setNumber (number + 1);
            }} 
            />
           <Button title="-"
           onPress={()=> {
            setNumber (number - 1);
            }} />

        </View>
    );
}


