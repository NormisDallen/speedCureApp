<FlatList
    data={menu}
    keyExtractor={item => item.image}
    numColumns={3}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
        paddingBottom: 100,
    }}
    ListHeaderComponent={
        <View style={[styles.cardStyle]}>
            <View>
                {/*first view */}
                <View
                    style={[
                        generalstyles.flexStyles,
                        { paddingHorizontal: 10, paddingBottom: 10 },
                    ]}>
                    <AvatarComponent
                        size={45}
                        source={
                            'https://media.istockphoto.com/photos/large-modern-building-with-blue-letter-h-sign-for-hospital-picture-id1240772668?b=1&k=20&m=1240772668&s=170667a&w=0&h=fBVaxHKgl7-EQsik0B6MF9vG-FSRMrlLpyxoP5lIRtM='
                        }
                    />
                    <View style={[{ marginLeft: 10 }]}>
                        <View>
                            <Text>We provide the best services </Text>
                        </View>

                        <View style={[generalstyles.flexStyles, { marginLeft: -5 }]}>
                            <Evil name="location" size={26} color={theme.colors.text} />
                            <Text>Muyenga kasanga 4km away</Text>
                        </View>
                    </View>
                </View>
                {/*first view */}
                <View style={[{ marginLeft: 15, paddingBottom: 10 }]}>
                    {/*working works */}
                    <View style={[generalstyles.flexStyles]}>
                        <View style={[{ marginRight: 5 }]}>
                            <Text style={{ color: theme.colors.text }}>
                                Working Hours
                            </Text>
                        </View>

                        <OctIcon name="watch" size={21} color={theme.colors.text} />
                        <Text> 24/7</Text>
                    </View>
                    {/*working works */}
                    {/*method of payment */}
                    <View style={[generalstyles.flexStyles]}>
                        <View style={[{ marginRight: 5 }]}>
                            <Text style={{ color: theme.colors.text }}>
                                Languages Used
                            </Text>
                        </View>
                        <FontAwesomeIcon
                            name="language"
                            size={24}
                            color={theme.colors.text}
                        />
                        <View style={[generalstyles.flexStyles]}>
                            {service.map((lang, index) => (
                                <Text key={index}>
                                    {' '}
                                    {lang}
                                    {`${index + 1 !== service.length ? `${' | '}` : `${''}`
                                        }`}
                                </Text>
                            ))}
                        </View>
                    </View>
                    {/*method of payment */}
                    <View style={[generalstyles.flexStyles, { marginRight: 10 }]}>
                        <View style={[{ marginRight: 5 }]}>
                            <Text style={{ color: theme.colors.text }}>
                                Payment Methods
                            </Text>
                        </View>
                        <Material
                            name="payment"
                            size={21}
                            color={theme.colors.text}
                        />
                        <View style={[{ width: '60%' }]}>
                            <Text>
                                {payment.map((option, index) => (
                                    <>
                                        {' '}
                                        {option}
                                        {`${index + 1 !== payment.length ? `${' | '}` : `${''}`
                                            }`}
                                    </>
                                ))}
                            </Text>
                        </View>
                    </View>
                    {/*method of payment */}

                    {/*rating */}
                    <View
                        style={[
                            generalstyles.flexStyles,
                            generalstyles.paragraphStyle,
                        ]}>
                        <View style={[{ marginRight: 5 }]}>
                            <Text style={{ color: theme.colors.text }}>Rating</Text>
                        </View>
                        {Array(5)
                            ?.fill(5)
                            .map((_, index) => (
                                <AntDesignIcon
                                    key={index}
                                    name="star"
                                    size={22}
                                    color={theme.colors.yellow}
                                />
                            ))}
                    </View>
                    {/*rating */}
                </View>
            </View>
        </View>
    }
    renderItem={({ item, index }) => {
        return (
            <Pressable style={[styles.pressableStyles]}>
                <Image source={{ uri: item.image }} style={[styles.imageStyles]} />
                {/*menu words*/}
                <View style={[{ marginVertical: 5, marginHorizontal: 5 }]}>
                    <View
                        style={[
                            generalstyles.resideViews,
                            generalstyles.centerContent,
                        ]}>
                        <Text
                            style={{
                                color: `${theme.colors.primary}`,
                                fontWeight: '500',
                                fontSize: 12,
                            }}>
                            {item.serviceName}
                        </Text>
                    </View>
                </View>
                {/*menu words */}
            </Pressable>
        );
    }}
/>
{/*services provided */ }

<SpeedDial
        isOpen={open}
        icon={{name: 'more', color: '#fff'}}
        openIcon={{name: 'close', color: '#fff'}}
        color={theme.colors.primary}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}>
        <SpeedDial.Action
          icon={{name: 'chat', color: '#fff'}}
          title="Chat"
          color={theme.colors.primary}
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{name: 'map', color: '#fff'}}
          title="Map"
          color={theme.colors.primary}
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>