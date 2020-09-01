---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

The name `xcomp` is borrowed from Lexical-Functional Grammar. 
An open clausal complement (xcomp) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the xcomp.
These complements are always non-finite, and they are complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers.

### Examples

_Is leor breathnú ar na staitisticí chun a <b>fheiceáil</b> gur thit na caighdeáin_ `You must look at the statistics to <b>see</b> that the standards dropped'

~~~ sdparse
Is leor breathnú ar na staitisticí chun a fheiceáil gur thit na caighdeáin \n Is enough look at the statistics for to see that dropped the standards
xcomp(leor, fheiceáil)
~~~

_Caithfidh mé a <b>dhul</b> abhaile_ `I have to <b>go</b> home'

~~~ sdparse
Caithfidh mé a dhul abhaile \n Have I to go home
xcomp(Caithfidh, dhul)
~~~ 


The UD Irish scheme uses `xcomp` to denote progressive aspectual phrases, the structure of which follows:
Be + SUBJ + at (ag) + Verbal Noun
In these cases, and in keeping with the analysis of prepositional phrases, we attach the verbal noun to the higher verb ("be") (using the `xcomp` label instead of the `nmod` used in standard PPs). The preposition is then a dependent of the verbal noun, with that relationship labelled as `case`.

_Tá sé ag <b>rith</b>_ `He is <b>running</b>'

~~~ sdparse
Tá sé ag rith \n Is he at running
xcomp(Tá, rith)
case(rith, ag)
~~~

There are also some similar periphrastic constructions similar to these progressives that use _le_ or _ar_:

_Chuirfeadh iad ar <b>fáil</b>_ `They would be made available'

~~~ sdparse
Chuirfeadh iad ar fáil \n Would_be_put they on getting
xcomp(Chuirfeadh,fáil)
case(fáil, ar)
~~~

_Tá cuntas caiteachais le <b>fáil</b> fós ó Bhráithreachas Ospidéal Naomh Eoin._ The expenditure account is still available from St. John's hospital.

~~~ sdparse
Tá cuntas caiteachais le fáil fós ó Bhráithreachas Ospidéal Naomh Eoin.\n Is account expenditure to_be gotten still from the brotherhood hospital Saint John.
xcomp(Tá,fáil)
case(fáil, le)
~~~

Verbal nouns in Irish can have either a fronted object or the object can follow the verbal noun. 

_Déanann Máire iarracht <b>é</b> a mhusclú._ 'Máire makes an effort to wake <b>him</b> up.'

~~~ sdparse
Déanann Máire iarracht é a mhusclú \n 'Makes Máire effort him to wake
xcomp(Déanann, mhusclú)
obj(é, mhusclú)
~~~

_tá MRBI ag déanamh suirbhé ar son Raidió na Gaeltachta_ 'MRBI are doing a survey on behalf of Raidió na Gaeltachta'

~~~ sdparse
tá MRBI ag déanamh suirbhé ar son Raidió na Gaeltachta \n are MRBI at_doing survey on behalf_of Raidió na Gaeltachta
xcomp(tá, déanamh)
obj(suirbhé, déanamh)
~~~
