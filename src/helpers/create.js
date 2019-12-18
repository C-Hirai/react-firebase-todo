import { firestore } from "firebase/app";

const create = async input => {
  const now = firestore.Timestamp.now();

  const systemFields = { createdAt: now };

  const threadRef = firestore()
    .collection("threads")
    .doc();

  await threadRef.set({
    ...systemFields,
    title: input.title,
    content: input.content,
    doneFlg: 0
  });
};

export { create };
