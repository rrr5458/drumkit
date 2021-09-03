export function setVolume(volumeLevel) {
    return {
        type: "SET_VOLUMELEVEL",
        volumeLevel: volumeLevel
    }
}