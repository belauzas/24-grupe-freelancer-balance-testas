import {account} from './data.js'
import {months} from './data.js'
import {renderRows} from './renderRow.js'
import {renderFooter} from './renderFooter.js'
import {summaryList} from './summary.js'


renderRows('.table-content', account, months)
renderFooter('.table-footer', account)
summaryList('.summary-list', account, months)


