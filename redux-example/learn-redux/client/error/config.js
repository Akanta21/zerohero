/**
 * Created by andriankanta on 11/10/16.
 */
import Raven from 'raven-js'

const sentry_key = 'b86c84444a8043578140d5c6c32a5acb'
const sentry_app = '105189'

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`

export function logException(ex, context) {
    Raven.captureException(ex, {
        extra: context
    });
    /*eslint no-console:0*/
    window.console && console.error && console.error(ex);
}