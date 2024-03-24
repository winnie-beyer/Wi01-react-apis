import { useState } from "react";


export const ApiNasa = () => {
        const [date, setDate] = useState('');
        const[explanation, setExplanation]=useState('');
        const [imageUrl,setImageUrl] = useState('');


        const handleFetchData = ()=> {
        (async ()=> {
                const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;
                const response = await fetch(url);
                const data = await response.json();
                const _explanation = data.explanation;
                const  _imageUrl = data.url;

                setExplanation(_explanation);
                setImageUrl(_imageUrl);

        })();
}


    return (
        <div className="bg-gray-300 p-6 rounded-lg w-[30rem] flex flex-col gap-4 shadow-md shadow-slate-500">
                <input value={date} onChange={(e)=> setDate(e.target.value)} />
                <button onClick={handleFetchData}>Get astronomy picture</button>
                <p><img src={imageUrl}/></p>
                <p>{explanation}</p>
        </div>
    )
}
