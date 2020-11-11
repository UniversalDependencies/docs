---
layout: base
title:  'Statistics of nsubj:cop in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-nsubj.html">nsubj</a></tt>.

9 nodes (1%) are attached to their parents as `nsubj:cop`.

5 instances of `nsubj:cop` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11111111111111.

The following 6 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="koi_uh-pos-NUM.html">NUM</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:cop	color:blue
1	Вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	3	cop	_	GTtags=V,IV,Ind,Prt1,Sg3
2	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj:cop	_	GTtags=Pron,Pers,Sg3,Nom
3	лажмытик	лажмытик	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	GTtags=CLB
5	пӧввезӧн	пӧв	NOUN	N	Case=Ins|Number=Plur	6	obl	_	GTtags=N,Pl,Ins
6	дорӧм	дорны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	GTtags=N,Sem/Inanim,Sg,Nom
7	ӧшына	ӧшын	NOUN	N	Derivation=ProprietiveMod|Number=Sing	3	conj	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	GTtags=CLB
9	крышатӧм	крыша	NOUN	_	_	3	conj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:cop	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:cop	_	GTtags=Pron,Pers,Sg1,Nom
2	татӧн	татӧн	ADV	Adv	_	4	advmod:lmod	_	GTtags=Adv
3	не	не	AUX	Pcle	_	4	aux:neg	_	GTtags=Pcle
4	ӧтнам	ӧтнам	ADV	Adv	_	0	root	_	GTtags=Adv|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 29 nsubj:cop	color:blue
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


