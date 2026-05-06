---
layout: relation
title: 'aux:pass'
shortdef: 'passive auxiliary'
udver: '2'
---

A passive auxiliary of a clause is a non-main verb of the clause which contains the passive information.

~~~ sdparse
et lo fen et la palha de la terra son prees\n and the hay and the straw of the land are taken

aux:pass(prees, son)
~~~

Other auxiliaries associated with the same main verb are not labeled `aux:pass` but `aux`since they do not themselves indicate passive voice.

~~~ sdparse
Asso es estat judyat per Bernat de Tholose\n This has been judged by Bernard of Toulouse
aux:pass(judyat, estat)
aux(judyat, es)
<!-- Interlanguage links updated St 6. května 2026, 20:45:33 CEST -->
