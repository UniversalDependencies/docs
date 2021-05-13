---
layout: base
title:  'Statistics of csubj in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ca_ancora-dep-csubj-pass.html">csubj:pass</a></tt>.

1089 nodes (0%) are attached to their parents as `csubj`.

833 instances of `csubj` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.99908172635445.

The following 22 pairs of parts of speech are connected with `csubj`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (588; 54% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (219; 20% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (82; 8% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (75; 7% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (36; 3% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (28; 3% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	Se	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	2	obj	_	_
2	sospita	sospitar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	_	_	8	mark	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	metge	metge	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
6	els	ell	PRON	_	Case=Acc,Dat|Number=Plur|Person=3|PronType=Prs	8	obj	_	_
7	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	assassinar	assassinar	VERB	_	VerbForm=Inf	2	csubj	_	SpaceAfter=No
9	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Ara	ara	ADV	_	_	6	advmod	_	_
2	mateix	mateix	ADV	_	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	PunctType=Comm	1	punct	_	_
4	no	no	ADV	_	Polarity=Neg	6	advmod	_	_
5	és	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	fàcil	fàcil	ADJ	_	Number=Sing	0	root	_	_
7	que	que	SCONJ	_	_	8	mark	_	_
8	faci	fer	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	csubj	_	_
9	marxa	marxa	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	_
10	enrere	enrere	ADV	_	_	9	advmod	_	SpaceAfter=No
11	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Oblidar	oblidar	VERB	_	VerbForm=Inf	5	csubj	_	_
2	és	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	millor	millor	ADJ	_	Degree=Cmp|Number=Sing	5	amod	_	_
5	antídot	antídot	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	PunctType=Peri	5	punct	_	_

~~~


