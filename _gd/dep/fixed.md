---
layout: relation
title: 'fixed'
shortdef: 'multi-word expression'
udver: '2'
---

The `fixed` relation is used for a small set of multiword expressions, largely taken over intact from ARCOSG.

These fall into the following categories:
* adverbs, like _an ear_ or _a chaoidh_
* compound conjunctions like _o chionn 's_
* compound prepositions like _am broinn_ and especially ones that are often spelt with a hyphen like  _a rèir_
* copulae, like _'s e_ or _gur e_

#### Examples

~~~ conllu
1	taobh	taobh	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	0	root	_	_
2	a	a	ADJ	Aq	_	1	amod	_	_
3	deas	deas	ADJ	Aq	_	2	fixed	_	_
4	na	an	DET	Tdsfg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	dùthcha	dùthaich	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
~~~
"the southern side of the country"

~~~ conllu
1	bho	bho	ADP	Sp	_	3	case	_	_
2	chionn	cionn	ADP	Nf	_	1	fixed	_	_
3	ghoirid	goirid	ADJ	Aq-smd	Case=Dat|Gender=Masc|Number=Sing	0	root	_	_
~~~
"a short time ago"

~~~ conllu
1	's	is	AUX	Wp-i	Tense=Pres	3	cop	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	fixed	_	_
3	dusan	dusan	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	acair	acair	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	bh'	bi	VERB	V-s	Tense=Past	4	csubj:cleft	_	_
7-8	annta	_	_	_	_	_	_	_	_
7	annta	an	ADP	Sp	_	8	case	_	_
8	iad	iad	PRON	Pp3p	Number=Plur|Person=3	6	xcomp:pred	_	_
~~~
copula and expletive pronoun, here "it was a dozen acres"


### Full list

The following expressions are approved by the validator at https://github.com/colinbatchelor/gdbank/blob/master/validate_gd_extras.py
~~~
'n déidh
'n diugh
'n ear
'n iar
'n seo
'n uair
'n uairsin
's an e
's e
's i
a bhòn-uiridh
a chaoidh
a cheana
a cheile
a chèile
a chéile
a chionn
a chuile
a deas
a dh'aindeoin
a dh'ainneoin
a dh'aithghearr
a dh'aona-ghnothaich
a h-uile
a lùib
a mach
a màireach
a muigh
a neisd
a nis
a nise
a nochd
a nuas
a raoir
a réir
a rèir
a riamh
a rithist
a seo
a seothach
a shin
a shineach
a sineach
a staigh
a steach
a stigh
a thaobh
a thoireadh
a thoradh
a tuath
a' diugh
air beulaibh
air bheulaibh
air bith
air choireigin
air choreigin
air cùlaibh
air dheireadh
air falbh
air feadh
air leth
air neo
air sgath
air sgàth
air sgàth 's
air son
air thùs
airson 's
am bliadhna
am broinn
am feadh
am feadh is
am measg
am muigh
an an
an àird
an àirde
an ath bhliadhna
an ath-bhliadhna
an ath-oidhch'
an ath-oidhche
an ceart-uair
an ceartuair
an cois
an còmhnaidh
an deas
an dè
an deidh
an dèidh
an déidh
an diugh
an dràsda
an dràsta
an e
an ear
an earar
an earras
an iar
an iarar
an iaras
an ìre mhath
an làrna-mhàireach
an lùib
an measg
an raoir
an sean
an seothach
an sin
an sineach
an siod
an siud
an siudach
an tac
an taca ri
an taca ris
an uairsin
an uiridh
an uirigh
an toiseach
an uair
ann a sheo
ann a sheothach
ann a shin
ann a shiodach
ann a shiud
ann a shiudach
ann a-seo
ann a-seothach
ann a-sin
ann a-sineach
ann a-siud
ann a'
ann a:
ann am
ann an
ann an seo
anns a'
anns a' bhad
anns an
anns na
aon uair 's
as aonais
ás aonais
às aonais
as bith
as deidh
as dèidh
as déidh
b' an e
b' e
b' i
bho chionn
bho chionn ghoirid
bho 'n
bho thoiseach
brith dè
car son
chan an e
chan e
chionn 's
cia mheud
cò mheud
có dhiubh
dè cho
dè mar
dé mar
fa leth
fad 's
fad as
fhad 's
fhad agus
fiù 's
fo dheireadh
gar bith có
ge b'e dé
ge brith
ge brith dé
gu bè gu dè
gu dé
gu ìre mhath
gu ruige
gun e
gur an e
gur e
gur h-e
is an e
is e
is i
ma dheidhinn
ma dheireadh
ma sgaoil
ma tha
ma thà
mar an ceudna
mar bu trice
mo bheulaibh
mu 'n
mu choinneamh
mu choinneimh
mu chuairt
mu dheas
mu dheidhinn
mu dheireadh
mu dheireadh thall
mu thràth
mu thuath
nach an e
'n dà
na b'
na bu
nach e
o chionn
o'n uairsin
os cionn
ri cheile
ri chèile
ri chéile
ri linn
ri linn 's
sa bhad
sam bidh
sam bith
uair sin
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:55 CET -->
