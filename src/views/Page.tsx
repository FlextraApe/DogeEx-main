import React from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import SubNav from 'components/Menu/SubNav'
import { PageMeta } from 'components/Layout/Page'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  min-height: calc(100vh - 90px);
  background: ${({ theme }) => theme.colors.background};

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 90px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledPage {...props}>
        {/* <SubNav /> */}
        {children}
        <Flex flexGrow={1} />
      </StyledPage>
    </>
  )
}

export default Page
