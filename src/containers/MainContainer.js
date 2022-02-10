import React from 'react';
import IntroductionSection from '../components/section-introduction/IntroductionSection';
import FeaturesSection from '../components/section-features/FeaturesSection';
import TokenomicsSection from '../components/section-tokenomics/TokenomicsSection';
import PartnersSection from '../components/section-partners/PartnersSection';
import ProofOfDexSection from '../components/section-proof-of-dex/ProofOfDexSection';
import Roadmap from '../components/roadmap/Roadmap';
import { FlexContainer } from '../components/shared/Container';
import TeamsSection from '../components/section-teams/TeamsSection';

const MainContainer = () => {
  return (
    <FlexContainer className="column">
      <IntroductionSection />
      <ProofOfDexSection />
      <FeaturesSection />
      <TokenomicsSection />
      <Roadmap />
      <PartnersSection />
      <TeamsSection />
    </FlexContainer>
  );
};

export default MainContainer;
