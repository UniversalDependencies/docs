---
layout: base
title:  'Statistics of dep in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `dep`

This relation is universal.

28 nodes (0%) are attached to their parents as `dep`.

23 instances of `dep` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.35714285714286.

The following 6 pairs of parts of speech are connected with `dep`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (18; 64% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (5; 18% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (2; 7% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dep	color:blue
1	6)	6)	X	XY	_	7	dep	_	_
2	Du	du	PRON	PPER	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
3	sollst	sollen	AUX	VMFIN	_	7	aux	_	_
4	nicht	nicht	PART	PTKNEG	_	7	advmod	_	_
5	absichtlich	absichtlich	ADV	ADV	_	7	advmod	_	_
6	lebendig	lebendig	ADJ	ADJD	_	7	xcomp	_	_
7	machen	machen	VERB	VVINF	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	10)	10)	X	XY	_	2	dep	_	_
2	Laß	Lassen	NOUN	NN	_	0	root	_	_
3	dich	du	PRON	PRF	Case=Acc|Number=Sing|Person=2|PronType=Prs	2	nmod	_	_
4	gelüsten	gelü	VERB	VVFIN	_	2	xcomp	_	_
5	nach	nach	ADP	APPR	_	7	case	_	_
6	der	der	DET	ART	Definite=Def|PronType=Art	7	det	_	_
7	Männer	Mann	ADJ	ADJA	Case=Dat	4	amod	_	_
8	Bildung	Bildung	NOUN	NN	Case=Acc	4	obj	_	SpaceAfter=No
9	,	,	PUNCT	$,	_	10	punct	_	_
10	Kunst	Kunst	NOUN	NN	_	8	conj	_	SpaceAfter=No
11	,	,	PUNCT	$,	_	12	punct	_	_
12	Weisheit	Weisheit	NOUN	NN	_	8	conj	_	_
13	und	und	CCONJ	KON	_	14	cc	_	_
14	Ehre	Ehre	NOUN	NN	_	8	conj	_	SpaceAfter=No
15	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 dep	color:blue
1	Manche	mancher	DET	PIS	Case=Nom|PronType=Ind	2	nsubj	_	_
2	fangen	fangen	VERB	VVFIN	_	0	root	_	SpaceAfter=No
3	's	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
4	so	so	ADV	ADV	_	2	advmod	_	_
5	an	an	ADP	PTKVZ	_	2	compound:prt	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	10	punct	_	_
7	als	als	CCONJ	KOKOM	_	10	mark	_	_
8	ob	ob	SCONJ	KOUS	_	10	dep	_	_
9	sie	sie	PRON	PPER	Case=Nom|Person=3|PronType=Prs	10	nsubj	_	_
10	hofften	hoffen	VERB	VVFIN	_	2	conj	_	_
11	hier	hier	ADV	ADV	_	15	advmod	_	_
12	etwas	etwas	PRON	PIS	Gender=Neut|Number=Sing|PronType=Ind	15	obj	_	_
13	Neues	neue	NOUN	NN	_	12	nmod	_	_
14	zu	zu	PART	PTKZU	_	15	mark	_	_
15	erfahren	erfahren	VERB	VVINF	_	10	xcomp	_	SpaceAfter=No
16	;	;	PUNCT	$.	_	2	punct	_	_

~~~


