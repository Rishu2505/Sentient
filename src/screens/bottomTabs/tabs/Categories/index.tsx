import { RouteProp } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { Platform, UIManager, View, FlatList, } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import styles from './styles';
import { AgentCard, AgentHeader, CustomHeader } from 'src/components';
import { RootStackParamList } from 'src/types';
import { ROUTES } from 'src/consts';
import { AgentItem } from 'src/types/agents';
import { agentsData, strings } from './constants';
import { navigate } from 'src/navigation/RootNavigation';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type FlatListItem =
  | { type: 'header'; category: string }
  | { type: 'agent'; data: AgentItem[] };

type Props = {
  navigation: RouteProp<RootStackParamList, ROUTES.CATEGORIES>;
};


const Categories = ({ navigation }: Props) => {

  const flatData: FlatListItem[] = useMemo(() => {
    const base: FlatListItem[] = [];

    const filteredData = agentsData
    const mapped = filteredData.flatMap(category => [
      { type: 'header', category: category.title } as FlatListItem,
      { type: 'agent', data: category.data } as FlatListItem,
    ]);

    return [...base, ...mapped];
  }, []);

  const navigateToAgentsHome = (description: string) => () => {
    navigate(ROUTES.COMMON_STACK, { screen: ROUTES.AGENT_HOME, params: { description: description } })
  }

  const renderItem = ({ item }: { item: FlatListItem }) => {
    switch (item.type) {
      case 'header':
        return <AgentHeader title={item.category} />;

      case 'agent':
        return (
          <FlatList
            horizontal
            data={item.data}
            keyExtractor={agent => agent.id}
            contentContainerStyle={styles.agentList}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: agent, index }) => <AgentCard onPress={navigateToAgentsHome(agent?.description)} index={index} agent={agent} />}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={strings.title} />
      <View style={styles.mainView}>
        <FlashList
          data={flatData}
          estimatedItemSize={100}
          keyExtractor={(item, index) => {
            if (item.type === 'header') return `header-${item.category}`;
            if (item.type === 'agent') return `agent-${index}`;
            return `unknown-${index}`;
          }}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
export default Categories;