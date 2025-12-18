import { Fragment } from "react"
import { StyleSheet } from "react-native"
import { CircleCheck, CircleDashed } from "lucide-react-native"

import { FilterStatus } from "../types/filter-status"

type StatusIconProps = {
  status: FilterStatus
}

export function StatusIcon({ status }: StatusIconProps) {
  return (
    <Fragment>
      {status === FilterStatus.DONE ? (
        <CircleCheck size={18} color="#2C46B1" />
      ) : (
        <CircleDashed size={18} color="#000000" />
      )}
    </Fragment>
  )
}

export const styles = StyleSheet.create({});
