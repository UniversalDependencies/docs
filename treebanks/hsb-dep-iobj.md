---
layout: base
title:  'Statistics of iobj in UD_Upper_Sorbian'
udver: '2'
---

## Treebank Statistics: UD_Upper_Sorbian: Relations: `iobj`

This relation is universal.

13 nodes (0%) are attached to their parents as `iobj`.

7 instances of `iobj` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.30769230769231.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-NOUN.html">NOUN</a></tt> (7; 54% instances), <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-PRON.html">PRON</a></tt> (3; 23% instances), <tt><a href="hsb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hsb-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 iobj	color:blue
1	Na	na	ADP	_	_	2	case	_	_
2	spočatku	spočatk	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	_	_
3	słužeše	słužić	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	pismo	pismo	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
5	jenož	jenož	PART	_	_	6	advmod:emph	_	_
6	knihiwjedstwu	knihiwjedstwo	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	3	iobj	_	SpaceAfter=No
7	-	-	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Pomhaj	pomhać	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	nam	ja	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	1	iobj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	9	punct	_	_
4	zo	zo	SCONJ	_	_	9	mark	_	_
5	by	być	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	9	aux	_	_
6	naša	naš	DET	_	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
7	encyklopedija	encyklopedija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
8	dale	daloko	ADV	_	Degree=Cmp	9	advmod	_	_
9	rostła	rosć	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	advcl	_	SpaceAfter=No
10	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 iobj	color:blue
1	Woni	wón	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	su	być	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	wužiwarjo	wužiwar	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	kotrymž	kotryž	DET	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur|PronType=Rel	7	iobj	_	_
6	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	7	expl:pass	_	_
7	dowěrja	dowěrjeć	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	xcomp	_	SpaceAfter=No
8	,	,	PUNCT	_	_	32	punct	_	_
9	zo	zo	SCONJ	_	_	32	mark	_	_
10	budu	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	32	aux	_	_
11	swoje	swój	DET	_	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	13	det	_	_
12	rozšěrjene	rozšěrjeny	ADJ	_	Case=Acc|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	13	amod	_	_
13	funkcije	funkcija	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	32	obj	_	_
14	(	(	PUNCT	_	_	16	punct	_	SpaceAfter=No
15	strony	strona	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	16	obj	_	_
16	wušmórnyć	wušmórnyć	VERB	_	VerbForm=Inf	13	appos	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	strony	strona	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	19	obj	_	_
19	škitać	škitać	VERB	_	VerbForm=Inf	16	conj	_	_
20	a	a	CCONJ	_	_	24	cc	_	_
21	jich	jich	DET	_	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	22	det	_	_
22	škit	škit	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	24	obj	_	_
23	zaso	zaso	ADV	_	_	24	advmod	_	_
24	zběhnyć	zběhnyć	VERB	_	VerbForm=Inf	16	conj	_	SpaceAfter=No
25	,	,	PUNCT	_	_	27	punct	_	_
26	wužiwarjow	wužiwar	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	27	obj	_	_
27	blokować	blokować	VERB	_	VerbForm=Inf	16	conj	_	SpaceAfter=No
28	)	)	PUNCT	_	_	16	punct	_	_
29	na	na	ADP	_	_	30	case	_	_
30	dobro	dobro	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	32	obl	_	_
31	projekta	projekt	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	30	nmod	_	_
32	wužiwać	wužiwać	VERB	_	VerbForm=Inf	7	ccomp	_	SpaceAfter=No
33	.	.	PUNCT	_	_	3	punct	_	_

~~~


