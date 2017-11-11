---
layout: base
title:  'Statistics of compound in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `compound`

This relation is universal.

1197 nodes (1%) are attached to their parents as `compound`.

910 instances of `compound` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7702589807853.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (1181; 99% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound	color:blue
1	Strane	stran	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	2	amod	_	_
2	investicije	investicija	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	_
3	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	5	compound	_	_
4	takođe	takođe	ADV	_	Degree=Pos	5	advmod	_	_
5	smanjuju	smanjivati	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound	color:blue
1	Vlada	vlada	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
2	Srbije	Srbija	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	aux	_	_
4	u	u	ADP	_	Case=Acc	5	case	_	_
5	subotu	subota	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
6	objavila	objaviti	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
7	saopštenje	saopštenje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
8	zalažući	zalagati	ADV	_	VerbForm=Part	6	xcomp	_	_
9	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	8	compound	_	_
10	za	za	ADP	_	Case=Acc	13	case	_	_
11	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
12	nadziranu	nadziran	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	autonomiju	autonomija	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
14	"	"	PUNCT	_	_	13	punct	_	_
15	kao	kao	SCONJ	_	_	17	case	_	_
16	kompromisno	kompromisan	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	17	amod	_	_
17	rešenje	rešenje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	13	obl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 compound	color:blue
1	Iako	iako	SCONJ	_	_	6	mark	_	_
2	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	6	compound	_	_
3	mnogi	mnogi	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	4	det	_	_
4	građani	građanin	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
5	Unije	unija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
6	protive	protiviti	VERB	_	Number=Plur|Person=3|Tense=Pres	18	advcl	_	_
7	eventualnom	eventualan	ADJ	_	Case=Dat|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	ulasku	ulazak	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	_
9	u	u	ADP	_	Case=Loc	10	case	_	_
10	EU	EU	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	nmod	_	_
11	te	te	CCONJ	_	_	14	det	_	_
12	većinski	većinski	ADV	_	Degree=Pos	13	advmod	_	_
13	muslimanske	muslimanski	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
14	zemlje	zemlja	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	6	punct	_	_
16	ti	taj	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	17	det	_	_
17	stavovi	stav	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	18	nsubj	_	_
18	mogli	moći	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
19	bi	biti	AUX	_	Number=Plur|Person=3|Tense=Past	18	aux	_	_
20	da	da	SCONJ	_	_	22	mark	_	_
21	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	22	compound	_	_
22	promene	promena	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	18	xcomp	_	_
23	ako	ako	SCONJ	_	_	25	mark	_	_
24	Turska	Turska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	25	nsubj	_	_
25	sprovede	sprovesti	VERB	_	Number=Sing|Person=3|Tense=Pres	18	advcl	_	_
26	promene	promena	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	25	obj	_	SpaceAfter=No
27	.	.	PUNCT	_	_	18	punct	_	_

~~~


