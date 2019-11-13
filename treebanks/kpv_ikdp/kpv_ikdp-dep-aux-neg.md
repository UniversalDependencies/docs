---
layout: base
title:  'Statistics of aux:neg in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-aux.html">aux</a></tt>.

17 nodes (1%) are attached to their parents as `aux:neg`.

15 instances of `aux:neg` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23529411764706.

The following 3 pairs of parts of speech are connected with `aux:neg`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (14; 82% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (2; 12% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:neg	color:blue
1	Так	так	PART	Pcle	_	8	mark	_	Lang=Rus
2	что	что	PRON	Pron	_	1	fixed	_	Lang=Rus|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	никучем	никутшӧм	ADV	Adv	Polarity=Neg	5	advmod	_	_
5	иностраннэй	иностраннӧй	ADJ	A	Case=Nom|Number=Sing	6	advmod	_	Lang=Mixed
6	местаясэ	места	NOUN	N	Case=Ill|Number=Plur	8	obl	_	Lang=Mixed
7	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	8	aux:neg	_	_
8	ветлоо	ветлыны	VERB	V	Connegative=Yes|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux:neg	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	Lang=Mixed
2	тятеис	тятей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	GTtags=Sg,Nom,PxSg3
3	потанас	потан	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Sg,Ine,PxSg3
4	из	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
5	вӧв	вӧвны	AUX	V	Connegative=Yes|Number=Sing	2	aux	_	GTtags=IV,ConNeg|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:neg	color:blue
1	Пока	пока	ADV	Adv	_	2	advmod	_	_
2	лёк	лёк	ADJ	A	Case=Nom|Number=Sing	0	root	_	_
3	из	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|VerbForm=Fin	2	aux:neg	_	_
4	ло	лоны	AUX	V	Connegative=Yes|Number=Sing	2	aux	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	но	но	CCONJ	CC	_	13	cc	_	Lang=Mixed|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	пока	пока	ADV	Adv	_	13	advmod	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	не	не	PART	Pcle	Polarity=Neg	11	advmod	_	Lang=Mixed
11	то	то	PART	Pcle	_	13	advmod	_	Lang=Mixed
12	что	что	PRON	Pron	_	11	goeswith	_	Lang=Rus
13	лёк-а	лёк	ADJ	A	Case=Nom|Number=Sing	2	conj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


