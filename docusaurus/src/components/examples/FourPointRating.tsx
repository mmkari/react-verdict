import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import MyComponentSource from '!!raw-loader!@site/src/components/examples/source-code/FourPointRating';
import MyComponentStyleSource from '!!raw-loader!@site/src/css/FourPointRating.css';

const FourPointRating = () => {
  return (
    <SourceCodeSection
      componentSource={MyComponentSource}
      componentStyleSource={MyComponentStyleSource}
    />
  );
};

export default FourPointRating;
