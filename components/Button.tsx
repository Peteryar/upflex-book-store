import { MouseEventHandler } from 'react';

function Button({ title, handleClick, width }: Props) {
  return (
    <button className="button" onClick={handleClick}>
      {title}
      <style>
        {`
            .button{
                    width: ${width || 200}px;
                    height: 50px;
                    margin-left: 10px;
                    color: inherit;
                    text-decoration: none;
                    border-radius: 10px;
                    background-color: #0070f3;
                    border:none;
                    transition: color 0.15s ease, border-color 0.15s ease;
                    cursor: pointer;
                }
                
                .button:hover {
                    background-color: #0f509b;
                }
                .button:active{
                    background-color: #fff;
                    color: #0070f3;
                }
            }
          `}
      </style>
    </button>
  );
}

interface Props {
  width?: number;
  link?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export default Button;
