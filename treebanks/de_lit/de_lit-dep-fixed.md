---
layout: base
title:  'Statistics of fixed in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `fixed`

This relation is universal.

44 nodes (0%) are attached to their parents as `fixed`.

44 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20454545454545.

The following 15 pairs of parts of speech are connected with `fixed`: <tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (10; 23% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (6; 14% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (5; 11% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (3; 7% instances), <tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (3; 7% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	als	als	CCONJ	KOKOM	_	4	case	_	_
2	ob	ob	SCONJ	KOUS	_	1	fixed	_	_
3	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	anders	anders	ADV	ADV	_	0	root	_	_
5	sein	sein	AUX	VAINF	_	4	cop	_	_
6	dürfte	dürfen	AUX	VMFIN	_	4	aux	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	4	punct	_	_

~~~


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Wie	wie	ADV	PWAV	_	3	advmod	_	_
2	oft	oft	ADV	ADV	_	1	fixed	_	_
3	fühlt	fühlen	VERB	VVFIN	_	0	root	_	_
4	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	3	nsubj	_	_
5	die	der	DET	ART	Definite=Def|PronType=Art	6	det	_	_
6	Armuth	Armuth	NOUN	NN	Case=Acc	3	obj	_	_
7	an	an	ADP	APPR	_	8	case	_	_
8	Worten	Wort	NOUN	NN	_	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	$,	_	3	punct	_	_
10	um	um	ADP	APPR	_	17	mark	_	_
11	mehre	mehr	DET	PIAT	Degree=Cmp|PronType=Ind	12	det	_	_
12	Ideen	Idee	NOUN	NN	Case=Acc	17	obj	_	_
13	mit	mit	ADP	APPR	_	15	case	_	_
14	Einem	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	15	det	_	_
15	Schlage	Schlage	NOUN	NN	Case=Dat	17	obl	_	_
16	zu	zu	PART	PTKZU	_	17	mark	_	_
17	treffen	treffen	VERB	VVINF	_	3	advcl	_	SpaceAfter=No
18	.	.	PUNCT	$.	_	3	punct	_	_

~~~


