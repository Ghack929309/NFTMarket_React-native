import {Text, FlatList, View, SafeAreaView} from 'react-native';
import {COLORS, NFTData} from "../../constant";
import {FocusStatusBar, NFTCard,HomeHead} from '../component'

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
            <FocusStatusBar background={COLORS.primary}/>
            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>
                    <FlatList data={NFTData} keyExtractor={(item) => item.id}
                              renderItem={({item}) => (
                                  <View>
                                      <Text>{item.name}</Text>
                                  </View>
                              )}
                              showsVerticalScrollIndicator={false}
                              ListHeaderComponent={<HomeHead/>}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Home;
