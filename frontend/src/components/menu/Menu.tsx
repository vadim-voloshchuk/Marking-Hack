import { useCallback, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import RoomIcon from "@mui/icons-material/Room";
import CategoryIcon from "@mui/icons-material/Category";
import ScaleIcon from "@mui/icons-material/Scale";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";

import styles from "./styles.module.scss";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import DatePicker from "../datePicker/datePicker";
import classnames from "classnames";


const Menu = () => {
  const [form, setForm] = useState({
    category: "",
    locale: "",
    cost: "",
    weight: "",
    data_start: "",
    date_end: "",
    file: "",
  });

  const [category, setCategory] = useState(["1", "2", "3", "4", "5"]);
  const [menuPage, setMenuPage] = useState(false)

  const btnHandler=useCallback(()=>{setMenuPage(!menuPage)},[menuPage])
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
                    <RoomIcon
                      fontSize="small"
                      style={{ position: "relative", bottom: "5px" }}
                    />
                  </InputAdornment>
                  
                ),
                
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
                label="Категория продукта"
              />
            )}
          />
          <Autocomplete
            multiple
            filterSelectedOptions
            sx={{}}
            className={styles.form__input}
            id="tags-outlined"
            options={category}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: 40,
                    borderRadius: 2.5,
                  },
                }}
                className={styles.form__text}
                {...params}
                /*InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon
                      fontSize="small"
                      style={{ position: "relative", bottom: "5px" }}
                    />
                  </InputAdornment>
                  
                ),
                
              }}*/
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
            label="Вес единицы продутка"
          />
          <DatePicker />
        </div>}
        
      </div>
      <div className={styles.form__upload}>
        <p className={styles.upload__label}>Загрузка данных из таблицы</p>
        <h1 className={styles.upload__fileName}>{form.file&&form.file.substring(0,9)}{!form.file&&"Пока файлов нет..."}</h1>
        <label className={styles.upload__btn}>
          <input
            type="file"
            accept=".csv,.xlsx"
            onChange={(e) => {
              setForm({ ...form, file: e.target.value.split("\\")[2] });
            }}
          />
          Добавить
        </label>
       
        <p className={styles.upload__fileName}>*Форматы, допустимые для загрузки: .csv/.xlsx</p>
      </div>
    </div>
  );
};

export default Menu;
