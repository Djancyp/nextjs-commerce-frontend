import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { toggleSidebar } from "@/store/ui/index";
const Overlay = () => {
  const overlay = useAppSelector((state) => state.ui.overlay);
  const dispatch = useAppDispatch();
  return (
    <div>
      {overlay && (
        <div
          className="bg-black bg-opacity-75 w-full absolute top-0 left-0 bottom-0 z-10"
          onClick={() => dispatch(toggleSidebar(""))}
        />
      )}
    </div>
  );
};
export default Overlay;
