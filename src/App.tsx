import styled from 'styled-components';
import Matrix from './matrix';

const App: React.FC = () => {
    return (
        <AppWrapper>
            <StyledTitle>9x9 Matrix Example</StyledTitle>
            <Matrix />
        </AppWrapper>
    );
};

export default App;

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
`

const StyledTitle = styled.div`
    font-size: 2rem;
`
