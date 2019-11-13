---
layout: base
title:  'Statistics of csubj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_gum-dep-csubj-pass.html">csubj:pass</a></tt>.

103 nodes (0%) are attached to their parents as `csubj`.

92 instances of `csubj` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.83495145631068.

The following 13 pairs of parts of speech are connected with `csubj`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (45; 44% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (24; 23% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (19; 18% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	Moving	move	VERB	VBG	VerbForm=Ger	3	csubj	_	_
2	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	1	obj	_	_
3	distributes	distribute	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	wear	wear	NOUN	NN	Number=Sing	3	obj	_	_
6	and	and	CCONJ	CC	_	7	cc	_	_
7	tear	tear	NOUN	NN	Number=Sing	5	conj	_	_
8	of	of	SCONJ	IN	_	9	mark	_	_
9	washing	wash	VERB	VBG	VerbForm=Ger	5	acl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	All	all	PRON	DT	_	3	obl:npmod	_	_
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	takes	take	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	csubj	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
5	two	two	NUM	CD	NumType=Card	7	nummod	_	_
6	twist	twist	NOUN	NN	Number=Sing	7	compound	_	_
7	ties	tie	NOUN	NNS	Number=Plur	0	root	_	_
8	and	and	CCONJ	CC	_	11	cc	_	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	_	_
10	few	few	ADJ	JJ	Degree=Pos	11	amod	_	_
11	seconds	second	NOUN	NNS	Number=Plur	7	conj	_	_
12	of	of	ADP	IN	_	13	case	_	_
13	patience	patience	NOUN	NN	Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Practicing	practice	VERB	VBG	VerbForm=Ger	5	csubj	_	_
2	your	your	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	joke	joke	NOUN	NN	Number=Sing	1	obj	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	crucial	crucial	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


