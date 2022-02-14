import { IFormData, Iprops, IRowData } from "../../Model/Model";
import { Formik, Form, FormikProps, FieldArray, FormikErrors } from "formik";

export function View(props: Iprops) {
    return (
        <div>
            <Formik initialValues={props.initial_values}
                onSubmit={(values) => props.action_submit(values)}
                validationSchema={props.validation_schema}
                onReset={() => props.action_reset()}
            >
                {(formikProps: FormikProps<IFormData>) => <Form>
                    <FieldArray
                        name="rows"
                        render={(renderProps) => {
                            return (
                                <div>
                                    {formikProps.values.rows && formikProps.values.rows.length > 0 ? formikProps.values.rows.map((row, index) => (
                                        <div key={index}>
                                            <input data-testId={`input-title-${index}`}
                                                name={`rows.${index}.itemtitle`}
                                                type="text"
                                                value={row.itemtitle??""}
                                                onChange={formikProps.handleChange}
                                                placeholder="Item Title"
                                            />
                                            {
                                                formikProps.errors && formikProps.errors.rows && (formikProps.errors.rows[index] as FormikErrors<IRowData>).itemtitle
                                            }
                                            <input data-testId={`input-price-${index}`}
                                                name={`rows.${index}.itemPrice`}
                                                type="number"
                                                value={row.itemPrice?row.itemPrice:""}
                                                onChange={formikProps.handleChange}
                                                placeholder="Item Price"
                                            />
                                            {
                                                formikProps.errors && formikProps.errors.rows && (formikProps.errors.rows[index] as FormikErrors<IRowData>).itemPrice
                                            }
                                        </div>
                                    )) : (
                                        <span>
                                            Add a new item
                                        </span>
                                    )
                                    }
                                    <div>
                                        <button type="button" data-testId="btn-add" onClick={() => {
                                            props.action_submit(formikProps.values)
                                            renderProps.push({})
                                        }}>Add</button>
                                    </div>
                                </div>
                            )
                        }}
                    />
                    <div>
                        <button type="reset">Reset</button>
                    </div>
                </Form>
                }
            </Formik>
            <span data-testId="span-message">
                <h4>Sum is:{props.total}</h4>
            </span>
        </div>
    )
}