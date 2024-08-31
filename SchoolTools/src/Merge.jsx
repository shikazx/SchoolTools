import { useState, useEffect } from 'react';
import PDFMerger from 'pdf-merger-js/browser';
import { PDFDocument } from 'pdf-lib';
import { Route, Routes, Link } from 'react-router-dom';

const Merge = () => {

    const [ files, setFile ] = useState(null);
    const [mergedPdfUrl, setMergedPdfUrl] = useState(null);

    function handleUpload(){
        if (!files){
            console.log("no file selected")
            return;

        }

        console.log(files)

        const render = async () => {
            const merger = new PDFMerger();
      
            for(const file of files) {
              await merger.add(file);
            }
      
            await merger.setMetadata({
              producer: "pdf-merger-js based script"
            });
      
            const mergedPdf = await merger.saveAsBlob();
            merger.save(mergedPdf);
            const url = URL.createObjectURL(mergedPdf);
      
            return setMergedPdfUrl(url);
          };
      
          render().catch((err) => {
            throw err;
          });


    }
    
    console.log(mergedPdfUrl);
    return (  
        <div className = "Merge">
            <h1>MERGE LOL</h1>
        
                <input onChange={(e) => { setFile(e.target.files) }}type="file" multiple/>
                <button onClick = { handleUpload }>Submit</button>


            


        </div>


    );
}
 




export default Merge;