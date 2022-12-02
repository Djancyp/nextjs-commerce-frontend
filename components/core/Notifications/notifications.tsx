import { removeNotification } from "@/store/ui/index";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
const Notifications = () => {
  const notifications = useAppSelector((state) => state.ui.notifications);
  const dispatch = useAppDispatch();
  const [effect, setEffect] = useState<boolean>(true);

  const setNotificationTimeOut = () => {
    setEffect(true);
    const ls = notifications[notifications.length - 1];
    if (ls) {
      const timeout = setTimeout(() => {
        const ls = notifications[notifications.length - 1];
        dispatch(removeNotification(ls.id));
        setEffect(false);
      }, ls.timeout || 5000);
      return () => clearTimeout(timeout);
    }
  };
  useEffect(() => {
    setNotificationTimeOut();
  }, [notifications]);
  return (
    <>
      <div
        className={`${
          effect === true && notifications.length > 0
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } absolute z-50 bottom-0 left-0 right-0 w-full
transition-all ease-out duration-300 text-white text-sm 
md:top-20 md:right-1 md:w-80 md:left-auto md:bottom-auto`}
      >
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${
              notification.type || "bg-red-500"
            } p-3 border-b-black  flex flex-col transition-all ease-out duration-300
md:mb-2 md:rounded-md`}
          >
            <button
              name="close"
              className="ml-auto border border-black rounded-full bg-black"
              onClick={() => dispatch(removeNotification(notification.id))}
            >
              <IoMdClose />
            </button>
            {notification.message}
          </div>
        ))}
      </div>
    </>
  );
};
export default Notifications;
