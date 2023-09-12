import { useForm, SubmitHandler, RegisterOptions } from "react-hook-form"
import styles from './AddElementForm.module.css'

export interface FormInputs {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string
}

interface FormInput {
  label: string,
  input: {
    id: keyof FormInputs,
    validators: RegisterOptions
  }
}

const columns: FormInput[] = [
  {
    label: 'Id',
    input: {
      id: 'id',
      validators: {
        required: {
          value: true,
          message: 'This field is required'
        },
        maxLength: {
          value: 4,
          message: 'Too long'
        },
        pattern: {
          value: /^\d+$/,
          message: 'Can include only numbers'
        }
      }
    }
  },
  {
    label: 'First Name',
    input: {
      id: 'firstName',
      validators: {
        required: {
          value: true,
          message: 'This field is required'
        },
        pattern: {
          value: /^[a-zA-Z]+$/,
          message: 'Can include only letters'
        }
      }
    }
  },
  {
    label: 'Last Name',
    input: {
      id: 'lastName',
      validators: {
        required: {
          value: true,
          message: 'This field is required'
        },
        pattern: {
          value: /^[a-zA-Z]+$/,
          message: 'Can include only letters'
        }
      }
    }
  },
  {
    label: 'Email',
    input: {
      id: 'email',
      validators: {
        required: {
          value: true,
          message: 'This field is required'
        },
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'Incorrect email'
        }
      }
    }
  },
  {
    label: "Phone",
    input: {
      id: 'phone',
      validators: {
        required: {
          value: true,
          message: 'This field is required'
        },
        pattern: {
          value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          message: 'Incorred phone number'
        }
      }
    }
  },
]

interface AddElementFormProps {
  onSubmit: SubmitHandler<FormInputs>
}

const AddElementForm = ({ onSubmit }: AddElementFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <table>
        <thead>
          <tr>
            {columns.map(({ label }) => <th key={label}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {columns.map(({ input: { id, validators } }) => (
              <td key={id}>
                <input {...register(id, validators)} />
                {errors[id] && errors[id]?.message}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <button>Add Element</button>
    </form>
  )
}

export default AddElementForm;