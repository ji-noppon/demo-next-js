import { IBaseButton } from '@/app/interfaces/components/IBaseButton'

export default function BaseButton(props: IBaseButton) {
  const { name } = props
  return (
    <label className="py-1 px-2 bg-blue-600 text-white rounded min-w-[80px] inline-block text-center">
      {name}
    </label>
  )
}