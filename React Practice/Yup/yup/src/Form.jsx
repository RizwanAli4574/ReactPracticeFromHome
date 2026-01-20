import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from './schema.js';


const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleReset = () => {
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder="Name" />
            <p className='error'>{errors.name?.message}</p>

            <input type="number" {...register("age")} placeholder="Age" />
            <p className='error'>{errors.age?.message}</p>

            <input type="email" {...register("email")} placeholder="Email" />
            <p className='error'>{errors.email?.message}</p>

            <label>Skills :</label>
             <input type="checkbox" value="React" {...register("skills")} />React
             <input type="checkbox" value="NodeJs" {...register("skills")} />NodeJs
             <input type="checkbox" value="MongoDB" {...register("skills")} />MongoDB
             <input type="checkbox" value="Express" {...register("skills")} />Express   
             <p className='error'>{errors.skills?.message}</p>
            

            <input type="password" {...register("password")} placeholder="Password" />
            <p className='error'>{errors.password?.message}</p>

            <input type="password" {...register("confirmpassword")} placeholder="Confirm Password" />
            <p className='error'>{errors.confirmpassword?.message}</p>

            <button type="submit">Submit </button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    )
};

export default Form;

