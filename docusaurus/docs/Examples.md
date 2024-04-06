---
sidebar_position: 2
---

import {SimpleRating} from '@site/src/components/examples/source-code/SimpleRating';
import {AnimatedRating} from '@site/src/components/examples/source-code/AnimatedRating';

import {CenteredContainer, LinkContainer, Link} from '@site/src/components/HomepageFeatures';

<CenteredContainer>
<LinkContainer
to="/docs/examples#simple"
content={<SimpleRating />}
/>

<LinkContainer
to="/docs/examples#animated"
content={<AnimatedRating />}
/>

</CenteredContainer>

import SimpleExample from './examples/\_simple.mdx';
import AnimatedExample from './examples/\_animated.mdx';

## Examples

### Default Props {#simple}

<SimpleExample />

### Default Props {#animated}

<AnimatedExample />
