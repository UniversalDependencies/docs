---
layout: base
title:  'Statistics of obl:tmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>.

129 nodes (0%) are attached to their parents as `obl:tmod`.

82 instances of `obl:tmod` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.10077519379845.

The following 10 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (93; 72% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (10; 8% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (9; 7% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:tmod	color:blue
1	Today	today	NOUN	NN	Number=Sing	7	obl:tmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	textile	textile	NOUN	NN	Number=Sing	6	compound	_	_
4	and	and	CCONJ	CC	_	5	cc	_	_
5	steel	steel	NOUN	NN	Number=Sing	3	conj	_	_
6	mills	mill	NOUN	NNS	Number=Plur	7	nsubj	_	_
7	take	take	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
8	their	their	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	place	place	NOUN	NN	Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:tmod	color:blue
1	1669	@card@	NUM	CD	NumType=Card	4	obl:tmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	reportedly	reportedly	ADV	RB	_	4	advmod	_	_
4	built	build	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
5	for	for	ADP	IN	_	7	case	_	_
6	residence	residence	NOUN	NN	Number=Sing	7	compound	_	_
7	purposes	purpose	NOUN	NNS	Number=Plur	4	obl	_	_
8	of	of	ADP	IN	_	12	case	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
10	king	king	NOUN	NN	Number=Sing	12	nmod:poss	_	SpaceAfter=No
11	's	's	PART	POS	_	10	case	_	_
12	harem	harem	NOUN	NN	Number=Sing	7	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obl:tmod	color:blue
1	And	and	CCONJ	CC	_	12	cc	_	_
2	then	then	ADV	RB	PronType=Dem	8	obl:tmod	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	horror	horror	NOUN	NN	Number=Sing	8	nsubj	_	_
5	of	of	ADP	IN	_	6	case	_	_
6	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nmod	_	_
7	all	all	DET	DT	_	6	det	_	_
8	hit	hit	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	me	me	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obj	_	_
10	and	and	CCONJ	CC	_	12	cc	_	_
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
12	said	say	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	8	conj	_	SpaceAfter=No
13	,	,	PUNCT	,	_	17	punct	_	_
14	“	"	PUNCT	``	_	17	punct	_	SpaceAfter=No
15	Sonia	Sonia	PROPN	NNP	Number=Sing	17	vocative	_	SpaceAfter=No
16	,	,	PUNCT	,	_	15	punct	_	_
17	up	up	ADV	RB	_	12	ccomp	_	SpaceAfter=No
18	!	!	PUNCT	.	_	17	punct	_	SpaceAfter=No
19	”	"	PUNCT	''	_	17	punct	_	_

~~~


