import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../Context/LanguageContext";

function Type() {
    const { t } = useLanguage();

    return (
        <Typewriter
            options={{
                strings: t("typewriter.strings"),
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 30,
            }}
        />
    );
}

export default Type;
