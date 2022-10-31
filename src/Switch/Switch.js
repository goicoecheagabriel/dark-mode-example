import { useState } from 'react';
import {
    SwitchContainer,
    SwitchWrapper,
    SwitchBGC,
    ButtonSwitch
} from './Switch.elements';

const Switch = ({setTheme}) => {

    const [ position, setPosition ] = useState(false);

    const changePosition = () => {
        setTheme( position ? 'light' : 'dark' )
        setPosition(!position);
    }

    return (
        <>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwitchBGC>
                        <ButtonSwitch 
                            onClick={ changePosition }
                            position={ position }>
                        </ButtonSwitch>
                    </SwitchBGC>
                </SwitchWrapper>
            </SwitchContainer>
        </>
    )
}

export default Switch;