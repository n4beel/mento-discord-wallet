import { gql } from '@apollo/client';

export const COMPLETE_QUEST_MUTATION = gql`
  mutation CompleteQuest($questId: String!) {
    completeQuest(questId: $questId) {
      id
      status
      message
    }
  }
`;
