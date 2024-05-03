import styled from 'styled-components';
import Image from './unnamed.jpg'

export const Piccc = styled.div(()=> ({
    backgroundImage: 'url(' + Image + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: '100%',
    borderRadius: '25px',
    width: '50%',
    height: '50%',
    resize: 'both'
}));

