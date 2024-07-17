import { motion, transform } from 'framer-motion';
import styled from 'styled-components';
import comment2 from '../../../assets/comment2.png';
const textVariants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 200,
    rotate: -5,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.8,
    },
  },
};

const AnimatedText = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={textVariants}
      viewport={{ once: true, amount: 0.8 }}
    >
      <HowDiv1>HOW?</HowDiv1>
      <HowDiv2>HOW?</HowDiv2>
      <HowDiv3>HOW?</HowDiv3>
    </motion.div>
  );
};

export default AnimatedText;

const HowDiv1 = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 148px;
  color: ${({ theme }) => theme.COLORS.black};
  position: relative;
  top: 50px;
  left: 500px;
`;

const HowDiv2 = styled(HowDiv1)`
  color: ${({ theme }) => theme.COLORS.brown[200]};
  top: 350px;
  left: 900px;
`;
const HowDiv3 = styled(HowDiv1)`
  color: ${({ theme }) => theme.COLORS.yellow[200]};
  top: 550px;
  left: 1400px;
`;
