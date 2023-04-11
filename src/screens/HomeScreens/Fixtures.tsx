import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../../theme/theme';



const DayTable = ({ date }: any) => {
    return (
        <View>
            <Text style={{ color: "black" }}>Am here</Text>
            <Text style={styles.dateText}>{date}</Text>
        </View>
    )
}

const tabLabel = (date: string) => {

    const today = moment().format('YYYY-MM-DD');
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
    const isToday = date === today;
    const isYesterday = date === yesterday;
    const isTomorrow = date === tomorrow;

    if (isToday) {
        return 'Today';
    } else if (isYesterday) {
        return 'Yesterday';
    } else if (isTomorrow) {
        return 'Tomorrow';
    } else {
        return moment(date).format('ddd DD MMM');
    }
};

const Fixtures = () => {
    const today = moment().format('YYYY-MM-DD'); // get today's date
    const dates = getMonthDays(2023, moment().format('MM'));
    const [activeTab, setActiveTab] = useState(today); // set today's date as initial value of activeTab state

    const scrollViewRef = React.useRef<ScrollView>(null);

    React.useEffect(() => {
        const activeTabIndex = dates.findIndex((date) => date === activeTab);
        scrollViewRef.current?.scrollTo({ x: activeTabIndex * 110, y: 0, animated: true });
    }, [activeTab]);



    useEffect(() => {
        // Scroll to default tab when the component mounts
        if (scrollViewRef.current) {
            const index = dates.indexOf(activeTab);
            const offsetX = index * 110; // Assuming TAB_WIDTH is defined somewhere
            scrollViewRef.current.scrollTo({ x: offsetX, y: 0, animated: true });
        }
    }, []);


    return (
        <View style={styles.container}>
            <View>
            <ScrollView
               ref={scrollViewRef}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabsContainer}>
                {dates.map((date) => (
                    <TouchableOpacity
                        key={date}
                        onPress={() => setActiveTab(moment(date).format('YYYY-MM-DD'))}
                        style={[
                            styles.tab,
                            activeTab === moment(date).format('YYYY-MM-DD') ? styles.activeTab : null,
                        ]}>
                        <Text
                            style={[
                                styles.tabLabel,
                                activeTab === moment(date).format('YYYY-MM-DD')
                                    ? styles.activeTabLabel
                                    : null,
                            ]}>
                            {tabLabel(date)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            </View>


            <ScrollView>
                  <View>
                      <Text style={{color:"black"}}>Fixtures</Text>
                  </View>
            </ScrollView>

        </View>
    );
};

export default Fixtures

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabsContainer: {
        //   flexDirection: 'row',
        height: 50,
        backgroundColor: theme.colors.primary,
        borderRadius: 0
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    activeTab: {
        borderBottomColor: theme.colors.text,
        borderBottomWidth: 2

    },
    tabLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.placeholder,
    },
    activeTabLabel: {
        color: theme.colors.text,
    },
    contentContainer: {
        flex: 1,
        //   flexDirection: 'row',
    },
    
    activeContent: {
        borderColor: 'blue',
    },
    dateText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})

function getMonthDays(year: number, month: string) {
    const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
    const monthStart = moment(`${year}-${month}-01`, 'YYYY-MM-DD').startOf('week');
    const monthEnd = moment(`${year}-${month}-${daysInMonth}`, 'YYYY-MM-DD').endOf('week');
    const dates = [];

    while (monthEnd >= monthStart) {
        dates?.push(monthStart.format('YYYY-MM-DD'));
        monthStart.add(1, 'day');
    }

    return dates;
}