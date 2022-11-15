import {useState, useEffect} from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [minValueError, setMinValueError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthError(true)
            setErrorMessage(`Введите больше ${validations[validation]} символов`)
          } else {
            setMinLengthError(false)
          }
          break;
        case 'minValue':
          if (value.split(' ').join('') < validations[validation]) {
            setMinValueError(true)
            setErrorMessage(`Введите число не меньше ${validations[validation]}`)
          } else {
            setMinValueError(false)
          }
          break;
        case 'isImage':
          const re = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/
          if (re.test(String(value))) {
            setImageError(false)
          } else {
            setImageError(true)
            setErrorMessage('Ссылка на изображение не валидна')
          }
          break;
        case 'isEmpty':
          if (value.split(' ').join('')) {
            setEmpty(false)
          } else {
            setEmpty(true)
            setErrorMessage('Обязательное поле')
          }
          break;
      }
    }
  }, [value])

  return {
    isEmpty,
    minLengthError,
    minValueError,
    imageError,
    errorMessage,
  }
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setDirty(true)
  }

  return {
    value,
    setValue,
    isDirty,
    setDirty,
    onChange,
    onBlur,
    ...valid
  }
}

export default useInput