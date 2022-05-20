import React from 'react'
import { ContentContainer, PromptContainer, PromptForm, ResponseContainer, SubmitButton, TextBox } from './ContentElements'

const Content = () => {
  return (
    <ContentContainer>

        <PromptContainer>

          <PromptForm>
            <TextBox 
            type="text"
            id="text"
            placeholder="What's happening?"
            />
            <SubmitButton type="submit"/>
          </PromptForm>

        </PromptContainer>

        <ResponseContainer>Test</ResponseContainer>

    </ContentContainer>
  )
}

export default Content