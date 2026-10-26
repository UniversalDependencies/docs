---
layout: base
title:  'Statistics of fixed in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `fixed`

This relation is universal.

19 nodes (0%) are attached to their parents as `fixed`.

19 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15789473684211.

The following 10 pairs of parts of speech are connected with `fixed`: <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (6; 32% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (3; 16% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (2; 11% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (2; 11% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 fixed	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	hat	haben	AUX	VAFIN	_	0	root	_	_
3	etwas	etwas	PRON	PIAT	Gender=Neut|Number=Sing|PronType=Ind	2	obj	_	_
4	Kleinliches	kleinlich	NOUN	NN	_	3	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	9	punct	_	_
6	gegen	gegen	ADP	APPR	_	7	case	_	_
7	Individuen	Individuum	NOUN	NN	Case=Acc	9	nmod	_	_
8	zu	zu	PART	PTKZU	_	9	mark	_	_
9	polemisieren	polemisieren	VERB	VVINF	_	2	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	$,	_	9	punct	_	_
11	wie	wie	ADV	PWAV	_	13	case	_	_
12	der	der	DET	ART	Definite=Def|PronType=Art	13	det	_	_
13	Handel	Handel	NOUN	NN	_	2	obl	_	_
14	en	--	ADP	APPR	_	13	nmod	_	_
15	detail	detail	NOUN	NN	_	14	fixed	_	SpaceAfter=No
16	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	In	in	ADP	APPR	ExtPos=ADV	8	advmod	_	_
2	so	so	ADV	ADV	_	1	fixed	_	_
3	fern	fern	ADJ	ADJD	_	1	fixed	_	_
4	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	8	nsubj	_	_
5	an	an	ADP	APPR	_	7	case	_	_
6	ein	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	7	det	_	_
7	Gesetz	Gesetz	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	_
8	denkt	denken	VERB	VVFIN	_	0	root	_	SpaceAfter=No
9	,	,	PUNCT	$,	_	14	punct	_	_
10	ist	sein	AUX	VAFIN	_	14	cop	_	_
11	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
12	nur	nur	ADV	ADV	_	14	advmod	_	_
13	ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	14	det	_	_
14	Satz	Satz	NOUN	NN	Case=Nom	8	parataxis	_	SpaceAfter=No
15	,	,	PUNCT	$,	_	18	punct	_	_
16	d.h.	d.h.	X	XY	_	18	dep	_	_
17	ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	18	det	_	_
18	Gedanke	Gedanke	NOUN	NN	_	14	conj	_	_
19	mit	mit	ADP	APPR	_	21	case	_	_
20	einem	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	21	det	_	_
21	Vermögen	Vermögen	NOUN	NN	Case=Dat	22	obl	_	_
22	verbunden	verbinden	VERB	VVPP	_	18	acl	_	SpaceAfter=No
23	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	Die	der	DET	ART	Definite=Def|PronType=Art	2	det	_	_
2	Frauen	Frau	NOUN	NN	Case=Nom	6	nsubj	_	_
3	müssen	müssen	AUX	VMFIN	_	6	aux	_	_
4	wohl	wohl	ADV	ADV	_	6	advmod	_	_
5	prüde	prüde	ADJ	ADJD	_	6	xcomp	_	_
6	bleiben	bleiben	VERB	VVINF	_	0	root	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	11	punct	_	_
8	so	so	ADV	ADV	_	11	advmod	_	_
9	lange	lang	ADV	ADV	_	8	fixed	_	_
10	Männer	Mann	NOUN	NN	Case=Nom	11	nsubj	_	_
11	sentimental	sentimental	ADJ	ADJD	_	6	parataxis	_	SpaceAfter=No
12	,	,	PUNCT	$,	_	13	punct	_	_
13	dumm	dumm	ADJ	ADJD	_	11	conj	_	_
14	und	und	CCONJ	KON	_	15	cc	_	_
15	schlecht	schlecht	ADJ	ADJD	_	11	conj	_	_
16	genug	genug	ADV	ADV	PronType=Ind	11	advmod	_	_
17	sind	sein	AUX	VAFIN	_	11	cop	_	SpaceAfter=No
18	,	,	PUNCT	$,	_	28	punct	_	_
19	ewige	ewig	ADJ	ADJA	_	20	advmod	_	_
20	Unschuld	Unschuld	NOUN	NN	Case=Acc	28	obj	_	_
21	und	und	CCONJ	KON	_	22	cc	_	_
22	Mangel	Mangel	NOUN	NN	_	20	conj	_	_
23	an	an	ADP	APPR	_	24	case	_	_
24	Bildung	Bildung	NOUN	NN	_	22	nmod	_	_
25	von	von	ADP	APPR	_	26	case	_	_
26	ihnen	sie	PRON	PPER	Case=Dat|Number=Plur|Person=3|PronType=Prs	28	obl	_	_
27	zu	zu	PART	PTKZU	_	28	mark	_	_
28	fodern	fodern	VERB	VVINF	_	11	xcomp	_	SpaceAfter=No
29	.	.	PUNCT	$.	_	6	punct	_	_

~~~


