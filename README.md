## Crater React SDK


### Install

Install using `npm install @crater/react-sdk`

### Usage 

In a React app, use the Invoice components:  
`import { InvoiceForm } from '@crater/react-sdk'`  
`import { InvoiceTable } from '@crater/react-sdk'` 

#### InvoiceForm props

| Name        | Description      
| ----------- | -----------      
| kind        | 'Primary' | 'Outline' | 'Inline' | 'Ghost' | ' Warning'            
| data-id     | string             
| type        | 'button' | 'submit' | 'reset'             
| name        | string             
| value       | string             
| disabled    | Boolean          
| onClick     | function         


#### InvoiceTable props

| Name        | Description | 
| ----------- | ----------- |
| value       | integer     |
