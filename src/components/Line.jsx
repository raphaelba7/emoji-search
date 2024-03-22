function Line(props) {
  const datasF = props.datas;
  const searchF = props.search;

  return (
    <>
      <div className="line-all">
        {datasF.data.map((elem) => {
          const test = elem.keywords.search(searchF);
          if (test !== -1) {
            return (
              <>
                <div className="line">
                  <p>
                    {elem.symbol} {elem.title}
                  </p>
                  <input
                    className="none"
                    type="text"
                    value={elem.symbol}
                    id={elem.symbol}
                    readOnly="readOnly"
                  />
                  <p
                    onClick={() => {
                      // get the text to copy
                      const idSymbol = elem.symbol;
                      const copyText = document.getElementById(idSymbol);

                      copyText.select();

                      // Copy the text inside the text field
                      navigator.clipboard.writeText(copyText.value);
                      // Alert the copied text
                      alert("Copied the text: " + copyText.value);
                    }}
                  >
                    Copy
                  </p>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Line;
