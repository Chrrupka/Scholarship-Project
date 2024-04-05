const UploadFile = ({data, setFieldValue, errors}) => {
    return (
        <div>
            <input
                type="file"
                name="attachments"
                accept=".pdf"
                multiple={true}
                onChange={(e) => {
                    if (e.currentTarget.files) {
                        setFieldValue("attachments", e.currentTarget.files);
                    }
                }}
            />
            {errors.attachments && (
                <>
                    <br/>
                    <span id="error">{errors.attachments}</span>
                    <br/>
                </>
            )}
          {data.attachments && (
                <>
                    <br/>
                    <button onClick={() => setFieldValue("attachments", null)}>Usuń załączniki</button>
                    <br/>
                </>
            )}
        </div>
    );
};

export default UploadFile;
