---
layout: relation
title: 'expl:comp'
shortdef: 'expletive'
udver: '2'
---

The `expl:comp` relation is used for passive constructions (with the lemma *se* for the dependent).
A few other lemmas can be used with this relation: *y*, *en* and *le*

~~~ sdparse
Max s' ennuie \n Max is bored
expl:comp(ennuie,s')
~~~

~~~ sdparse
Il y a un problème \n There is a problem
expl:comp(a,y)
expl:subj(a,Il)
~~~

~~~ sdparse
Max s' en tirait facilement \n Max got off easily
expl:comp(tirait,en)
~~~

**NB**: Due to conversion from [SUD](https://surfacesyntacticud.github.io/), these cases are annotated [dep:comp]() in **UD_French-GSD** and in **UD_French-Spoken**.
<!-- Interlanguage links updated Pá kvě 14 11:09:04 CEST 2021 -->
