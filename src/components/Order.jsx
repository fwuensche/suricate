import { formatEuros, getAmounts } from '../models/order'

import OrderItem from './OrderItem'
import OrderLine from './OrderLine'
import PropTypes from 'prop-types'

const WIDTH = 48

const Order = ({ orderItems, setOrderItems, customerName, paymentMethod }) => {
  const { subtotal, total, formulas } = getAmounts(orderItems)

  const onPrint = () => {
    // Check if we're on Android
    const isAndroid = /android/i.test(navigator.userAgent)

    // ESC/POS commands for font formatting
    const ESC = '\x1B'
    const DOUBLE_SIZE = ESC + '!' + '\x30' // Double width and height
    const CENTER = ESC + 'a' + '\x01' // Center alignment
    const LEFT = ESC + 'a' + '\x00' // Left alignment

    // Format the order content
    let content = ''

    // Add ESC/POS formatting for Android/RawBT - everything in double size
    content += DOUBLE_SIZE
    content += CENTER
    content += 'SURICATE\n'
    content += 'Ticket de vente\n'
    content += LEFT
    content += new Date().toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' }) + '\n\n'

    if (customerName) {
      content += `${customerName.toUpperCase()}\n\n`
    }

    // Add order items
    orderItems.forEach((item) => {
      const priceStr = formatEuros(item.price)

      // For double-width text, WIDTH is halved
      const spaces = ' '.repeat(WIDTH / 2 - item.name.length - priceStr.length)
      content += `${item.name}${spaces}${priceStr}\n`

      if (item.ingredients) {
        item.ingredients.forEach((ingredient) => {
          content += `  [${ingredient.checked ? 'X' : ' '}] ${ingredient.name}\n`
        })
        content += '\n'
      }
      content += '\n'
    })

    // Add separator line
    content += '-'.repeat(WIDTH / 2) + '\n'

    // Format totals with right alignment
    const subtotalStr = formatEuros(subtotal)
    const totalStr = formatEuros(total)

    // For double-width text, WIDTH is halved
    content += `\nSous-total${' '.repeat(WIDTH / 2 - 'Sous-total'.length - subtotalStr.length)}${subtotalStr}\n`
    content += `Total${' '.repeat(WIDTH / 2 - 'Total'.length - totalStr.length)}${totalStr}\n`

    if (paymentMethod) content += `\nPaiement: ${paymentMethod}\n`

    content += '\nSIRET: 803 304 237 00024'

    if (isAndroid) {
      // Encode the content for URL
      const encodedContent = encodeURIComponent(content)

      // Create RawBT intent URL
      const rawbtUrl = `intent:${encodedContent}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end`

      // Try to open RawBT
      const rawbtWindow = window.open(rawbtUrl, '_blank')

      // If the window was blocked or RawBT is not installed, fall back to regular print
      if (!rawbtWindow || rawbtWindow.closed || typeof rawbtWindow.closed === 'undefined') window.print()
    } else {
      // Not on Android, show preview in a new tab
      const previewWindow = window.open('', '_blank')
      previewWindow.document.write(`
        <html>
          <head>
            <title>Print Preview</title>
            <style>
              body {
                font-family: 'Courier New', monospace;
                white-space: pre-wrap;
                padding: 20px;
                background: #f0f0f0;
                font-size: 14px;
                line-height: 1.4;
              }
              .preview {
                background: white;
                padding: 20px;
                width: fit-content;
                margin: 0 auto;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
            </style>
          </head>
          <body>
            <div class="preview">${content.replace(/\n/g, '<br>')}</div>
          </body>
        </html>
      `)
      previewWindow.document.close()
    }
  }

  const removeItem = (index) => setOrderItems((prevItems) => prevItems.filter((_, i) => i !== index))

  return (
    <div id='order' className='flex flex-col gap-2 text-sm'>
      <div className='flex justify-between'>
        <span>Ticket de vente</span>
        <span className='uppercase'>Suricate</span>
      </div>
      {customerName && (
        <div>
          Client: <span className='uppercase'>{customerName}</span>
        </div>
      )}
      <div className='space-y-4'>
        {orderItems.map((item, index) => (
          <OrderItem
            key={index}
            item={item}
            index={index}
            removeItem={removeItem}
            inFormula={formulas.some((f) => f.items.some((i) => i.index === index))}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
          />
        ))}
      </div>
      <hr />
      <OrderLine label='Sous-total' value={subtotal} />
      <OrderLine label='Total' value={total} />
      {paymentMethod && (
        <>
          <hr />
          Paiement : {paymentMethod}
        </>
      )}
      <div className='print:hidden'>
        <button onClick={onPrint} className='btn-primary w-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z'
            />
          </svg>
          Imprimer
        </button>
      </div>
    </div>
  )
}

Order.propTypes = {
  orderItems: PropTypes.array.isRequired,
  setOrderItems: PropTypes.func.isRequired,
  customerName: PropTypes.string,
  paymentMethod: PropTypes.string,
}

export default Order
