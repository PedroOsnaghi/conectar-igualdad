import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import '../styles/Accordion.css';
import { download, huaira, windows } from '../assets';

const AccordionDemo = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
    <AccordionTrigger>
        <div>
          <span className='especificacion-tecnica'>Especificaciones Técnicas</span>
          <p className='mt-1 caracteristica-modelo'>Descubre todas las caracteristicas de este modelo.</p>
        </div>
      </AccordionTrigger>
      <AccordionContent class="Accordion accordion-content-six-columns">
        <div className="accordion-grid">
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Fabricante</p>
            <p className="descriptionCardNotebook">DELL Inc.</p>
          </div>
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Procesador y Memoria</p>
            <p className="descriptionCardNotebook">Intel Celeron N2840</p>
            <p className="descriptionCardNotebook">4 GB de RAM DDR3L</p>
          </div>
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Almacenamiento</p>
            <p className="descriptionCardNotebook">16 GB eMMC</p>
            </div>
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Modelo</p>
            <p className="descriptionCardNotebook">Dell Chromebook 3120</p>
            </div>
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Pantalla</p>
            <p className="descriptionCardNotebook">Pantalla LCD de 11.6 pulgadas HD </p>
           </div>
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Conectividad</p>
            <p className="descriptionCardNotebook">Wi-Fi 802.11ac, Bluetooth</p>
            </div>
        </div>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>
        <div>
          <span className='especificacion-tecnica'>Sistemas Operativos</span>
          <p className='mt-1 caracteristica-modelo'>Conocé a fondo los Sistemas que administran tu dispositivo.</p>
        </div>
        </AccordionTrigger>
      <AccordionContent className="accordion-content-two-columns">
      <div className="accordion-grid-item">
          <img src={windows} alt="" />
          </div>
          <div className="accordion-grid-item">
          <img src={huaira} alt="" />
          </div>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>
      <div>
          <span className='especificacion-tecnica'>Controladores y actualizaciones</span>
          <p className='mt-1 caracteristica-modelo'>Encontrá las actualizaciones o drivers de tu dispositivo</p>
        </div></AccordionTrigger>
      <Accordion.Content className="accordion-content-five-columns">
      <div className="accordion-grid">
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Audio</p>
            <p className="descriptionCardNotebook">Realtek HD Audio Driver</p>
            <p className="descriptionCardNotebook">S.O: Windows 11 64bit</p>
          </div>
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Versión</p>
            <p className="descriptionCardNotebook">6.0.9373.1</p>
          </div>
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Tamaño</p>
            <p className="descriptionCardNotebook">38,08 MB	</p>
            </div>
          <div className="accordion-grid-item">
          <p className="titleCardNotebook">Fecha</p>
            <p className="descriptionCardNotebook">Jul 25, 2023</p>
            </div>
          <div className="accordion-grid-item iconDownload">
            <img  className="download" src={download} alt="" />
           </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(function AccordionTrigger({ children, className, ...props }, forwardedRef) {
  return (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef(function AccordionContent({ children, className, ...props }, forwardedRef) {
  return (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  );
});

AccordionContent.displayName = 'AccordionContent';

export default AccordionDemo;
