export const TOPIC_SELECTED = 'TOPIC_SELECTED';

export function topicSelected(topic) {
  console.log(topic);
  return {
    type: TOPIC_SELECTED,
    payload: topic
  };
}
