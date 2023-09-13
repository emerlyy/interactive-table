import { Dispatch, SetStateAction, useCallback, useState } from "react"

export const useToggle = (
  initialValue?: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState<boolean>(!!initialValue);

  const toggle = useCallback(() => setValue(prev => !prev), [])

  return [value, toggle, setValue];
}