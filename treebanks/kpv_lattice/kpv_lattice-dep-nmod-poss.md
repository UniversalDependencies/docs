---
layout: base
title:  'Statistics of nmod:poss in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 6 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="kpv_lattice-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lfrom.html">nmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-nmod-obj.html">nmod:obj</a></tt>, <tt><a href="kpv_lattice-dep-nmod-subj.html">nmod:subj</a></tt>.

38 nodes (0%) are attached to their parents as `nmod:poss`.

37 instances of `nmod:poss` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63157894736842.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (19; 50% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (13; 34% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Сылӧн	сійӧ	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg3,Gen
2	кывбуръяс	кывбур	NOUN	N	Case=Nom|Number=Plur	4	nsubj	_	GTtags=Pl,Nom
3	сідзжӧ	сідзжӧ	ADV	Adv	_	4	advmod:mmod	_	_
4	пырисны	пырны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Pl3
5	«	«	PUNCT	PUNCT	_	7	punct	_	GTtags=LEFT|SpaceAfter=No
6	Парма	Парма·гор	NOUN	N	Case=Nom|Number=Sing	7	nmod	_	GTtags=Prop,Sem/Txt,Sg,Nom
7	гор	_	NOUN	N	_	9	nmod	_	SpaceAfter=No
8	»	»	PUNCT	PUNCT	_	7	punct	_	GTtags=RIGHT
9	гижӧд	гижӧд	NOUN	N	Case=Nom|Number=Sing	10	nmod	_	GTtags=Sg,Nom
10	чукӧрӧ	чукӧр	NOUN	N	Case=Ill|Number=Sing	4	obl:lmod	_	GTtags=Sg,Ill|SpaceAfter=No
11	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	Уличпӧлӧнса	Уличпӧлӧнса	ADJ	A	Case=Nom|Number=Sing	2	amod	_	GTtags=Sg,Nom
2	пуяслӧн	пу	NOUN	N	Case=Gen|Number=Plur	4	nmod:poss	_	GTtags=Pl,Gen
3	ув	ув	NOUN	N	Case=Nom|NounType=Relat|Number=Sing	4	nmod	_	GTtags=Relat,Sg,Nom
4	вож	вож	NOUN	N	Case=Nom|Number=Sing	6	obl:lmod	_	GTtags=Sg,Nom
5	вылын	вылын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	4	case	_	GTtags=Po,Sg,Ine
6	пукаліс	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Sg3
7	лыдтӧм	лыдтӧм	ADJ	A	Case=Nom|Number=Sing	10	amod	_	GTtags=N,Der,Der/тӧм,Sg,Nom
8	-	-	PUNCT	_	_	7	punct	_	_
9	тшӧттӧм	тшӧттӧм	ADJ	A	_	7	conj	_	_
10	пышкай	пышкай	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 44 39 nmod:poss	color:blue
1	Бырӧдӧм	бырӧдны	VERB	V	Tense=Past|VerbForm=Part	2	acl	_	GTtags=TV,Der,Der/ӧм,PastPtc
2	яг	яг	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	GTtags=Sg,Nom
3	местаын	места	NOUN	N	Case=Ine|Number=Sing	20	obl:lmod	_	GTtags=Sg,Ine|SpaceAfter=No
4	,	,	PUNCT	CLB	_	9	punct	_	_
5	тшан	тшан	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	GTtags=Sg,Nom
6	кызта	кызта	NOUN	N	Case=Nom|Number=Sing	9	amod	_	GTtags=Sg,Nom
7	сьӧдӧдӧм	сьӧдӧдны	VERB	V	Tense=Past|VerbForm=Part	9	nmod	_	GTtags=IV,Der,Der/ӧм,PastPtc
8	пожӧм	пожӧм	NOUN	N	Case=Nom|Number=Sing	9	nmod	_	GTtags=Sg,Nom
9	мыръяс	мыр	NOUN	N	Case=Nom|Number=Plur	3	appos	_	GTtags=Pl,Nom
10	гӧгӧр	гӧгӧр	ADP	Adp	AdpType=Post|Case=Nom|Number=Sing	9	case	_	GTtags=Po,Sg,Nom|SpaceAfter=No
11	,	,	PUNCT	CLB	_	15	punct	_	_
12	a	а	CCONJ	CC	_	15	cc	_	_
13	тшӧтш	тшӧтш	ADV	Adv	_	15	advmod:foc	_	_
14	и	и	ADV	Adv	_	15	advmod:foc	_	_
15	мыръяс	мыр	NOUN	N	Case=Nom|Number=Plur	9	conj	_	GTtags=Pl,Nom
16	вылас	вылӧ	ADP	Adp	AdpType=Post|Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	case	_	GTtags=Po,Sg,Ill,PxSg3
17	нин	нин	ADV	Adv	AdvType=Tim	15	advmod:emph	_	GTtags=Temp|SpaceAfter=No
18	,	,	PUNCT	CLB	_	15	punct	_	_
19	ӧні	ӧні	ADV	Adv	_	20	advmod:tmod	_	_
20	пуритӧ	пуритны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=IV,Ind,Prs,Sg3,Cmp/Serial,Cmp
21	-	-	PUNCT	PUNCT	_	20	punct	_	_
22	быдмӧ	быдмыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	20	conj	_	GTtags=IV,Ind,Prs,Sg3
23	пипу	пипу	NOUN	N	Case=Nom|Number=Sing	20	nsubj	_	GTtags=Sg,Nom
24	да	да	CCONJ	CC	_	25	cc	_	_
25	кыдз	кыдз	NOUN	N	Case=Nom|Number=Sing	23	conj	_	GTtags=Sg,Nom|SpaceAfter=No
26	,	,	PUNCT	CLB	_	30	punct	_	_
27	a	а	CCONJ	CC	_	30	cc	_	_
28	коді	коді	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	30	nsubj	_	GTtags=Interr,Sg,Nom
29	и	и	ADV	Adv	_	30	advmod:foc	_	_
30	петалӧма	петавны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	20	conj	_	GTtags=IV,Der,Der/ӧм,PastPtc,N,Sg,Nom
31	шочиник	шочиник	ADJ	A	Case=Nom|Number=Sing	32	amod	_	GTtags=Sg,Nom
32	пожӧмыс	пожӧм	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	30	obl	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
33	,	,	PUNCT	CLB	_	35	punct	_	_
34	ставыс	став	PRON	Pron	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	35	nsubj	_	GTtags=Pron,Sg,Nom,PxSg3
35	посньыдикӧсь	посньыдик	ADJ	A	Number=Plur	30	conj	_	GTtags=Cop,Pl|SpaceAfter=No
36	,	,	PUNCT	CLB	_	51	punct	_	_
37	и	и	CCONJ	CC	_	39	cc:preconj	_	_
38	том	том	ADJ	A	Case=Nom|Number=Sing	39	amod	_	GTtags=Sg,Nom
39	пипулӧн	пипу	NOUN	N	Case=Gen|Number=Sing	44	nmod:poss	_	GTtags=Sg,Gen
40	и	и	CCONJ	CC	_	41	cc	_	_
41	кыдзлӧн	кыдз	NOUN	N	Case=Gen|Number=Sing	39	conj	_	GTtags=Sg,Gen
42	гажаа	гажаа	ADV	Adv	_	43	advmod:mmod	_	_
43	сярвидзысь	сярвидзны	VERB	V	Derivation=NomAg	44	acl	_	GTtags=IV,Der,Der/ысь,ActPrsPtc
44	веж	веж	ADJ	A	Case=Nom|Number=Sing	49	amod	_	GTtags=Sg,Nom|SpaceAfter=No
45	,	,	PUNCT	CLB	_	49	punct	_	_
46	паськыд	паськыд	ADJ	A	Case=Nom|Number=Sing	49	amod	_	GTtags=Sg,Nom
47	да	да	CCONJ	CC	_	48	cc	_	_
48	тшӧг	тшӧг	NOUN	N	Case=Nom|Number=Sing	46	conj	_	GTtags=Sg,Nom
49	корйыс	кор	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	51	nsubj	_	GTtags=Sg,Nom,PxSg3
50	топыда	топыда	ADV	Adv	_	51	amod	_	_
51	вевттьӧма	вевттьыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	20	conj	_	GTtags=TV,Ind,Prt2,Sg3
52	-	-	PUNCT	PUNCT	_	51	punct	_	_
53	сайӧдӧма	сайӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	51	conj	_	GTtags=TV,Ind,Prt2,Sg3,Cmp/Serial,Cmp
54	нэриник	нэриник	ADJ	A	Case=Nom|Number=Sing	55	amod	_	GTtags=Der,Der/Иник,Sg,Nom
55	пожӧмъясӧс	пожӧм	NOUN	N	Case=Acc|Number=Plur	51	obj	_	GTtags=Pl,Acc
56	шонді	шонді	NOUN	N	Case=Nom|Number=Sing	57	nmod	_	GTtags=Sg,Nom
57	югыдысь	югыд	NOUN	N	Case=Ela|Number=Sing	51	obl	_	GTtags=Sg,Ela|SpaceAfter=No
58	.	.	PUNCT	CLB	_	20	punct	_	_

~~~


