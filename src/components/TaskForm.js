import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as TaskActionCreators from '../actions/createTaskActions';

const TaskForm = props => {
  const { createTaskRequest } = props;

  const onSubmit = (values, formikBag) => {
    createTaskRequest(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        body: '',
        deadline:'',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' placeholder='task body' />
        <Field name='deadline' placeholder='deadline'/>
        <Field name='isDone' placeholder='isDone'/>
        <button type='submit'>Create task</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTask: values => dispatch(TaskActionCreators.createTask(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
