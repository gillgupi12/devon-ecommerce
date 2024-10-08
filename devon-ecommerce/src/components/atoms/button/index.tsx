import { Button as MantineButton, ButtonProps } from '@mantine/core';

type CustomButtonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    return (
        <MantineButton {...props} />
    );
};
export default CustomButton;