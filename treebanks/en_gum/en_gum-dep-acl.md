---
layout: base
title:  'Statistics of acl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_gum-dep-acl-relcl.html">acl:relcl</a></tt>.

1080 nodes (1%) are attached to their parents as `acl`.

1017 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.07222222222222.

The following 15 pairs of parts of speech are connected with `acl`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (948; 88% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (52; 5% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (26; 2% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	And	and	CCONJ	CC	_	4	cc	_	Discourse=restatement:55->53
2	there	there	ADV	RB	PronType=Dem	4	advmod	_	_
3	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	Entity=(person-41)
4	were	be	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	:	:	PUNCT	:	_	7	punct	_	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	_	Discourse=elaboration:56->55|Entity=(person-41
7	chain	chain	NOUN	NN	Number=Sing	4	parataxis	_	_
8	of	of	ADP	IN	_	9	case	_	_
9	riders	rider	NOUN	NNS	Number=Plur	7	nmod	_	_
10	weaving	weave	VERB	VBG	VerbForm=Ger	7	acl	_	Discourse=elaboration:57->56
11	among	among	ADP	IN	_	13	case	_	_
12	the	the	DET	DT	Definite=Def|PronType=Art	13	det	_	Entity=(plant-75
13	trees	tree	NOUN	NNS	Number=Plur	10	obl	_	Entity=person-41)plant-75)|SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Virginia	Virginia	PROPN	NNP	Number=Sing	0	root	_	Discourse=joint:99->96|Entity=(place-6)|SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	highlighted	highlight	VERB	VBN	Tense=Past|VerbForm=Part	1	acl	_	Discourse=elaboration:100->99
4	in	in	ADP	IN	_	5	case	_	_
5	red	red	ADJ	JJ	Degree=Pos	3	obl	_	Entity=(abstract-136)|SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Discourse=concession:114->116|SpaceAfter=No
2	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	really	really	ADV	RB	_	4	advmod	_	_
4	hard	hard	ADJ	JJ	Degree=Pos	0	root	_	_
5	to	to	PART	TO	_	6	mark	_	_
6	tell	tell	VERB	VB	VerbForm=Inf	4	acl	_	SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	_	_

~~~


