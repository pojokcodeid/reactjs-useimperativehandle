import { forwardRef } from "react";

const AddComment = forwardRef((props, ref) => {
  return <input placeholder="Add Comment" ref={ref} />;
});

AddComment.displayName = "AddComment";

export default AddComment;
