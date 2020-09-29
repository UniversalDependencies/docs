---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

For more on coordination, see the [conj]() relation.
A `cc` is the relation between the first conjunct and
the [coordinating conjunction](../pos/CCONJ) delimiting another conjunct.
(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)

~~~ sdparse
repúblicas gregas e romanas
cc(gregas, e)
conj(gregas, romanas)
~~~

~~~ sdparse
Insana, mas saudável
cc(Insana, mas)
conj(Insana, saudável)
~~~

~~~ sdparse
opção de retorno ou acesso à avenida Santo Amaro
cc(retorno, ou)
~~~

A coordinating conjunction may also appear at the beginning of a
sentence. This is also called a `cc`, and it depends on the root
predicate of the sentence.


~~~ sdparse
E chegou lá.
cc(chegou, E)
~~~

Note that when many elements are coordinated, the `conj` relation holds between the connective and the first element of the conjunction.

~~~ sdparse
Aqui era o quarto pobre , simples , limpo e acolhedor.
amod(quarto, pobre)
conj(pobre, simples)
conj(pobre, limpo)
conj(pobre, acolhedor)
cc(pobre, e)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:22 CEST 2020 -->
