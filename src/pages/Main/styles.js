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

  justify-content: center;

  section {
    display: flex;

    background-color: #202020;
    border-radius: 20px;

    margin: 10px;
    padding: 20px;
  }

  @media (max-width: 580px) {
    flex-direction: column;

    section {
      justify-content: center;
    }
  }
`;

export const ImageSection = styled.section``;

export const StyleSection = styled.section`
  flex-direction: column;

  input[type='text'] {
    display: block;
    height: 26px;
    border: 0;
    border-radius: 4px;
    padding: 0 5px;
  }

  input[type='color'] {
    margin-top: 15px;
    width: 100%;
    border: 0;
  }
`;

export const JsonSection = styled.section`
  textarea {
    width: 200px;
    resize: vertical;
    min-height: 187px;

    border-radius: 8px;
    padding: 5px;
    line-height: 12px;

    color: #999;
    background: transparent;
  }
`;
