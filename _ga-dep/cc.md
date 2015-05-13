 ---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

The `cc` label marks the relation between the first conjunct of a coordinated phrase and its coordinating conjunction. In Irish, a coordinating conjunction takes the form of _agus_ "and", _nó_ "or", _ná_ "than".
UD takes the first conjunct as the head of a coordinated phrase. Note that this differs from the Irish Dependency Treebank structure, where the coordinating conjunction is the head of the cooordinated phrase.

_caidreamh a bhunú le bainc cheannais <b>agus</b> le hinstitiúidí airgeadais i dtíortha eile_ 'to establish a relationship between central banks <b>and</b> financial institutions in other countries'

~~~ sdparse
caidreamh a bhunú le bainc cheannais agus le hinstitiúidí airgeadais i dtíortha eile \n 'relationship to establish with  banks central <b>and</b> with institutions financial in countries other'

cc(bainc,agus)
conj(bainc,hinstitiúidí)
~~~


Coordination of more than two elements is as follows (note there is also embedded coordination within the main coordinated phrase).

_Gáis a úsáidtear i gcannaí aerasóil áirithe, i gcuisneoirí agus i ndéantús cupán agus coimeádán plaisteach áirithe_ 
"Gas that is used in some aerosol cans, in refrigerators <b>and</b> in the making of some plastic cups <b>and</b> containers"

~~~ sdparse
Gáis a úsáidtear i gcannaí aerasóil áirithe, i gcuisneoirí agus i ndéantús cupán agus coimeádán plaisteach áirithe \n Gas REL is used in cans aerosol certain, in refrigerators and in making cups and and containers plastic certain

cc(cupán,agus)
conj(agus,coimeádán)
~~~

  
