import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./SortHeader.css";

interface SortHeaderProps {
  arrayLength: number;
  arrayTitle: string;
  index: number;
  setIndex: (index: number) => void;
}

export default function SortHeader({
  arrayLength,
  arrayTitle,
  index,
  setIndex,
}: SortHeaderProps) {
  const handleLeft = () => {
    if (index === 0) {
      setIndex(arrayLength - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleRight = () => {
    if (index === arrayLength - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="sort-header">
      <button onClick={handleLeft}>
        <ArrowLeftIcon />
      </button>
      <h2>{arrayTitle}</h2>
      <button onClick={handleRight}>
        <ArrowRightIcon />
      </button>
    </div>
  );
}
