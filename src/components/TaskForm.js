import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as TaskActionCreators from '../actions/createTaskActions';

const TaskForm = props => {
  const { createTask } = props;

  const onSubmit = (values, formikBag) => {
    createTask(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        body: '',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' placeholder='task body' />
        <button type='submit'>Create task</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTask: values => dispatch(TaskActionCreators.createTask(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
