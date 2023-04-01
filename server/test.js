import axios from axios

params = {'cost': 1000, 
          'location': [['Россия', 'Ростовская область', 'Таганрог']], 
          'planning date': '01.04.2023',
          'category': ['сыр', 'колбаса'],
          'brand':'abibas',
          'weight':100}

const FormData= new FormData()
FormData.append('fileName','fgfgfg')
FormData.append('file','fgfgfg')
FormData.append('json',params)