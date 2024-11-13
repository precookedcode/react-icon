import React from 'react';
import { DynamicIcon } from '@precooked/react-dynamic-icon';
import { colors } from '@precooked/utils';
import { icons } from '@precooked/icon-data';

interface IconPath {
    d: string;
    color?: keyof typeof colors | string; // Color puede ser una clave del objeto colors o un color válido en formato string
}

interface IconProps {
    name?: string; // Hacer opcional para no requerirlo si paths está presente
    paths?: IconPath[]; // Nueva prop paths
    size?: number;
    style?: React.CSSProperties;
    color?: string; // Prop color opcional
}

const Icon: React.FC<IconProps> = ({ name, paths, size = 24, style = {}, color }) => {
    // Si paths está presente, usarlas directamente
    const iconPaths = paths || (name && icons.find((icon: { name: string }) => icon.name === name)?.paths);

    if (!iconPaths) {
        console.warn(`Icon with name "${name}" not found`);
        return null;
    }

    // Preparar las paths con los colores adecuados
    const preparedPaths = iconPaths.map((path: IconPath) => ({
        ...path,
        color: color || path.color || colors.text,
    }));

    return (
        <DynamicIcon
            size={size}
            paths={preparedPaths}
            style={style}
        />
    );
};

export default Icon;
