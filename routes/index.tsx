import { Head } from "$fresh/runtime.ts";
import { serve } from "https://deno.land/std@0.118.0/http/server.ts";
export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander Vega - Pentester Junior </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </Head>
      <div class="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl font-bold">Hola, soy <span class="text-green-400">Alexander</span></h1>
          <p class="mt-4 text-lg">
           Iniciando.... <span class="text-green-400">Pentester Junior.</span><br />
            Soy de <span class="text-yellow-400">Sinaloa, México.</span> Apasionado por la Ciberseguridad. <br />
            Con un fuerte interés en <span class= "text-green-400">proteger sistemas, redes y datos </span> contra amenazas cibernéticas.
          </p>
          <div class="flex justify-center gap-4 mt-6">
            <a href="https://www.linkedin.com/in/alexander-vega-54038a313/" class="bg-gray-700 px-4 py-2 rounded-full">LinkedIn</a>
            <a href="https://github.com/ThAx2" class="bg-gray-700 px-4 py-2 rounded-full">Github</a>
            <a href="mailto:alexvega.2005xl@gmail.com
" class="bg-gray-700 px-4 py-2 rounded-full">alexvega.2005xl@gmail.com
</a>
          </div>
        </div>

        {/* Sección de Experiencia en Ciberseguridad */}
<div class="mt-12">
  <h2 class="text-2xl font-bold flex items-center">
    <span class="mr-2">🧑‍🎓</span> Experiencia en Ciberseguridad
  </h2>
  <div class="border-l-4 border-gray-600 pl-4 mt-4">
    <h3 class="font-semibold">Aprendiz en Ciberseguridad (Proyectos Personales)</h3>
    <p class="text-gray-300">
      A través de proyectos personales, he estado adquiriendo experiencia en ciberseguridad utilizando herramientas como <span class="text-green-400">Aircrack-ng</span> para auditorías de redes WiFi, <span class="text-green-400">Nmap</span> para escaneo de puertos, y <span class="text-green-400">Metasploit</span> para pruebas de penetración. He realizado ataques de <span class="text-green-400">fuerza bruta</span> utilizando <span class="text-green-400">John the Ripper</span> y diccionarios personalizados generados con <span class="text-green-400">Crunch</span> y <span class="text-green-400">CeWL</span>. Además, he analizado tráfico de red con <span class="text-green-400">Wireshark</span> y he trabajado con técnicas de <span class="text-green-400">hashing</span> para proteger contraseñas y datos sensibles.
    </p>
  </div>
  <div class="border-l-4 border-gray-600 pl-4 mt-4">
    <h3 class="font-semibold">Proyectos Académicos y Personales en Ciberseguridad</h3>
    <p class="text-gray-300">
      Durante mis estudios y proyectos personales, he utilizado herramientas como <span class="text-green-400">Kali Linux</span> como entorno de trabajo principal, realizando pruebas de penetración y auditorías de seguridad en entornos controlados. También he practicado ataques de <span class="text-green-400">fuerza bruta</span> con <span class="text-green-400">John the Ripper</span> y generado diccionarios personalizados con <span class="text-green-400">Crunch</span> y <span class="text-green-400">CeWL</span>. Utilicé <span class="text-green-400">Wireshark</span> para capturar y analizar tráfico de red, y me enfoqué en la implementación de técnicas de <span class="text-green-400">hashing</span> para asegurar contraseñas utilizando algoritmos como <span class="text-green-400">SHA-256</span>.
    </p>
  </div>
</div>
{/* Sección de Experiencia en Programación */}
<div class="mt-12">
  <h2 class="text-2xl font-bold flex items-center">
    <span class="mr-2">🧑‍🎓</span> Experiencia en Programación
  </h2>
  <div class="border-l-4 border-gray-600 pl-4 mt-4">
    <h3 class="font-semibold">Proyectos Académicos en COBOL y AcuCobol</h3>
    <p class="text-gray-300">
      En el ámbito académico, he trabajado con <span class="text-green-400">COBOL</span> y <span class="text-green-400">AcuCobol</span> para desarrollar aplicaciones de gestión de datos. Implementé algoritmos de ordenamiento y búsqueda en estructuras de datos y trabajé con archivos secuenciales para almacenar y recuperar datos, todo dentro de un entorno de procesamiento estructurado.
    </p>
  </div>
  <div class="border-l-4 border-gray-600 pl-4 mt-4">
    <h3 class="font-semibold">Desarrollo de Soluciones en Visual Basic .NET</h3>
    <p class="text-gray-300">
      He desarrollado aplicaciones utilizando <span class="text-green-400">Visual Basic .NET</span> para crear soluciones de escritorio. Estas aplicaciones incluyen funcionalidades como CRUD (Crear, Leer, Actualizar, Eliminar), y son diseñadas para facilitar el manejo de datos a través de interfaces gráficas utilizando <span class="text-green-400">Windows Forms</span>. No se ha integrado el uso de bases de datos, sino que he trabajado con almacenamiento local de datos en archivos.
    </p>
  </div>
  <div class="border-l-4 border-gray-600 pl-4 mt-4">
    <h3 class="font-semibold">Programación en C# para Aplicaciones de Escritorio</h3>
    <p class="text-gray-300">
      En <span class="text-green-400">C#</span>, desarrollé aplicaciones de escritorio que gestionan datos locales. Implementé interfaces gráficas con <span class="text-green-400">Windows Forms</span>, proporcionando una experiencia de usuario intuitiva y eficiente, sin la necesidad de bases de datos externas, utilizando almacenamiento local o estructuras de datos en memoria.
    </p>
  </div>
