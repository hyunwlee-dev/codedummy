import { Modal } from './modal';

export default function IssueModal({
  params: { id: issueId },
}: {
  params: { id: string };
}) {
  return <Modal>{issueId}</Modal>;
}
