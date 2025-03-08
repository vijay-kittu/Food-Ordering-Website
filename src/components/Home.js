import { GridBox } from "./GridBox";
import { ItemsGrid } from "./ItemsGrid";
import { DeliveryFlex } from "./DeliveryFlex";
export const Home = () => {
  return (
    <div className="home">
      <div className="website-intro">
        <div className="black-block"></div>
        <p className="typing-animation">𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑩𝒂𝒆 𝑺𝒖𝒛𝒚</p>
      </div>
      <div className="subtitle ">
        Single destination for all your hunger tantrums
      </div>
      <div>
        <br></br>
      </div>
      <div>
        <br></br>
      </div>
      <div className="scroll-intro">Here are our customer's top picks :</div>
      <GridBox />
      <div>
        <br></br>
      </div>
      <p className="subtitle subgrid-intro">Select your favourite items</p>
      <ItemsGrid />
      <div>
        <br></br>
      </div>

      <DeliveryFlex />
    </div>
  );
};
