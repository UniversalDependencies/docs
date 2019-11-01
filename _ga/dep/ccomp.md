---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

The `ccomp` relation marks a clausal complement of a verb or adjective, that has its own internal subject. In Irish, clausal complements are usually introduced by complementizers _go_, _nach_, and _gur_.

### Examples

_Tá a fhios agam gur <b>imigh</b> mo mháthair._ 'I know that my mother <b>left</b>.'

~~~ sdparse
Tá a fhios agam gur imigh mo mháthair \n Is the knowledge at-me that left my mother
ccomp(Tá, imigh)
~~~

_Creidimidne, go <b>bhforbraíonn</b> na mic léinn a gcuid tuisceana ar shaol proifisiúnta na tionsclaíochta._ 'We believe that the students <b>develop</b> their understanding of professional life in industry.'

~~~ sdparse
Creidimidne , go bhforbraíonn na mic léinn a gcuid tuisceana ar shaol proifisiúna na tionsclaíochta \n  Believe-we , that develop the students  their own understanding on life professional the industry
ccomp(Creidimidne, bhforbraíonn)
~~~
 
_D'admhaigh Piaras Ó Dochartaigh go <b>raibh</b> an páirtí rólag._ 'Piaras Ó Dochartaigh admitted that the party <b>was</b> too weak.'

~~~ sdparse
D'admhaigh Piaras Ó Dochartaigh go raibh an páirtí rólag. \n Admitted Piaras Ó Dochartaigh that was the party too-weak. 
ccomp(D'admhaigh, raibh)
~~~
