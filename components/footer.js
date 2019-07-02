import React from 'react'
import {
    Container,
    Divider,
    Image,
    Segment,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
    <div>
        <Segment fixed inverted vertical style={{ margin: '42em 0em 0em', padding: '5em 0em', marginbot:'0' }}>
            <Container textAlign='center' >
                            <Image centered size='normal' src='https://modex.tech/wp-content/uploads/2018/11/logo-top3.png' />
                <Divider  />
                <p>© 2019 Modex. | MODEX (Gibraltar) LIMITED, 57/63 Line Wall Road, Gibraltar </p>
            </Container>
        </Segment>
    </div>
);

export default FixedMenuLayout