---
layout: base
title:  'Statistics of cop in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `cop`

This relation is universal.

32 nodes (3%) are attached to their parents as `cop`.

32 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.125.

The following 5 pairs of parts of speech are connected with `cop`: <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-AUX.html">AUX</a></tt> (13; 41% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-AUX.html">AUX</a></tt> (11; 34% instances), <tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_tuecl-pos-AUX.html">AUX</a></tt> (5; 16% instances), <tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_tuecl-pos-AUX.html">AUX</a></tt> (2; 6% instances), <tt><a href="uz_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uz_tuecl-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Uning	u	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	buvisi	buvi	NOUN	_	Case=Nom|Number=Sing|Poss=Yes	3	nsubj	_	_
3	hamshira	hamshira	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
4	edi	edi	AUX	_	Tense=Past	3	cop	_	SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Oysha	Oysha	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	bu	bu	DET	_	PronType=Dem	3	det	_	_
3	kitobni	kitob	NOUN	_	Case=Acc|Number=Sing	4	obj	_	_
4	oʻqimagan	oʻqi	VERB	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
5	emas	emas	AUX	_	Polarity=Neg	4	cop	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
1	Bozorda	bozor	NOUN	_	Case=Loc|Number=Sing	3	obl	_	_
2	meva	meva	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	bor	bor	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	lekin	lekin	CCONJ	_	_	6	cc	_	_
6	chiroyli	chiroyli	ADJ	_	_	3	conj	_	_
7	emas	emas	AUX	_	_	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


