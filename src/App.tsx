import React, { useEffect, useState } from 'react';
import './App.css';
import { TextSkeleton } from 'light-skeleton';
const Styles = {
  container: {
    backgroundColor: '#4a5bdc',
    color: '#fff',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  header: {
    marginBottom: 5,
    marginTop: 5,
  },
  body: {
    marginBottom: 7,
  },
}
const App = (): any => {
  // types
  interface DataArgs{
    firstName: string;
    lastName: string;
    location: string
  }
  // state
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [MainData] = useState<DataArgs[]>([
    {
      firstName: 'Kenneth',
      lastName: 'Erikson',
      location: 'San Diego, CA',
    },
    {
      firstName: 'Bolanle',
      lastName: 'Erikson',
      location: 'Akure, Nigeria',
    },
    {
      firstName: 'Adewale',
      lastName: 'Erikson',
      location: 'Lagos, Nigeria',
    },
    {
      firstName: 'Mary',
      lastName: 'Erikson',
      location: 'Accra Ghana',
    },
  ])
  let loaderHeight = '80px';
  let loaderWidth = `calc(100% - 20px)`

  // useEffect (what happened when load)
  useEffect(() => {
    setTimeout(()=> setIsLoading(false), 2000)
  }, [])
  //function 
  const TrueData = () => {
    const { container, header, body } = Styles;
    return (
      <React.Fragment>
        {MainData.map(({firstName, lastName, location}: DataArgs, index: number) => (
          <div style={container} key={index}>
            <h3 style={header}>{firstName} {lastName}</h3>
            <h5 style={body}>{location}</h5>
          </div>
        ))}
      </React.Fragment>
    )
  }
  const Skeleton = () => {
    return (
      <React.Fragment>
        {MainData.map(({firstName, lastName, location}: DataArgs, index: number) => (
          <TextSkeleton height={loaderHeight} width={loaderWidth} style={{
            marginLeft: 10,
            marginRight: 10,
          }}
          key={index}
          />
        ))}
      </React.Fragment>
      
    )
  }
  return (
    <React.Fragment>
      <h1 style={{textAlign: 'center'}}>The Erikson</h1>
      {isLoading ? <Skeleton /> : <TrueData /> }
    </React.Fragment>
  )
}

export default App;
