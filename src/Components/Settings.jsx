import React, {useContext} from 'react';
import ReactSlider from 'react-slider';
import Back from "./Buttons/Back";
import SettingsContext from "./SettingsContext";


export default function Settings() {

    const settingsInfo = useContext(SettingsContext);

    return(
        <div style={{textAlign:'center' , padding: '30px'}}>
            <label>countdown time: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
        <label>breaks in countdown: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider
            className={'slider green'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={0}
            max={120}
        />
        <div style={{textAlign:'center', marginTop:'30px'}}>
            <Back onClick={() => settingsInfo.setShowSettings(false)} />
        </div>
        </div>
    )
}
