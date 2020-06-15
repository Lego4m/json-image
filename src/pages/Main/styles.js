import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  main {
    background: #242526;
    padding: 20px;
    border-radius: 20px;

    > h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;

export const Sections = styled.section`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