</div>
{/* Sección de Proyectos */}
<div class="mt-12">
  <h2 class="text-2xl font-bold flex items-center">
    <span class="mr-2">💻</span> Proyectos de Programación y Ciberseguridad
  </h2>
  <ul class="mt-4 space-y-3">
    {/* Proyectos de Programación */}
    <li>
      <h3 class="text-blue-400 font-semibold">Sistema de Gestión de Inventarios en COBOL</h3>
      <p>Desarrollé un sistema de gestión de inventarios utilizando <span class="text-green-400">COBOL</span> para almacenar y actualizar registros de productos, con funciones de búsqueda y reportes.</p>
    </li>
    <li>
      <h3 class="text-blue-400 font-semibold">Aplicación de Escritorio en Visual Basic .NET</h3>
      <p>Desarrollé una aplicación de escritorio en <span class="text-green-400">Visual Basic .NET</span> que permitía gestionar clientes y pedidos, con funcionalidades de CRUD para almacenar y recuperar datos en una base de datos SQL.</p>
    </li>
    <li>
      <h3 class="text-blue-400 font-semibold">Aplicación de Escritorio en C#</h3>
      <p>Desarrollé una aplicación de escritorio en <span class="text-green-400">C#</span> con una interfaz de usuario sencilla, que permitía gestionar clientes y pedidos, y se conectaba a una base de datos SQL para el almacenamiento de la información.</p>
    </li>
    <li>
      <h3 class="text-blue-400 font-semibold">Sistema de Gestión de Clientes en AcuCobol</h3>
      <p>Implementé un sistema de gestión de clientes en <span class="text-green-400">AcuCobol</span> para facilitar el registro y consulta de información de clientes en una base de datos de forma eficiente.</p>
    </li>
    
    {/* Proyectos de Ciberseguridad */}
    <li>
      <h3 class="text-blue-400 font-semibold">Auditoría de Redes WiFi</h3>
      <p>Realicé pruebas de seguridad en redes WiFi utilizando <span class="text-green-400">Aircrack-ng</span> y <span class="text-green-400">Bully</span> para verificar la robustez de contraseñas y configuraciones de seguridad.</p>
    </li>
    <li>
      <h3 class="text-blue-400 font-semibold">Fuerza Bruta en Contraseñas</h3>
      <p>Desarrollé y utilicé diccionarios personalizados con <span class="text-green-400">Crunch</span> y <span class="text-green-400">CeWL</span> para realizar ataques de <span class="text-green-400">fuerza bruta</span> sobre contraseñas almacenadas en sistemas controlados, utilizando <span class="text-green-400">John the Ripper</span>.</p>
    </li>
    <li>
      <h3 class="text-blue-400 font-semibold">Pruebas de Penetración con Metasploit</h3>
      <p>Simulé ataques a sistemas y aplicaciones utilizando <span class="text-green-400">Metasploit</span> para identificar posibles vulnerabilidades de seguridad y generar informes de riesgos.</p>
    </li>
    <li>
      <h3 class="text-blue-400 font-semibold">Análisis de Tráfico con Wireshark</h3>
      <p>Capturé y analicé el tráfico de red con <span class="text-green-400">Wireshark</span> para identificar vulnerabilidades y mejorar la seguridad en redes.</p>
    </li>
    <li>
      <h3 class="text-blue-400 font-semibold">Implementación de Hashing en Contraseñas</h3>
      <p>Trabajé en un proyecto para proteger contraseñas utilizando algoritmos de <span class="text-green-400">hashing</span> como <span class="text-green-400">SHA-256</span> para mejorar la seguridad de los datos sensibles.</p>
    </li>
  </ul>
</div>

      </div>
    </>
  );
}
