---
layout: base
title:  'Statistics of case in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `case`

This relation is universal.

15 nodes (2%) are attached to their parents as `case`.

15 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `case`: <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-ADP.html">ADP</a></tt> (6; 40% instances), <tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_tuecl-pos-ADP.html">ADP</a></tt> (3; 20% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-ADP.html">ADP</a></tt> (3; 20% instances), <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_tuecl-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="uz_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uz_tuecl-pos-ADP.html">ADP</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	akasi	aka	NOUN	_	Case=Nom|Number=Sing|Poss=Yes	4	obl	_	_
3	bilan	bilan	ADP	_	_	2	case	_	_
4	yarashdi	yarash	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	7	nsubj	_	_
2	oʻzi	oʻzi	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	compound	_	_
3	bilan	bilan	ADP	_	_	2	case	_	_
4	oʻzi	oʻzi	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	obl	_	_
5	boʻlishni	boʻl	VERB	_	Case=Acc|VerbForm=Vnoun	7	xcomp	_	_
6	yaxshi	yaxshi	ADJ	_	_	7	compound:lvc	_	_
7	koʻradi	koʻr	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	U	u	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	juda	juda	ADV	_	_	3	advmod	_	_
3	tez	tez	ADV	_	_	4	advmod	_	_
4	yugurgani	yugur	VERB	_	Number=Sing|Person=3|VerbForm=Part	7	advcl	_	_
5	uchun	uchun	ADP	_	_	4	case	_	_
6	yeta	yet	VERB	_	VerbForm=Conv	7	compound	_	_
7	olmadim	ol	VERB	_	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


