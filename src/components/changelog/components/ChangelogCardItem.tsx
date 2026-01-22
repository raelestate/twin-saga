import { motion } from 'framer-motion';
import type { ChangelogCard } from '../../../types';


interface Props {
    card: ChangelogCard;
}


export function ChangelogCardItem({ card }: Props) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-col overflow-hidden rounded-lg custom-frame shadow-lg py-10 px-10"
        >
            {/* <img
                src={card.image}
                alt={card.title}
                className="h-40 w-full object-cover"
                loading="lazy"
            /> */}


            <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-2 font-cinzel text-lg font-semibold text-yellow-400">
                    {card.title}
                </h3>
                <p className="flex-1 text-sm text-gray-300 py-8">{card.description}</p>
                <a
                    href={card.buttonHref}
                    className="mt-auto w-full px-3 py-5 rounded-md font-semibold text-white transition-all duration-300 custom-frame-button flex justify-center items-center"
                >
                    {card.buttonLabel}
                </a>

            </div>
        </motion.article>
    );
}
