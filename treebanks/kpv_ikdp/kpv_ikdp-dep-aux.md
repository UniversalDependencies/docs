---
layout: base
title:  'Statistics of aux in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="kpv_ikdp-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="kpv_ikdp-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="kpv_ikdp-dep-aux-neg.html">aux:neg</a></tt>.

27 nodes (1%) are attached to their parents as `aux`.

25 instances of `aux` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51851851851852.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (24; 89% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (3; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Так	так	PART	Pcle	_	8	mark	_	Lang=ru
2	что	что	PRON	Pron	_	1	fixed	_	Lang=ru|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	никучем	никутшӧм	ADV	Adv	Polarity=Neg	5	advmod	_	_
5	иностраннэй	иностраннӧй	ADJ	A	Case=Nom|Number=Sing	6	amod	_	OrigLang=ru
6	местаясэ	места	NOUN	N	Case=Ill|Number=Plur	8	obl	_	OrigLang=ru
7	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres	8	aux	_	_
8	ветлоо	ветлыны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	OrigLang=ru
2	тятеис	тятей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	GTtags=Sg,Nom,PxSg3
3	потанас	потан	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Sg,Ine,PxSg3
4	из	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	2	aux	_	GTtags=Neg,Ind,Prt1,Sg3
5	вӧв	вӧвны	AUX	V	Connegative=Yes	2	aux	_	GTtags=IV,ConNeg|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


