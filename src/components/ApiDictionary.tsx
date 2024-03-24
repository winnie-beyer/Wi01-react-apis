import { useState } from "react";

export const ApiDictionary = () => {
	const [word, setWord] = useState("");
    const [definition, setDefinition] = useState('');

    const handleFetchDefinition = () => {
        (async () => {
            const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';
            const response = await fetch(`${url}/${word}`);
            const data = await response.json();
            const _definition = data[0].meanings[0].definitions[0].definition;
            setDefinition(_definition);


        })();
    }

	return (
		<div className="bg-gray-300 p-6 rounded-lg w-[20rem] flex flex-col gap-4 shadow-md shadow-slate-500">
			<input value={word} onChange={(e) => setWord(e.target.value)} />
			<button onClick={handleFetchDefinition}>Get definition</button>
			<p>{definition}</p>
		</div>
	);
};



