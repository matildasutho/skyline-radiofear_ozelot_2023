import { useData } from "../DataContext";

export default function Gradient() {
    const { dataAv, data, setData } = useData();

    console.loge(dataAv);
}
