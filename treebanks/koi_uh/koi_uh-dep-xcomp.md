---
layout: base
title:  'Statistics of xcomp in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="koi_uh-dep-xcomp-ds.html">xcomp:ds</a></tt>.

9 nodes (1%) are attached to their parents as `xcomp`.

7 instances of `xcomp` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44444444444444.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (8; 89% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 xcomp	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	GTtags=Pron,Pers,Sg1,Nom|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	GTtags=CLB
3	вонӧ	вон	NOUN	N	Animacy=Anim|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	9	vocative	_	GTtags=N,Sem/Ani,Sg,Nom,PxSg1|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	GTtags=CLB
5	тожӧ	тожӧ	ADV	Adv	_	1	advmod	_	GTtags=Adv
6	эд	оз	AUX	V	Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Past	9	aux:neg	_	GTtags=V,Neg,Ind,Prt1,Pl2
7	овны	овны	VERB	V	VerbForm=Inf	9	xcomp	_	GTtags=V,IV,Inf
8	ог	оз	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	9	aux:neg	_	GTtags=V,Neg,Ind,Prs,Sg1
9	вермы	вермыны	VERB	V	Connegative=Yes	0	root	_	GTtags=V,IV,ConNeg
10	Льӧмваыстӧг	Льӧмва	NOUN	N	Case=Abe|Number=Sing|Number[psor]=Sing|Person[psor]=3|Variant=Vclause	9	obl	_	GTtags=N,Prop,Sem/Plc,Sg,Car,PxSg3,So/PC|SpaceAfter=No
11	.	.	PUNCT	CLB	_	9	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Петя	Петя	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	2	nsubj	_	GTtags=Prop,Sem/Ant-Mal,Sg,Nom
2	кольччис	кольччыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	керкутöг	керку	NOUN	N	Animacy=Inan|Case=Abe|Number=Sing|Variant=Vclause	2	xcomp	_	GTtags=Sem/Inanim,Sg,Car|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


