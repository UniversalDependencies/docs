---
layout: base
title:  'Statistics of aux:pass in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-aux.html">aux</a></tt>.

1828 nodes (1%) are attached to their parents as `aux:pass`.

1550 instances of `aux:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.0246170678337.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (1827; 100% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	Waarmee	waarmee	ADV	BW	_	10	advmod	10:advmod	_
2	het	het	DET	LID|bep|stan|evon	Definite=Def	3	det	3:det	_
3	pad	pad	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	10	nsubj:pass	10:nsubj:pass	_
4	voor	voor	ADP	VZ|init	_	7	case	7:case	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
6	rappe	rap	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	7	amod	7:amod	_
7	Van	Van	PROPN	SPEC|deeleigen	_	10	obl	10:obl:voor	_
8	Alebeek	Alebeek	PROPN	SPEC|deeleigen	_	7	flat	7:flat	_
9	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	10	aux:pass	10:aux:pass	_
10	geëffend	effenen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 aux:pass	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	uitspraak	uitspraak	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	26	nsubj	26:nsubj	_
3	van	van	ADP	VZ|init	_	4	case	4:case	_
4	Comenius	Comenius	PROPN	N|eigen|ev|basis|genus|stan	Gender=Com,Neut|Number=Sing	2	nmod	2:nmod:van	_
5	in	in	ADP	VZ|init	_	6	case	6:case	_
6	1620	1620	NUM	TW|hoofd|vrij	_	2	nmod	2:nmod:in	SpaceAfter=No
7	,	,	PUNCT	LET	_	14	punct	14:punct	_
8	dat	dat	SCONJ	VG|onder	_	14	mark	14:mark	_
9	Bohemen	Bohemen	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	14	nsubj:pass	14:nsubj:pass	_
10	aan	aan	ADP	VZ|init	_	12	case	12:case	_
11	de	de	DET	LID|bep|stan|rest	Definite=Def	12	det	12:det	_
12	buren	buur	NOUN	N|soort|mv|basis	Number=Plur	14	obl	14:obl:aan	_
13	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	14	aux:pass	14:aux:pass	_
14	overgeleverd	over_leveren	VERB	WW|vd|vrij|zonder	VerbForm=Part	2	acl	2:acl:dat	_
15	om	om	ADP	VZ|init	_	16	mark	16:mark	_
16	platgetrapt	plattrappen	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	14	advcl	14:advcl:om	_
17	te	te	ADP	VZ|init	_	16	mark	16:mark	_
18	worden	worden	AUX	WW|inf|vrij|zonder	VerbForm=Inf	16	aux:pass	16:aux:pass	SpaceAfter=No
19	,	,	PUNCT	LET	_	2	punct	2:punct	_
20	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	26	cop	26:cop	_
21	nog	nog	ADV	BW	_	22	advmod	22:advmod	_
22	steeds	steeds	ADV	BW	_	26	advmod	26:advmod	_
23	van	van	ADP	VZ|init	_	26	case	26:case	_
24	een	een	DET	LID|onbep|stan|agr	Definite=Ind	26	det	26:det	_
25	beklemmende	beklemmend	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	26	amod	26:amod	_
26	actualiteit	actualiteit	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	SpaceAfter=No
27	.	.	PUNCT	LET	_	26	punct	26:punct	_

~~~


