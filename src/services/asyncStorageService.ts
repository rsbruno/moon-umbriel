import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (value: any, name: string) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(name, jsonValue)
    } catch (e) {
        // saving error
        console.log("erro no salvamento")
    }
}

const getData = async (name: any) => {
    try {
        const jsonValue = await AsyncStorage.getItem(name)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

const NAMES = {
    STORAGE_USER: '@storage_user'
}

export const asyncStorageService = {
    storeData,
    getData,
    NAMES
}