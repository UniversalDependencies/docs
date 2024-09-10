---
layout: base
title:  'Statistics of ccomp in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `ccomp`

This relation is universal.

162 nodes (0%) are attached to their parents as `ccomp`.

152 instances of `ccomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.17283950617284.

The following 21 pairs of parts of speech are connected with `ccomp`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (73; 45% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (19; 12% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (18; 11% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (11; 7% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (9; 6% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (9; 6% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 ccomp	color:blue
1	Die	der	DET	ART	Definite=Def|PronType=Art	2	det	_	_
2	Türken	Türke	NOUN	NN	Case=Nom	12	nsubj	_	_
3	sollte	sollen	AUX	VMFIN	_	5	aux	_	_
4	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	5	nsubj	_	_
5	denken	denken	VERB	VVINF	_	0	root	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	5	punct	_	_
7	hätten	haben	AUX	VAFIN	_	12	aux	_	_
8	es	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
9	ihm	er	PRON	PPER	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl:arg	_	_
10	eben	eben	ADV	ADV	_	12	advmod	_	_
11	auch	auch	ADV	ADV	_	12	advmod	_	_
12	getan	tun	VERB	VVPP	_	5	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	2	nsubj	_	_
2	sieht	sehen	VERB	VVFIN	_	0	root	_	_
3	hier	hier	ADV	ADV	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	2	punct	_	_
5	wie	wie	ADV	PWAV	_	6	advmod	_	_
6	relativ	relativ	ADJ	ADJD	_	2	ccomp	_	_
7	das	der	DET	ART	Definite=Def|PronType=Art	8	det	_	_
8	Herausgehn	Herausgehn	NOUN	NN	Case=Nom	6	nsubj	_	_
9	und	und	CCONJ	KON	_	10	cc	_	_
10	Hineingehn	Hineingehn	NOUN	NN	_	8	conj	_	_
11	ist	sein	AUX	VAFIN	_	6	cop	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	zeigt	zeigen	VERB	VVFIN	_	0	root	_	_
3	sich	sich	PRON	PRF	Case=Dat|Person=3|PronType=Prs|Reflex=Yes	2	obl:arg	_	_
4	auch	auch	ADV	ADV	_	2	advmod	_	_
5	hierin	hierin	ADV	ADV	_	2	advmod	_	_
6	daß	dass	SCONJ	KOUS	_	8	mark	_	_
7	wir	wir	PRON	PPER	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
8	Hyperboreer	Hyperboreer	NOUN	NN	Case=Nom	2	ccomp	_	_
9	sind	sein	AUX	VAFIN	_	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	2	punct	_	_

~~~


