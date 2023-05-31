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
1	Today	today	NOUN	NN	Number=Sing	7	nmod:tmod	7:nmod:tmod	SpaceAfter=No
2	,	,	PUNCT	,	_	7	punct	7:punct	_
3	expansive	expansive	ADJ	JJ	Degree=Pos	4	amod	4:amod	_
4	ruins	ruin	NOUN	NNS	Number=Plur	7	nsubj:pass	7:nsubj:pass	_
5	can	can	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
6	be	be	AUX	VB	VerbForm=Inf	7	aux:pass	7:aux:pass	_
7	viewed	view	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
8	there	there	ADV	RB	PronType=Dem	7	advmod	7:advmod	SpaceAfter=No
9	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:tmod	color:blue
1	From	from	ADP	IN	_	4	case	4:case	_
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
3	9th	9th	ADJ	JJ	Degree=Pos|NumType=Ord	4	amod	4:amod	_
4	century	century	NOUN	NN	Number=Sing	11	obl	11:obl:from	_
5	BC	BC	NOUN	NNP	Number=Sing	4	nmod:tmod	4:nmod:tmod	SpaceAfter=No
6	,	,	PUNCT	,	_	11	punct	11:punct	_
7	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
8	first	first	ADJ	JJ	Degree=Pos|NumType=Ord	10	amod	10:amod	_
9	Greek	Greek	ADJ	JJ	Degree=Pos	10	amod	10:amod	Proper=True
10	texts	text	NOUN	NNS	Number=Plur	11	nsubj	11:nsubj|13:nsubj:xsubj	_
11	began	begin	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
12	to	to	PART	TO	_	13	mark	13:mark	_
13	appear	appear	VERB	VB	VerbForm=Inf	11	xcomp	11:xcomp	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod:tmod	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	3:cop	_
3	August	August	PROPN	NNP	Number=Sing	0	root	0:root	_
4	30	30	NUM	CD	NumType=Card	3	nummod	3:nummod	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	3:punct	_
6	2015	2015	NUM	CD	NumType=Card	3	nmod:tmod	3:nmod:tmod	SpaceAfter=No
7	,	,	PUNCT	,	_	3	punct	3:punct	_
8	as	as	SCONJ	IN	_	13	mark	13:mark	_
9	an	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	_
10	army	army	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	_
11	of	of	ADP	IN	_	12	case	12:case	_
12	ducks	duck	NOUN	NNS	Number=Plur	10	nmod	10:nmod:of	_
13	conquered	conquer	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	advcl	3:advcl:as	_
14	the	the	DET	DT	Definite=Def|PronType=Art	15	det	15:det	_
15	internet	internet	NOUN	NN	Number=Sing	13	obj	13:obj	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


