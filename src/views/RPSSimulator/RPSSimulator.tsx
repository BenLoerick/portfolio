import React, { useEffect, useState } from "react";

const RPSSimulator = () => {
    const [items, setItems] = useState<RPSItem[]>([]);

    useEffect(() => {
        let spawnItems: RPSItem[] = [];
        for (let i = 0; i < 30; i++) {
            let posX = Math.floor(Math.random() * 100);
            let posY = Math.floor(Math.random() * 100);

            const speed = 0.8;
            let dirX = Math.random() * speed * (Math.random() < 0.5 ? 1 : -1);
            let dirY = Math.sqrt((speed ** 2) - (dirX ** 2)) * (Math.random() < 0.5 ? 1 : -1);
            console.log(dirX, "x");
            console.log(dirY, "y");
            spawnItems.push({
                type: Math.floor(Math.random() * 3),
                posX: posX,
                posY: posY,
                dirX: dirX,
                dirY: dirY,
            });
        }
        setItems(spawnItems);

        const interval = setInterval(() => {
            setItems((prevItems) => {
                let distances: number[][] = [[]];
                let newItems: RPSItem[] = [];
                prevItems.forEach((item) => {
                    let newPosX = item.posX + item.dirX;
                    let newPosY = item.posY + item.dirY;
                    let newDirX = item.dirX;
                    let newDirY = item.dirY;
                    if (newPosX < 0 || newPosX > 99) {
                        if (newPosX < 0) newPosX = 0;
                        if (newPosX > 100) newPosX = 100;
                        newDirX = -newDirX;
                    }
                    if (newPosY < 0 || newPosY > 99) {
                        if (newPosY < 0) newPosY = 0;
                        if (newPosY > 100) newPosY = 100;
                        newDirY = -newDirY;
                    }
                    newItems.push({
                        type: item.type,
                        posX: newPosX,
                        posY: newPosY,
                        dirX: newDirX,
                        dirY: newDirY,
                    });
                });
                return newItems;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-column justify-content-center align-items-center h-screen w-screen">
            <div className="text-2xl mb-5">Rock Paper Scissors Simulator</div>
            <div
                style={{
                    height: "100%",
                    maxHeight: "600px",
                    width: "100%",
                    maxWidth: "600px",
                }}
                className="relative"
            >
                {items.map((item) => {
                    return (
                        <div
                            className="absolute"
                            style={{
                                left: `${item.posX}%`,
                                bottom: `${item.posY}%`,
                            }}
                        >
                            {item.type === 0 ? "🪨" : item.type === 1 ? "📄" : "✂️"}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

interface RPSItem {
    type: number;
    posX: number;
    posY: number;
    dirX: number;
    dirY: number;
}

export default RPSSimulator;
