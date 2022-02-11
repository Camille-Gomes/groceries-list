export interface ModalProps {
    className?: string;
    src: string;
    alt: string;
    title: string;
    instructions: string;
    servings: number;
    closeModal: () => void;
}
