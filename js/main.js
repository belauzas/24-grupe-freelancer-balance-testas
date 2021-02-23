import {account} from './data.js'
import {months} from './data.js'
import {renderRows} from './renderRow.js'
import {renderFooter} from './renderFooter.js'


renderRows('.table-content', account, months)
renderFooter('.table-footer', account)


