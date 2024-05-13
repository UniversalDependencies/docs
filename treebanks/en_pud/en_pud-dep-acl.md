---
layout: base
title:  'Statistics of acl in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

193 nodes (1%) are attached to their parents as `acl`.

190 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.72538860103627.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (170; 88% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (9; 5% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	$	$	SYM	$	_	0	root	0:root	SpaceAfter=No
2	5,000	5000	NUM	CD	NumForm=Digit|NumType=Card	1	nummod	1:nummod	_
3	per	per	ADP	IN	_	4	case	4:case	_
4	person	person	NOUN	NN	Number=Sing	1	nmod	1:nmod:per	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	1:punct	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	maximum	maximum	NOUN	NN	Number=Sing	1	appos	1:appos	_
8	allowed	allow	VERB	VBN	Tense=Past|VerbForm=Part	7	acl	7:acl	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl	color:blue
1	In	in	ADP	IN	_	2	case	2:case	_
2	2007	2007	NUM	CD	NumForm=Digit|NumType=Card	8	nmod	8:nmod:in	_
3	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
4	most	most	ADV	RBS	_	5	advmod	5:advmod	_
5	successful	successful	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	film	film	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	_
7	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	8:cop	_
8	El	El	PROPN	NNP	Number=Sing	0	root	0:root	_
9	Greco	Greco	PROPN	NNP	Number=Sing	8	flat	8:flat	SpaceAfter=No
10	,	,	PUNCT	,	_	8	punct	8:punct	_
11	directed	direct	VERB	VBN	Tense=Past|VerbForm=Part	8	acl	8:acl	_
12	by	by	ADP	IN	_	13	case	13:case	_
13	Yannis	Yannis	PROPN	NNP	Number=Sing	11	obl	11:obl:by	_
14	Smaragdis	Smaragdis	PROPN	NNP	Number=Sing	13	flat	13:flat	SpaceAfter=No
15	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	However	however	ADV	RB	_	6	advmod	6:advmod	SpaceAfter=No
2	,	,	PUNCT	,	_	6	punct	6:punct	_
3	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
4	did	do	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	6	aux	6:aux	_
5	not	not	ADV	RB	Polarity=Neg	6	advmod	6:advmod	_
6	expand	expand	VERB	VB	VerbForm=Inf	0	root	0:root	_
7	until	until	SCONJ	IN	_	15	mark	15:mark	_
8	ships	ship	NOUN	NNS	Number=Plur	15	nsubj:pass	15:nsubj:pass	_
9	big	big	ADJ	JJ	Degree=Pos	10	amod	10:amod	_
10	enough	enough	ADJ	RB	_	8	acl	8:acl	_
11	to	to	PART	TO	_	12	mark	12:mark	_
12	cross	cross	VERB	VB	VerbForm=Inf	10	advcl	10:advcl:to	_
13	seas	sea	NOUN	NNS	Number=Plur	12	obj	12:obj	_
14	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	15	aux:pass	15:aux:pass	_
15	built	build	VERB	VBN	Tense=Past|VerbForm=Part	6	advcl	6:advcl:until	SpaceAfter=No
16	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


