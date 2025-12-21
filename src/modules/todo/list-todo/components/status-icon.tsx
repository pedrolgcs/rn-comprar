import { Fragment } from 'react';
import { CircleCheck, CircleDashed } from 'lucide-react-native';
import { TodoStatus } from '@/entities/todo';

type StatusIconProps = {
  status: TodoStatus;
};

export function StatusIcon({ status }: StatusIconProps) {
  return (
    <Fragment>
      {status === TodoStatus.DONE ? (
        <CircleCheck size={18} />
      ) : (
        <CircleDashed size={18} />
      )}
    </Fragment>
  );
}
