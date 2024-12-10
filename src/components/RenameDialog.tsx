'use client';

import React, { useState } from "react";
import { Id } from "../../convex/_generated/dataModel"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from "./ui/dialog";

interface RenameDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
}

function RenameDialog({ documentId, children }: RenameDialogProps) {

    const remove = useMutation(api.documents.removeById);
    const [ isRemoving, setIsRemoving ] = useState(false);

  return (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent>
            <form>
                <DialogHeader>
                    <DialogTitle>Rename Document</DialogTitle>
                    <DialogDescription>
                        Enter a new name for this document.
                    </DialogDescription>
                </DialogHeader>
                <div className="my-4">
                    <Input />
                </div>
                <DialogFooter>
                    <Button>
                        Cancel
                    </Button>
                    <Button>
                        Save
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default RenameDialog