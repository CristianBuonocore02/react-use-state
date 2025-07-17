function LanguageButton({ language, isSelected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`language-button ${isSelected ? "selected" : ""}`}
        >
            {language.name}
        </button>
    );
}

export default LanguageButton;
