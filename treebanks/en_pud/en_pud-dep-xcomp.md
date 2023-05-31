---
layout: base
title:  'Statistics of xcomp in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `xcomp`

This relation is universal.

271 nodes (1%) are attached to their parents as `xcomp`.

267 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5830258302583.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (164; 61% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (44; 16% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (30; 11% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (22; 8% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	4:nsubj	SpaceAfter=No
2	’re	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	usually	usually	ADV	RB	_	4	advmod	4:advmod	_
4	artists	artist	NOUN	NNS	Number=Plur	0	root	0:root|6:nsubj|8:nsubj:xsubj	_
5	who	who	PRON	WP	PronType=Rel	6	nsubj	4:ref	_
6	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	acl:relcl	4:acl:relcl	_
7	to	to	PART	TO	_	8	mark	8:mark	_
8	do	do	VERB	VB	VerbForm=Inf	6	xcomp	6:xcomp	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	_
10	bunch	bunch	NOUN	NN	Number=Sing	8	obj	8:obj	_
11	of	of	ADP	IN	_	12	case	12:case	_
12	stuff	stuff	NOUN	NN	Number=Sing	10	nmod	10:nmod:of	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Still	still	ADV	RB	_	4	advmod	4:advmod	SpaceAfter=No
2	,	,	PUNCT	,	_	4	punct	4:punct	_
3	there	there	PRON	EX	_	4	expl	4:expl	_
4	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	questions	question	NOUN	NNS	Number=Plur	4	nsubj	4:nsubj	_
6	left	leave	VERB	VBN	Tense=Past|VerbForm=Part	5	acl	5:acl	_
7	unanswered	unanswered	ADJ	JJ	Degree=Pos	6	xcomp	6:xcomp	SpaceAfter=No
8	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
2	do	do	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	4:aux	SpaceAfter=No
3	n’t	n’t	PART	RB	Polarity=Neg	4	advmod	4:advmod	_
4	call	call	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	4:obj|7:nsubj:xsubj	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	_
7	beast	beast	NOUN	NN	Number=Sing	4	xcomp	4:xcomp	_
8	lightly	lightly	ADV	RB	_	4	advmod	4:advmod	SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


