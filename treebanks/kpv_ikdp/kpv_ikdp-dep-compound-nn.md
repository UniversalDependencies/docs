---
layout: base
title:  'Statistics of compound:nn in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `compound:nn`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-compound.html">compound</a></tt>.

6 nodes (0%) are attached to their parents as `compound:nn`.

6 instances of `compound:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 3 pairs of parts of speech are connected with `compound:nn`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 50% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (2; 33% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-X.html">X</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:nn	color:blue
1	Рӧдитчи	рӧдитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	GTtags=Refl,Ind,Prt1,Err/Dial,Sg3
2	Пустыня	Пустыня	NOUN	N	Case=Nom|Number=Sing	3	compound:nn	_	GTtags=Prop,Sem/Plc,Sem/Plc,Sg,Nom
3	грездын	грезд	NOUN	N	Case=Ine|Number=Sing	1	obl:lmod	_	GTtags=Sg,Ine|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	Краснобор	Краснобор	NOUN	N	Case=Nom|Number=Sing	6	compound:nn	_	GTtags=Prop,Sem/Plc,Sem/Plc,Sg,Nom
6	сикт	сикт	NOUN	N	Case=Nom|Number=Sing	3	appos	_	GTtags=Sg,Nom|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound:nn	color:blue
1	Из	из	PROPN	N	Case=Nom|Number=Sing	0	root	_	_
2	сайын	сайын	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	сыа	сыа	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	так	так	SCONJ	CS	_	10	mark	_	Lang=ru
6	что	что	ADP	Po	_	5	fixed	_	Lang=ru|SpaceAfter=No
7	,	,	PUNCT	CLB	_	6	punct	_	_
8	меам	ме	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	9	nmod	_	_
9	Салехард	Салехард	PROPN	N	Case=Nom|Number=Sing	10	compound:nn	_	_
10	местэыс	местӧ	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	conj	_	OrigLang=ru
11	тоже	тожӧ	PART	Pcle	_	10	advmod	_	OrigLang=ru
12	рӧднэй	рӧднӧй	ADJ	A	Case=Nom|Number=Sing	13	amod	_	OrigLang=ru
13	рӧдина	рӧдина	NOUN	N	Case=Nom|Number=Sing	10	nmod	_	OrigLang=ru
14	койд	койд	ADP	Po	_	13	case	_	SpaceAfter=No
15	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 compound:nn	color:blue
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
18	«	_	PUNCT	PUNCT	_	19	punct	_	SpaceAfter=No
19	международные	международные	X	_	Foreign=Yes	22	compound:nn	_	_
20	отношения	отношения	X	_	Foreign=Yes	19	flat:foreign	_	SpaceAfter=No
21	»	_	PUNCT	PUNCT	_	19	punct	_	_
22	специальность	специальность	NOUN	N	Case=Nom|Number=Sing	16	appos	_	GTtags=Sg,Nom|SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


