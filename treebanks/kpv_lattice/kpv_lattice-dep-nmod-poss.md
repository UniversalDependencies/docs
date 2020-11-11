---
layout: base
title:  'Statistics of nmod:poss in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-comp.html">nmod:comp</a></tt>.

13 nodes (0%) are attached to their parents as `nmod:poss`.

13 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (9; 69% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 15% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	Уличпӧлӧнса	Уличпӧлӧнса	ADJ	A	Case=Nom|Number=Sing	2	amod	_	GTtags=Sg,Nom
2	пуяслӧн	пу	NOUN	N	Case=Gen|Number=Plur	4	nmod:poss	_	GTtags=Pl,Gen
3	ув	ув	NOUN	N	Case=Nom|Number=Sing	4	nmod	_	GTtags=Relat,Sg,Nom
4	вож	вож	NOUN	N	Case=Nom|Number=Sing	6	obl:lmod	_	GTtags=Sg,Nom
5	вылын	вылын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	4	case	_	GTtags=Po,Sg,Ine
6	пукаліс	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Sg3
7	лыдтӧм	лыдтӧм	ADJ	A	Case=Nom|Derivation=PrivMod|Number=Sing	10	amod	_	GTtags=N,Der,Der/тӧм,Sg,Nom
8	-	-	PUNCT	_	_	7	punct	_	_
9	тшӧттӧм	тшӧттӧм	ADJ	A	_	7	conj	_	_
10	пышкай	пышкай	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Сылӧн	сійӧ	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg3,Gen
2	кывбуръяс	кывбур	NOUN	N	Case=Nom|Number=Plur	4	nsubj	_	GTtags=Pl,Nom
3	сідзжӧ	сідзжӧ	ADV	Adv	_	4	advmod	_	_
4	пырисны	пырны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Pl3
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nmod:poss	color:blue
1	Вӧр	вӧр·лэдзысь	NOUN	N	Case=Nom|Number=Sing	2	obj	_	GTtags=Sg,Nom
2	лэдзысьяслӧн	лэдзысь	VERB	V	Derivation=NomAg|Valency=2	6	nmod:poss	_	GTtags=TV,Der,Der/ысь,ActPrsPtc
3	пельк	пельк	ADJ	A	Case=Nom|Number=Sing	6	amod	_	GTtags=Sg,Nom
4	да	да	CCONJ	CC	_	5	cc	_	_
5	кужысь	кужны	VERB	V	Derivation=NomAg|Valency=2	3	conj	_	GTtags=TV,Der,Der/ысь,ActPrsPtc
6	киясын	ки	NOUN	N	Case=Ine|Number=Plur	8	obl	_	GTtags=Pl,Ine
7	черъяс	чер	NOUN	N	Case=Nom|Number=Plur	8	nsubj	_	GTtags=Pl,Nom
8	увйӧны	увйыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,Pl3
9	найӧс	сійӧ	PRON	Pron	Case=Acc|Number=Plur|Person=3|PronType=Prs	8	obj	_	GTtags=Pers,Pl3,Acc|SpaceAfter=No
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	пилаяс	пила	NOUN	N	Case=Nom|Number=Plur	12	nsubj	_	GTtags=Pl,Nom
12	орйӧдлӧны	орйӧдлыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Valency=2	8	conj	_	GTtags=TV,Ind,Prs,Pl3|SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	_
14	и	и	CCONJ	CC	_	15	cc	_	_
15	артмӧны	артмыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Valency=1	8	conj	_	GTtags=IV,Ind,Prs,Pl3
16	мича	мича	ADJ	A	Case=Nom|Number=Sing	19	amod	_	GTtags=Sg,Nom
17	да	да	CCONJ	CC	_	18	cc	_	_
18	ён	ён	ADJ	A	Case=Nom|Number=Sing	16	conj	_	GTtags=Sg,Nom
19	керъяс	кер	NOUN	N	Case=Nom|Number=Plur	15	obj	_	GTtags=Pl,Nom
20	—	—	PUNCT	PUNCT	_	21	punct	_	_
21	гӧгрӧсӧсь	гӧгрӧс	ADJ	A	Number[subj]=Plur	19	conj	_	GTtags=Cop,Pl|SpaceAfter=No
22	,	,	PUNCT	CLB	_	23	punct	_	_
23	веськыдӧсь	веськыд	ADJ	A	Number[subj]=Plur	19	conj	_	GTtags=Cop,Pl|SpaceAfter=No
24	,	,	PUNCT	CLB	_	25	punct	_	_
25	тронякылӧны	тронякывны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Valency=1	19	conj	_	GTtags=IV,Ind,Prs,Pl3
26	чер	чер	NOUN	N	Case=Nom|Number=Sing	27	nmod	_	GTtags=Sg,Nom
27	тыш	тыш	NOUN	N	Case=Nom|Number=Sing	25	obl	_	GTtags=Sg,Nom
28	улын	улын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	27	case	_	GTtags=Po,Sg,Ine|SpaceAfter=No
29	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


