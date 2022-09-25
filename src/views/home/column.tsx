import { useEventbus } from '/@/hooks/useEventBus'

const eventbus = useEventbus()

export const columns = [
  {
    field: 'name',
    title: 'Name',
    slots: {
      default: () => {
        const handleClick = () => {
          eventbus.toRefreshTable()
        }
        return (<div onClick={handleClick}>xxx</div>)
      },
    },
  },
  { field: 'nickname', title: 'Nickname' },
  { field: 'role', title: 'Role' },
  { field: 'address', title: 'Address', showOverflow: true },
]