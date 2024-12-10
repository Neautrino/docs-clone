'use client';

import React, { useState } from "react";
import { Id } from "../../convex/_generated/dataModel"
import { 
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger 
 } from "./ui/alert-dialog";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
}

function RemoveDialog({ documentId, children }: RemoveDialogProps) {

    const remove = useMutation(api.documents.removeById);
    const [ isRemoving, setIsRemoving ] = useState(false);

  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            {children}
        </AlertDialogTrigger>
        <AlertDialogContent onClick={(e) => e.stopPropagation()}>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. Are you sure you want to delete this document?
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                    disabled={isRemoving}
                    onClick = {(e) => {
                        e.stopPropagation();
                        setIsRemoving(true);
                        remove({ id: documentId })
                            .then(() => toast.success("Document deleted"))
                            .catch(() => toast.error("Failed to delete document"))
                            .finally(() => setIsRemoving(false));
                    }}
                >
                    Delete
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default RemoveDialog