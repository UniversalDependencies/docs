---
layout: base
title:  'Statistics of iobj in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `iobj`

This relation is universal.

30 nodes (1%) are attached to their parents as `iobj`.

28 instances of `iobj` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.26666666666667.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (18; 60% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (9; 30% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (2; 7% instances), <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	तो	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
2	कपाळाला	कपाळ	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	4	iobj	_	_
3	हात	हात	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	_
4	लावून	लावणे	VERB	_	Aspect=Perf|VerbForm=Conv	5	advcl	_	_
5	बसला	बसणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	मला	मी	PRON	_	Case=Dat|Number=Sing|Person=1	3	iobj	_	_
2	नाही	नाही	INTJ	_	_	3	obj	_	_
3	म्हणू	म्हणणे	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Neg|VerbForm=Fin	0	root	_	_
4	नकोस	नकोस	AUX	_	Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	3	aux	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	ती	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
7	म्हणाली	म्हणणे	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 iobj	color:blue
1	राजाला	राजा	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	2	iobj	_	_
2	सांगून	सांगणे	VERB	_	Aspect=Perf|VerbForm=Conv	3	advcl	_	_
3	ठेवा	ठेवणे	VERB	_	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	13	punct	_	_
5	की	की	SCONJ	_	_	13	mark	_	_
6	_	मी	PRON	_	Number=Sing|Person=1	8	nmod:poss	_	_
7	_	चा	ADP	_	Gender=Fem|Number=Sing	6	case	_	_
8	राख	राख	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	_
9	मात्र	मात्र	ADV	_	_	12	discourse	_	_
10	_	मी	PRON	_	Number=Sing|Person=1	12	nmod:poss	_	_
11	_	चा	ADP	_	Case=Abs	10	case	_	_
12	घरी	घरी	ADV	_	_	13	iobj	_	_
13	पाठवा	पाठवणे	VERB	_	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	3	ccomp	_	SpaceAfter=No
14	!	!	PUNCT	_	_	13	punct	_	_

~~~


