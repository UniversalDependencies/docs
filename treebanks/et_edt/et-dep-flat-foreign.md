---
layout: base
title:  'Statistics of flat:foreign in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="et-dep-flat.html">flat</a></tt>.

49 nodes (0%) are attached to their parents as `flat:foreign`.

49 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 6 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="et-pos-X.html">X</a></tt>-<tt><a href="et-pos-X.html">X</a></tt> (41; 84% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-X.html">X</a></tt> (2; 4% instances), <tt><a href="et-pos-X.html">X</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="et-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	V	V	X	S	_	0	root	_	_
3	naših	naših	X	S	_	2	flat:foreign	_	_
4	karmanah	karmanah	X	S	_	2	flat:foreign	_	_
5	tolko	tolko	X	S	_	2	flat:foreign	_	_
6	põl	põl	X	S	_	2	flat:foreign	_	_
7	ot	ot	X	Y	_	2	flat:foreign	_	_
8	travõ	travõ	X	Y	_	2	flat:foreign	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 flat:foreign	color:blue
1	Et	et	SCONJ	J	_	7	mark	_	_
2	Eesti	Eesti	PROPN	S	Case=Gen|Number=Sing	4	nmod	_	_
3	tehnoloogiakesksete	tehnoloogia_keskne	ADJ	A	Case=Gen|Degree=Pos|Number=Plur	4	amod	_	_
4	eksportharude	eksport_haru	NOUN	S	Case=Gen|Number=Plur	7	obl	_	_
5	osas	osas	ADP	K	AdpType=Post	4	case	_	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	toimunud	toimuma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	31	advcl	_	_
8	oluline	oluline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	9	amod	_	_
9	nihe	nihe	NOUN	S	Case=Nom|Number=Sing	7	nsubj	_	_
10	hinnatasemes	hinna_tase	NOUN	S	Case=Ine|Number=Sing	9	nmod	_	_
11	(	(	PUNCT	Z	_	12	punct	_	SpaceAfter=No
12	unit	unit	NOUN	S	Case=Nom|Number=Sing	10	appos	_	_
13	value	value	NOUN	S	Case=Nom|Number=Sing	12	flat:foreign	_	_
14	ratio	ratio	NOUN	S	Case=Gen|Number=Sing	12	flat:foreign	_	SpaceAfter=No
15	)	)	PUNCT	Z	_	12	punct	_	_
16	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	31	aux	_	_
17	nende	see	PRON	P	Case=Gen|Number=Plur|PronType=Dem	18	det	_	_
18	harude	haru	NOUN	S	Case=Gen|Number=Plur	31	obl	_	_
19	puhul	puhul	ADP	K	AdpType=Post	18	case	_	_
20	Eestist	Eesti	PROPN	S	Case=Ela|Number=Sing	22	obl	_	_
21	EL-i	EL	PROPN	Y	Abbr=Yes|Case=Add|Number=Sing	22	obl	_	_
22	liikuva	liikuv	ADJ	A	Case=Gen|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	23	acl	_	_
23	toodangu	toodang	NOUN	S	Case=Gen|Number=Sing	24	nmod	_	_
24	hind	hind	NOUN	S	Case=Nom|Number=Sing	31	nsubj	_	_
25	(	(	PUNCT	Z	_	27	punct	_	SpaceAfter=No
26	kui	kui	SCONJ	J	_	27	mark	_	_
27	usaldada	usaldama	VERB	V	VerbForm=Inf	31	parataxis	_	_
28	viidatud	viida=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	29	acl	_	_
29	uuringut	uuring	NOUN	S	Case=Par|Number=Sing	27	obj	_	SpaceAfter=No
30	)	)	PUNCT	Z	_	27	punct	_	_
31	kujunenud	kujunema	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
32	juba	juba	ADV	D	_	31	advmod	_	_
33	keskelt	keskelt	ADV	D	_	34	advmod	_	_
34	läbi	läbi	ADV	D	_	35	advmod	_	_
35	kõrgemaks	kõrgem	ADJ	A	Case=Tra|Degree=Cmp|Number=Sing	31	xcomp	_	_
36	kui	kui	SCONJ	J	_	42	mark	_	_
37	taolise	taoline	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	38	amod	_	_
38	toodangu	toodang	NOUN	S	Case=Gen|Number=Sing	42	nmod	_	_
39	keskmine	keskmine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	42	amod	_	_
40	EL-i	EL	PROPN	Y	Abbr=Yes|Case=Add|Number=Sing	41	nmod	_	_
41	sisseostmise	sisse_ostmine	NOUN	S	Case=Gen|Number=Sing	42	nmod	_	_
42	hind	hind	NOUN	S	Case=Nom|Number=Sing	35	advcl	_	SpaceAfter=No
43	.	.	PUNCT	Z	_	31	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat:foreign	color:blue
1	Lennujaama	lennu_jaam	NOUN	S	Case=Gen|Number=Sing	2	nmod	_	_
2	meeneletist	meene_lett	NOUN	S	Case=Ela|Number=Sing	3	obl	_	_
3	ostsin	ostma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	brošüüri	brošüür	NOUN	S	Case=Gen|Number=Sing	3	obj	_	_
5	"	"	PUNCT	Z	_	8	punct	_	SpaceAfter=No
6	Xinjiang	Xinjiang	PROPN	S	Case=Nom|Number=Sing	4	appos	_	_
7	in	in	X	Y	Abbr=Yes	6	flat:foreign	_	_
8	brief	brief	X	S	Case=Nom|Number=Sing	6	flat:foreign	_	SpaceAfter=No
9	"	"	PUNCT	Z	_	8	punct	_	_
10	(	(	PUNCT	Z	_	13	punct	_	SpaceAfter=No
11	"	"	PUNCT	Z	_	13	punct	_	SpaceAfter=No
12	Lühidalt	lühidalt	ADV	D	_	13	advmod	_	_
13	Xinjiangist	Xinjiang	PROPN	S	Case=Ela|Number=Sing	4	appos	_	SpaceAfter=No
14	"	"	PUNCT	Z	_	13	punct	_	SpaceAfter=No
15	)	)	PUNCT	Z	_	13	punct	_	_
16	ja	ja	CCONJ	J	_	17	cc	_	_
17	lugesin	lugema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
18	,	,	PUNCT	Z	_	25	punct	_	_
19	et	et	SCONJ	J	_	25	mark	_	_
20	Ürümchi	Ürümchi	PROPN	S	Case=Gen|Number=Sing	21	nmod	_	_
21	lennuväli	lennu_väli	NOUN	S	Case=Nom|Number=Sing	25	nsubj:cop	_	_
22	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	cop	_	_
23	suuruselt	suuruse=lt	ADV	D	_	25	advmod	_	_
24	Hiinas	Hiina	PROPN	S	Case=Ine|Number=Sing	25	obl	_	_
25	viies	viies	ADJ	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Ord	17	ccomp	_	_
26	ning	ning	CCONJ	J	_	29	cc	_	_
27	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	29	nsubj:cop	_	_
28	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	29	cop	_	_
29	reservlennuväljaks	reserv_lennu_väli	NOUN	S	Case=Tra|Number=Sing	25	conj	_	_
30	Euroopast	Euroopa	PROPN	S	Case=Ela|Number=Sing	32	obl	_	_
31	Pekingisse	Peking	PROPN	S	Case=Ill|Number=Sing	32	obl	_	_
32	lendavatele	lendav	ADJ	A	Case=All|Degree=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	33	acl	_	_
33	hiidlennukitele	hiid_lennuk	NOUN	S	Case=All|Number=Plur	29	nmod	_	SpaceAfter=No
34	.	.	PUNCT	Z	_	3	punct	_	_

~~~


