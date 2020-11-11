---
layout: base
title:  'Statistics of aux:neg in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-aux.html">aux</a></tt>.

20 nodes (1%) are attached to their parents as `aux:neg`.

18 instances of `aux:neg` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 3 pairs of parts of speech are connected with `aux:neg`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (17; 85% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (2; 10% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (1; 5% instances).


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
5	иностраннэй	иностраннӧй	ADJ	A	Case=Nom|Number=Sing	6	amod	_	Lang=Mixed
6	местаясэ	места	NOUN	N	Case=Ill|Number=Plur	8	obl	_	Lang=Mixed
7	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres	8	aux:neg	_	_
8	ветлоо	ветлыны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
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
4	из	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	2	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
5	вӧв	вӧвны	AUX	V	Connegative=Yes	2	aux	_	GTtags=IV,ConNeg|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux:neg	color:blue
1	А	а	CCONJ	CC	_	6	cc	_	GTtags=CC|Lang=Mixed
2	эні	ӧні	ADV	Adv	_	6	advmod:tmod	_	GTtags=Adv
3	миян	ме	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	4	nmod	_	GTtags=Pron,Pers,Pl1,Gen
4	вӧлэсьтсюнум	вӧлэсьт	NOUN	N	Case=Ela|Number=Plur|Number[psor]=Sing|Person[psor]=1	5	nmod	_	GTtags=N,Sg,Ela,PxPl1|Lang=Mixed
5	ветлысь	ветлыны	VERB	V	Case=Nom|Derivation=Ysj|Number=Sing|PartForm=Pres|VerbForm=Part	6	nsubj	_	GTtags=V,IV,Der,Der/ысь,ActPrsPtc
6	никод	некод	PRON	Pron	Case=Nom|Number=Sing|Polarity=Neg	0	root	_	GTtags=Err/Dial,Pron,Neg,Sg,Nom
7	абу	абу	AUX	Pcle	Polarity=Neg	6	aux:neg	_	GTtags=V,Neg,Cop,Ind,Sg|SpaceAfter=No
8	.	.	PUNCT	CLB	_	6	punct	_	GTtags=CLB

~~~


