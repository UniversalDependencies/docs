---
layout: base
title:  'Statistics of aux in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `aux`

This relation is universal.

3056 nodes (2%) are attached to their parents as `aux`.

2798 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70811518324607.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (2636; 86% instances), <tt><a href="is_modern-pos-AUX.html">AUX</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (226; 7% instances), <tt><a href="is_modern-pos-PART.html">PART</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (104; 3% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (24; 1% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (24; 1% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (20; 1% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="is_modern-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Alþingi	alþingi	PROPN	NPR-N	_	3	nsubj	_	_
2	getur	geta	AUX	MDPI	Mood=Ind|Tense=Pres	3	aux	_	_
3	gert	gera	VERB	DON	Tense=Past|VerbForm=Part	0	root	_	_
4	hitt	hinn	DET	D-A	Case=Acc	3	obj	_	_
5	og	og	CCONJ	CONJ	_	4	cc	_	_
6	þetta	þessi	DET	D-A	Case=Acc	4	det	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	Ég	ég	PRON	PRO-N	Case=Nom	2	nsubj	_	_
2	held	halda	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	þvert	þvert	ADV	ADV	Degree=Pos	5	advmod	_	_
4	á	á	ADP	P	_	5	case	_	_
5	móti	mót	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	2	obl	_	_
6	að	að	SCONJ	C	_	9	mark	_	_
7	hún	hún	PRON	PRO-N	Case=Nom	9	nsubj	_	_
8	hafi	hafa	AUX	HVPS	Mood=Sub|Tense=Pres	9	aux	_	_
9	verið	vera	AUX	BEN	Tense=Past|VerbForm=Part	2	ccomp	_	_
10	á	á	ADP	P	_	11	case	_	_
11	endanum	endi	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	9	obl	_	_
12	mjög	mjög	ADV	ADV	Degree=Pos	13	amod	_	_
13	jákvæð	jákvæður	ADJ	ADJ-N	Case=Nom|Degree=Pos	9	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux	color:blue
1	Ég	ég	PRON	PRO-N	Case=Nom	2	nsubj	_	_
2	veit	vita	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	ekki	ekki	ADV	NEG	_	2	advmod	_	_
4	af	af	ADP	P	_	5	case	_	_
5	hverju	hver	PRON	WPRO-D	Case=Dat	7	obl	_	_
6	maður	maður	PRON	MAN-N	_	7	nsubj	_	_
7	ætti	eiga	VERB	VBDS	Mood=Sub|Tense=Past	2	ccomp	_	_
8	að	að	PART	TO	_	7	acl	_	_
9	vilja	vilja	AUX	MD	VerbForm=Inf	8	aux	_	_
10	það	það	PRON	PRO-A	Case=Acc	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


