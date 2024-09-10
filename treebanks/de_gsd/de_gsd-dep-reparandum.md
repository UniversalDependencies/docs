---
layout: base
title:  'Statistics of reparandum in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `reparandum`

This relation is universal.

3 nodes (0%) are attached to their parents as `reparandum`.

3 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 3 pairs of parts of speech are connected with `reparandum`: <tt><a href="de_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 33% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 reparandum	color:blue
1	Unter	unter	ADP	APPR	_	3	case	_	_
2	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	3	det	_	_
3	Römern	Römer	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur	13	nmod	_	_
4	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	14	aux:pass	_	_
5	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Ort	Ort	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	14	nsubj:pass	_	_
7	unter	unter	ADP	APPR	_	9	case	_	_
8	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Namen	Name	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	13	nmod	_	_
10	Tacapae	Tacapae	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	9	appos	_	NamedEntity=Yes
11	zu	zu	ADP	APPR	_	13	case	_	_
12	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Colonia	Colonia	PROPN	NE	Case=Dat|Gender=Fem|Number=Sing	14	xcomp	_	NamedEntity=Yes
14	ernannt	ernennen	VERB	VVPP	VerbForm=Part	0	root	_	_
15	und	und	CCONJ	KON	_	16	reparandum	_	_
16	und	und	CCONJ	KON	_	17	cc	_	_
17	gehörte	gehören	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	conj	_	_
18	zu	zu	ADP	APPR	_	19	case	_	_
19	Tripolitanien	Tripolitanien	PROPN	NN	Case=Dat|Gender=Fem|Number=Plur	17	obl	_	NamedEntity=Yes|SpaceAfter=No
20	.	.	PUNCT	$.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 10 reparandum	color:blue
1	Vor	vor	ADP	APPR	_	2	case	_	_
2	allem	alle	DET	PIS	Case=Dat|Gender=Neut|Number=Sing|PronType=Tot	32	obl	_	_
3	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Zentralrat	Zentralrat	PROPN	NN	Case=Nom|Gender=Masc|Number=Sing	32	nsubj	_	NamedEntity=Yes
5	Deutscher	deutsch	ADJ	ADJA	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
6	Sinti	Sinto	PROPN	NN	Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	NamedEntity=Yes
7	und	und	CCONJ	KON	_	8	cc	_	_
8	Roma	Roma	PROPN	NN	Case=Gen|Gender=Masc|Number=Plur	6	conj	_	NamedEntity=Yes
9	habe	haben	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	aux	_	_
10	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	29	reparandum	_	SpaceAfter=No
11	,	,	PUNCT	$,	_	13	punct	_	_
12	so	so	ADV	ADV	_	13	advmod	_	_
13	Yaron	Yaron	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	32	parataxis	_	NamedEntity=Yes
14	Matras	Matras	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	13	flat	_	NamedEntity=Yes|SpaceAfter=No
15	,	,	PUNCT	$,	_	18	punct	_	_
16	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
17	damalige	damalig	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	_
18	Hauptverantwortliche	Hauptverantwortliche	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	13	appos	_	_
19	für	für	ADP	APPR	_	21	case	_	_
20	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	Pressearbeit	Pressearbeit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	18	nmod	_	_
22	sowie	sowie	CCONJ	KON	_	24	cc	_	_
23	für	für	ADP	APPR	_	24	case	_	_
24	Beziehungen	Beziehung	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	21	conj	_	_
25	zu	zu	ADP	APPR	_	27	case	_	_
26	internationalen	international	ADJ	ADJA	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur	27	amod	_	_
27	Organisationen	Organisation	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur	24	nmod	_	SpaceAfter=No
28	,	,	PUNCT	$,	_	13	punct	_	_
29	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	32	obj	_	_
30	dem	der	PRON	PDS	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem,Rel	32	obl:arg	_	_
31	entschieden	entschieden	ADJ	ADJD	Degree=Pos	32	advmod	_	_
32	entgegengestellt	entgegenstellen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
33	.	.	PUNCT	$.	_	32	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 reparandum	color:blue
1	Bereits	bereits	ADV	ADV	_	3	advmod	_	_
2	ab	ab	ADP	APPR	_	3	case	_	_
3	1802	1802	NUM	CARD	NumType=Card	5	obl:tmod	_	_
4	wurden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	5	reparandum	_	_
5	gab	geben	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
7	württembergische	württembergisch	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	8	amod	_	_
8	Militärangehörigen	Militärangehörige	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	_
9	in	in	ADP	APPR	_	10	case	_	_
10	Rottweil	Rottweil	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	5	obl	_	NamedEntity=Yes|SpaceAfter=No
11	,	,	PUNCT	$,	_	16	punct	_	_
12	die	der	PRON	PRELS	Case=Nom|Number=Plur|PronType=Dem,Rel	16	nsubj:pass	_	_
13	von	von	ADP	APPR	_	14	case	_	_
14	Flözlingen	Flözlingen	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	16	obl	_	NamedEntity=Yes
15	aus	aus	ADP	APZR	_	14	case	_	_
16	versorgt	versorgen	VERB	VVPP	VerbForm=Part	8	acl:relcl	_	_
17	wurden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	16	aux:pass	_	SpaceAfter=No
18	.	.	PUNCT	$.	_	5	punct	_	_

~~~


