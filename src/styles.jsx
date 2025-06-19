import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0px 0px 30px;
`;

export const Title = styled.div`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 22px;
  color: rgb(171, 171, 171);
  > span {
    color: #ab4444;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  margin-top: 25px;

  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 225px;
  height: 310px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const IgName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
     rgba(0, 0, 0, 0.3) 50%,
    rgba(0,0,0,0) 100%
  );
  color: white;
  text-align: center;
  font-size: 15px;
  padding: 8px 0px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
