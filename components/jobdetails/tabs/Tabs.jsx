import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton name={item} activeTab={activeTab} onHandleSearchType={() => setActiveTab(item)} />
        )}
        keyExtractor={(item) => item}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
