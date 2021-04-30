---
layout: relation
title: 'nmod:appos'
shortdef: 'nominal modifier apposition'
udver: '2'
---

TODO: check this page !!!


The `nmod:appos` relation is used for apposition-like support nouns which modify nominal elements.
The nominal modifier is not introduced by an adposition (otherwise we use the [nmod]() relation).
Contrary to the [appos]() relation, the `nmod:appos` relation can also go right to left.
This not the `compound:nn` found in the Finnish treebanks.

Here is the first example:

~~~ sdparse
Шонді пуксигӧн Ручпиян сиктсянь шептасьысь нянь йӧръяс костті... ю дорӧ лэччисны ныв-зон чукӧр. \n As the sun set, a group of girls and boys went down to the river between the patches of heading grain from Ruchpiyan village.
nmod:subj(пуксигӧн-2, Шонді-1)
advcl:tcl(лэччисны-12, пуксигӧн-2)
nmod:appos(сиктсянь-4, Ручпиян-3)
obl:lfrom(лэччисны-12, сиктсянь-4)
~~~

~~~ sdparse
Эжва ю \n The Ezhva River
nmod:appos(ю, Эжва)
~~~

~~~ sdparse
Йӧзӧдӧма « Войвыв кодзув » журналын . \n Published in «Vojvyv kodzuv» magazine.
nmod(кодзув, Войвыв)
nmod:appos(журналын, кодзув)
obl:lmod(Йӧзӧдӧма, журналын)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:31 CET 2020 -->
