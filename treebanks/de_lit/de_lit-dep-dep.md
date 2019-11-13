---
layout: base
title:  'Statistics of dep in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `dep`

This relation is universal.

33 nodes (0%) are attached to their parents as `dep`.

28 instances of `dep` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.54545454545455.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (17; 52% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (6; 18% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (3; 9% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (2; 6% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="de_lit-pos-X.html">X</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dep	color:blue
1	6)	6)	X	XY	_	7	dep	_	_
2	Du	du	PRON	PPER	_	7	nsubj	_	_
3	sollst	sollen	AUX	VMFIN	_	7	aux	_	_
4	nicht	nicht	PART	PTKNEG	_	7	advmod	_	_
5	absichtlich	absichtlich	ADV	ADV	_	7	advmod	_	_
6	lebendig	lebendig	ADJ	ADJD	_	7	xcomp	_	_
7	machen	machen	VERB	VVINF	_	0	root	_	SpaceAfter=No
8	.	--	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	10)	10)	X	XY	_	2	dep	_	_
2	Laß	Lassen	NOUN	NN	_	0	root	_	_
3	dich	dich	PRON	PRF	_	2	obj	_	_
4	gelüsten	gelü	VERB	VVFIN	_	2	xcomp	_	_
5	nach	nach	ADP	APPR	_	7	case	_	_
6	der	der	DET	ART	_	7	det	_	_
7	Männer	Mann	ADJ	ADJA	_	4	amod	_	_
8	Bildung	Bildung	NOUN	NN	_	4	obj	_	SpaceAfter=No
9	,	--	PUNCT	$,	_	10	punct	_	_
10	Kunst	Kunst	NOUN	NN	_	8	conj	_	SpaceAfter=No
11	,	--	PUNCT	$,	_	12	punct	_	_
12	Weisheit	Weisheit	NOUN	NN	_	8	conj	_	_
13	und	und	CCONJ	KON	_	14	cc	_	_
14	Ehre	Ehre	NOUN	NN	_	8	conj	_	SpaceAfter=No
15	.	--	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dep	color:blue
1	Nach	nach	ADP	APPR	_	3	case	_	_
2	der	der	DET	ART	_	3	det	_	_
3	Denkart	Denkart	PROPN	NE	_	8	nmod	_	_
4	die	der	DET	ART	_	6	nsubj	_	_
5	darin	darin	ADV	PROAV	_	6	dep	_	_
6	herrscht	herrschen	VERB	VVFIN	_	3	acl	_	SpaceAfter=No
7	,	--	PUNCT	$,	_	8	punct	_	_
8	ist	sein	AUX	VAFIN	_	0	root	_	_
9	die	der	DET	ART	_	11	det	_	_
10	höchste	hoch	ADJ	ADJA	_	11	amod	_	_
11	Bestimmung	Bestimmung	NOUN	NN	_	8	nsubj	_	_
12	des	der	DET	ART	_	13	det	_	_
13	Menschen	Mensch	NOUN	NN	_	11	nmod	_	SpaceAfter=No
14	,	--	PUNCT	$,	_	20	punct	_	_
15	mit	mit	ADP	APPR	_	16	case	_	_
16	Erlaubnis	Erlaubnis	NOUN	NN	_	20	obl	_	_
17	des	der	DET	ART	_	18	det	_	_
18	Imperators	Imperator	NOUN	NN	_	16	nmod	_	_
19	zu	zu	PART	PTKZU	_	20	mark	_	_
20	triumphieren	triumphieren	VERB	VVINF	_	8	ccomp	_	SpaceAfter=No
21	.	--	PUNCT	$.	_	8	punct	_	_

~~~


