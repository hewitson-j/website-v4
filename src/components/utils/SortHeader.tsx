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
  const disabled = arrayLength <= 1;

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
      {!disabled && (
        <button onClick={handleLeft} title="Previous" aria-label="Previous">
          <ArrowLeftIcon />
        </button>
      )}
      <h2>{arrayTitle}</h2>
      {!disabled && (
        <button onClick={handleRight} title="Next" aria-label="Next">
          <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
