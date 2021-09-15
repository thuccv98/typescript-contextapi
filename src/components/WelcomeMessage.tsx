import { Box } from '@material-ui/core';

interface WelcomeMessageProps {
  position: String;
  country?: String;
}

const WelcomeMessage = ({
  position,
  country = 'VietNam',
}: WelcomeMessageProps) => {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
