import Select from 'react-select';
import { useState } from 'react';

const OptionsSelect = () => {
    const data = [
        { value: 'banheiro', label: 'Banheiro', bgcolor: "white", color: "black" },
        { value: 'lanche', label: 'Lanche', bgcolor: "white", color: "black"  },
        { value: 'cafe', label: 'Café', bgcolor: "white", color: "black"  },
        { value: 'reunião', label: 'Reunião', bgcolor: "white", color: "black"  },
        { value: 'almoco', label: 'Almoço', bgcolor: "white", color: "black"  },
        { value: 'fumar', label: 'Fumar', bgcolor: "white", color: "black"  },
        { value: 'ginastica', label: 'Ginástica laboral', bgcolor: "white", color: "black"  },
    ]
    const [selectedOption, setSelectedOption] = useState(null);
 
    const handleChange = (event) => {
        setSelectedOption(event);
    }

    const styles = {
        option: (provided, state) => ({
          ...provided,
          color: state.data.color,
          padding: 8,
        })
      };

    return (
    <div>
      <Select
        placeholder="Pausa"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        styles={styles}
      />
 
      {
      selectedOption && 
      <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div><b> Value: </b> {selectedOption.value}</div>
      </div>
      }
    </div>
  );
}
export default OptionsSelect;