const DownloadCVButton = () => {
  const onClickHandler = () => {
    // download here from s3
    // I guess the s3 path will be via props :-?
  };

  return (
    <a className="dlBtn" onClick={onClickHandler}>
      Download CV
    </a>
  );
};

export default DownloadCVButton;
