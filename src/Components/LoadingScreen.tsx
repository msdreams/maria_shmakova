
import classNames from "classnames";

export const LoadingScreen = (p: { loading: boolean, direction:string, position:string, color: string }) => {
  return (
    <div
      className={classNames(
        "absolute flex items-center justify-center z-40 top-0 left-0 h-screen w-full transition-all duration-700 text-gray-100 rounded-[0%]",
        p.position,
        p.color,
        {
          "scale-100 opacity-100 ": p.loading,
          "scale-0 opacity-0 ": !p.loading,
        }
      )}
    >
      <span className="text-2xl font-medium mb-2 font-jura text-secondary-200">
        loading...
      </span>  </div>
  );
};