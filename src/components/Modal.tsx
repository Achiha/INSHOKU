import React from "react";
import { motion } from "framer-motion";

interface ModalProps {
    selected: {
        id: string;
        url: string;
        title: string;
        tags: string[];
        description: string;
    } | null;
    setSelected: React.Dispatch<React.SetStateAction<{
        id: string;
        url: string;
        title: string;
        tags: string[];
        description: string;
    } | null>>;
}

export default function Modal({ selected, setSelected }: ModalProps) {
    if (!selected) {
        return <></>;
    }

    const handleImageContextMenu = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault();
    };

    const handleCloseModal = () => {
        setSelected(null);
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 cursor-pointer h-full flex items-center justify-center " onClick={handleCloseModal}>
            <div className="flex flex-col w-auto mx-6 pb-2 p-6 blurcursor-default bg-black/80 items-center rounded-lg max-w-[90%] max-h-[90%]">
                <motion.div layoutId={`card-${selected.id}`} className="max-h-[900px] mx-1 my-1 max-w-auto">
                    <img src={selected.url} onContextMenu={handleImageContextMenu} className="rounded-xl max-h-[700px]" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotate: -10,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                    }}
                    // ...
                    className="p-2 mt-2 rounded-lg flex flex-col items-center"
                >
                    <h3 className="text-sm font-bold my-4">{selected.title}</h3>
                    {selected.tags.map((tag: string) => {
                        return (
                            <div className="badge badge-outline mb-3 bg-base-300 border-none text-white" key={tag}>
                                {tag}
                            </div>
                        );
                    })}
                    <p className="mb-2 text-sm">{selected.description}</p>
                    {/* <button className="btn btn-primary btn-block">Download</button> */}
                </motion.div>
            </div>
        </div>
    );
}