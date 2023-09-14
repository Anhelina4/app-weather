import { MEDIA_SIZES } from '__constants__'
import { useMediaQuery } from 'usehooks-ts'

const useScreen = () => {
  const sm = useMediaQuery('(min-width: 640px)')
  const md = useMediaQuery('(min-width: 768px)')
  const lg = useMediaQuery('(min-width: 1024px)')
  const xl = useMediaQuery('(min-width: 1280px)')
  const xxl = useMediaQuery('(min-width: 1536px)')

  const currentMedia = (() => {
    if (xxl) return MEDIA_SIZES.XXL
    if (xl) return MEDIA_SIZES.XL
    if (lg) return MEDIA_SIZES.LG
    if (md) return MEDIA_SIZES.MD
    if (sm) return MEDIA_SIZES.SM
    return MEDIA_SIZES.SM // Default or extra small
  })()

  return currentMedia
}

export default useScreen
