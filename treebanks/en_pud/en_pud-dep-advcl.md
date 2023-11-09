---
layout: base
title:  'Statistics of advcl in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `advcl`

This relation is universal.

293 nodes (1%) are attached to their parents as `advcl`.

221 instances of `advcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.00341296928328.

The following 18 pairs of parts of speech are connected with `advcl`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (226; 77% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (19; 6% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (12; 4% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 advcl	color:blue
1	Perhaps	perhaps	ADV	RB	_	5	advmod	5:advmod	_
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
3	wo	will	AUX	MD	VerbForm=Fin	5	aux	5:aux	SpaceAfter=No
4	n’t	not	ADV	RB	Polarity=Neg	5	advmod	5:advmod	_
5	matter	matter	VERB	VB	VerbForm=Inf	0	root	0:root	_
6	as	as	SCONJ	IN	_	11	mark	11:mark	_
7	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj:pass	11:nsubj:pass	_
8	wo	will	AUX	MD	VerbForm=Fin	11	aux	11:aux	SpaceAfter=No
9	n’t	not	ADV	RB	Polarity=Neg	11	advmod	11:advmod	_
10	be	be	AUX	VB	VerbForm=Inf	11	aux:pass	11:aux:pass	_
11	troubled	trouble	VERB	VBN	Tense=Past|VerbForm=Part	5	advcl	5:advcl:as	_
12	long	long	ADV	RB	Degree=Pos	11	advmod	11:advmod	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 advcl	color:blue
1	In	in	ADP	IN	_	2	case	2:case	_
2	theory	theory	NOUN	NN	Number=Sing	10	obl	10:obl:in	SpaceAfter=No
3	,	,	PUNCT	,	_	10	punct	10:punct	_
4	if	if	SCONJ	IN	_	5	mark	5:mark	_
5	done	do	VERB	VBN	Tense=Past|VerbForm=Part	10	advcl	10:advcl:if	_
6	right	right	ADJ	JJ	Degree=Pos	5	xcomp	5:xcomp	SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	10:punct	_
8	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj	SpaceAfter=No
9	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	un-detectable	un-detectable	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 advcl	color:blue
1	Because	because	SCONJ	IN	_	9	mark	9:mark	_
2	series	series	NOUN	NN	Number=Sing	9	nsubj	9:nsubj	_
3	1	1	NUM	CD	NumForm=Digit|NumType=Card	2	nummod	2:nummod	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
5	no	no	ADV	RB	Polarity=Neg	6	advmod	6:advmod	_
6	longer	longer	ADV	RBR	Degree=Cmp	9	advmod	9:advmod	_
7	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	_
8	old	old	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	one	one	NOUN	NN	Number=Sing	14	advcl	14:advcl:because	SpaceAfter=No
10	,	,	PUNCT	,	_	14	punct	14:punct	_
11	many	many	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	users	user	NOUN	NNS	Number=Plur	14	nsubj	14:nsubj	_
13	can	can	AUX	MD	VerbForm=Fin	14	aux	14:aux	_
14	save	save	VERB	VB	VerbForm=Inf	0	root	0:root	_
15	100	100	NUM	CD	NumForm=Digit|NumType=Card	16	nummod	16:nummod	_
16	euros	euro	NOUN	NNS	Number=Plur	14	obj	14:obj	SpaceAfter=No
17	.	.	PUNCT	.	_	14	punct	14:punct	_

~~~


