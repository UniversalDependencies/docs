---
layout: base
title:  'Statistics of obl:npmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-tmod.html">obl:tmod</a></tt>.

59 nodes (0%) are attached to their parents as `obl:npmod`.

35 instances of `obl:npmod` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5593220338983.

The following 7 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (26; 44% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (22; 37% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (6; 10% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl:npmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	come	come	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	back	back	ADV	RB	_	2	advmod	_	_
4	to	to	ADP	TO	_	5	case	_	_
5	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obl	_	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	_	_
7	lot	lot	NOUN	NN	Number=Sing	2	obl:npmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:npmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	took	take	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	Oath	oath	NOUN	NN	Number=Sing	2	obj	_	_
5	to	to	ADP	TO	_	7	case	_	_
6	our	our	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	_	_
7	Constitution	Constitution	PROPN	NNP	Number=Sing	4	nmod	_	_
8	at	at	ADP	IN	_	11	case	_	_
9	22	@card@	NUM	CD	NumType=Card	10	nummod	_	_
10	years	year	NOUN	NNS	Number=Plur	11	obl:npmod	_	_
11	old	old	ADJ	JJ	Degree=Pos	2	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:npmod	color:blue
1	Get	get	AUX	VB	VerbForm=Inf	2	aux:pass	_	_
2	used	use	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
3	to	to	PART	TO	_	4	mark	_	_
4	using	use	VERB	VBG	VerbForm=Ger	2	advcl	_	_
5	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	yourself	PRP	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	4	obl:npmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	and	and	CCONJ	CC	_	9	cc	_	_
9	spread	spread	VERB	VB	VerbForm=Inf	2	conj	_	_
10	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
11	to	to	ADP	TO	_	12	case	_	_
12	others	other	NOUN	NNS	Number=Plur	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


