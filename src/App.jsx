import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <table id="example" class="stripe hover" >
        <thead>
          <tr>
            <th></th>
            <th>nombre_declarante</th>
            <th>correo_institucional</th>
            <th>anios_experiencia</th>
            <th>entidad_publica</th>
            <th>numero_de_incidencias</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>0</th>
            <td>TIRZO MORA BENITEZ</td>
            <td>tmorabenitez@yahoo.com.mx</td>
            <td>13.982204</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>6</th>
            <td>GUADALUPE ANAYA VAZQUEZ</td>
            <td>NaN</td>
            <td>6.989733</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>12</th>
            <td>SERGIO RUIZ REYES</td>
            <td>NaN</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>23</th>
            <td>GERMAN LECHUGA ROSAS</td>
            <td>NaN</td>
            <td>8.03833</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>34</th>
            <td>HECTOR HERNANDEZ GARCIA</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>40</th>
            <td>GLORIA ESTRADA ROSARIO</td>
            <td>gloria.estrada@tjaem.gob.mx</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>3</td>
          </tr>
          <tr>
            <th>56</th>
            <td>FABIOLA MANTECA HERNÁNDEZ</td>
            <td>fabiola.manteca@tjaem.gob.mx</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>3</td>
          </tr>
          <tr>
            <th>72</th>
            <td>GABRIELA FUENTES REYES</td>
            <td>gabriela.fuentes@tjaem.gob.mx</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>83</th>
            <td>ALEJANDRO RUBEN APARICIO GONZALEZ</td>
            <td>alejandro.aparicio@pjedomex.gob.mx</td>
            <td>2.036961</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>89</th>
            <td>OCTAVIO VALDES ALBARRAN</td>
            <td>octavio.valdes@mail3.pjedomex.gob.mx</td>
            <td>1.092402</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>95</th>
            <td>FABIAN MORENO PEREZ</td>
            <td>fabian.moreno@pjedomex.gob.mx</td>
            <td>6.261465</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>101</th>
            <td>ALBERTO JACINTO DIAZ CASTAÑEDA</td>
            <td>alberto.diaz@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>107</th>
            <td>IVONNE ASTRID MUÑOZ OSORIO</td>
            <td>ASTRID.MUNOS@PJEDOMEX.GOB.MX</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>113</th>
            <td>NOEMI ALVAREZ GONZALEZ</td>
            <td>noemi.alvarez@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>119</th>
            <td>DAVID CAMACHO MEDINA</td>
            <td>david.camacho@pjedomex.gob.mx</td>
            <td>13.226557</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>125</th>
            <td>ROBERTO CERVANTES MARTINEZ</td>
            <td>roberto.cervantes@pjedomex.gob.mx</td>
            <td>13.560575</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>131</th>
            <td>JUAN FRANCISCO ESCOBEDO HINOJOSA</td>
            <td>juan.escobedo@pjedomex.gob.mx</td>
            <td>22.275154</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>137</th>
            <td>JORGE LUIS GONZALEZ CASTAÑEDA</td>
            <td>jorge.castaneda@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>143</th>
            <td>CARLOS ALBERTO ACRA ALVA</td>
            <td>carlos.acra@pjedomex.gob.mx</td>
            <td>6.921287</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>149</th>
            <td>CLAUDIO GOROSTIETA CEDILLO</td>
            <td>claudio.gorostieta@tjaem.gob.mx</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>160</th>
            <td>TEOFILO FEDERICO SILVA GONZALEZ</td>
            <td>federico.silva@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>166</th>
            <td>MILTON GERARDO ASCENCIO NAVA</td>
            <td>milton.ascencio@pjedomex.gob.mx</td>
            <td>9.984942</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>172</th>
            <td>GABRIELA VAZQUEZ MARTINEZ</td>
            <td>Gabriela.vazquez@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>178</th>
            <td>MARIO NEFTALY DE LA CRUZ MORALES</td>
            <td>mario.delacruz@pjedomex.gob.mx</td>
            <td>1.106092</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>184</th>
            <td>CARLOS GUSTAVO MARTINEZ LICONA</td>
            <td>carlos.licona@pjedomex.gob.mx</td>
            <td>4.577687</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>190</th>
            <td>JOSE LUIS SIERRA ALVA</td>
            <td>jose.sierra@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>196</th>
            <td>HECTOR GALVAN OGAZON</td>
            <td>hector.galvan@pjedomex.gob.mx</td>
            <td>16.793977</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>202</th>
            <td>VICTORIA SIERRA CRUZ</td>
            <td>NaN</td>
            <td>4.071184</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>208</th>
            <td>BARUCH FLORENTE DELGADO CARBAJAL</td>
            <td>baruch.delgado@tjaem.gob.mx</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>219</th>
            <td>TEODORO PATONI ESCALANTE</td>
            <td>teodoro.patoni@pjedomex.gob.mx</td>
            <td>15.143053</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>4</td>
          </tr>
          <tr>
            <th>240</th>
            <td>GIOVANNI VARELA GUTIERREZ</td>
            <td>NaN</td>
            <td>3.29911</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>246</th>
            <td>GERARDO REYES DIAZ</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>252</th>
            <td>ROBERTO GONZALEZ REYES</td>
            <td>NaN</td>
            <td>9.711157</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>263</th>
            <td>ANA LAURA LOPEZ GUTIERREZ</td>
            <td>NaN</td>
            <td>96.328542</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>269</th>
            <td>JORGE IVAN AVILA JASSO</td>
            <td>jorge.avila@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>275</th>
            <td>MOISES FRANCISCO LIMA VALDEZ</td>
            <td>moises.lima@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>281</th>
            <td>CLAUDIA INFANTE FLORES</td>
            <td>claudia.infante@pjedomex.gob.mx</td>
            <td>1.916496</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>287</th>
            <td>LAURA ANTONIA ANDRADE ROJAS</td>
            <td>laura.andrade@pjedomex.gob.mx</td>
            <td>13.158111</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>293</th>
            <td>ANTONIO AVILA SALAZAR</td>
            <td>antonio.avilas@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>299</th>
            <td>GENARO BUENO VARONA</td>
            <td>genaro.bueno@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>305</th>
            <td>CONSUELO SANCHEZ POZADAS</td>
            <td>consuelo.sanchez@pjedomex.gob.mx</td>
            <td>5.199179</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>311</th>
            <td>ARACELI HERNANDEZ RAMIREZ</td>
            <td>NaN</td>
            <td>27.186858</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>317</th>
            <td>LUIS MANUEL BADILLO TORRESCANO</td>
            <td>NaN</td>
            <td>98.217659</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>323</th>
            <td>FRANCISCO AUGUSTO FUENTES LEMUS</td>
            <td>NaN</td>
            <td>189.963039</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>329</th>
            <td>ROMMEL IVAN SANTIN ROMERO</td>
            <td>NaN</td>
            <td>13.357974</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>335</th>
            <td>MIGUEL ANGEL SANCHEZ GONZALEZ</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>341</th>
            <td>FERNANDO RUBEN ALVAREZ VELAZQUEZ</td>
            <td>NaN</td>
            <td>49.71937</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>347</th>
            <td>MAYRA ELIZABETH LOPEZ HERNANDEZ</td>
            <td>NaN</td>
            <td>1679.671458</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>353</th>
            <td>CLAUDIA CLEMENTINA PEREZ GONZALEZ</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>364</th>
            <td>FRANCISCO JAVIER LOPEZ CORRAL</td>
            <td>NaN</td>
            <td>220.328542</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>370</th>
            <td>FORTINO URIBE ARZATE</td>
            <td>NaN</td>
            <td>13.524983</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>376</th>
            <td>JUAN CARLOS VELAZQUEZ GUTIERREZ</td>
            <td>juancarlos.velazquez@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>382</th>
            <td>ELIZABETH GARCIA GUTIERREZ</td>
            <td>egarciag@uaemex.mx</td>
            <td>23.611225</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>1</td>
          </tr>
          <tr>
            <th>388</th>
            <td>MARGARITA ILIANA TREVIÑO BENITEZ</td>
            <td>itrevino@legislativoedomex.gob.mx</td>
            <td>15.192334</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>394</th>
            <td>MAURICIO HURTADO CRUZ</td>
            <td>NaN</td>
            <td>27.570157</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>400</th>
            <td>Luis Jair Camacho Carrasco</td>
            <td>jair.0992camacho@gmail.com</td>
            <td>NaN</td>
            <td>COMISIÓN DE DERECHOS HUMANOS DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>411</th>
            <td>EDGAR RODRIGUEZ MARTINEZ</td>
            <td>edgar.rodriguezm@pjedomex.gob.mx</td>
            <td>21.314168</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>417</th>
            <td>ANNA LILIA RAMIREZ ORTEGA</td>
            <td>annalilia.ramirez@pjedomex.gob.mx</td>
            <td>5.938398</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>423</th>
            <td>KARIM SEGURA HERNANDEZ</td>
            <td>NaN</td>
            <td>9.292266</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>429</th>
            <td>ALFREDO GONZALEZ GONZALEZ</td>
            <td>alfredo.gonzalez@cddiputados.gob.mx</td>
            <td>26.995209</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>435</th>
            <td>AZAEL PIMENTEL ALLENDE</td>
            <td>NaN</td>
            <td>13.935661</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>441</th>
            <td>JESUS ANTONIO RAYGOZA MIRANDA</td>
            <td>NaN</td>
            <td>23.575633</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>447</th>
            <td>RAUL SANTOS VALDEZ</td>
            <td>raul.santos@tjaem.gob.mx</td>
            <td>NaN</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>458</th>
            <td>OMAR ESQUIVEL LOPEZ</td>
            <td>recursos.financieros@trijaem.gob.mx</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>469</th>
            <td>VICTOR HUGO ONTIVEROS HERNANDEZ</td>
            <td>NaN</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>475</th>
            <td>EVERARDO CAMACHO ROSALES</td>
            <td>everardo.camacho@trijaem.gob.mx</td>
            <td>1.28679</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>486</th>
            <td>MARIA GUADALUPE BERNAL MARTINEZ</td>
            <td>NaN</td>
            <td>2.562628</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>492</th>
            <td>LILIBETH ALVAREZ RODRIGUEZ</td>
            <td>NaN</td>
            <td>24.952772</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>498</th>
            <td>JULY ERIKA ARMENTA PAULINO</td>
            <td>NaN</td>
            <td>15.244353</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>504</th>
            <td>VICTOR HUGO CINTORA VILCHIS</td>
            <td>NaN</td>
            <td>243.318275</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>510</th>
            <td>GUADALUPE ORTIZ MENDOZA</td>
            <td>NaN</td>
            <td>45.190965</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>516</th>
            <td>GEORGETTE RUIZ RODRIGUEZ</td>
            <td>NaN</td>
            <td>291.498973</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>522</th>
            <td>JOSE ZEFERINO RIVERA FLORES</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>528</th>
            <td>ERNESTO ZARATE FUENTES</td>
            <td>NaN</td>
            <td>21.645448</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>534</th>
            <td>JUAN ALVAREZ REYES</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>540</th>
            <td>MARCO ANTONIO PORCAYO DIMAS</td>
            <td>NaN</td>
            <td>19.865845</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>546</th>
            <td>MIGUEL ANGEL FERNANDEZ REBOLLAR</td>
            <td>NaN</td>
            <td>23.058179</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>552</th>
            <td>JUAN JOSE MATIAS HERNANDEZ</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>558</th>
            <td>JUAN CARLOS ALVIRDE CARBAJAL</td>
            <td>NaN</td>
            <td>13.218344</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>564</th>
            <td>MIGUEL LOPEZ PACHECO</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>570</th>
            <td>BENJAMIN ALBORES BERNAL</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>576</th>
            <td>ALEJANDRO RODRIGUEZ BASTIDA</td>
            <td>NaN</td>
            <td>37.470226</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>582</th>
            <td>COLUMBA ZEPEDA REYES</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>588</th>
            <td>PASCUAL ALVAREZ GARCIA</td>
            <td>NaN</td>
            <td>4.900753</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>594</th>
            <td>JUAN CARLOS BACA BELMONTES</td>
            <td>NaN</td>
            <td>2264.180698</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>600</th>
            <td>JORGE ARMANDO BECERRIL SANCHEZ</td>
            <td>NaN</td>
            <td>7.983573</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>606</th>
            <td>FATIMA PICHARDO MENDOZA</td>
            <td>NaN</td>
            <td>10.951403</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>612</th>
            <td>ITZEL CITLALLI ROJAS FLORES</td>
            <td>NaN</td>
            <td>1.98768</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>618</th>
            <td>SINAI PEREZ REGULES</td>
            <td>NaN</td>
            <td>5.437372</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>624</th>
            <td>LILIANA MARTINEZ GARNICA</td>
            <td>NaN</td>
            <td>171.017112</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>630</th>
            <td>ROSA GONZALEZ PEREZ</td>
            <td>NaN</td>
            <td>535.934292</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>636</th>
            <td>ROMMEL ULISES TOBIAS MARTINEZ</td>
            <td>NaN</td>
            <td>236.616016</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>642</th>
            <td>JESSICA DE LA LUZ RODRIGUEZ MENDEZ</td>
            <td>NaN</td>
            <td>1.809719</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>648</th>
            <td>RUBEN OCHOA MORA</td>
            <td>rochoam@uaemex.mx</td>
            <td>13.908282</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>664</th>
            <td>MARITZA LIZBETH JARAMILLO BAUTISTA</td>
            <td>mjaramillob@uaemex.mx</td>
            <td>13.566051</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>680</th>
            <td>SUSANA MORFIN CEBALLOS</td>
            <td>smorfinc@uaemex.mx</td>
            <td>11.329227</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>2</td>
          </tr>
          <tr>
            <th>691</th>
            <td>SANDRA LISBETH PALMA ZEPEDA</td>
            <td>slpalmaz@uaemex.mx</td>
            <td>3.655031</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>707</th>
            <td>ANA ISABEL ZAYARZABAL LEON</td>
            <td>aizayarzaball@uaemex.mx</td>
            <td>7.917864</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>723</th>
            <td>CUAUHTEMOC APOLONIO FLORES</td>
            <td>capoloniof@uaemex.mx</td>
            <td>2.913073</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>2</td>
          </tr>
          <tr>
            <th>734</th>
            <td>HECTOR ISAAC GARCIA RIVERA</td>
            <td>higarciar@uaemex.mx</td>
            <td>3.594798</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>750</th>
            <td>JUAN CARLOS GARCIA ORTEGA</td>
            <td>jgarciaor@uaemex.mx</td>
            <td>7.917864</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>766</th>
            <td>LILIA SANCHEZ TOLEDANO</td>
            <td>lsanchezt@uaemex.mx</td>
            <td>0.999316</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>782</th>
            <td>VIRGINIA URIBE ARZATE</td>
            <td>vuribea@uaemex.mx</td>
            <td>4.733744</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>798</th>
            <td>JULIO CESAR LOPEZ LOPEZ</td>
            <td>jclopezl@uaemex.mx</td>
            <td>2.773443</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>814</th>
            <td>ANA GUADALUPE SANCHEZ GOMEZ</td>
            <td>agsanchezg@uaemex.mx</td>
            <td>10.921287</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>830</th>
            <td>ANA KAREN HERNANDEZ REYES</td>
            <td>akhernandezr@uaemex.mx</td>
            <td>3.296372</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>846</th>
            <td>BELEM TOLEDANO GIL</td>
            <td>btoledanog@uaemex.mx</td>
            <td>13.574264</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>862</th>
            <td>DARIO JIMENEZ COLIN</td>
            <td>djimenezc@uaemex.mx</td>
            <td>13.253936</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>878</th>
            <td>EDITH JIMENEZ BLANQUEL</td>
            <td>ejimenezb@uaemex.mx</td>
            <td>2.447639</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>894</th>
            <td>HERIBERTO ROSALES PALMA</td>
            <td>hrosalesp@uaemex.mx</td>
            <td>17.245722</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>910</th>
            <td>HORACIO COLIN VELAZQUEZ</td>
            <td>hcolinv@uaemex.mx</td>
            <td>9.234771</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>926</th>
            <td>IRVING ISLAS VELASCO</td>
            <td>iislasv@uaemex.mx</td>
            <td>14.042437</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>942</th>
            <td>JORGE HERNANDEZ HERNANDEZ</td>
            <td>jhernandezh@uaemex.mx</td>
            <td>12.487337</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>958</th>
            <td>MARTHA BECERRIL FLORES</td>
            <td>mbecerrilf@uaemex.mx</td>
            <td>11.249829</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>974</th>
            <td>MIGUEL ANGEL FUENTES GONZALEZ</td>
            <td>mafuentesg@uaemex.mx</td>
            <td>17.702943</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>990</th>
            <td>RAUL ABRAHAM LOPEZ MORENO</td>
            <td>ralopezm@uaemex.mx</td>
            <td>13.806982</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1006</th>
            <td>ROCIO GABRIELA GAETA MADRIGAL</td>
            <td>rggaetam@uaemex.mx</td>
            <td>3.039014</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1022</th>
            <td>ROCIO ROJAS GAMBOA</td>
            <td>rrojasg@uaemex.mx</td>
            <td>23.468857</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1038</th>
            <td>SANDRA PEREZ SANCHEZ</td>
            <td>sperezs@uaemex.mx</td>
            <td>15.26078</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1054</th>
            <td>VIOLETA BAUTISTA MONTES</td>
            <td>vbautistam@uaemex.mx</td>
            <td>4.451745</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1070</th>
            <td>DAVID RUIZ MENDOZA</td>
            <td>druizm@uaemex.mx</td>
            <td>15.96167</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1086</th>
            <td>DORA DE LA LUZ SESIN CARPIO</td>
            <td>dlsesinc@uaemex.mx</td>
            <td>NaN</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1102</th>
            <td>SANDRA LETICIA BARRERA ANGELES</td>
            <td>slbarreraa@uaemex.mx</td>
            <td>10.874743</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1118</th>
            <td>ANDREA FABIOLA JAIME CHAVEZ</td>
            <td>afjaimec@uaemex.mx</td>
            <td>7.715264</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1124</th>
            <td>RENÉ NUNCIO MEJÍA</td>
            <td>rnunciom@uaemex.mx</td>
            <td>3.126626</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1140</th>
            <td>IGNACIO MEJIA HERNANDEZ</td>
            <td>NaN</td>
            <td>0.503765</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1146</th>
            <td>IVONNE LOPEZ CORRAL</td>
            <td>ilopezc@uaemex.mx</td>
            <td>19.373032</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>2</td>
          </tr>
          <tr>
            <th>1157</th>
            <td>LILIA PADILLA RODRIGUEZ</td>
            <td>lpadillar@uaemex.mx</td>
            <td>0.906229</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1173</th>
            <td>LIDA JAZMIN PEÑA ESPINOSA</td>
            <td>ljpenae@uaemex.mx</td>
            <td>11.392197</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1189</th>
            <td>ETHEL CAMPUZANO GARCIA</td>
            <td>ecampuzanog@uaemex.mx</td>
            <td>12.84052</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>2</td>
          </tr>
          <tr>
            <th>1200</th>
            <td>SILVIA LUNA PICHARDO</td>
            <td>slunap@uaemex.mx</td>
            <td>8.476386</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>2</td>
          </tr>
          <tr>
            <th>1211</th>
            <td>JOSE ANGEL DOMINGUEZ MENDOZA</td>
            <td>NaN</td>
            <td>4.462697</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>2</td>
          </tr>
          <tr>
            <th>1222</th>
            <td>OSCAR BURGOS ARCEGA</td>
            <td>oscar.burgos@osfem.gob.mx</td>
            <td>13.566051</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1228</th>
            <td>MONICA ARGELIA MENDOZA SALGADO</td>
            <td>NaN</td>
            <td>2551.786448</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1234</th>
            <td>SUSANA MUNGUIA FERNANDEZ</td>
            <td>smunguiaf@uaemex.mx</td>
            <td>0.062971</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1240</th>
            <td>ABIMAEL SOLIS RICARDO</td>
            <td>NaN</td>
            <td>2.956879</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1246</th>
            <td>ACASIO ALFREDO GARCES SUVIETA</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1252</th>
            <td>HECTOR ANTONIO SERRANO GONZALEZ</td>
            <td>hector.serranog@pjedomex.gob.mx</td>
            <td>2.537988</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1258</th>
            <td>ESTHER ROXANA NILA MEJIA</td>
            <td>esther.nila@pjedomex.gob.mx</td>
            <td>16.073922</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1264</th>
            <td>LORENA GOMEZ ENRIQUEZ</td>
            <td>lorena.gomez@pjedomex.gob.mx</td>
            <td>8.95551</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1270</th>
            <td>OLIVIA GONZALEZ SALAZAR</td>
            <td>olivia.gonzalez@pjedomex.gob.mx</td>
            <td>14.395619</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1276</th>
            <td>RODRIGO GERMAN GONZALEZ HERNANDEZ</td>
            <td>rodrigo.gonzalez@pjedomex.gob.mx</td>
            <td>5.982204</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1282</th>
            <td>RENE GARDUÑO VARGAS</td>
            <td>rene.garduno@pjedomex.gob.mx</td>
            <td>3.359343</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1288</th>
            <td>SANDRA HORTENCIA MACEDO GARCIA</td>
            <td>sandra.macedo@pjedomex.gob.mx</td>
            <td>8.511978</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1294</th>
            <td>MARIA CONCEPCION REMIGIO AYALA</td>
            <td>maria.remigio@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1300</th>
            <td>JEAN CARLO HERNANDEZ SANCHEZ</td>
            <td>jeancarlo.hernandez@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1306</th>
            <td>DANIEL RICARDO BARRIENTOS CRUZ</td>
            <td>daniel.barrientos@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1312</th>
            <td>VICENTE JUAN GUTIERREZ GARCIA</td>
            <td>vicente.gutierrez@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1318</th>
            <td>SELENE YADIRA GARCIA GUTIERREZ</td>
            <td>selene.garcia@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1324</th>
            <td>LAURA KARIME SANCHEZ GARCIA</td>
            <td>karime.sanchez@pjedomex.gob.mx</td>
            <td>12.506502</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1330</th>
            <td>ARMIDA CAMACHO ARAUJO</td>
            <td>armida.camacho@pjedomex.gob.mx</td>
            <td>8.301164</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1336</th>
            <td>EDUARDO ALCANTARA DAVILA</td>
            <td>eduardo.alcantara@pjedomex.gob.mx</td>
            <td>1.650924</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1342</th>
            <td>ANDRES DAVID RULFO RESENDIS</td>
            <td>andres.rulfo@pjedomex.gob.mx</td>
            <td>8.323066</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1348</th>
            <td>ROLANDO GARDUÑO ALANIZ</td>
            <td>rolando.garduno@pjedomex.gob.mx</td>
            <td>8.613279</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1354</th>
            <td>JESSICA MELISSA JIMÉNEZ CRUZ</td>
            <td>instituto@tjaem.gob.mx</td>
            <td>0.0</td>
            <td>TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1360</th>
            <td>RAUL TARELLO ACEVES</td>
            <td>rtarelloa@uaemex.mx</td>
            <td>37.612594</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>2</td>
          </tr>
          <tr>
            <th>1371</th>
            <td>YADIRA ELIZABETH GALICIA GARCIA</td>
            <td>yegaliciag@uaemex.mx</td>
            <td>13.289528</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>2</td>
          </tr>
          <tr>
            <th>1382</th>
            <td>EFRAIN GARCIA NIEVES</td>
            <td>NaN</td>
            <td>3934.094456</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1388</th>
            <td>ADRIANA RUIZ CARREON</td>
            <td>aruizca@uaemex.mx</td>
            <td>8.618754</td>
            <td>Universidad Autónoma del Estado de México</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1394</th>
            <td>RAQUEL MEJIA SANCHEZ</td>
            <td>NaN</td>
            <td>30.236824</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1400</th>
            <td>JUAN GABRIEL GUERRA RODRIGUEZ</td>
            <td>NaN</td>
            <td>14.809035</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1406</th>
            <td>ELIAS VELAZQUEZ COLIN</td>
            <td>NaN</td>
            <td>12.577687</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1412</th>
            <td>LUZ MARIA VAZQUEZ GOMEZ</td>
            <td>NaN</td>
            <td>5.163587</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1418</th>
            <td>DAVID MALDONADO RAMIREZ</td>
            <td>david.maldonado@legislativoedomex.gob.mx</td>
            <td>11.107461</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1424</th>
            <td>VERONICA YAZMIN DIAZ FREGOSO</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1430</th>
            <td>BEATRIZ CONTRERAS BORJA</td>
            <td>NaN</td>
            <td>13.075975</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1436</th>
            <td>MIGUEL ANGEL RAMIREZ GALINDO</td>
            <td>NaN</td>
            <td>23.485284</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1442</th>
            <td>RAUL SEGUNDO LOPEZ</td>
            <td>NaN</td>
            <td>0.40794</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1448</th>
            <td>ROSALINDA CONZUELO RODRIGUEZ</td>
            <td>NaN</td>
            <td>3.200548</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1454</th>
            <td>ERICK BELLER TORRES</td>
            <td>NaN</td>
            <td>1.459274</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1460</th>
            <td>Benito Ernesto Calzada Uribe</td>
            <td>ernesto.calzada@infoem.org.mx</td>
            <td>16.95551</td>
            <td>INFOEM</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1466</th>
            <td>Nelson Correa Peralta</td>
            <td>nelson.correa@infoem.org.mx</td>
            <td>26.893908</td>
            <td>INFOEM</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1472</th>
            <td>Wendy Magali Acosta Avendaño</td>
            <td>wendy.acosta@infoem.org.mx</td>
            <td>11.140315</td>
            <td>INFOEM</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1478</th>
            <td>Rubén Alejandro Becerril Rojas</td>
            <td>NaN</td>
            <td>4.900753</td>
            <td>INFOEM</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1484</th>
            <td>Luis Fernando Meneses Velázquez</td>
            <td>luis.meneses@infoem.org.mx</td>
            <td>20.900753</td>
            <td>INFOEM</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1490</th>
            <td>Alexis Tapia Ramírez</td>
            <td>alexis.tapia@infoem.org.mx</td>
            <td>NaN</td>
            <td>INFOEM</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1496</th>
            <td>Adriana León Arce</td>
            <td>adrilarce@infoem.org.mx</td>
            <td>21.114305</td>
            <td>INFOEM</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1502</th>
            <td>GUSTAVO ADOLFO REYES GUERRERO</td>
            <td>gustavo.reyes@osfem.gob.mx</td>
            <td>1.998631</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1508</th>
            <td>ELVIA ALVA ROJAS</td>
            <td>elvia_al_ro@hotmail.com</td>
            <td>2.036961</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1514</th>
            <td>MARIA GUADALUPE PEREZ HERNANDEZ</td>
            <td>mariaguadalupe.perez@pjedomex.gob.mx</td>
            <td>NaN</td>
            <td>PODER JUDICIAL DEL ESTADO DE MEXICO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1520</th>
            <td>JUAN ALVAREZ GARDUÑO</td>
            <td>NaN</td>
            <td>2.537988</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1526</th>
            <td>LUCIANO JASSO AGUIRRE</td>
            <td>aryrdz03@hotmail.com</td>
            <td>2.997947</td>
            <td>PODER LEGISLATIVO</td>
            <td>1</td>
          </tr>
          <tr>
            <th>1532</th>
            <td>ALINE ALEJANDRA GONZALEZ PLIEGO HERRERA</td>
            <td>NaN</td>
            <td>1.144422</td>
            <td>INSTITUTO ELECTORAL DEL ESTADO DE MÉXICO</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default App
