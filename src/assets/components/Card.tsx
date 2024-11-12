import { FC } from 'react';
interface CardPropType {
  img: string;
  title: string;
  desc: string;
  price: number;
}
const Masala: FC<CardPropType> = ({ img, title, desc, price }) => {
  return (
    <>
      <img src={img} alt='' />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{price}</p>
    </>
  );
};
export default Masala;
