---
layout: base
title:  'Statistics of aux:pass in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_rhapsodie-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-tense.html">aux:tense</a></tt>.

134 nodes (0%) are attached to their parents as `aux:pass`.

134 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (134; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:pass	color:blue
1	et	et	CCONJ	_	_	5	cc	_	AlignBegin=284832|AlignEnd=284862
2	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj:pass	_	AlignBegin=284862|AlignEnd=284892
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	AlignBegin=284892|AlignEnd=285062
4	pas	pas	ADV	_	Polarity=Neg	5	advmod	_	AlignBegin=285062|AlignEnd=285172
5	payé	payer	VERB	_	VerbForm=Part|Voice=Pass	0	root	_	AlignBegin=285172|AlignEnd=285382|Gender[ctxt]=Masc|Number[ctxt]=Sing|Tense[denom]=Past
6	en	en	ADP	_	_	7	case	_	AlignBegin=285382|AlignEnd=285442
7	plus	plus	ADV	_	_	5	advmod	_	AlignBegin=285442|AlignEnd=285638|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	AlignBegin=285638|AlignEnd=285638

~~~


