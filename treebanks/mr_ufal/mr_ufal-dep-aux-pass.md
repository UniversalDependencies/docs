---
layout: base
title:  'Statistics of aux:pass in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="mr_ufal-dep-aux.html">aux</a></tt>.

7 nodes (0%) are attached to their parents as `aux:pass`.

7 instances of `aux:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt> (5; 71% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:pass	color:blue
1	गाव	गाव	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj:pass	_	_
2	शृंगारण्यात	शृंगारणे	VERB	_	Case=Loc|InfForm=Dict|VerbForm=Inf	0	root	_	_
3	आला	येणे	AUX	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	2	aux:pass	_	_
4	आणि	आणि	CCONJ	_	_	8	cc	_	_
5	एक	एक	DET	_	Number=Sing|PronType=Ind	7	det	_	_
6	सुंदर	सुंदर	ADJ	_	Case=Nom	7	amod	_	_
7	सभामंडप	सभामंडप	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	_	_
8	उभारण्यात	उभारणे	VERB	_	Case=Loc|InfForm=Dict|VerbForm=Inf	2	conj	_	_
9	आला	येणे	AUX	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	8	aux:pass	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux:pass	color:blue
1	तेथे	तेथे	ADV	_	_	6	advmod	_	_
2	_	राजा	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	6	obl	_	_
3	_	साठी	ADP	_	_	2	case	_	_
4	सिंहासन	सिंहासन	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	_
5	तयार	तयार	ADV	_	_	6	compound:lvc	_	_
6	करण्यात	करणे	VERB	_	Case=Loc|InfForm=Dict|VerbForm=Inf	0	root	_	_
7	आले	येणे	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|VerbForm=Fin	6	aux:pass	_	_
8	होते	असणे	AUX	_	Gender=Neut|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


