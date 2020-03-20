import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  Spinner,
  Container,
  Row,
  Col
} from 'reactstrap'

function PersonCard({ data, loading }) {
  const style={
    margin: '2% 0 0 25%',
    width: '50%',
  }

  return loading ? 
  <Spinner color="dark" /> :
  (
    <div>
      {data.results.map(person => {
      return  <Card style={style}>
                <CardHeader tag="h3">Name: {person.name}</CardHeader>
                <CardBody>
                  <CardText>Gender: {person.gender}</CardText>
                  <CardText>Eye color: {person.eye_color}</CardText>
                  <CardText>Hair Color: {person.hair_color}</CardText>
                  <CardText>Skin Color: {person.skin_color}</CardText>
                </CardBody>
                <CardFooter className="text-muted">Year born: {person.birth_year}</CardFooter>
              </Card>
      })}
    </div>
  )
}

export default PersonCard