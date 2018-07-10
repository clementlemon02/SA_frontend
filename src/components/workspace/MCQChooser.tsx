import { Button, Card, Text, Tooltip } from '@blueprintjs/core'
import * as React from 'react'

import { IMCQQuestion } from '../assessment/assessmentShape'

export interface IMCQChooserProps {
  mcq: IMCQQuestion
  mcqSubmit?: (choiceId: number) => void
}

class MCQChooser extends React.PureComponent<IMCQChooserProps, {}> {
  public render() {
    const mockMcqSubmit = (i: number) => () => {}
    const options = this.props.mcq.choices.map((choice, i) => (
      <Button key={i} className="mcq-option col-xs-6" onClick={mockMcqSubmit(i)}>
        <Tooltip content={choice.hint}>
          <Text className="Text"> {choice.content} </Text>
        </Tooltip>
      </Button>
    ))
    return (
      <div className="MCQChooser">
        <Card className="mcq-content-parent row center-xs">
          <div className="col-xs-12">
            <div className="mcq-task-parent row center-xs ">
              <Card className="mcq-task col-xs-12" elevation={2}>
                <Text className="Text"> {this.props.mcq.content} </Text>
              </Card>
            </div>
            <div className="row mcq-options-parent center-xs">{options}</div>
          </div>
        </Card>
      </div>
    )
  }
}

export default MCQChooser