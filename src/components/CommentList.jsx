import { forwardRef, useImperativeHandle, useRef } from "react";

const CommentList = forwardRef((props, ref) => {
  const divRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        node.scrollTop = node.scrollHeight;
      },
    };
  }, []);
  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }
  return (
    <div className="CommentList" ref={divRef}>
      {comments}
    </div>
  );
});

CommentList.displayName = "CommentList";

export default CommentList;
