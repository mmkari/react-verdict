import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import MyComponentSource from '!!raw-loader!@site/src/components/examples/source-code/SimpleRating';
import MyComponentStyleSource from '!!raw-loader!@site/src/css/SimpleRating.css';

const SimpleRating = () => {
  return (
    <SourceCodeSection
      componentSource={MyComponentSource}
      componentStyleSource={MyComponentStyleSource}
    />
  );
};

export default SimpleRating;
