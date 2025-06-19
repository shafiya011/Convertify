import { Data } from "./MockData";
import {
  Title,
  Container,
  ImageContainer,
  ImageWrapper,
  Image,
  IgName,
} from "./styles";

function App() {
  return (
    <Container>
      <Title>
        We empower <br />
        20,000+<span> gravel grinders</span>
      </Title>

      <ImageContainer>
        {Data.map((data, key) => (
          <ImageWrapper key={key}>
            <Image src={data?.image} alt="ig" />
            <IgName>{data?.ig_name}</IgName>
          </ImageWrapper>
        ))}
      </ImageContainer>
    </Container>
  );
}

export default App;
