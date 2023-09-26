import React from "react";
import { FilterSection } from "./Filter.Styled";

export const Filter = ({ value, onChange }) => {
    return (
        <FilterSection>
        <label htmlFor='filter'>Find contacts by name</label>
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id='filter'
            value={value}
            onChange={onChange}
            />
            </FilterSection>
    );
};