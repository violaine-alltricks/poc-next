type FormProps = {
  mode: 'edit' | 'add';
  item?: Record<string, string>;
};

const Form: React.FC<FormProps> = ({ mode, item }) => (
  <>
    Form: {mode} {item?.name}
  </>
);

export default Form;
