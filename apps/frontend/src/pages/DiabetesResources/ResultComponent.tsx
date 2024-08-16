import React, { useState, useEffect } from 'react';
import { HomeContainer } from '../../components/forms/DiabetesForm/styles';
import { FormQuestionContainer } from '../../components/forms/DiabetesForm/styles';
import { FormTextContainer } from '../../components/forms/DiabetesForm/styles';
import raw from 'result.txt'
import { RESOURCES_OPTIONS } from './constants';




interface Props {
    formValues: ((values: JSON ) => void) | null
}


const ResultComponent: React.FC<Props> = ({formValues}) => {
    const [data, setData] = useState<string>('')
    const [resouces, setResources] = useState<Array<RESOURCES_OPTIONS>>([])
    const getFile = () => {
        fetch(raw).then((response) => response.text()).then((data)=> {
            setData(data)
        })
    }

    function compareLength(a: RESOURCES_OPTIONS,b: RESOURCES_OPTIONS) {
        return b.value.length - a.value.length
    }

    useEffect(()=> {
        getFile();
    },[]);
    useEffect((()=> {
        getResources()
    }),[])
    const getResources = () => {
        fetch('http://localhost:5000/diabetes-resources')
        .then((response)=> {
            if(response.ok) {
                return response.json()
            }else{
                console.log("ERROR")
            }
            
        }).then(async (data)=> {
            try {
                const jsonData = await data;
                const result:RESOURCES_OPTIONS[] = []
                for (const key in jsonData) {
                    if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
                        const valueArray: string[] = jsonData[key].map(String)
                        const new_resource: RESOURCES_OPTIONS = {
                            link: key,
                            value: valueArray
                        }
                        result.push(new_resource)
                    }
                   
                }
                result.sort(compareLength)
                setResources(result)
                return result
            }catch(error) {
                console.log(error)
            }
        });
    };
    // console.log(file)
   return (
   <div>
    {
        true && (
            <HomeContainer>
        <FormQuestionContainer>
            <FormTextContainer>
                { data }

            </FormTextContainer>
        </FormQuestionContainer>
        {resouces.map((menu)=> (
            
            <FormQuestionContainer>
            <FormTextContainer>
            <a href={"https://www.niddk.nih.gov/" +menu.link}>
            
            {menu.value[0]}
            </a>
            <br/>
            {menu.value[1]}
            <br/>
            </FormTextContainer>
            </FormQuestionContainer>
            
        ))}

    </HomeContainer>
        )
    }




   </div>
   );
  };
  
  export default ResultComponent;