type BoxContent = {
  content: string;
};

function Box({ content }: BoxContent) {
  return (
    <div className="container">
      <span>{content}</span>
    </div>
  );
}

export default Box;
