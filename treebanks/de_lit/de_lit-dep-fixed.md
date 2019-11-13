---
layout: base
title:  'Statistics of fixed in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `fixed`

This relation is universal.

65 nodes (0%) are attached to their parents as `fixed`.

65 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13846153846154.

The following 16 pairs of parts of speech are connected with `fixed`: <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (21; 32% instances), <tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (10; 15% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (6; 9% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (5; 8% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (3; 5% instances), <tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (3; 5% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Sie	sie	PRON	PPER	_	2	nsubj	_	_
2	pflegen	pflegen	VERB	VVFIN	_	0	root	_	_
3	sich	sich	PRON	PRF	_	2	obj	_	_
4	selbst	selbst	ADV	ADV	_	3	fixed	_	_
5	die	der	DET	ART	_	6	det	_	_
6	Kritik	Kritik	NOUN	NN	_	8	obj	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	nennen	nennen	VERB	VVINF	_	2	xcomp	_	SpaceAfter=No
9	.	--	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	als	als	CCONJ	KOKOM	_	4	case	_	_
2	ob	ob	SCONJ	KOUS	_	1	fixed	_	_
3	es	es	PRON	PPER	_	4	nsubj	_	_
4	anders	anders	ADV	ADV	_	0	root	_	_
5	sein	sein	AUX	VAINF	_	4	cop	_	_
6	dürfte	dürfen	AUX	VMFIN	_	4	aux	_	SpaceAfter=No
7	.	--	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 fixed	color:blue
1	Es	es	PRON	PPER	_	2	nsubj	_	_
2	hat	haben	AUX	VAFIN	_	0	root	_	_
3	etwas	etwas	DET	PIAT	_	2	obj	_	_
4	Kleinliches	kleinlich	NOUN	NN	_	3	xcomp	_	SpaceAfter=No
5	,	--	PUNCT	$,	_	9	punct	_	_
6	gegen	gegen	ADP	APPR	_	7	case	_	_
7	Individuen	Individuum	NOUN	NN	_	9	nmod	_	_
8	zu	zu	PART	PTKZU	_	9	mark	_	_
9	polemisieren	polemisieren	VERB	VVINF	_	2	xcomp	_	SpaceAfter=No
10	,	--	PUNCT	$,	_	9	punct	_	_
11	wie	wie	ADV	PWAV	_	13	case	_	_
12	der	der	DET	ART	_	13	det	_	_
13	Handel	Handel	NOUN	NN	_	2	obl	_	_
14	en	--	ADP	APPR	_	13	nmod	_	_
15	detail	detail	NOUN	NN	_	14	fixed	_	SpaceAfter=No
16	.	--	PUNCT	$.	_	2	punct	_	_

~~~


