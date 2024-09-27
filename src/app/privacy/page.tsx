import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import Logo from "@/components/logo";
import React from "react";
import Link from "next/link";

const data = [{
    title: 'Política de privacidad',
    text: 'A los efectos del cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales de 5 de diciembre (LOPDGDD), se establece la siguiente información.\n' +
        'Razón social: Mix Martial Arts Sabadell SL NIF: B67220681 Dirección: Passeig d\'Espronceda 73 Sabadell 08204 Correo: shavsho@yahoo.com\n'
}, {
    title: 'Finalidad',
    text: 'Se trata la información que nos facilitan las personas interesadas a través de cualquiera de los diferentes formularios que se ponen a su disposición en la página web, con el fin de gestionar el envío de la información que nos soliciten, pudiendo elaborarse, de ser necesario, un perfil comercial, en base a la información facilitada. No se tomarán decisiones automatizadas en base a dicho perfil. Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil, y no se solicite su supresión por el interesado.'
}, {
    title: 'Legitimación',
    text: 'Se solicita el consentimiento del interesado para el tratamiento de sus datos y la oferta prospectiva de productos y servicios.\n' +
        'Destinatarios\n' +
        'Los datos personales no se cederán a terceros, salvo en su caso, otras empresas de grupo para fines administrativos internos.\n'
}, {
    title: 'Derechos',
    text: 'Los interesados tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando los datos ya no sean necesarios para los fines que fueron recogidos. Los interesados en determinadas circunstancias también podrán limitar u oponerse al tratamiento de sus datos, así como solicitar la portabilidad de los mismos. También tendrá derecho a retirar su consentimiento y a presentar una queja ante la Autoridad de Control. Para ejercer sus derechos deberá dirigirse al Responsable en la dirección que figura en el primer cuadro, acompañado de copia del documento de identidad del interesado.'
}, {
    title: '1. ¿Quién es el responsable del tratamiento de tus datos personales?',
    text: 'Mix Martial Arts Sabadell SL NIF: B67220681 Dirección: Passeig d\'Espronceda 73 Sabadell 08204 Correo: shavsho@yahoo.com es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).'
}, {
    title: '2. ¿Con qué finalidad se tratan los datos y cuál es la base que legitima el tratamiento?',
    text: 'Se trata la información que nos facilitan las personas interesadas con el fin de gestionar el envío de la información que nos soliciten, pudiendo elaborarse, de ser necesario, un perfil comercial, en base a la información facilitada. Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el USUARIO a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del RESPONSABLE.'
}, {
    title: '3. ¿Cuánto tiempo se conservan los datos?',
    text: 'Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil, y no se solicite su supresión por el interesado. Cuando ya no sea necesario, se suprimirán con las medidas de seguridad adecuadas.'
}, {
    title: '4. ¿Qué derechos existen y cómo ejercerlos?',
    text: 'Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, los datos ya no sean necesarios para los fines que fueron recogidos. También los interesados en determinadas circunstancias podrán oponerse al tratamiento de sus datos. También tendrá derecho a retirar el consentimiento prestado y a reclamar ante la Autoridad de Control.Para ejercer sus derechos deberá ponerse en contacto con el Responsable en la dirección Calle Passeig d\'Espronceda 73 Sabadell 08204.\n' +
        '\n' +
        'La normativa vigente de protección de datos le ampara en una serie de derechos en relación al uso que le damos a sus datos. Todos y cada uno de sus derechos son unipersonales e intransferibles, es decir, que únicamente pueden ser realizados por el titular de los datos, previa comprobación de su identidad.\n' +
        'A continuación le indicamos cuales son los derechos que le asisten:\n' +
        '* Solicitar el ACCESO a sus datos personales.\n' +
        '* Solicitar la RECTIFICACION de sus datos.\n' +
        '* Solicitar la SUPRESIÓN o eliminación de sus datos (derecho al "olvido").\n' +
        '* LIMITAR u OPONERSE al uso que le damos a sus datos.\n' +
        '* Derecho a la PORTABILIDAD de sus datos para casos de servicios de telecomunicaciones o internet.\n' +
        '* Derecho a RETIRAR su consentimiento en cualquier momento.\n' +
        '* Tendrá derecho a presentar una reclamación ante la Agencia Española de Protección de Datos a través de www.aepd.es.\n' +
        'Para el ejercicio de sus derechos de acceso, rectificación, supresión, limitación u oposición, portabilidad Passeig d\'Espronceda 73 Sabadell 08204\n'
}, {
    title: '5. ¿A quién facilitamos tus datos personales? Destinatarios',
    text: 'Los datos personales no se cederán a terceros, salvo en su caso, otras empresas de grupo para fines administrativos internos o salvo obligación legal.'
}, {
    title: '6. ¿Se toman decisiones automatizadas?',
    text: 'No se tomarán decisiones automatizadas en base al perfil comercial.'
}, {
    title: '7. ¿Se realizan transferencias internacionales de datos?',
    text: 'No realizamos transferencias internacionales de sus datos.'
}, {
    title: '8. ¿Por qué motivo podemos tratar tus datos personales?',
    text: 'Se solicita el consentimiento del interesado para el tratamiento de sus datos y la oferta prospectiva de productos y servicios. Los datos personales obtenidos a través de los formularios del sitio web serán tratados únicamente en base al consentimiento otorgado por el interesado, a través de la aceptación de la casilla dispuesta para tal fin. Este consentimiento puede ser retirado en cualquier momento. Interés legítimo del responsable. La información estadística obtenida del sitio web será tratada en base al interés legítimo del responsable. Esta información no permite identificar al usuario.\n' +
        'Aviso legal\n'
}, {
    title: '',
    text: 'Todos los textos, fotografías, logotipos, cupones, productos, servicios e imágenes visualizadas, así como, en su caso, los mensajes de voz, son recogidos por LA WEB bajo la responsabilidad única y exclusiva del Anunciante, quien es responsable de la veracidad de la información contenida en la página web. Existen hojas de reclamaciones a disposición del consumidor en la dirección de Mix Martial Arts Sabadell SL NIF: B67220681 Dirección: Passeig d\'Espronceda 73 Sabadell 08204, pudiendo ponerse en contacto en cualquier momento en la dirección de correo electrónico shavsho@yahoo.com. De acuerdo a lo previsto en la legislación nacional y comunitaria con respecto a protección al consumidor, se ofrece la posibilidad de recurrir a un mecanismo de reclamación y resolución de conflicto en línea, conforme al artículo 14 del Reglamento 524/2013 de la UE. La Comisión facilita esta plataforma que está disponible en el siguiente enlace: https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES'
}]

export default function Page() {


    return (
        <main className="relative w-full min-h-screen">
            <BackgroundVideo/>
            <div className="fixed top-0 left-0 w-full overflow-auto h-screen flex flex-col items-center justify-start z-10">
                <ThemeSwitch/>
                <Link href={'/'}>
                    <Logo/>
                </Link>

                <div
                    className={'w-full max-w-[980px]  my-[90px] bg-transparentSurface/90 backdrop-blur-sm rounded-[12px] border-border border-[1px] border-solid z-[999] p-6'}>

                    {data.map((item, index) => (
                        <div>
                            <div className={'text-lg font-semibold mt-2'}>{item?.title}</div>
                            <div className={'text-sm font-normal'}>{item?.text}</div>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    );
}
