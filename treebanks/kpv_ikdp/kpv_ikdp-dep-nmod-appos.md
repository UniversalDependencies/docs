---
layout: base
title:  'Statistics of nmod:appos in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="kpv_ikdp-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="kpv_ikdp-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="kpv_ikdp-dep-nmod-prp.html">nmod:prp</a></tt>.

4 nodes (0%) are attached to their parents as `nmod:appos`.

4 instances of `nmod:appos` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 75% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-X.html">X</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:appos	color:blue
1	Рӧдитчи	рӧдитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	GTtags=Refl,Ind,Prt1,Err/Dial,Sg3
2	Пустыня	Пустыня	NOUN	N	Case=Nom|Number=Sing	3	nmod:appos	_	GTtags=Prop,Sem/Plc,Sem/Plc,Sg,Nom
3	грездын	грезд	NOUN	N	Case=Ine|Number=Sing	1	obl:lmod	_	GTtags=Sg,Ine|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	Краснобор	Краснобор	NOUN	N	Case=Nom|Number=Sing	6	nmod:appos	_	GTtags=Prop,Sem/Plc,Sem/Plc,Sg,Nom
6	сикт	сикт	NOUN	N	Case=Nom|Number=Sing	3	appos	_	GTtags=Sg,Nom|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 nmod:appos	color:blue
1	Удиті	удитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Err/Dial,Sg3
2	сэтэн	сэтӧн	ADV	Adv	_	1	advmod:lmod	_	GTtags=Err/Dial
3	на	на	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time
4	велэдчыны	велӧдчыны	VERB	V	VerbForm=Inf	1	xcomp	_	GTtags=Err/Dial,Refl,Inf
5	гимназияс	гимназия	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl:lmod	_	GTtags=Sg,Ine,PxSg3|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	гимназия	гимназия	NOUN	N	Case=Nom|Number=Sing	8	compound	_	GTtags=Sg,Nom
8	искусствын	искусствӧ	NOUN	N	Case=Ine|Number=Sing	5	appos	_	GTtags=Sg,Ine
9	Сыктывкарын	Сыктывкар	NOUN	N	Case=Ine|Number=Sing	8	appos	_	GTtags=Prop,Sem/Plc,Sem/Plc,Sg,Ine|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	13	punct	_	_
11	а	а	CCONJ	CC	_	13	cc	_	_
12	таво	таво	ADV	Adv	AdvType=Tim	13	advmod:tmod	_	GTtags=Sem/Time
13	помалі	помавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	1	conj	_	GTtags=Ind,Prt1,Err/Dial,Sg3
14	Сыктывкарса	сыктывкарса	ADJ	A	Case=Nom|Number=Sing	16	amod	_	GTtags=Sg,Nom
15	канму	канму	NOUN	N	Case=Nom|Number=Sing	16	compound	_	GTtags=Sg,Nom
16	университет	университет	NOUN	N	Case=Nom|Number=Sing	13	obj	_	GTtags=Sg,Nom|SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	19	punct	_	_
18	«	_	PUNCT	PUNCT	_	19	punct	_	|SpaceAfter=No
19	международные	международные	X	_	_	22	nmod:appos	_	_
20	отношения	отношения	X	_	_	19	flat:foreign	_	SpaceAfter=No
21	»	_	PUNCT	PUNCT	_	19	punct	_	_
22	специальность	специальность	NOUN	N	Case=Nom|Number=Sing	16	appos	_	GTtags=Sg,Nom|SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


