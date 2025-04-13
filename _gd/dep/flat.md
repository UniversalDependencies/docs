---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

We use `flat` for multiword placenames, two-word borrowings and miscellaneous expressions like "BBC 2" and "500 AD".
We use the language specific labels [flat:name](https://universaldependencies.org/gd/dep/flat-name.html) for personal names and [flat:foreign](https://universaldependencies.org/gd/dep/flat-foreign.html) for foreign-language titles, quotations, appositive explanations and longer switches into foreign languages.

### Proper nouns

_Bha beul na h-oidhche ann nuair a ràinig Dòmhnall mullach Bealach a' <b>Mhàim</b>._ 'It was nightfall when Donald reached Bealach a' Mhàim'

~~~ conllu
1	Bha	bi	VERB	V-s	Tense=Past	0	root	_	_
2	beul	beul	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
3	na	an	DET	Tdsfg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	h-oidhche	oidhche	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
5-6	ann	_	_	_	_	_	_	_	_
5	an	an	ADP	Sp	_	6	case	_	_
6	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_
7	nuair	nuair	SCONJ	Cs	_	9	mark	_	_
8	a	a	PART	Q-r	PartType=Vb|PronType=Rel	9	mark:prt	_	_
9	ràinig	ruig	VERB	V-s	Tense=Past	1	advcl	_	_
10	Dòmhnall	Dòmhnall	PROPN	Nn-mn	Case=Nom|Gender=Masc	9	nsubj	_	_
11	mullach	mullach	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	9	obj	_	_
12	Bealach	Bealach	PROPN	Nt	_	11	nmod	_	_
13	a'	a'	PROPN	Nt	_	12	flat	_	_
14	Mhàim	Màim	PROPN	Nt	_	12	flat	_	SpaceAfter=No
15	.	.	PUNCT	Fe	_	1	punct	_	_
~~~

### Borrowings

_an robh e shuas aig a' Council <b>Meeting</b>?_ 'was he up at the Council Meeting?'

~~~ conllu
1	an	an	PART	Qq	PartType=Vb|PronType=Int	2	mark:prt	_	_
2	robh	bi	VERB	V-s--d	Tense=Past	0	root	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	shuas	suas	ADV	Rs	_	7	advmod	_	_
5	aig	aig	ADP	Sp	_	7	case	_	_
6	a'	an	DET	Tds	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	Council	council	NOUN	Xfe	_	2	xcomp:pred	_	OrigLang=en
8	Meeting	meeting	NOUN	Xfe	_	7	flat	_	OrigLang=en|SpaceAfter=No
9	?	?	PUNCT	Fg	_	2	punct	_	_
~~~

#### Dates

_air a' bhliadhna 500 <b>AD</b>_ 'in the year 500 AD'

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:55 CET -->
