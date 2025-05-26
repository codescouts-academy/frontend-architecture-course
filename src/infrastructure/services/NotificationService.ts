import { NotificationService } from "@/domain/services/NotificationService";
import toast from "react-hot-toast";

export const useNotifier = (): NotificationService => {
  return {
    success: (message: string) => {
      debugger
      toast.success(message)
      },
    error: (message: string) =>{
      debugger
      toast.error(message)
    },
  };
};
