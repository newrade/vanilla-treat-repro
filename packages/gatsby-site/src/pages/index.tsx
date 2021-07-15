import {
  // ButtonTreat,
  ButtonVanilla,
  themeClass,
  treatTheme,
} from '@newrade/core-react-ui';
import '@newrade/core-react-ui/lib/theme/global.css';
import React from 'react';

import { TreatProvider } from 'react-treat';

const Page: React.FC<any> = (props) => {
  return (
    <main
      className={themeClass}
      style={{
        display: 'grid',
        gap: 80,
      }}
    >
      {/* <TreatProvider theme={treatTheme}> */}
      {/* <ButtonTreat>Button Treat</ButtonTreat> */}

      <ButtonVanilla>Button Vanilla</ButtonVanilla>
      {/* </TreatProvider> */}
    </main>
  );
};

export default Page;
