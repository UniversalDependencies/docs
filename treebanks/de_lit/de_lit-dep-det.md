---
layout: base
title:  'Statistics of det in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="de_lit-dep-det-poss.html">det:poss</a></tt>.

4967 nodes (12%) are attached to their parents as `det`.

4961 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41916649889269.

The following 14 pairs of parts of speech are connected with `det`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (4720; 95% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (137; 3% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (37; 1% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (36; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="de_lit-pos-X.html">X</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="de_lit-pos-NUM.html">NUM</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	Man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	2	nsubj	_	_
2	tadelt	tadeln	VERB	VVFIN	_	0	root	_	_
3	die	der	DET	ART	Definite=Def|PronType=Art	5	det	_	_
4	metrische	metrisch	ADJ	ADJA	_	5	amod	_	_
5	Sorglosigkeit	Sorglosigkeit	NOUN	NN	Case=Acc	2	obj	_	_
6	der	der	DET	ART	Definite=Def|PronType=Art	8	det	_	_
7	Goetheschen	goethesch	ADJ	ADJA	_	8	amod	_	_
8	Gedichte	Gedicht	NOUN	NN	_	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Das	der	PRON	PDS	Case=Nom|PronType=Dem,Rel	4	nsubj	_	_
2	ist	sein	AUX	VAFIN	_	4	cop	_	_
3	der	der	DET	ART	Definite=Def|PronType=Art	4	det	_	_
4	alte	alt	ADJ	ADJA	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Die	der	DET	ART	Definite=Def|PronType=Art	2	det	_	_
2	Medicis	Medicis	PROPN	NE	Case=Nom	7	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	$,	_	2	punct	_	_
4	die	der	DET	ART	Definite=Def|PronType=Art	5	det	_	_
5	Fugger	Fugger	NOUN	NN	_	2	parataxis	_	_
6	waren	sein	AUX	VAFIN	_	7	cop	_	_
7	Kaufleute	Kaufleute	NOUN	NN	Case=Nom	0	root	_	SpaceAfter=No
8	,	,	PUNCT	$,	_	7	punct	_	_
9	wie	wie	ADV	PWAV	_	11	mark	_	_
10	sie	sie	PRON	PPER	Case=Nom|Person=3|PronType=Prs	11	nsubj	_	_
11	seyn	seyn	ADJ	ADJD	_	7	advcl	_	_
12	sollten	sollen	AUX	VMFIN	_	11	aux	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	7	punct	_	_

~~~


