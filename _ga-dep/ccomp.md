---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
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
 
