import { FC } from 'react';

interface ItemProps {
    check: boolean,
    handle: () => void,
    img_on: string,
    img_off: string,
    description: string,
}

export const FilterItem: FC<ItemProps> = ({check, handle, img_on, img_off, description}) => {
    return (
        <label>
        <img src={check ? img_on : img_off} alt={check ? "+" : '-'}></img>
        <input type="checkBox" onClick={handle} />
        {description}
      </label>
    )

}