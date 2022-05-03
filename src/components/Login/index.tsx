import React from 'react'

import {
  Container,
  Content,
  BgImage,
  CTA,
  CTALogoOne,
  SignUp,
  CTALogoTwo
} from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="Logo empresas" />
          <SignUp>GET ALL THERE</SignUp>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            beatae ratione totam nulla adipisci commodi amet. Beatae aut harum
            qui sint distinctio ipsum, laborum, vitae accusantium molestias
            voluptate nam dignissimos.
          </p>

          <CTALogoTwo src="/images/cta-logo-two.png" alt="Logo empresas" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

export default Login
