---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

The `ccomp` relation marks a clausal complement of a verb or adjective, that has its own internal subject. In Irish, clausal complements are usually introduced by complementizers _go_, _nach_, and _gur_.

### Examples

~~~ sdparse
Tá a fhios agam gur imigh mo mháthair \n Is the knowledge at_me that left my mother
ccomp(Tá, imigh)
~~~

_Creidimidne, go <b>bhforbraíonn</b> na mic léinn a gcuid tuisceana ar shaol proifisiúna na tionsclaíochta_ `We believe, that the students <b>develop</b> their understanding of professional life of industry'


~~~ sdparse
Creidimidne , go bhforbraíonn na mic léinn a gcuid tuisceana ar shaol proifisiúna na tionsclaíochta \n  Believe_we , that develop the students  their own understanding on life professional the industry

ccomp(Creidimidne, bhforbraíonn)
~~~
 
_D'admhaigh Piaras Ó Dochartaigh go raibh an páirtí rólag le tabhairt faoin suíochán i gceart an iarraidh seo._ 'Piaras Ó Dochartaigh admitted that the party was roo weak to correctly address the peace effort. 

~~~ sdparse

D'admhaigh Piaras Ó Dochartaigh go raibh an páirtí rólag le tabhairt faoin suíochán i gceart an iarraidh seo /n
Admitted Piaras  Ó Dochartaigh that was the party too weak to address about peace correctly the effort this. 

ccomp(D'adhmaigh, raibh)
~~~
