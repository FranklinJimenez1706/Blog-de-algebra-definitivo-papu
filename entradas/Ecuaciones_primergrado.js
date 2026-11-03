contenidoEntrada=`

<h1>Ecuaciones de Primer Grado</h1>

<p><strong>Unidad II, Tema 3</strong> · Fundamentos de Álgebra</p>

<hr>

<h2>1. ¿Qué es una ecuación?</h2>

<ul>
  <li>Una <strong>ecuación</strong> es una <strong>igualdad</strong> con un valor desconocido (la <strong>incógnita</strong>). Resolverla es encontrar el valor que hace verdadera la igualdad.</li>
  <li>Es de <strong>primer grado (lineal)</strong> cuando la incógnita tiene exponente 1.
    <ul>
      <li><code>2x + 3 = 11</code> → sí es de primer grado.</li>
      <li><code>x² + 3 = 11</code> → no.</li>
    </ul>
  </li>
  <li>Comparación con programación:</li>
</ul>

<pre><code>python
x = 4              # asignación: guarda 4 en x
2*x + 3 == 11      # comparación: ¿es verdad? → True
</code></pre>

<blockquote>Una ecuación es un <code>==</code>: tu trabajo es encontrar el <code>x</code> que lo hace <code>True</code>.</blockquote>

<hr>

<h2>2. La regla de oro: la balanza</h2>

<p>Una ecuación es una <strong>balanza en equilibrio</strong>: lo de la izquierda pesa igual que lo de la derecha.</p>

<blockquote><strong>Lo que hagas de un lado, hazlo del otro.</strong> Si sumas, restas, multiplicas o divides <strong>en ambos lados</strong> por lo mismo, la balanza sigue en equilibrio.</blockquote>

<p><strong>Ejemplo:</strong> <code>2x + 3 = 11</code></p>

<pre><code>2x + 3 − 3 = 11 − 3     (resta 3 en ambos lados)
2x = 8
2x / 2 = 8 / 2          (divide entre 2 en ambos lados)
x = 4
</code></pre>

<p>Comprobación: <code>2(4) + 3 = 11</code> ✓</p>

<h3>El atajo "pasa al otro lado"</h3>

<p>Es la misma balanza, solo escrita más corta: pasa haciendo la <strong>operación contraria</strong>.</p>

<table>
  <thead>
    <tr>
      <th>Si en un lado está…</th>
      <th>Pasa al otro lado…</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sumando <code>+3</code></td>
      <td>restando <code>−3</code></td>
    </tr>
    <tr>
      <td>restando <code>−5</code></td>
      <td>sumando <code>+5</code></td>
    </tr>
    <tr>
      <td>multiplicando <code>2x</code></td>
      <td>dividiendo <code>÷ 2</code></td>
    </tr>
    <tr>
      <td>dividiendo <code>x/3</code></td>
      <td>multiplicando <code>× 3</code></td>
    </tr>
  </tbody>
</table>

<hr>

<h2>3. Procedimiento general (sirve para cualquier ecuación de primer grado)</h2>

<ol>
  <li><strong>Elimina signos de agrupación</strong> (paréntesis, corchetes, llaves), de adentro hacia afuera.</li>
  <li><strong>Elimina denominadores</strong>: multiplica todo por el MCM.</li>
  <li><strong>Agrupa</strong>: términos con <code>x</code> de un lado, números del otro.</li>
  <li><strong>Reduce</strong> términos semejantes.</li>
  <li><strong>Despeja</strong>: divide entre el coeficiente de <code>x</code>.</li>
  <li><strong>Comprueba</strong>: sustituye en la ecuación <strong>original</strong>.</li>
</ol>

<blockquote>Si un paso no aplica (no hay paréntesis o fracciones), sáltalo.</blockquote>

<hr>

<h2>4. Tipos de ecuaciones</h2>

<h3>4.1 Ecuaciones enteras</h3>

<p>Agrupa, reduce y divide.</p>

<p><strong>Ejemplo:</strong> <code>5x − 7 = 2x + 8</code></p>

<pre><code>5x − 2x = 8 + 7
3x = 15
x = 15 / 3 = 5
</code></pre>

<p>Comprobación: <code>5(5) − 7 = 18</code> y <code>2(5) + 8 = 18</code> ✓</p>

<p><strong>Con reducción previa:</strong> <code>3x − 5 + x = 6x + 7</code></p>

<pre><code>4x − 5 = 6x + 7       (reduce cada lado primero)
4x − 6x = 7 + 5
−2x = 12
x = 12 / (−2) = −6
</code></pre>

<blockquote>Un resultado <strong>negativo</strong> no es un error. La comprobación te dice si está bien.</blockquote>

<h3>4.2 Ecuaciones fraccionarias</h3>

<p>Multiplica <strong>cada término de ambos lados</strong> por el <strong>MCM</strong> de los denominadores. Queda una ecuación entera.</p>

<table>
  <thead>
    <tr>
      <th>Denominadores</th>
      <th>MCM</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2 y 3</td>
      <td>6</td>
    </tr>
    <tr>
      <td>4 y 6</td>
      <td>12</td>
    </tr>
    <tr>
      <td>3, 4 y 6</td>
      <td>12</td>
    </tr>
  </tbody>
</table>

<p><strong>Cuidado:</strong> también se multiplican los términos <strong>sin denominador</strong>.<br>
<code>x/3 + 2 = 5</code> × 3 → <code>x + 6 = 15</code> (no <code>x + 2 = 15</code>) → <code>x = 9</code></p>

<p><strong>Ejemplo:</strong> <code>x/2 + x/3 = 10</code></p>

<pre><code>MCM = 6
3x + 2x = 60
5x = 60
x = 12
</code></pre>

<p>Comprobación: <code>12/2 + 12/3 = 6 + 4 = 10</code> ✓</p>

<p><strong>Con numeradores:</strong> <code>(x + 1)/4 − (x − 2)/6 = 1</code> → MCM = 12</p>

<pre><code>3(x + 1) − 2(x − 2) = 12     (numerador entre paréntesis)
3x + 3 − 2x + 4 = 12
x + 7 = 12
x = 5
</code></pre>

<blockquote>El signo <code>−</code> antes de una fracción afecta a <strong>todo</strong> el numerador; por eso se usa paréntesis.</blockquote>

<h3>4.3 Ecuaciones con signos de agrupación</h3>

<p>Elimina <code>( )</code>, <code>[ ]</code>, <code>{ }</code> <strong>de adentro hacia afuera</strong>.</p>

<table>
  <thead>
    <tr>
      <th>Delante del paréntesis hay…</th>
      <th>Qué pasa</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>un número</td>
      <td><strong>multiplica</strong> a cada término (distributiva)</td>
      <td><code>3(x − 2) = 3x − 6</code></td>
    </tr>
    <tr>
      <td>un signo <code>+</code></td>
      <td>los signos <strong>se quedan igual</strong></td>
      <td><code>+(2x − 4) = 2x − 4</code></td>
    </tr>
    <tr>
      <td>un signo <code>−</code></td>
      <td><strong>todos</strong> los signos <strong>cambian</strong></td>
      <td><code>−(2x − 4) = −2x + 4</code></td>
    </tr>
  </tbody>
</table>

<p><strong>Ejemplo:</strong> <code>5x − (2x − 4) = 19</code></p>

<pre><code>5x − 2x + 4 = 19
3x + 4 = 19
3x = 15
x = 5
</code></pre>

<blockquote><strong>Error común:</strong> cambiar solo el signo del primer término. <code>−(2x − 4)</code> es <code>−2x + 4</code>, <strong>no</strong> <code>−2x − 4</code>.</blockquote>

<p><strong>Con corchete y paréntesis:</strong> <code>2[x − 3(x + 1)] = x − 26</code></p>

<pre><code>2[x − 3x − 3] = x − 26     (paréntesis de adentro)
2[−2x − 3] = x − 26        (reduce dentro del corchete)
−4x − 6 = x − 26           (elimina el corchete)
−5x = −20
x = 4
</code></pre>

<h3>4.4 Ecuaciones con literales</h3>

<p>Los coeficientes son <strong>letras</strong>. Se resuelven igual; el resultado queda en términos de esas letras. Si <code>x</code> aparece en varios términos, <strong>factoriza <code>x</code></strong> y divide.</p>

<p><strong>Ejemplo fácil:</strong> despeja <code>x</code> de <code>ax + b = c</code></p>

<pre><code>ax = c − b
x = (c − b) / a
</code></pre>

<p><strong>Ejemplo medio:</strong> <code>ax − 3 = bx + 5</code></p>

<pre><code>ax − bx = 5 + 3
x(a − b) = 8
x = 8 / (a − b),  siempre que a ≠ b
</code></pre>

<p>¿Por qué <code>a ≠ b</code>? Si <code>a = b</code>, el denominador es 0 y <strong>no se puede dividir entre cero</strong>. En código:</p>

<pre><code>python
def resuelve(a, b):
    if a == b:
        return None          # no hay solución única
    return 8 / (a - b)
</code></pre>

<p><strong>Despejar una fórmula:</strong> <code>F = (9/5)C + 32</code>, despeja <code>C</code></p>

<pre><code>5F = 9C + 160
5F − 160 = 9C
C = (5F − 160) / 9 = 5(F − 32) / 9
</code></pre>

<pre><code>python
def a_celsius(f):
    return 5 * (f - 32) / 9

print(a_celsius(212))    # 100.0 → el agua hierve
print(a_celsius(98.6))   # 37.0  → temperatura corporal
</code></pre>

<hr>

<h2>5. Planteamiento y validación de problemas</h2>

<ul>
  <li><strong>Plantear</strong> = traducir un problema en palabras a una ecuación.</li>
  <li><strong>Validar</strong> = comprobar que la solución cumple <strong>el enunciado</strong> y <strong>tiene sentido</strong>, no solo la ecuación.</li>
</ul>

<h3>Los 5 pasos</h3>

<ol>
  <li><strong>Lee</strong> y define la incógnita con palabras: "<code>x</code> = el número de…".</li>
  <li><strong>Traduce</strong> al lenguaje algebraico.</li>
  <li><strong>Plantea</strong> la ecuación.</li>
  <li><strong>Resuelve</strong> con el procedimiento general.</li>
  <li><strong>Valida</strong> contra el enunciado: ¿cumple todas las condiciones? ¿tiene sentido?</li>
</ol>

<h3>Del español al álgebra</h3>

<table>
  <thead>
    <tr>
      <th>En palabras</th>
      <th>En álgebra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>un número</td>
      <td><code>x</code></td>
    </tr>
    <tr>
      <td>el doble de un número</td>
      <td><code>2x</code></td>
    </tr>
    <tr>
      <td>la mitad de un número</td>
      <td><code>x/2</code></td>
    </tr>
    <tr>
      <td>un número aumentado en 5</td>
      <td><code>x + 5</code></td>
    </tr>
    <tr>
      <td>un número disminuido en 3</td>
      <td><code>x − 3</code></td>
    </tr>
    <tr>
      <td>el doble de un número, aumentado en 7</td>
      <td><code>2x + 7</code></td>
    </tr>
    <tr>
      <td>el doble de un número aumentado en 7</td>
      <td><code>2(x + 7)</code></td>
    </tr>
    <tr>
      <td>tres números consecutivos</td>
      <td><code>x</code>, <code>x + 1</code>, <code>x + 2</code></td>
    </tr>
    <tr>
      <td>es, equivale a, da como resultado</td>
      <td><code>=</code></td>
    </tr>
  </tbody>
</table>

<h3>Ejemplos resueltos</h3>

<p><strong>Fácil:</strong> "El doble de un número, aumentado en 7, es 31."<br>
<code>2x + 7 = 31</code> → <code>2x = 24</code> → <strong>x = 12</strong>. Validación: 2·12 + 7 = 31 ✓</p>

<p><strong>Medio:</strong> "La suma de tres números consecutivos es 72."<br>
<code>x + (x + 1) + (x + 2) = 72</code> → <code>3x + 3 = 72</code> → <code>x = 23</code>.<br>
<strong>Respuesta: 23, 24 y 25</strong> (el problema pide tres números, no solo <code>x</code>).</p>

<p><strong>Difícil:</strong> "Un equipo dedica 1/3 del proyecto al diseño, 1/4 a pruebas y 10 días a programar. ¿Cuántos días dura?"<br>
<code>x/3 + x/4 + 10 = x</code> → (MCM 12) <code>4x + 3x + 120 = 12x</code> → <code>120 = 5x</code> → <strong>x = 24 días</strong>.<br>
Validación: 8 + 6 + 10 = 24 ✓</p>

<h3>Validar no es solo comprobar la ecuación</h3>

<p>"La suma de dos números <strong>enteros</strong> consecutivos es 50."<br>
<code>x + (x + 1) = 50</code> → <code>2x = 49</code> → <code>x = 24.5</code><br>
La ecuación se cumple (24.5 + 25.5 = 50), pero <strong>no son enteros</strong> → el problema <strong>no tiene solución</strong>.</p>

<blockquote>Rechaza respuestas sin sentido: personas, objetos o días <strong>negativos</strong> o <strong>fraccionarios</strong>.</blockquote>

<h3>Validar = escribir un test</h3>

<pre><code>python
x = 12
assert 2*x + 7 == 31                  # Ejemplo 1

x = 23
assert x + (x + 1) + (x + 2) == 72    # Ejemplo 2

x = 24
assert x/3 + x/4 + 10 == x            # Ejemplo 3
</code></pre>

<p>Si el <code>assert</code> falla, la solución está mal. Si pasa, cumple la ecuación, pero <strong>aún debes revisar que tenga sentido</strong>.</p>

<hr>

<h2>6. Tabla resumen</h2>

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Clave</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Enteras</td>
      <td>Agrupa, reduce, despeja</td>
      <td><code>5x − 7 = 2x + 8</code> → <code>x = 5</code></td>
    </tr>
    <tr>
      <td>Fraccionarias</td>
      <td>Multiplica <strong>todo</strong> por el MCM</td>
      <td><code>x/2 + x/3 = 10</code> → <code>x = 12</code></td>
    </tr>
    <tr>
      <td>Con agrupación</td>
      <td>De adentro hacia afuera; <code>−</code> cambia todos los signos</td>
      <td><code>5x − (2x − 4) = 19</code> → <code>x = 5</code></td>
    </tr>
    <tr>
      <td>Con literales</td>
      <td>Factoriza <code>x</code> y divide; cuidado con dividir entre cero</td>
      <td><code>ax − 3 = bx + 5</code> → <code>x = 8/(a − b)</code></td>
    </tr>
    <tr>
      <td>Planteamiento</td>
      <td>Traduce, resuelve y <strong>valida contra el enunciado</strong></td>
      <td>3 consecutivos que suman 72 → 23, 24, 25</td>
    </tr>
  </tbody>
</table>

<blockquote><strong>Siempre comprueba</strong> sustituyendo en la ecuación original, y en los problemas, contra el enunciado.</blockquote>

<hr>

<h2>7. Actividades de la Semana 9</h2>

<table>
  <thead>
    <tr>
      <th>Actividad</th>
      <th>Tipo</th>
      <th>Cuándo</th>
      <th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>#22</strong> Quiz: Ecuaciones de primer grado</td>
      <td>Individual</td>
      <td>Inicio de sesión</td>
      <td>8%</td>
    </tr>
    <tr>
      <td><strong>#23</strong> Ejercicios: Ecuaciones de primer grado</td>
      <td>Individual</td>
      <td>En clase</td>
      <td>8%</td>
    </tr>
    <tr>
      <td><strong>#24</strong> Proyecto: Blog, Ecuaciones de Primer Grado</td>
      <td>Individual</td>
      <td>Arranca hoy</td>
      <td>8%</td>
    </tr>
  </tbody>
</table>

<ul>
  <li><strong>#22:</strong> cubre enteras, fraccionarias, con agrupación, con literales y planteamiento.</li>
  <li><strong>#23:</strong> resuelve cada ecuación con el procedimiento general y comprueba. En los problemas, muestra los <strong>5 pasos</strong> (incluida la validación). Documenta en <strong>Markdown</strong>.</li>
  <li><strong>#24:</strong> nueva entrada en el Blog de Álgebra con el procedimiento general, un ejemplo de cada tipo y <strong>un problema de planteamiento propio</strong> resuelto y validado. Súbela con <strong>commit + push</strong>. Completa el contenido de la Unidad II que se presenta en la <strong>Semana 10</strong>.</li>
</ul>


<section>`;