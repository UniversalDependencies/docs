---
layout: base
title:  'Statistics of advcl in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `advcl`

This relation is universal.

117 nodes (3%) are attached to their parents as `advcl`.

116 instances of `advcl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (104; 89% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl	color:blue
1	तो	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
2	कपाळाला	कपाळ	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	4	iobj	_	_
3	हात	हात	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	_
4	लावून	लावणे	VERB	_	Aspect=Perf|VerbForm=Conv	5	advcl	_	_
5	बसला	बसणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl	color:blue
1	तेथे	तेथे	ADV	_	_	6	amod	_	_
2	फक्त	फक्त	ADJ	_	Case=Nom	3	amod	_	_
3	गरिबांना	गरिब	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	6	nsubj	_	_
4	_	येणे	VERB	_	Case=Abs|InfForm=Dict|VerbForm=Inf	6	advcl	_	_
5	_	स	ADP	_	_	4	case	_	_
6	बंदी	बंदी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
7	होती	असणे	AUX	_	Gender=Fem|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	दुसऱ्या	दुसरा	NUM	_	_	2	amod	_	_
2	दिवशी	दिवशी	ADV	_	_	5	advcl	_	_
3	राजाने	राजा	NOUN	_	Case=Erg|Gender=Masc|Number=Sing	5	nsubj	_	_
4	राजपुत्राला	राजपुत्र	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	5	obl	_	_
5	बोलावणे	बोलावणे	VERB	_	Case=Nom|InfForm=Dict|VerbForm=Inf	0	root	_	_
6	धाडले	धाडणे	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|VerbForm=Fin	5	compound:svc	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


