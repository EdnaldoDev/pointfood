import * as React from 'react';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box, Items } from './styles';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, RadioGroup, Switch, TextField } from '@mui/material';
import { useState } from 'react';
import { CartData } from '../../../types/cartItems';
import { formatDate, formatcurrency } from '../../../Helpers/functions';


interface FinishOrderFormProps{
  open : boolean 
  handleClose : ()=> void
  items:CartData[]
  total:number
}

export default function FinishOrderForm({open, handleClose, items, total}:FinishOrderFormProps) {
  const [deliveryMethod, setDeliveryMethod]=useState('entrega')

  const [checkedMoney, setCheckedMoney]=useState(false)
  const [checkedPix, setCheckedPix]=useState(true)

  const [details, setDetails]=useState('')
  const [name, setName]=useState('')
  const [phone, setPhone]=useState('')
  const [neighbor, setNeighbor]=useState('')
  const [address, setAddress]=useState('')
  const [complement, setComplement]=useState('')
  const [reference, setReference]=useState('')
  const [cashback, setCashback]=useState('')


const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  if(event.target.id === 'pix'){
    setCheckedPix(true)
    setCheckedMoney(false)
  }else{
    setCheckedMoney(true)
    setCheckedPix(false)
  }
}

const handleSubmit=(event:React.FormEvent)=>{
  event.preventDefault()
  const formData = {
    details: details,
    name: name,
    phone: phone,
    neighbor: neighbor,
    address: address,
    complement: complement,
    reference: reference,
    cashback: cashback,
  };


  const mensagemEstabelecimento = encodeURIComponent(
    `*Novo pedido de ${formData.name}!*\n\n` +
    `- Data: _${formatDate(new Date())}_.\n`+
    '--------------------------------\n' +
    `*Número do pedido: ${13}*\n` +
    '--------------------------------\n' +
    '*Itens do Pedido:*\n' +
    items.map(item => `qtd ${item.quantity} X ${item.name} - ${formatcurrency(item.price)}`).join('\n') +
    '\n--------------------------------\n' +
    `*Entregar ou retirar:* ${deliveryMethod}\n` +
    '--------------------------------\n' +
    `\n*Total do Pedido:* ${formatcurrency(total)}\n` +
    '--------------------------------\n' +
    `*Observações:* ${formData.details}\n` +
    '--------------------------------\n' +
    '*Dados do cliente:*\n' +
    `*Nome:* ${formData.name}\n` +
    `*Telefone:* ${formData.phone}\n` +
    `*Bairro:* ${formData.neighbor}\n` +
    `*Endereço:* ${formData.address}, ${formData.complement}\n` +
    'Obrigado! 🛒📞'
  );
  
  
  const regexNumeroTelefone = /^\d+$/;
  if (!regexNumeroTelefone.test(formData.phone)) {
    console.error('Número de telefone inválido');
    return;
  }

  localStorage.setItem('pedidos', JSON.stringify({
    formData,
    items
  }))

  
  window.open(`https://api.whatsapp.com/send/?phone=16997126087&text=${mensagemEstabelecimento}`)
}

async function handleCopy() {
  const texto='Chabe pi'
 
  
    // Tenta usar a API navigator.clipboard
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(texto);
      alert('Texto copiado para a área de transferência!');
    } 
}

return(
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Items>
            <Typography id="modal-modal-title" variant="h4" >
              Comfirme seu pedido
            </Typography>

            <ul>
              {items && items.map((item:CartData)=>(
                <li>
                  <img src={item.image} alt='snakc image'/>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{`${item.quantity} x ${formatcurrency(item.price)}`}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Items>
          <form onSubmit={handleSubmit}>
              <FormControl className='details'>
                <h4>  Adicionar algum detalhe ao pedido?</h4>
                <TextField   placeholder='Escreva o detalhe aqui.' value={details} onChange={(e)=>setDetails(e.target.value)}/>
              </FormControl>

              <div className='delivery-info'>
                <h2>Informações </h2>

                <FormGroup>
                    <InputLabel htmlFor="name">Nome</InputLabel>
                    <TextField required value={name} onChange={(e)=>setName(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <InputLabel htmlFor="cellphone">Celular</InputLabel>
                    <TextField required type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </FormGroup>

                <div>
                  <Button  onClick={()=>setDeliveryMethod('entregar')}>Entrega</Button>
                  <Button onClick={()=>setDeliveryMethod('retirar')}>Retirada</Button>
                </div>

                {
                  deliveryMethod === 'entregar' ?(
                    <FormGroup>
                      <FormGroup>
                          <InputLabel htmlFor="neibor">Bairro</InputLabel>
                          <TextField required  type='text' autoComplete='neighbor' value={neighbor} onChange={(e)=>setNeighbor(e.target.value)}/>
                      </FormGroup>
    
                      <FormGroup>
                          <InputLabel htmlFor="address">Endereço</InputLabel>
                          <TextField required autoComplete='address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                      </FormGroup>
    
                      <FormGroup>
                          <InputLabel htmlFor="complement" >Complemento</InputLabel>
                          <TextField  value={complement} onChange={(e)=>setComplement(e.target.value)} />
                      </FormGroup>
    
                      <FormGroup>
                          <InputLabel htmlFor="reference">Ponto de referência</InputLabel>
                          <TextField  value={reference} onChange={(e)=>setReference(e.target.value)}/>
                      </FormGroup>
                    </FormGroup>

                  ): ''
                }
              </div>

              <div className='values-infos'>
                <h3>Resumo dos valores</h3>
                <p>Subtotal <span>{formatcurrency(total)}</span></p>
                <p>Taxa de entrega  <span>{deliveryMethod ==='entregar' ? 'R$1,00' :'R$0,00'}</span></p>
                <hr/>
                <p>Total <span>{deliveryMethod ==='entregar' ? formatcurrency(total+1) : formatcurrency(total)}</span></p>
              </div>

              <div className='payment-info'>
                <h2>Forma de pagamento</h2>

                <FormGroup>
                  <FormControlLabel control={<Switch id='pix' checked={checkedPix} onChange={handleChange} defaultChecked />} label="Pix" />
                  <FormControlLabel control={<Switch id='money'  checked={checkedMoney} onChange={handleChange} />} label="Dinheiro"  />
                  
                  {checkedPix &&(
                    <button type='button' className='pix-copy' onClick={handleCopy}>
                      Copiar codigo de pagamento
                    </button>
                   )

                  }
                  {checkedMoney && (
                    <FormControl>
                      <h4>Será necessario troco?</h4>
                      <TextField required type='num' sx={{maxWidth:'50%'}} value={cashback} onChange={(e)=>setCashback(e.target.value)} />
                    </FormControl>
                   
                  )}
                </FormGroup>

              </div>


              <Button type='submit'>Enviar pedido</Button>
          </form>
        </Box>
          
      </Modal>
    </div>
  );
}
