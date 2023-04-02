import { useCallback, useEffect, useState } from "react";
import axios from "axios"
import classnames from "classnames";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import RoomIcon from "@mui/icons-material/Room";
import CategoryIcon from "@mui/icons-material/Category";
import ScaleIcon from "@mui/icons-material/Scale";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import DatePicker from "../datePicker/datePicker";
import styles from "./styles.module.scss";

interface IForm{
  cost: string,
    location:  string,
    sale_type: string,
    weight:  string,
    data_start:  string,
    date_end:  string,
    file: File|null,

    fileName:string
}
const Menu = () => {
  let formData = new FormData();
  const [form, setForm] = useState<IForm>(
    {
    cost: "",
    location: "",
    sale_type: "",
    weight: "",
    data_start: "",
    date_end: "",
    file:null,
    fileName:''
  });
  const [category, setCategory] = useState([]);
 const [addresses, setAdresses] = useState([]);
  const [menuPage, setMenuPage] = useState(false)
const [locale, setLocale]=useState('')
  
const res=async()=>{
      return await axios.get("http://localhost:5000/get_sale_types")
      .then(res=>setCategory(res.data))
}
const getAddress=async(part_str:string)=>{
  await axios.post("http://localhost:5000/get_addresses", {"part_str":part_str}) 
  .then(res=>setAdresses(res.data))
}

const btnHandler=useCallback(()=>{setMenuPage(!menuPage)},[menuPage])

useEffect(()=>{
  res()
 },[])

 useEffect(()=>{
  getAddress(locale)}
  ,[locale])

  return (
    <div className={styles.menu}>
      <div className={styles.menu__form}>
        <p className={styles.form__label}>Выбор продукта и параметров</p>
        <div className={styles.form__btn}>
          <button onClick={btnHandler} className={classnames(styles.form__btn_underline,{[styles.form__btn_activ]:!menuPage})}>Анализ спроса</button>
          <button onClick={btnHandler} className={classnames(styles.form__btn_underline,{[styles.form__btn_activ]:menuPage})}>Анализ цен</button>
        </div>
        {menuPage&&
        <div className={styles.form__fields_small}>
          <Autocomplete
            id="category"
            options={category}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: 40,
                    borderRadius: 2.5,
                    marginBottom:3
                  },
                }}
                className={styles.form__text}
                {...params}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon
                        fontSize="small"
                        style={{ position: "relative", bottom: "5px" }}
                      />
                    </InputAdornment>
                  ),
                }}
                label="Категория продукта"
              />
            )}
          />
          <Autocomplete
            className={styles.form__input}
            id="tags-outlined"
            options={addresses}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: 40,
                    borderRadius: 2.5,
                    marginBottom:3
                  },
                }}
                
                onChange={(e)=>{setLocale(e.target.value)
                    setForm({...form, location:e.target.value})
                  }}
                className={styles.form__text}
                {...params}
                InputProps={{
                  
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon
                      fontSize="small"
                      style={{ position: "relative", bottom: "5px" }}
                    />
                  </InputAdornment>
                  
                ),
                
              }}
              InputLabelProps={{
                shrink: true,
              }}
                label="Локализация продукта"
              />
            )}
          />
         
          <DatePicker />
        </div>}
        {!menuPage&&
        <div className={styles.form__fields}>
          <Autocomplete
            sx={{}}
            id="category"
            options={category}
            renderInput={(params) => (
              <TextField
              onChange={(e)=>{
                setForm({...form, sale_type:e.target.value})
              }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: 40,
                    borderRadius: 2.5,
                  },
                }}
                className={styles.form__text}
                {...params}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon
                        fontSize="small"
                        style={{ position: "relative", bottom: "5px" }}
                      />
                    </InputAdornment>
                  ),
                }}
                label="Тип продаж"
              />
            )}
          />
          <Autocomplete
            multiple
            filterSelectedOptions
            sx={{}}
            className={styles.form__input}
            id="tags-outlined"
            options={addresses}
            renderInput={(params) => (
              <TextField
              
              onChange={(e)=>{
                setLocale(e.target.value)
                  setForm({...form, location:e.target.value})
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: 40,
                    borderRadius: 2.5,
                  },
                }}
                className={styles.form__text}
                {...params}
                InputLabelProps={{
                  shrink: true,
                }}
                label="Локализация продукта"
              />
            )}
          />
          <TextField
            className={styles.form__input}
            sx={{
              "& .MuiInputBase-root": {
                height: 40,
                borderRadius: 2.5,
              },
            }}
            onChange={(e)=>{
              setForm({...form, cost:e.target.value})
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRubleIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            label="Ориентировачная стоимость продукта"
          />
          <TextField
            className={styles.form__input}
            sx={{
              "& .MuiInputBase-root": {
                height: 40,
                borderRadius: 2.5,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ScaleIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            onChange={(e)=>{
              setForm({...form, weight:e.target.value})
            }}
            label="Вес единицы продутка"
          />
          <DatePicker />
        </div>}
        
      </div>
      <div className={styles.form__upload}>
        <p className={styles.upload__label}>Загрузка данных из таблицы</p>
        <h1 className={styles.upload__fileName}>{form.fileName&&form.fileName.substring(0,9)}{!form.fileName&&"Пока файлов нет..."}</h1>
        <label className={styles.upload__btn}>
          <input
            type="file"
            accept=".csv,.xlsx"
            onChange={(e) => {
              e&&e.target&&e.target.files&&setForm({...form, file:e.target.files[0]})
              form.file&&formData.append("file", form.file);
              setForm({ ...form, fileName: e.target.value.split('\\')[e.target.value.split('\\').length-1] });
              
            }}
          />
          Добавить
        </label>
       
        <p className={styles.upload__fileName}>*Форматы, допустимые для загрузки: .csv/.xlsx</p>
      </div>

            <button className={styles.btn_submit}>Расчитать</button>
    </div>
  );
};

export default Menu;
