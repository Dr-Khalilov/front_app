import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as TaskActionCreators from '../actions/createTaskActions';

const TaskForm = props => {
  const { createTaskRequest } = props;

  const onSubmit = (data, formikBag) => {
    createTaskRequest(data);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        body: '',
        deadline: '',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' placeholder='task body' />
        <Field name='deadline' placeholder='deadline' />
        <Field name='isDone' placeholder='isDone' />
        <button type='submit'>Create task</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTaskRequest: data =>
    dispatch(TaskActionCreators.createTaskRequest(data)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
