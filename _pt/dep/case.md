---
layout: relation
title: 'case'
shortdef: 'case marking'
---

The `case` relation is used for any case-marking element which is treated as a separate syntactic word (including prepositions, postpositions, and clitic case markers). Case-marking elements are treated as dependents of the noun or clause they attach to or introduce.  The `case` relation aims at providing a more uniform analysis of nominal elements, prepositions and case in morphologically rich languages: a nominal in an oblique case will receive the same dependency structure as a nominal introduced by an adposition ("para ele" will have the same dependency relation as "lhe", for example).

~~~ sdparse
preços de os funileiros artesanais
det(funileiros, os)
case(funileiros, case)
~~~

~~~ sdparse
moradores de renda baixa
case(renda, de)
~~~

~~~ sdparse
Os policiais foram a uma casa, indicada por as duas mulheres, onde estariam outros integrantes da quadrilha
det(casa, uma)
case(casa, a)
det(mulheres, as)
case(mulheres, por)
case(quadrilha, de)
det(quadrilha, a)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:10 CEST 2020 -->
