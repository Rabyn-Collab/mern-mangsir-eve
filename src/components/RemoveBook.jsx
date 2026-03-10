import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"
import { useRemoveBookMutation } from "../pages/books/bookApi.js"
import { toast } from "sonner";
import { Spinner } from "./ui/spinner.jsx";

export default function RemoveBook({ id }) {

  const [removeBook, { isLoading }] = useRemoveBookMutation();

  const handleRemove = async () => {
    try {
      await removeBook(id).unwrap();
      toast.success("Book removed successfully");
    } catch (err) {
      toast.error(err.data);

    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={isLoading} className={'bg-pink-700'} >
          {isLoading ? <Spinner /> : <TrashIcon />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleRemove}


          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
