---
layout: base
title:  'Statistics of nmod:unmarked in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_pud-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="en_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

111 nodes (1%) are attached to their parents as `nmod:unmarked`.

89 instances of `nmod:unmarked` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04504504504505.

The following 18 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (18; 16% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (16; 14% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (15; 14% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (12; 11% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (11; 10% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (9; 8% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (8; 7% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:unmarked	color:blue
1	In	in	ADP	IN	_	2	case	2:case	_
2	June	June	PROPN	NNP	Number=Sing	7	obl	7:obl:in	_
3	to	to	ADP	IN	_	4	case	4:case	_
4	August	August	PROPN	NNP	Number=Sing	2	nmod	2:nmod:to	_
5	2010	2010	NUM	CD	NumForm=Digit|NumType=Card	4	nmod:unmarked	4:nmod:unmarked	_
6	famine	famine	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	_
7	struck	strike	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	_
9	Sahel	Sahel	PROPN	NNP	Number=Sing	7	obj	7:obj	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nmod:unmarked	color:blue
1	Today	today	NOUN	NN	Number=Sing	7	nmod:unmarked	7:nmod:unmarked	TemporalNPAdjunct=Yes|SpaceAfter=No
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:unmarked	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
3	play	play	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	on	on	ADP	IN	_	5	case	5:case	_
5	Saturday	Saturday	PROPN	NNP	Number=Sing	3	obl	3:obl:on	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	5:punct	_
7	10	10	NUM	CD	NumForm=Digit|NumType=Card	5	appos	5:appos	_
8	June	June	PROPN	NNP	Number=Sing	7	nmod:unmarked	7:nmod:unmarked	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


