import { useEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth.js'
import apolloClient from '@/services/apollo/config/client.js'
// @ts-ignore
import { NewMessageInChatSubscription } from '@/services/apollo/subscriptions/messages.graphql'

interface SubscriptionResult {
  loading: false
  error: any
  data: any
}

let subscription: any = null
let observable: any = null

function useNewMessagesSubscription() {
  const [result, setResult] = useState<SubscriptionResult>({
    loading: false,
    error: undefined,
    data: undefined
  })

  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (isSignedIn) {
      if (!observable) {
        observable = apolloClient.subscribe({
          query: NewMessageInChatSubscription
        })
      }

      subscription = observable.subscribe({
        // @ts-ignore
        next(fetchResult) {
          setResult({
            loading: false,
            data: fetchResult.data!,
            error: undefined
          })
        },
        // @ts-ignore
        error(error) {
          setResult({
            loading: false,
            data: undefined,
            error
          })
        }
      })
    } else if (subscription) {
      subscription.unsubscribe()
      subscription = null
      observable = null
    }
  }, [isSignedIn])

  return result
}

export default useNewMessagesSubscription
