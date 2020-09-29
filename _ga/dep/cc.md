---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

The `cc` label marks the relation between the last conjunct of a coordinated phrase and its coordinating conjunction. In Irish, a coordinating conjunction takes the form of _agus_ "and", _nó_ "or", _ná_ "than".
UD takes the first conjunct as the head of a coordinated phrase.
(Note that this differs from the Irish Dependency Treebank structure, which follows LFG theory and the coordinating conjunction is the head of the cooordinated phrase.)

### Examples

_caidreamh a bhunú le bainc cheannais <b>agus</b> le hinstitiúidí airgeadais i dtíortha eile_ 
'to establish a relationship between central banks <b>and</b> financial institutions in other countries'

~~~ sdparse
caidreamh a bhunú le bainc cheannais agus le hinstitiúidí airgeadais i dtíortha eile . \n relationship to establish with  banks central and with institutions financial in countries other .
cc(hinstitiúidí, agus)
conj(bainc, hinstitiúidí)
~~~

Coordination of more than two elements is treated as follows (note there is also embedded coordination within the main coordinated phrase).

_Gáis a úsáidtear i gcannaí aerasóil áirithe, i gcuisneoirí agus i ndéantús cupán agus coimeádán plaisteach áirithe_ 
"Gas that is used in some aerosol cans, in refrigerators <b>and</b> in the making of some plastic cups <b>and</b> containers"

~~~ sdparse
Gáis a úsáidtear i gcannaí aerasóil áirithe, i gcuisneoirí agus1 i ndéantús cupán agus2 coimeádán plaisteach áirithe . \n Gas REL is-used in cans aerosol certain, in refrigerators and in making cups and containers plastic certain .
obl(úsáidtear, gcannaí)
conj(gcannaí, gcuisneoirí)
conj(gcannaí, ndéantús)
cc(ndéantús, agus1)
cc(coimeádán, agus2)
nmod(ndéantús, cupán)
conj(cupán, coimeádán)
~~~

If a sentence begins with a coordinating conjunction, there will be no preceeding 'conj', but the coordinating conjunction will still be labelled as a ‘cc’. 

_<b>Agus</b> deirtear go bhfuil rátaí ailse imithe go mór i méid i measc thuataí na hIaráice_
'<b>And</b> it is said that cancer rates have increased a lot amongst lay people in Iraq.'

~~~ sdparse
Agus deirtear go bhfuil rátaí ailse imithe go mór i méid i measc thuataí na hIaráice . \n And it-is-said that cancer rates amongst laypeople in Iraq have increased hugely .
cc(deirtear, Agus)
~~~

The coordinating conjunction _ná_ (meaning 'than'/'or') is treated as follows. 

_Tá pobal Chonamara níos trodaí <b>ná</b> Gaeltachtaí eile._ The community of Connemara are more outspoken <b>than</b> those of other Gaeltachtaí.

~~~ sdparse
Tá pobal Chonamara níos trodaí ná Gaeltachtaí eile. \n Is public of_Connemara more outspoken than Gaeltachtaí other.
cc(Gaeltachtaí, ná)
conj(pobal, Gaeltachtaí)
~~~

_Is fearr béal dúnta <b>ná</b> béal le hÉirinn._ A closed mouth is better <b>than</b> a big one.

~~~ sdparse
Is fearr béal1 dúnta ná béal2 le hÉirinn. \n COP better mouth closed than mouth with Ireland.
cc(béal2, ná)
conj(béal1, béal2)
~~~

_...éan <b>ná</b> feithid <b>ná</b> beach <b>ná</b> ainmhí._ ...a bird <b>or</b> an insect <b>or</b> a bee <b>or</b> an animal.

~~~ sdparse
... éan ná1 feithid ná2 beach ná3 ainmhí . \n ... bird or insect or bee or animal .
cc(feithid, ná1)
cc(beach, ná2)
cc(ainmhí, ná3)
conj(éan, feithid)
conj(éan, beach)
conj(éan, ainmhí)
~~~

_Thaistil Eoin ní ba mhó <b>ná</b> aon duine eile._ 'Eoin travelled more <b>than</b> anyone else.'

~~~ sdparse
Thaistil Eoin ní ba mhó ná aon duine eile. \n Travelled Eoin thing SUP(past) bigger than any person other.
cc(duine, ná)
conj(Eoin, duine)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:21 CEST 2020 -->
