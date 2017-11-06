---
layout: base
title:  'Statistics of xcomp in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `xcomp`

This relation is universal.

973 nodes (1%) are attached to their parents as `xcomp`.

917 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.61870503597122.

The following 23 pairs of parts of speech are connected with `xcomp`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (473; 49% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (213; 22% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (90; 9% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (85; 9% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (23; 2% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (17; 2% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (15; 2% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	treba	trebati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	5	mark	_	SpaceAfter=No
4	...	...	PUNCT	_	_	5	punct	_	_
5	damo	dati	VERB	_	Number=Plur|Person=1|Tense=Pres	2	xcomp	_	_
6	podršku	podrška	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
7	Jeremiću	Jeremić	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 xcomp	color:blue
1	Počevši	početi	ADV	_	VerbForm=Part	9	xcomp	_	_
2	od	od	ADP	_	Case=Gen	4	case	_	_
3	1.	1.	NUM	_	NumType=Ord	4	nummod	_	_
4	januara	januar	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	1	obl	_	_
5	na	na	ADP	_	Case=Acc	6	case	_	_
6	robu	roba	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
7	će	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	9	aux	_	_
8	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	9	compound	_	_
9	plaćati	plaćati	VERB	_	VerbForm=Inf	0	root	_	_
10	PDV	PDV	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Španija	Španija	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	3	aux	_	_
3	postala	postati	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
4	12.	12.	NUM	_	NumType=Ord	5	nummod	_	_
5	članica	članica	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	xcomp	_	_
6	koja	koji	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	8	nsubj	_	_
7	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	8	aux	_	_
8	ratifikovala	ratifikovati	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	5	acl	_	_
9	protokol	protokol	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


