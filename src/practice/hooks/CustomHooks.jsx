import {useFormInput} from './UseFormInput.jsx';

export default function CustomHooks() {
  const name = useFormInput('');
  const email = useFormInput('');

  return (
    <>
    <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      <input placeholder="Email" {...email} />
    </>
  );
}
