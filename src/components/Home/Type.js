import React, { useMemo } from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

const TYPEWRITER_OPTIONS = {
    autoStart: true,
    loop: true,
    delay: 40,
    deleteSpeed: 30,
};

function Type() {
    const { t } = useLanguage();
    const strings = t("typewriter.strings");
    const options = useMemo(
        () => ({ ...TYPEWRITER_OPTIONS, strings }),
        [strings]
    );

    return <Typewriter options={options} />;
}

export default Type;
