import React from "react";

interface CardProps {
    rank: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
    suit: "diams" | "hearts" | "clubs" | "spades";
}
const Card: React.FC<CardProps> = ({rank, suit}) => {
    return (
        <div>
            {rank} of {suit}
        </div>

    );
}

export default Card