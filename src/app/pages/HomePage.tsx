import React from 'react';
import { Button, Card, Text, View } from 'react-native-ui-lib';

const HomePage: React.FunctionComponent = () => {
  return (
    <View padding-s4>
      <Text marginB-s4>My Screen</Text>
      <Card height={100} center padding-card marginB-s4>
        <Text dark60>This is an example card</Text>
      </Card>
      <Button label="Button" bg-primaryColor />
    </View>
  );
};

export default HomePage;
