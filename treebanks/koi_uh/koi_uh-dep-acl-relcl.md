---
layout: base
title:  'Statistics of acl:relcl in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-acl.html">acl</a></tt>.

3 nodes (0%) are attached to their parents as `acl:relcl`.

2 instances of `acl:relcl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl:relcl	color:blue
1	Мортлӧ	морт	NOUN	N	Animacy=Anim|Case=Dat|Number=Sing	4	obl	_	GTtags=N,Sem/Ani,Sg,Dat
2	пыр	пыр	ADV	Adv	_	4	advmod:tmod	_	GTtags=Adv
3	овлӧ	овлыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	4	cop	_	GTtags=V,IV,Ind,Prs,Sg3
4	долыт	долыт	ADJ	A	_	0	root	_	GTtags=A|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	GTtags=CLB
6	кӧр	кӧр	ADV	Adv	_	8	mark	_	GTtags=Adv
7	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
8	локтас	локны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	4	advcl:tmod	_	GTtags=V,Ind,Fut,Sg3
9	сэтшӧм	сэтшӧм	ADJ	Adn	PronType=Dem	10	amod	_	GTtags=Adn,Dem
10	пельӧсокӧ	пельӧс	NOUN	N	Case=Ill|Derivation=Dimin|Number=Sing	8	obl:lmod	_	GTtags=N,Der/Ок,Der/Dimin,N,Sg,Ill|SpaceAfter=No
11	,	,	PUNCT	CLB	_	13	punct	_	GTtags=CLB
12	кӧда	кӧда	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	13	nsubj	_	GTtags=Pron,Rel,Sg,Nom
13	чужтӧ	чужтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=2	10	acl:relcl	_	GTtags=V,TV,Ind,Prs,Sg3
14	памятяс	памятяс	NOUN	_	_	13	obl:lmod	_	_
15	приятнӧй	приятнӧй	ADJ	A	_	16	amod	_	GTtags=A
16	касьтылӧм	касьтылӧм	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	13	obj	_	GTtags=N,Sem/Inanim,Sg,Nom|SpaceAfter=No
17	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl:relcl	color:blue
1	Сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	ӧвтыштіс	ӧвтыштны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	мелань	ме	PRON	Pron	Case=Apr|Number=Sing|Person=1|PronType=Prs	2	obl:lmod	_	GTtags=Pers,Sg1,Apr
4	кинас	ки	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Sg,Ins,PxSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	тшӧктіс	тшӧктыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,Sg3
7	онмӧссьыны	онмӧссьыны	VERB	V	VerbForm=Inf	6	xcomp:ds	_	GTtags=Inf
8	и	и	CCONJ	CC	_	9	cc	_	_
9	муніс	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,Sg3
10	керку	керку	NOUN	N	Case=Nom|Number=Sing	9	obl:lmod	_	GTtags=Sg,Nom
11	бокӧ	бокӧ	ADP	Adp	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	10	case	_	GTtags=Po,Spat,Sg,Ill|SpaceAfter=No
12	,	,	PUNCT	CLB	_	14	punct	_	_
13	кытӧн	кытӧн	ADV	Adv	AdvType=Loc|Case=Ine|PronType=Rel	14	mark	_	GTtags=Spat,Ine,Rel
14	мудьӧт	мудьӧт	NOUN	N	Case=Nom|Number=Sing	10	acl:relcl	_	GTtags=Sg,Nom
15	вылын	вылын	ADP	Adp	AdpType=Post|AdvType=Loc|Case=Ine|Number=Sing	14	case	_	GTtags=Po,Spat,Sg,Ine
16	сылӧн	сія	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	14	obl	_	GTtags=Pers,Sg3,Gen
17	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	14	cop	_	GTtags=Ind,Prt1,Sg1
18	ольпась	ольпась	NOUN	N	Case=Nom|Number=Sing	14	nsubj:cop	_	GTtags=Sg,Nom|SpaceAfter=No
19	:	:	PUNCT	CLB	_	20	punct	_	_
20	перина	перина	NOUN	N	Case=Nom|Number=Sing	18	appos	_	GTtags=Sg,Nom
21	туйӧ	туй	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	23	obl	_	GTtags=Sg,Nom,PxSg1
22	кыза	кыза	ADV	Adv	_	23	advmod	_	_
23	вӧвдӧм	вӧвдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt2	24	acl	_	GTtags=Ind,Prt2,Sg3
24	турун	турун	NOUN	N	Case=Nom|Number=Sing	20	nmod	_	GTtags=Sg,Nom|SpaceAfter=No
25	,	,	PUNCT	CLB	_	27	punct	_	_
26	а	а	CCONJ	CC	_	27	cc	_	_
27	юрӧдзас	юрӧдз	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	conj	_	GTtags=Sg,Ine,PxSg3
28	—	—	PUNCT	PUNCT	_	29	punct	_	_
29	пешорка	пешорка	NOUN	N	Case=Nom|Number=Sing	27	nsubj:cop	_	GTtags=Sg,Nom|SpaceAfter=No
30	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


