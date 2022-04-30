---
layout: base
title:  'Statistics of reparandum in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `reparandum`

This relation is universal.

40 nodes (0%) are attached to their parents as `reparandum`.

40 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.075.

The following 6 pairs of parts of speech are connected with `reparandum`: <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (16; 40% instances), <tt><a href="de_hdt-pos-DET.html">DET</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (12; 30% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (5; 13% instances), <tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (3; 8% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (3; 8% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 reparandum	color:blue
1	Es	Es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	sei	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	einfach	einfach	ADJ	ADJD	Degree=Pos|Variant=Short	5	advmod	_	_
4	eine	eine	DET	ART	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Idee	Idee	NOUN	NN	Gender=Fem|Number=Sing|Person=3	0	root	_	_
6	,	,	PUNCT	$,	PunctType=Comm	13	punct	_	_
7	die	die	PRON	PRELS	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Rel	13	nsubj:pass	_	_
8	zu	zu	ADP	APPR	AdpType=Prep|Case=Dat	10	reparandum	_	_
9	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
10	zu	zu	ADP	APPR	AdpType=Prep|Case=Dat	12	case	_	_
11	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Diskussion	Diskussion	NOUN	NN	Gender=Fem|Number=Sing|Person=3	13	obl	_	_
13	gestellt	stellen	VERB	VVPP	Aspect=Perf|VerbForm=Part	5	acl	_	_
14	worden	werden	AUX	VAPP	Aspect=Perf|VerbForm=Part	13	aux:pass	_	_
15	sei	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
16	.	.	PUNCT	$.	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 reparandum	color:blue
1	Darüber	Darüber	ADV	PROAV	_	12	advmod	_	_
2	hinaus	hinaus	ADP	APZR	AdpType=Circ	1	case	_	_
3	soll	sollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	12	aux	_	_
4	das	das	DET	ART	Case=Nom|Gender=Neut|Number=Sing|PronType=Art	5	reparandum	_	_
5	das	das	DET	ART	Case=Nom|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
6	neue	neu	ADJ	ADJA	Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
7	MediaStudio	MediaStudio	PROPN	NE	Person=3	12	nsubj	_	_
8	auch	auch	ADV	ADV	_	10	advmod	_	_
9	mit	mit	ADP	APPR	AdpType=Prep|Case=Dat	10	case	_	_
10	USB-Videogeräten	Gerät	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	12	obl	_	_
11	Daten	Datum	NOUN	NN	Gender=Neut|Number=Plur|Person=3	12	obj	_	_
12	austauschen	austauschen	VERB	VVINF	VerbForm=Inf	0	root	_	_
13	können	können	AUX	VMINF	VerbForm=Inf|VerbType=Mod	12	aux	_	_
14	.	.	PUNCT	$.	PunctType=Peri	12	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 reparandum	color:blue
1	Dadurch	Dadurch	ADV	PROAV	_	9	advmod	_	_
2	können	können	AUX	VMFIN	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|VerbType=Mod	9	aux	_	_
3	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	4	reparandum	_	_
4	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	9	expl:pv	_	_
5	die	die	DET	ART	Case=Nom|Number=Plur|PronType=Art	7	det	_	_
6	vorhandenen	vorhanden	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
7	Fabs	Fab	NOUN	NN	Gender=Fem|Number=Plur|Person=3	9	nsubj	_	_
8	besser	besser	ADJ	ADJD	Degree=Cmp|Variant=Short	9	advmod	_	_
9	amortisieren	amortisieren	VERB	VVINF	VerbForm=Inf	0	root	_	_
10	.	.	PUNCT	$.	PunctType=Peri	9	punct	_	_

~~~


