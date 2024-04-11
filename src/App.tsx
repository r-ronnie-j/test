import './App.css'
import { useState, useEffect,useRef } from 'react'
import Card from './components/Card/Card'
import { CheckBoxVariant } from './components/CheckBox/checkBox'
import TextCheckBox from './components/TextCheckBox/TextCheckBox'
import Button from './components/Button/Button'
import HorizontalRule from './components/HorizontalRule/HorizontalRule'

function App() {
  const [page1, setPage1] = useState(false);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [page4, setPage4] = useState(false);
  const [page, setPage] = useState(false);

  useEffect(() => {
   
      if (page1 && page2 && page3 && page4) {
          setPage(true);
      } else if (page) {
          setPage(false);
      }
  }, [page1, page2, page3, page4]);

  useEffect(() => {
      if (page) {
          setPage1(true);
          setPage2(true);
          setPage3(true);
          setPage4(true);
      }else{
        if(page1 && page2 && page3 && page4){
          setPage1(false)
          setPage2(false)
          setPage3(false)
          setPage4(false)
        }        
      }
  }, [page]);

  return <div className='app'>
    <div className='card-view'>
      <Card>
        <TextCheckBox check={page} setCheck={setPage} text="All Pages" variant={CheckBoxVariant.DarkBlueBackground} />
        <HorizontalRule />
        <TextCheckBox check={page1} setCheck={setPage1} text="Page 1" variant={CheckBoxVariant.DarkBlue} />
        <TextCheckBox check={page2} setCheck={setPage2} text="Page 2" variant={CheckBoxVariant.LightBlue} />
        <TextCheckBox check={page3} setCheck={setPage3} text="Page 3" variant={CheckBoxVariant.SimpleBordered} />
        <TextCheckBox check={page4} setCheck={setPage4} text="Page 4" variant={CheckBoxVariant.SimpleBorderedBackground} />
        <HorizontalRule />
        <Button text='Done' />
      </Card>
    </div>
  </div>
}

export default App
