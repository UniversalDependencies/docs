---
layout: base
title:  'Statistics of acl:relcl in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="lij_glt-dep-acl.html">acl</a></tt>.

103 nodes (1%) are attached to their parents as `acl:relcl`.

103 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.00970873786408.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (56; 54% instances), <tt><a href="lij_glt-pos-PRON.html">PRON</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (24; 23% instances), <tt><a href="lij_glt-pos-PRON.html">PRON</a></tt>-<tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="lij_glt-pos-PRON.html">PRON</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="lij_glt-pos-NUM.html">NUM</a></tt>-<tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="lij_glt-pos-NUM.html">NUM</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="lij_glt-pos-PRON.html">PRON</a></tt>-<tt><a href="lij_glt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	E	e	CCONJ	_	_	3	cc	_	_
2	dapeu	dapeu	ADV	_	_	3	advmod	_	_
3	basta	bastâ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ammiâ	ammiâ	VERB	_	Tense=Pres|VerbForm=Inf	3	ccomp	_	_
5	e	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	figue	figua	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	_
7	che	che	PRON	_	PronType=Rel	9	nsubj	_	_
8	gh'	ghe	PRON	_	PronType=Dem	9	expl	_	SpaceAfter=No
9	é	ëse	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
10	in	in	ADP	_	ExtPos=ADP	13	case	_	_
11	sce	sce	ADP	_	_	10	fixed	_	_
12	i	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
13	menù	menù	NOUN	_	Gender=Masc|Number=Plur	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 acl:relcl	color:blue
1	Ben	ben	INTJ	_	_	11	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	se	se	SCONJ	_	_	5	mark	_	_
4	no	no	ADV	_	_	5	advmod	_	_
5	ô	ô	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	advcl	_	_
6	son	ëse	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	de	de	ADP	_	ExtPos=ADV	11	advmod	_	_
9	seguo	seguo	ADJ	_	Gender=Masc|Number=Sing	8	fixed	_	_
10	en	ëse	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	quarcösa	quarcösa	PRON	_	Number=Sing|PronType=Ind	0	root	_	_
12	che	che	PRON	_	PronType=Rel	15	nsubj	_	_
13	se	se	PRON	_	Person=3|PronType=Prs	15	expl:pv	_	_
14	gh'	ghe	PRON	_	PronType=Dem	15	iobj	_	SpaceAfter=No
15	assomeggia	assomeggiâ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl:relcl	color:blue
1	Se	se	SCONJ	_	_	5	mark	_	_
2	ti	ti	PRON	_	Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
3	te	te	PRON	_	Number=Sing|Person=2|PronType=Prs	5	expl:pv	_	_
4	â	ô	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
5	piggi	piggiâ	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	14	advcl	_	_
6	con	con	ADP	_	_	7	case	_	_
7	chi	chi	PRON	_	PronType=Rel	5	obl:arg	_	_
8	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
9	l'	l'	PART	_	_	12	dep	_	SpaceAfter=No
10	é	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	ciù	ciù	ADV	_	_	12	advmod	_	_
12	piccin	piccin	ADJ	_	Gender=Masc|Number=Sing	7	acl:relcl	_	_
13	ti	ti	PRON	_	Number=Sing|Person=2|PronType=Prs	14	nsubj	_	_
14	fæ	fâ	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
15	mâ	mâ	ADV	_	_	14	advmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	14	punct	_	_

~~~


