import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';

import test from '../public/test.jpg';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Áridos Guzmán</title>
        <meta name="description" content="Áridos Guzmán" />
      </Head>

      <section className="flex flex-col sm:flex-row items-center sm:justify-around pt-40 pb-28 sm:py-8 px-4 sm:px-0">
        <div className="flex flex-col items-center sm:items-start space-y-6 mb-8 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl font-semibold">Áridos Guzmán</h1>
          <p className="text-xl sm:text-2xl">Calidad, confianza y bienestar.</p>
        </div>
        <Image src={test} alt="test" />
      </section>

      <section className="flex flex-col sm:flex-row items-center justify-around py-8 bg-sky-800 px-4 sm:px-0 text-slate-200">
        <div className="flex flex-col space-y-6 sm:w-96 mb-8">
          <h1 className="text-3xl font-semibold">Sobre nosotros</h1>
          <p className="text-lg">
            Áridos Guzmán de Guzmán Empresas se dedica a la extracción,
            producción y venta de áridos, y elaboración de hormigón. Además
            cuenta con toda la infraestructura, maquinaria, capacidad
            tecnológica y de conectividad, y un equipo humano especializado para
            cumplir con las expectativas de sus clientes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-1">
          <div className="sm:w-96">
            <Image src={test} alt="test" />
          </div>
          <div className="sm:w-96">
            <Image src={test} alt="test" />
          </div>
          <div className="sm:w-96">
            <Image src={test} alt="test" />
          </div>
          <div className="sm:w-96">
            <Image src={test} alt="test" />
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-16 py-8 px-4 sm:px-0">
        <div className="grid grid-cols-2 gap-x-1">
          <div className="sm:w-96">
            <Image src={test} alt="test" />
          </div>
          <div className="sm:w-96">
            <Image src={test} alt="test" />
          </div>
          <div className="sm:w-96">
            <Image src={test} alt="test" />
          </div>
          <div className="sm:w-96">
            <Image src={test} alt="test" />
          </div>
        </div>
        <div className="flex flex-col space-y-6 sm:w-[35rem] mb-8 sm:mb-0">
          <h1 className="text-3xl font-semibold">Servicios</h1>
          <ul className="flex flex-col space-y-2 text-xl font-medium pl-2">
            <li>Fabricación de bases granulares.</li>
            <li>Fabricación de áridos para asfalto y hormigón.</li>
            <li>Árido seleccionados.</li>
          </ul>
          <div>
            <p className="text-lg">
              "Los áridos son una importante fuente para el desarrollo nacional,
              dado el auge que han experimentado los sectores de urbanismo y
              vivienda en los últimos años. En Áridos Guzmán hemos trabajado en
              la extracción de áridos para obras viales emblemáticas a lo largo
              de todo Chile, lo que requiere una especialización en los
              materiales que se producen. Es por esto que siempre se busca
              mejorar nuestros procesos de producción, buscando el autocontrol
              al optimizar la entrega de materiales, lo que nos ha llevado a
              tener un porcentaje muy bajo de rechazo. Guzmán Empresas está
              capacitada para tomar cualquier desafío en cuanto a áridos se
              refiere, ya que poseemos tecnología de punta en monitoreo de
              plantas, equipos de última generación y un control exhaustivo de
              materiales en nuestros propios laboratorios".
            </p>
            <h2 className="mt-2 font-semibold">Ernesto Orrego</h2>
            <h3>Jefe de proyectos - Áridos Guzmán</h3>
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row items-center justify-around py-8 px-4 sm:px-0 bg-sky-800 text-slate-200">
        <div className="flex flex-col space-y-6 mb-8 sm:mb-0">
          <h1 className="text-3xl font-semibold">Áridos Guzmán</h1>
          <p className="text-lg">
            Un gran equipo humano al servicio de la industria.
          </p>
        </div>
        <Image src={test} alt="test" />
      </section>
    </Layout>
  );
}
