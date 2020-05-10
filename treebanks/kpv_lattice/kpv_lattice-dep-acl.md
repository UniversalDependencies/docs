---
layout: base
title:  'Statistics of acl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="kpv_lattice-dep-acl-relcl.html">acl:relcl</a></tt>.

26 nodes (1%) are attached to their parents as `acl`.

19 instances of `acl` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.80769230769231.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (20; 77% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 acl	color:blue
1	Колхозъясын	колхоз	NOUN	N	Case=Ine|Number=Plur	3	obl:lmod	_	_
2	ӧні	ӧні	ADV	Adv	_	3	advmod:tmod	_	_
3	мунӧ	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
5	воӧм	воны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
6	озыр	озыр	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
7	урожайсӧ	урожай	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
8	идралӧм	идравны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 acl	color:blue
1	Мед	мед	SCONJ	CS	_	10	mark	_	_
2	жӧ	жӧ	PART	Pcle	_	10	advmod	_	_
3	нин	нин	ADV	Adv	_	10	advmod:tmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	10	punct	_	_
5	мися	мися	PART	Pcle	_	10	advmod:mmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	кӧть	кӧть	SCONJ	CS	_	10	mark	_	_
8	кутшӧмкӧ	кутшӧм	PRON	Pron	PronType=Ind	9	det	_	_
9	тӧвру	тӧвру	NOUN	N	Case=Nom|Number=Sing	10	nsubj	_	_
10	пӧльыштлас	пӧльыштлыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	12	acl	_	SpaceAfter=No
11	,	,	PUNCT	CLB	_	12	punct	_	_
12	думайта	думайтны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
13	ас	ас	DET	Det	_	14	det	_	_
14	кежысь	кеж	NOUN	N	Case=Ela|Number=Sing	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	CLB	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Веськыдвылын	веськыдвылын	ADV	Adv	Case=Ine	12	advmod:lmod	_	GTtags=Adv,Ine|SpaceAfter=No
2	,	,	PUNCT	CLB	_	4	punct	_	GTtags=CLB
3	кӧні	кӧні	ADV	Adv	Case=Ine|Number=Sing|PronType=Rel	4	advmod:lmod	_	GTtags=Adv,Spat,Ine,Cop,Sg,Rel
4	тыдалӧны	тыдавны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Valency=1	1	acl	_	GTtags=V,IV,Ind,Prs,Pl3
5	пожӧмъяс	пожӧм	NOUN	N	Case=Nom|Number=Plur	4	nsubj	_	GTtags=N,Pl,Nom
6	да	да	CCONJ	CC	_	7	cc	_	GTtags=CC
7	видзторъяс	видзтор	NOUN	N	Case=Nom|Number=Plur	5	conj	_	GTtags=N,Pl,Nom|SpaceAfter=No
8	,	,	PUNCT	CLB	_	12	punct	_	GTtags=CLB
9	лог	лог	NOUN	N	Case=Nom|Number=Sing	12	obl	_	GTtags=N,Sg,Nom
10	дорын	дорын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	9	case	_	GTtags=Adp,Po,Sg,Ine
11	пыдын	пыдын	ADV	Adv	Case=Ine	12	advmod:lmod	_	GTtags=Adv,Ine
12	сулалӧны	сулавны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Valency=1	0	root	_	GTtags=V,IV,Ind,Prs,Pl3
13	куим	куим	NUM	Num	Case=Nom|Number=Sing|NumType=Card	15	nummod	_	GTtags=Num,Card,Sg,Nom
14	пӧлыньтчӧм	пӧлыньтчыны	VERB	V	Case=Nom|Derivation=Oma|Number=Sing|Tense=Past|Valency=1|VerbForm=Part	15	acl	_	GTtags=V,Refl,Der,Der/ӧм,PastPtc
15	керка	керка	NOUN	N	Case=Nom|Number=Sing	12	nsubj	_	GTtags=N,Sg,Nom|SpaceAfter=No
16	,	,	PUNCT	CLB	_	18	punct	_	GTtags=CLB
17	кымынкӧ	кымынкӧ	ADV	Adv	_	18	advmod	_	GTtags=Pron,Indef
18	сарай	сарай	NOUN	N	Case=Nom|Number=Sing	15	conj	_	GTtags=N,Sg,Nom
19	да	да	CCONJ	CC	_	20	cc	_	GTtags=CC
20	вевтӧдзыс	вевт	NOUN	N	Case=Ter|Number=Sing|Number[psor]=Sing|Person[psor]=3	22	obl	_	GTtags=N,Sg,Ter,PxSg3
21	муӧ	му	NOUN	N	Case=Ill|Number=Sing	22	obl	_	GTtags=N,Sg,Ill
22	вӧйӧм	вӧйны	VERB	V	Case=Nom|Derivation=Oma|Number=Sing|Tense=Past|Valency=1|VerbForm=Part	24	acl	_	GTtags=V,IV,Der,Der/ӧм,PastPtc
23	важ	важ	ADJ	A	Case=Nom|Number=Sing	24	amod	_	GTtags=A,Sg,Nom
24	пывсян	пывсян	NOUN	N	Case=Nom|Number=Sing	15	conj	_	GTtags=N,Sg,Nom|SpaceAfter=No
25	.	.	PUNCT	CLB	_	12	punct	_	GTtags=CLB

~~~


