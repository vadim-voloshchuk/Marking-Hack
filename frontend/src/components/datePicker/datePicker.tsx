import * as React from "react";
import Calendar from "@mui/icons-material/Event";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { es } from "date-fns/locale";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import styles from "./styles.module.scss";
import dayjs from "dayjs";

const DatePicker = () => {
  return (
    <div>
       <LocalizationProvider locale dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['SingleInputDateRangeField']}>
        <DateRangePicker
        className={styles.form__text}
        sx={{
                  
                  "& .MuiInputBase-root": {
                    color:"white",
                    borderRadius:"10px",
                    height: "40px",
                    marginBottom:3,
                  },
                  "& .MuiInputBase-root:hover": {
                    color:"white",
                    borderRadius:"10px",
                    height: "40px",
                    marginBottom:3,
                  },
                }} 
                
                defaultValue={[dayjs(), dayjs()]}
                label="Временной интервал"
                slots={{ field: SingleInputDateRangeField }}
                
                />
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
};
export default DatePicker;
