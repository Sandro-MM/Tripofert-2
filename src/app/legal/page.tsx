import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import Logo from "@/components/logo";
import React from "react";
import Link from "next/link";

const data = [{
    title: 'Aviso Legal',
    text: 'De acuerdo con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio o Electrónico (LSSICE) a continuación se detallan los datos identificativos de la empresa la cual es responsable único y exclusivo en relación a la veracidad de la información contenida en la página web en cuanto a los textos, fotografías, logotipos, cupones, productos, servicios e imágenes visualizadas:\n' +
        'Razón social: Mix Martial Arts Sabadell SL\n' +
        'NIF: B67220681\n' +
        'Dirección: Passeig d\'Espronceda 73 Sabadell 08204\n' +
        'Teléfono: 642951129\n' +
        'Email: shavsho@yahoo.com\n'
}, {
    title: 'Términos y condiciones de uso',
    text: 'El acceso a esta página web atribuye la condición de USUARIO, quien accede voluntariamente a este sitio web. El mero acceso no implica el establecimiento de ningún tipo de relación comercial entre el USUARIO y Mix Martial Arts Sabadell SL La información suministrada en la página web tiene como finalidad facilitar el conocimiento por parte de los usuarios de las actividades y de los servicios prestados, quien se reserva el derecho de efectuar, en cualquier momento cuantas modificaciones, variaciones, supresión o cancelaciones de los contenidos y en la forma de presentación de los mismos que considere necesaria para la prestación de los servicios. Esta facultad no otorga a los usuarios ningún derecho a percibir indemnización por daños y perjuicios, por lo que se recomienda al USUARIO que lea este Aviso Legal tantas veces como acceda a la web.'
}, {
    title: 'Uso indebido y responsabilidad',
    text: 'El USUARIO asume la responsabilidad del uso del portal, comprometiéndose a realizar un buen uso de la página web y aportar información veraz y lícita, no permitiéndose conductas que vayan contra la ley, los derechos o intereses de terceros.\n' +
        'La utilización de ciertos servicios o solicitudes estarán condicionadas a la previa cumplimentación del correspondiente formulario de recogida de datos. A estos efectos, el USUARIO será responsable de la información falsa o inexacta que pudiera realizar o comunicar y de los perjuicios que cause al responsable de la web en su caso.\n' +
        'Se reservan el derecho a denegar o retirar el acceso a la web a aquellos USUARIOS que incumplen las condiciones y obligaciones de la presente página web, no haciéndose responsable del mal uso que se realice de los contenidos de la página web.\n' +
        'No obstante, Mix Martial Arts Sabadell SL declara que han adoptado todas las medidas necesarias, dentro de sus posibilidades y del estado de la tecnología, para garantizar el funcionamiento de la página web y evitar la existencia y transmisión de virus y demás componentes dañinos a los usuarios.\n'
}, {
    title: 'Enlaces',
    text: 'En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Mix Martial Arts Sabadell SL no ejercerá ningún tipo de control sobre dichos sitios y contenidos, no asumiendo en ningún caso responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.'
}, {
    title: 'Propiedad intelectual e industrial',
    text: 'El Copyright, diseño y creación de la página web es titularidad de WEB . El acceso gratuito no implica otros derechos o licencias para reproducción y/o distribución sin la previa autorización expresa del propietario, por lo que, de conformidad con lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico sin previa autorización, comprometiéndose el USUARIO en respetar los derechos de Propiedad Intelectual e Industrial.\n' +
        'Las marcas, logotipos, diseños, contenidos, programas u objetos similares que forman parte de esta página web, están protegidos por leyes de propiedad industrial e intelectual. La reproducción, distribución, manipulación o desensamblaje no autorizado de los códigos fuente, de los algoritmos incorporados o de la base datos, ya sea total o parcial, dará lugar a graves penalizaciones tanto civiles como penales y será objeto de cuantas acciones judiciales correspondan en Derecho.\n'
}, {
    title: 'Política de privacidad y protección de datos',
    text: 'En virtud de lo dispuesto en el Reglamento General de Protección de Datos (RGPD), Reglamento UE 2016/679, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos, y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD) se informa al USUARIO que todos los datos recabados mediante los diferentes formularios que aparecen en la web serán incorporados a un fichero, creado y mantenido bajo la responsabilidad de Mix Martial Arts Sabadell SL con el fin de gestionar el envío de la información que soliciten, pudiendo elaborarse, de ser necesario, un perfil comercial, en base a la información facilitada. No se tomarán decisiones automatizadas en base a dicho perfil. Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil, en su caso, y no se solicite su supresión por el interesado.\n' +
        'Para ello, Mix Martial Arts Sabadell SL solicitará el consentimiento del interesado a través del formulario de recogida de datos para el tratamiento de los mismos y la oferta prospectiva de productos y servicios, estando el USUARIO legitimado para retirar dicho consentimiento en cualquier momento, así como a ejercer sus derechos de acceso, rectificación, portabilidad y supresión de sus datos, y a presentar una reclamación ante la autoridad de control , si considera que el tratamiento no se ajusta a la normativa vigente.\n' +
        'Los contenidos de la página web están dirigidos a personas mayores de edad, no se pretende obtener datos de personas menores de edad, y cuando tenga conocimiento de que existen en su fichero datos de carácter personal de un menor, procederá de inmediato a cancelar dichos datos.\n'
}, {
    title: 'Política de Cookies',
    text: 'Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se utilizarán para la recogida de los mismos. Este sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.\n' +
        'El USUARIO tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones de su navegador para ampliar esta información.\n'
}, {
    title: 'Legislación aplicable y jurisdicción',
    text: 'La relación con el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales que corresponda conforme a derecho.'
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
                            <div className={'text-lg font-semibold mt-2'}>{item.title}</div>
                            <div className={'text-sm font-normal'}>{item.text}</div>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    );
}

