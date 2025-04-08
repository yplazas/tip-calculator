import { tipOptions } from '../data/db';

interface Propina {
    setTip: React.Dispatch<React.SetStateAction<number>>
}
export default function Propina({ setTip }: Propina) {
    return (
        <div className="border-t border-teal-400 mt-2">
            <h3 className="font-black my-2">Propina</h3>
            <form action="" className="flex justify-evenly items-center">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor="">{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={(e) => setTip(+e.target.value)}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
