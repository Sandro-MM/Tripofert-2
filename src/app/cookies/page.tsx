import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import Logo from "@/components/logo";
import React from "react";
import Link from "next/link";
import {SelectItem} from "@/components/ui/select";

const data = [{
                                                title: 'Política de cookies',
                                                text: 'Conforme con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (GDPR) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD), es de obligación obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies prescindibles, antes de que éste navegue por ellas. La presente política de cookies tiene por finalidad informarle de manera clara y precisa sobre las cookies que se utilizan con la finalidad de facilitar su navegación, distinguirle de otros usuarios y analizar sus hábitos de navegación'
                                          }, {
                                              title: '¿Qué es una "Cookie"?',
                                              text: 'Las cookies son pequeños archivos de textos que se usan para almacenar información. Las cookies se almacenan en tu dispositivo cuando accedes a una página web desde tu navegador. Estas cookies nos ayudan a que hacer funcionar la web, a hacerla más segura, a mejorar la experiencia de usuario y a entender cómo se comporta la web y dónde es necesario hacer mejoras o corregir errores.\n' +
                                                  'Utilizamos cookies propias y de terceros para mejorar el funcionamiento técnico de la web, analizar tu navegación con fines estadísticos, personalizar tu experiencia o mostrar publicidad relacionada con tus preferencias.\n'
                                          }, {
                                              title: '¿Por qué debo permitir las cookies?',
                                              text: 'Al permitir las cookies, podrás obtener una mejor experiencia en nuestro sitio web.\n' +
                                                  'Además, hay algunas acciones básicas que requieren cookies, tales como la compra de una línea de teléfono o gestiones en el área de clientes.\n' +
                                                  'Por ejemplo, usamos cookies en los siguientes casos: - Cuando te logueas en tu cuenta - Un histórico de tus preferencias para tu próxima visita - Proporcionar contenido personalizado.\n' +
                                                  'Tipos y finalidad\n'
                                          }, {
                                              title: 'Cookies propias',
                                              text: 'Las creadas o gestionadas por el responsable de la página web.\n' +
                                                  'Finalidades técnicas: Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos o almacenar contenidos para la difusión de videos o sonido.\n' +
                                                  'Finalidad de análisis: Son aquéllas que permiten el seguimiento y análisis del comportamiento de los usuarios de la página web, para la elaboración de perfiles de navegación, con el fin de introducir mejoras en función del análisis de los datos de uso que se haga sobre la web. Entre otros datos, un identificador de usuario por sesión y la fecha de primera conexión a la web y de la ocasión anterior en la que accedió a la web.\n' +
                                                  'Finalidad de personalización: Estas cookies almacenan información del comportamiento del usuario obtenida a través del registro de sus hábitos de navegación, lo que permite desarrollar un perfil específico para ofrecer información comercial adaptada a sus gustos y preferencias. Almacenan información como el tipo de conexión, idioma, patrones de navegación o ubicación.\n'
                                          }, {
                                              title: 'Cookies de terceros',
                                              text: 'Son cookies servidas y administradas por prestadores de servicios publicitarios y/o de análisis ajenos al responsable de la página web.\n' +
                                                  'Estas cookies permiten la gestión eficaz y adaptada a las preferencias del usuario de campañas publicitarias e informativas. Pueden almacenar información del comportamiento de los usuarios de qdq.com para desarrollar un perfil específico para mostrar publicidad en función de sus intereses.\n' +
                                                  'Al final de esta página, se detallan tanto los terceros que pueden configurar y acceder a cookies de su equipo (no exentas de información y consentimiento), como enlaces a la política de privacidad de estos proveedores.\n'
                                          }, {
                                              title: 'Cookies según el plazo de conservación',
                                              text: 'Cookies de sesión: son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.\n' +
                                                  'Cookies persistentes: son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un período definido por el responsable de la cookie, y que puede ir de unos minutos a varios años. Tal y como se acredita en la configuración para cada una de las cookies.\n'
                                          }, {
                                              title: 'Desactivar cookies',
                                              text: '¿Qué pasa si bloqueo las cookies?\n' +
                                                  'Si decides bloquear las cookies, puede impedir el correcto funcionamiento de algunas características de la web de qdq.com. Esto restringirá lo que puedes hacer en nuestra web.\n' +
                                                  'Si aceptas estas limitaciones y decides bloquear las cookies, por favor sigue las instrucciones para tu navegador en la siguiente sección\n' +
                                                  '¿Cómo puedo bloquear o permitir las cookies?\n' +
                                                  'La mayoría de los navegadores están configurados de forma predeterminada para aceptar cookies, pero puedes cambiar la configuración para bloquear algunas o todas las cookies, si lo prefieres. Si no te gusta cómo esto afecta a su experiencia online, es igual de fácil de cambiar las cosas de nuevo.\n'
                                          }, {
                                              title: 'MICROSOFT INTERNET EXPLORER',
                                              text: 'Microsoft Internet Explorer 6/7/8 (Windows XP/Vista)\n' +
                                                  'Seleccione Herramientas en el menú, y luego Opciones de Internet.\n' +
                                                  'Haga clic en la pestaña de Privacidad.\n' +
                                                  'Elija los ajustes que desea.\n' +
                                                  'Haga clic en OK.\n'
                                          }, {
                                              title: 'Microsoft Internet Explorer 11',
                                              text: 'Haga clic en el icono Configuración (arriba a la derecha)\n' +
                                                  'Haga clic en Opciones de Internet.\n' +
                                                  'Haga clic en Privacidad y seleccione sus opciones.\n' +
                                                  'Haga clic en Aplicar y luego en OK.\n'
                                          }, {
                                              title: 'MOZILLA FIREFOX',
                                              text: 'Haz clic en el botón Menú y selecciona Preferencias.\n' +
                                                  'Selecciona el panel Privacidad & Seguridad.\n' +
                                                  'Los ajustes de las cookies se encuentra en la sección Protección mejorada contra rastreo y Cookies y datos del sitio\n'
                                          }, {
                                              title: 'GOOGLE CHROME',
                                              text: 'Ordenador\n' +
                                                  'Abre Chrome en tu ordenador.\n' +
                                                  'Arriba a la derecha, haz clic en Más y luego Configuración.\n' +
                                                  'Abajo, haz clic en Configuración avanzada.\n' +
                                                  'En "Privacidad y seguridad", haz clic en Configuración del sitio web y luego Cookies.\n' +
                                                  'Elija los ajustes que desea.\n'
                                          }, {
                                              title: 'Android',
                                              text: 'En tu teléfono o tablet Android, abre la aplicación Chrome Chrome.\n' +
                                                  'A la derecha de la barra de direcciones, toca Más Más y luego Configuración.\n' +
                                                  'Toca Configuración del sitio web y luego Cookies.\n' +
                                                  'Elija los ajustes que desea.\n'
                                          }, {
                                              title: 'iOS',
                                              text: 'En tu iPhone o iPad, abre la aplicación Chrome Chrome.\n' +
                                                  'En la parte inferior derecha, toca Más Más y luego Configuración Configuración.\n' +
                                                  'Toca Privacidad\n' +
                                                  'Elija los ajustes que desea.\n'
                                          }, {
                                              title: 'SAFARI',
                                              text: 'En la app Safari del Mac, selecciona Safari.\n' +
                                                  'Click en Preferencias.\n' +
                                                  'Click en Privacidad.\n' +
                                                  'Elija los ajustes que desea.\n' +
                                                  'En Safari IOS Ve a Ajustes > Safari y elija los ajustes que desea.\n'
                                          }, {
                                              title: 'OPERA',
                                              text: 'Haga click en el botón del menú del navegador.\n' +
                                                  'Ir al final del menú y clicar en Ir a configuración del navegador.\n' +
                                                  'Hacer scroll hasta la sección de Privacidad y seguridad.\n' +
                                                  'Elija los ajustes que desea.\n'
                                          }, {
                                              title: 'ANDROID',
                                              text: 'Haga click en el botón del menú del navegador (hamburguesa).\n' +
                                                  'Haga click en el botón configuración.\n' +
                                                  'Vaya a Privacidad y Seguridad.\n' +
                                                  'Elija los ajustes que desea.\n'
                                          }, {
                                              title: 'WINDOWS PHONE',
                                              text: 'Abra Internet Explorer, luego Más, luego Configuración.\n' +
                                                  'Ahora puede activar o desactivar la casilla Permitir cookies.\n'
                                          }]

export default function Page() {


    return (
        <main className="relative w-full min-h-screen">
            <BackgroundVideo/>
            <div className="fixed top-0 left-0 w-full overflow-auto h-screen flex flex-col items-center justify-start z-10">
                <ThemeSwitch/>

                    <Logo/>

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
