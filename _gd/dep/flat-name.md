---
layout: relation
title: 'flat:name'
shortdef: 'flat name'
udver: '2'
---

Personal names are treated in UD as having no internal structure:

p02\_000a
~~~ conllu
1	Freadaidh	Freadaidh	PROPN	Nn-mn	Case=Nom|Gender=Masc	0	root	_	_
2	Dhòmhnaill	Dòmhnaill	PROPN	Nn-mg	Case=Gen|Gender=Masc	1	flat:name	_	_
3	Bhàin	bàin	ADJ	Aq-smg	Case=Gen|Gender=Masc|Number=Sing	1	flat:name	_	_
~~~

except when one of the internal components has internal structure.
Note that _Nic_ 'daughter' is tagged as `PART` like _Mac_ 'son', and _an_ 'of the' is tagged `DET`:

p07\_021b
~~~ conllu
1	Cairistìona	Cairistìona	PROPN	Nn-fn	Case=Nom|Gender=Fem	0	root	_	_
2	Nic	Nic	PART	Up	PartType=Pat	1	flat:name	_	_
3	an	an	DET	Tdsmg	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	t-Saoir	Saoir	PROPN	Nn	_	1	flat:name	_	_
~~~

This includes titles:

p08\_024
~~~ conllu
45	Maighstir	maighstir	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	43	obj	_	_
46	Calum	Calum	PROPN	Nn-mn	Case=Nom|Gender=Masc	45	flat:name	_	_
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:15 CEST -->
