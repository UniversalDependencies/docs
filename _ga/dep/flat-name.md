---
layout: relation
title: 'flat:name'
shortdef: 'flat name'
udver: '2'
---


In UD Irish, this not only includes surnames, but also surname particles such as _Ó_, _Mac_, _Mag_, _Mc_ _Uí_, _Ua_, _Ní_, _Nig_, _Nic_

_Is mian linn ár mbuíochas a chur in iúl go háirithe do Sheán <b>Ó Gallchóir</b>_ `We want to express our thanks in particular to John <b>Gallagher</b>'

~~~ sdparse
Is mian linn ár mbuíochas a chur in iúl go háirithe do Sheán Ó Gallchóir \n Is desire with-us our thanks to put in knowledge [] particular to John PART Gallagher
flat:name(Sheán, Ó)
flat:name(Sheán, Gallchóir)
~~~ 

_Iriseoir agus craoltóir le Raidió na Gaeltachta i mBaile Átha Cliath í Seosaimhín <b>Ní Bheaglaoich</b>_ Seosaimhín <b>Ní Bheaglaoich</b> is a broadcaster and journalist with Raidió na Gaeltachta in Dublin. 

~~~ sdparse
Iriseoir agus craoltóir le Raidió na Gaeltachta i mBaile Átha Cliath í Seosaimhín Ní Bheaglaoich \n Journalist and broadcaster with Radio of-the Gaeltacht in Dublin is Seosaimhín Ní Bheaglaoich
flat:name(Seosaimhín, Ní)
flat:name(Seosaimhín, Bheaglaoich)
~~~ 

NOTE: Personal names appearing in any language are treated as `flat:name` relations (see below). 

_muintir Kennedy, Marilyn <b>Monroe</b>, Sam <b>Giancano</b>, Judith <b>Cambell</b> agus an FBI._ the Kennedy family, Marilyn <b>Monroe</b>, Sam <b>Giancano</b>, Judith <b>Cambell</b> and the FBI.

~~~ sdparse
muintir Kennedy, Marilyn Monroe , Sam Giancano , Judith Cambell agus an FBI. \n people Kennedy, Marilyn Monroe, Sam Giancano, Judith Cambell and the FBI.
flat:name(Marilyn, Monroe)
flat:name(Sam, Giancano)
flat:name(Judith, Cambell)
~~~ 
<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->
