import { auth } from "@clerk/nextjs/server";
import { Id } from "../../../../convex/_generated/dataModel";
import { Document } from "./Document";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

interface documentIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>
}

async function DocumentIdPage({ params }: documentIdPageProps) {

  const documentId = (await params).documentId;

  const { getToken } = await auth();
  const token = await getToken({ template: "convex" }) ?? undefined;

  if(!token){
    throw new Error("Unauthorized");
  }

  const prelodedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token }
  );

  return <Document preloadedDocument={prelodedDocument} />
}

export default DocumentIdPage