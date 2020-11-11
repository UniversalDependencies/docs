---
layout: base
title:  'Statistics of obl:tmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>.

184 nodes (0%) are attached to their parents as `obl:tmod`.

126 instances of `obl:tmod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.60869565217391.

The following 10 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (118; 64% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (30; 16% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (11; 6% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (9; 5% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:tmod	color:blue
1	Today	today	NOUN	NN	Number=Sing	7	obl:tmod	_	Discourse=contrast:12->10|Entity=(time-16)|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	textile	textile	NOUN	NN	Number=Sing	6	compound	_	Entity=(place-17(substance-18)
4	and	and	CCONJ	CC	_	5	cc	_	_
5	steel	steel	NOUN	NN	Number=Sing	3	conj	_	Entity=(substance-19)
6	mills	mill	NOUN	NNS	Number=Plur	7	nsubj	_	Entity=place-17)
7	take	take	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
8	their	their	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	_	Entity=(object-15)
9	place	place	NOUN	NN	Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:tmod	color:blue
1	Born	Born	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Discourse=preparation:5->6|SpaceAfter=No
2	:	:	PUNCT	:	_	4	punct	_	_
3	June	June	PROPN	NNP	Number=Sing	4	compound	_	Discourse=joint:6->3|Entity=(time-4
4	11	11	NUM	CD	NumType=Card	1	obl:tmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	1988	1988	NUM	CD	NumType=Card	4	nmod:tmod	_	Entity=(time-5)time-4)
7	(	(	PUNCT	-LRB-	_	9	punct	_	Discourse=elaboration:7->6|SpaceAfter=No
8	age	age	NOUN	NN	Number=Sing	9	nsubj	_	Entity=(abstract-6
9	30	30	NUM	CD	NumType=Card	1	parataxis	_	Entity=abstract-6)|SpaceAfter=No
10	)	)	PUNCT	-RRB-	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obl:tmod	color:blue
1	And	and	CCONJ	CC	_	12	cc	_	Discourse=sequence:136->123
2	then	then	ADV	RB	PronType=Dem	8	obl:tmod	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	Entity=(abstract-92
4	horror	horror	NOUN	NN	Number=Sing	8	nsubj	_	_
5	of	of	ADP	IN	_	6	case	_	_
6	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nmod	_	Entity=(event-82
7	all	all	DET	DT	_	6	det	_	Entity=abstract-92)event-82)
8	hit	hit	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obj	_	Entity=(person-5)
10	and	and	CCONJ	CC	_	12	cc	_	Discourse=attribution:137->138
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	Entity=(person-5)
12	said	say	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	8	conj	_	SpaceAfter=No
13	,	,	PUNCT	,	_	17	punct	_	_
14	“	''	PUNCT	``	_	17	punct	_	Discourse=sequence:138->123|SpaceAfter=No
15	Sonia	Sonia	PROPN	NNP	Number=Sing	17	vocative	_	Entity=(animal-80)|SpaceAfter=No
16	,	,	PUNCT	,	_	15	punct	_	_
17	up	up	ADV	RB	_	12	ccomp	_	SpaceAfter=No
18	!	!	PUNCT	.	_	17	punct	_	SpaceAfter=No
19	”	''	PUNCT	''	_	17	punct	_	_

~~~


