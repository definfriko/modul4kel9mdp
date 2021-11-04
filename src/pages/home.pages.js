import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Style from '../stylessheets';
const { HomeStyle } = Style;
function HomePages() {
    const data = [
        {
            id: 1,
            nama: 'MOH. TAUFIK AFANDI',
            nim: '21120119130050',
            kelompok: '9',
        },
        {
            id: 2,
            nama: 'Rio Amin Fathani',
            nim: '21120119130069',
            kelompok: '9',
        },
        {
            id: 3,
            nama: 'Defin Friko Fahdani',
            nim: '21120119130054',
            kelompok: '9',
        },
        {
            id: 4,
            nama: 'APRIYANDRO TRIANDITO KUSUMO',
            nim: '21120119140127',
            kelompok: '9',
        },
    ];
    const ListItemNama = dataPassing => {
        return (
            <View
                style={
                    dataPassing.dataNama.id % 2 === 1
                        ? HomeStyle.itemListContainerGanjil
                        : HomeStyle.itemListContainerGenap
                }>
                <View>
                    <View style={HomeStyle.itemListGaris} />
                </View>
                <View style={HomeStyle.itemListContent}>
                    <Text style={HomeStyle.itemListTXT}>
                        {'Nama : ' + dataPassing.dataNama.nama}
                    </Text>
                    <Text style={HomeStyle.itemListTXT}>
                        {'NIM : ' + dataPassing.dataNama.nim}
                    </Text>
                    <Text style={HomeStyle.itemListTXT}>
                        {'Kelompok : ' + dataPassing.dataNama.kelompok}
                    </Text>
                </View>
            </View>
        );
    };
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.headerContainer}>
                <Image
                    source={{
                        uri: 'https://bit.ly/39BPh9p',
                    }}
                    style={HomeStyle.headerImage}
                />
                <Text style={HomeStyle.headerTXT}>
                    PRAKTIKUM MDP MODUL 4 KELOMPOK 9
                </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                legacyImplementation={false}
                data={data}
                renderItem={({ item }) => <ListItemNama dataNama={item} />}
                keyExtractor={item => item.id}
                style={HomeStyle.flatlist}
            />
        </View>
    );
}

export default HomePages;