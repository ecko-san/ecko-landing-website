import React from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from '../../shared/Container';
import Stripes from '../../shared/Stripes';
import FooterItemsList from './FooterItemsList';
import { FOOTER_ABOUT, FOOTER_LEARN, FOOTER_SUPPORT } from '../../../constants/footer';
import useWindowSize from '../../../hooks/useWindowSize';
import theme from '../../../styles/theme';
import Socials from './Socials';
import Copyrights from './Copyrights';

const FooterContainer = styled(FlexContainer)`
  padding: 80px 90px;
  background-color: #000000;
`;

const FooterSection = () => {
  const [width] = useWindowSize();
  return (
    <FooterContainer gap={40} className="relative justify-sb" tabletClassName="column align-ce" mobileClassName="column align-ce">
      {width >= theme.mediaQueries.desktopPixel && <Copyrights />}

      <FlexContainer gap={80} desktopStyle={{ margin: '0 50px' }}>
        <FooterItemsList {...FOOTER_ABOUT} />
        <FlexContainer gap={80} columnGap={50} tabletClassName="column" mobileClassName="column">
          <FooterItemsList {...FOOTER_SUPPORT} />
          <FooterItemsList {...FOOTER_LEARN} />
        </FlexContainer>
      </FlexContainer>

      {width >= theme.mediaQueries.desktopPixel && <Socials />}

      {width < theme.mediaQueries.desktopPixel && (
        <FlexContainer className="column" style={{ marginTop: 70 }} gap={20}>
          <Socials />

          <Copyrights />
        </FlexContainer>
      )}
      <Stripes iconStyle={{ height: 112, width: 115 }} />
    </FooterContainer>
  );
};

export default FooterSection;
