import { useMutation } from '@apollo/client';
import { COMPLETE_QUEST_MUTATION } from '../graphql/mutations';

function CompleteQuestButton({ questId }: { questId: any }) {
    const [completeQuest, { data, loading, error }] = useMutation(COMPLETE_QUEST_MUTATION);

    const handleCompleteQuest = async () => {
        try {
            await completeQuest({ variables: { questId } });
            console.log('Quest completed successfully!');
        } catch (err) {
            console.error('Error completing quest:', err);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error occurred: {error.message}</p>;

    return <button onClick={handleCompleteQuest}>Complete Quest</button>;
}

export default CompleteQuestButton;
