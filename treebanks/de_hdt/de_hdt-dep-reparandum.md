---
layout: base
title:  'Statistics of reparandum in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `reparandum`

This relation is universal.

42 nodes (0%) are attached to their parents as `reparandum`.

40 instances of `reparandum` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07142857142857.

The following 6 pairs of parts of speech are connected with `reparandum`: <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (16; 38% instances), <tt><a href="de_hdt-pos-DET.html">DET</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (15; 36% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (4; 10% instances), <tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (3; 7% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (3; 7% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 reparandum	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	sei	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	einfach	einfach	ADJ	ADJD	Degree=Pos|Variant=Short	5	advmod	_	_
4	eine	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	5	det	_	_
5	Idee	Idee	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
6	,	,	PUNCT	$,	PunctType=Comm	13	punct	_	_
7	die	der	PRON	PRELS	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem,Rel	13	nsubj:pass	_	_
8	zu	zu	ADP	APPR	AdpType=Prep|Case=Dat	10	reparandum	_	_
9	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
10	zu	zu	ADP	APPR	AdpType=Prep|Case=Dat	12	case	_	_
11	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Diskussion	Diskussion	NOUN	NN	Gender=Fem|Number=Sing	13	obl	_	_
13	gestellt	stellen	VERB	VVPP	Aspect=Perf|VerbForm=Part	5	acl	_	_
14	worden	werden	AUX	VAPP	Aspect=Perf|VerbForm=Part	13	aux:pass	_	_
15	sei	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
16	.	.	PUNCT	$.	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 reparandum	color:blue
1	Auch	Auch	ADV	ADV	_	6	advmod	_	_
2	das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
3	das	der	DET	ART	Typo=Yes	2	reparandum	_	_
4	bereits	bereits	ADV	ADV	_	5	advmod	_	_
5	existierende	existieren	ADJ	ADJA	Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	_
6	Handwerkerportal	Portal	NOUN	NN	Gender=Neut|Number=Sing	9	nsubj:pass	_	_
7	handwerk.de	handwerk.de	PROPN	NE	Number=Sing	6	flat:name	_	_
8	soll	sollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	9	aux	_	_
9	ausgebaut	ausbauen	VERB	VVPP	Aspect=Perf|VerbForm=Part	0	root	_	_
10	werden	werden	AUX	VAINF	VerbForm=Inf	9	aux:pass	_	_
11	.	.	PUNCT	$.	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 reparandum	color:blue
1	Dadurch	dadurch	ADV	PROAV	PronType=Dem	9	advmod	_	_
2	können	können	AUX	VMFIN	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|VerbType=Mod	9	aux	_	_
3	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	4	reparandum	_	_
4	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	9	expl:pv	_	_
5	die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	7	det	_	_
6	vorhandenen	vorhanden	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
7	Fabs	Fab	NOUN	NN	Gender=Fem|Number=Plur	9	nsubj	_	_
8	besser	besser	ADJ	ADJD	Degree=Cmp|Variant=Short	9	advmod	_	_
9	amortisieren	amortisieren	VERB	VVINF	VerbForm=Inf	0	root	_	_
10	.	.	PUNCT	$.	PunctType=Peri	9	punct	_	_

~~~


