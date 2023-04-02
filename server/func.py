import pandas as pd
from consts import *


def read_table(table):
    try:
        table = pd.read_excel(table)
    except:
        try:
            table = pd.read_csv(table)
        except:
            return INCORRECT_FILE_TYPE
        
    return table
