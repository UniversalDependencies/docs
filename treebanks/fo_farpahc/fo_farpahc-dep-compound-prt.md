---
layout: base
title:  'Statistics of compound:prt in UD_Faroese-FarPaHC'
udver: '2'
---

## Treebank Statistics: UD_Faroese-FarPaHC: Relations: `compound:prt`

This relation is a language-specific subtype of .

542 nodes (1%) are attached to their parents as `compound:prt`.

472 instances of `compound:prt` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75830258302583.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="fo_farpahc-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt> (479; 88% instances), <tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt> (43; 8% instances), <tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt>-<tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt> (8; 1% instances), <tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt>-<tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="fo_farpahc-pos-ADV.html">ADV</a></tt>-<tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="fo_farpahc-pos-PART.html">PART</a></tt>-<tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="fo_farpahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:prt	color:blue
1	Henda	_	DET	D-A	Case=Acc	2	det	_	_
2	Jesus	_	PROPN	NPR-A	Case=Acc|Definite=Ind|Number=Sing	3	obj	_	_
3	reisti	_	VERB	VBDI	Mood=Ind|Tense=Past	0	root	_	_
4	Guð	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	_
5	upp	_	ADP	RP	_	3	compound:prt	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	og	_	CCONJ	CONJ	_	11	cc	_	_
8	um	_	ADP	P	_	9	case	_	_
9	tað	_	PRON	PRO-A	Case=Acc	11	obl	_	_
10	eru	_	AUX	BEPI	Mood=Ind|Tense=Pres	11	cop	_	_
11	vit	_	PRON	PRO-N	Case=Nom	3	conj	_	OriginalHead=0
12	allir	_	DET	Q-N	Case=Nom	11	amod	_	_
13	vitni	_	NOUN	NS-N	Case=Nom|Definite=Ind|Number=Plur	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 compound:prt	color:blue
1	Og	_	CCONJ	CONJ	_	6	cc	_	_
2	upp	_	ADP	RP	_	5	compound:prt	_	_
3	aftur	_	ADV	ADV	Degree=Pos	5	advmod	_	_
4	aðra	_	ADJ	ADJ-A	Case=Acc|Degree=Pos	5	amod	_	_
5	ferð	_	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	6	obl	_	_
6	kom	_	VERB	VBDI	Mood=Ind|Tense=Past	0	root	_	_
7	ein	_	DET	ONE-N	Case=Nom	8	det	_	_
8	rödd	_	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	6	nsubj	_	_
9	til	_	ADP	P	_	10	case	_	_
10	hansara	_	PRON	PRO-G	Case=Gen	6	obl	_	SpaceAfter=No
11	:	:	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 compound:prt	color:blue
1	Og	_	CCONJ	CONJ	_	9	cc	_	_
2	tá	_	ADV	ADV	Degree=Pos	9	advmod	_	_
3	ið	_	SCONJ	C	_	6	mark	_	_
4	hann	_	PRON	PRO-N	Case=Nom	6	nsubj	_	_
5	hevði	_	AUX	HVDI	Mood=Ind|Tense=Past	6	aux	_	_
6	fingið	_	VERB	VBN	Tense=Past|VerbForm=Part	2	advcl	_	_
7	bitan	_	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	fór	_	VERB	VBDI	Mood=Ind|Tense=Past	0	root	_	_
10	Sátan	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	_
11	inn	_	ADP	RP	_	13	compound:prt	_	_
12	í	_	ADP	P	_	13	case	_	_
13	hann	_	PRON	PRO-A	Case=Acc	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


