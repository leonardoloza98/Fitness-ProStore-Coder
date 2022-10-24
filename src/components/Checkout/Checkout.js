import React, { useContext } from 'react';
import { Formik } from "formik";
import { AppContext } from '../../App';
import * as Yup from "yup";
import { collection, getDocs, addDoc, where, query, documentId, writeBatch} from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Checkout.css';

export const Checkout = () => {
    const {cart} = useContext(AppContext)

    const handleSubmitForm = async(values) => {
        try{
            const objForm = {
                ...values,
                items: cart
            }
    
            const ids = cart.map(item=>{
                return item.id
            })
    
            const productRef = collection(db, 'listaDeProductos')
    
            const productsFromFirestore = await getDocs(query(productRef, where(documentId(),'in', ids)))
    
            const { docs } = productsFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb
    
                const productaddedToCart = cart.find(prod => prod.id===doc.id)
                const prodQuantity = productaddedToCart?.unidades
    
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb-prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objForm)
                toast.success('Orden enviada correctamente.',  {
                    position: toast.POSITION.TOP_RIGHT
                })
    
                console.log('El id de su order es ', orderAdded.id)
            }else{
                toast.error('Hay productos fuera de stock.',  {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        }catch(error){
            toast.error('No es posible generar la orden.',  {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }

    return (
      <div className='div-checkout-container'>
          <div className='div-title'>
              <span>
                  Checkout
              </span>
          </div>
          <Formik
          initialValues={{ 
              name: '',
              lastName: '',
              email: '',
              phone: ''
          }}
          onSubmit={(values)=>handleSubmitForm(values)}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().email().required('Required'),
            phone: Yup.string().required('Required')
        })}
          >
            {props => {
                const {
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset
                } = props;
                return (
                    <form onSubmit={handleSubmit} className='formulario-checkout'>
                        <div className='div-form'>
                            <label className='label-form'>Nombre</label>
                            <input 
                            id='name' 
                            placeholder='Ingrese su nombre'
                            type='text'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.name && touched.name
                                ? 'text-input error'
                                : 'text-input'
                            }
                            ></input>
                            {errors.name && touched.name && (
                                <div className="input-feedback"><ErrorOutlineIcon className='icon-error'/>{errors.name}</div>
                            )}
                        </div>
                        <div className='div-form'>
                            <label className='label-form'>Apellido</label>
                            <input 
                            id='lastName' 
                            placeholder='Ingrese su apellido'
                            type='text'
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.lastName && touched.lastName
                                ? 'text-input error'
                                : 'text-input'
                            }
                            ></input>
                            {errors.lastName && touched.lastName && (
                                <div className="input-feedback"><ErrorOutlineIcon className='icon-error'/>{errors.lastName}</div>
                            )}
                        </div>
                        <div className='div-form'>
                            <label className='label-form'>Email</label>
                            <input 
                            id='email' 
                            placeholder='Ingrese su email'
                            type='text'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email
                                ? 'text-input error'
                                : 'text-input'
                            }
                            ></input>
                            {errors.email && touched.email && (
                                <div className="input-feedback"><ErrorOutlineIcon className='icon-error'/>Ingrese un email válido</div>
                            )}
                        </div>
                        <div className='div-form'>
                            <label className='label-form'>Teléfono</label>
                            <input 
                            id='phone' 
                            placeholder='Ingrese su teléfono'
                            type='string'
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.phone && touched.phone
                                ? 'text-input error'
                                : 'text-input'
                            }
                            ></input>
                            {errors.phone && touched.phone && (
                                <div className="input-feedback"><ErrorOutlineIcon className='icon-error'/>{errors.phone}</div>
                            )}
                        </div>
                        <div className='div-button-checkout'>
                            <button
                            type="button"
                            className="button-checkout"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                            >
                                Limpiar
                            </button>
                            <button type="submit" className="button-submit" disabled={isSubmitting}>
                                Enviar
                            </button>
                        </div>
                    </form>
                )
            }
            }
          </Formik>
          <ToastContainer />
      </div>
    )
}
