---
layout: base
title:  'Statistics of nmod:tmod in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_pud-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

39 nodes (0%) are attached to their parents as `nmod:tmod`.

29 instances of `nmod:tmod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.38461538461538.

The following 9 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (16; 41% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (8; 21% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (6; 15% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (4; 10% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nmod:tmod	color:blue
1	Today	today	NOUN	NN	Number=Sing	7	nmod:tmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	7	punct	_	_
3	expansive	expansive	ADJ	JJ	Degree=Pos	4	amod	_	_
4	ruins	ruin	NOUN	NNS	Number=Plur	7	nsubj:pass	_	_
5	can	can	AUX	MD	VerbForm=Fin	7	aux	_	_
6	be	be	AUX	VB	VerbForm=Inf	7	aux:pass	_	_
7	viewed	view	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
8	there	there	ADV	RB	PronType=Dem	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:tmod	color:blue
1	From	from	ADP	IN	_	4	case	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
3	9th	9th	ADJ	JJ	Degree=Pos|NumType=Ord	4	amod	_	_
4	century	century	NOUN	NN	Number=Sing	11	obl	_	_
5	BC	BC	NOUN	NNP	Number=Sing	4	nmod:tmod	_	SpaceAfter=No
6	,	,	PUNCT	,	_	11	punct	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
8	first	first	ADJ	JJ	Degree=Pos|NumType=Ord	10	amod	_	_
9	Greek	greek	ADJ	JJ	Degree=Pos	10	amod	_	Proper=True
10	texts	text	NOUN	NNS	Number=Plur	11	nsubj	_	_
11	began	begin	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
12	to	to	PART	TO	_	13	mark	_	_
13	appear	appear	VERB	VB	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod:tmod	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
3	August	August	PROPN	NNP	Number=Sing	0	root	_	_
4	30	30	NUM	CD	NumType=Card	3	nummod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	2015	2015	NUM	CD	NumType=Card	3	nmod:tmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	3	punct	_	_
8	as	as	SCONJ	IN	_	13	mark	_	_
9	an	a	DET	DT	Definite=Ind|PronType=Art	10	det	_	_
10	army	army	NOUN	NN	Number=Sing	13	nsubj	_	_
11	of	of	ADP	IN	_	12	case	_	_
12	ducks	duck	NOUN	NNS	Number=Plur	10	nmod	_	_
13	conquered	conquer	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	advcl	_	_
14	the	the	DET	DT	Definite=Def|PronType=Art	15	det	_	_
15	internet	internet	NOUN	NN	Number=Sing	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


