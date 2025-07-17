function LanguageCard({ language }) {
    if (!language) {
        return <p>Nessun linguaggio selezionato</p>;
    }

    return (
        <div className="language-card">
            <h2>{language.name}</h2>
            <p>{language.description}</p>
        </div>
    );
}

export default LanguageCard;
