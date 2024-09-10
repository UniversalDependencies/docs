---
layout: relation
title: 'compound:nn'
shortdef: 'noun compound modifier'
udver: '2'
---


The dependency type `compound:nn`, which stands for _noun compound modifier_ has one use in the Komi Zyrian UD scheme. It is used for linking non-inflecting proper nouns to their inflecting appellations. Appellations may be titles or even concepts, e.g., 'professor', 'fellow', 'town', 'river', 'event', etc.
Contrary to the [appos]() relation, the `compound:nn` relation goes right to left, and only the second element declines.

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
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:56 CEST -->
