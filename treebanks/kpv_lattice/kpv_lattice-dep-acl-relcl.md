---
layout: base
title:  'Statistics of acl:relcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-acl.html">acl</a></tt>.

18 nodes (1%) are attached to their parents as `acl:relcl`.

18 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.61111111111111.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (12; 67% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 acl:relcl	color:blue
1	Мортлы	морт	NOUN	N	Case=Dat|Number=Sing	3	obl	_	GTtags=N,Sg,Dat
2	пыр	пыр	ADV	Adv	_	3	advmod:tmod	_	GTtags=Adv
3	овлӧ	овлыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	0	root	_	GTtags=V,IV,Ind,Prs,Sg3
4	долыд	долыд	ADJ	A	Case=Nom|Number=Sing	3	nsubj	_	GTtags=A,Sg,Nom|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	GTtags=CLB
6	кор	кор	ADV	Adv	PronType=Rel	9	advmod:tmod	_	GTtags=Adv,Rel,Temp
7	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
8	выльысь	выльысь	ADV	Adv	NumType=Mult	9	advmod:tmod	_	GTtags=Adv,Iter
9	воӧ	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	3	conj	_	GTtags=V,IV,Ind,Prs,Sg3
10	важ	важ	ADJ	A	Case=Nom|Number=Sing	11	amod	_	GTtags=A,Sg,Nom
11	тӧдсаинӧ	тӧдсаин	NOUN	N	Case=Ill|Number=Sing	9	obl	_	GTtags=N,Sg,Ill|SpaceAfter=No
12	,	,	PUNCT	CLB	_	15	punct	_	GTtags=CLB
13	коді	коді	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	15	nsubj	_	GTtags=Pron,Rel,Sg,Nom
14	паметяд	паметь	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=2	15	obl	_	GTtags=N,Sg,Ill,PxSg2
15	чужтӧ	чужтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=2	11	acl:relcl	_	GTtags=V,TV,Ind,Prs,Sg3
16	приятнӧй	приятнӧй	ADJ	A	Case=Nom|Number=Sing	17	amod	_	GTtags=A,Sg,Nom
17	казьтылӧм	казьтылӧм	NOUN	N	Case=Nom|Number=Sing	15	obj	_	GTtags=N,Sg,Nom|SpaceAfter=No
18	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 acl:relcl	color:blue
1	Быд	быд	PRON	Pron	PronType=Tot	2	det	_	_
2	колхозник	колхозник	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	_
3	да	да	CCONJ	CC	_	4	cc	_	_
4	колхозница	колхозница	NOUN	N	Case=Nom|Number=Sing	2	conj	_	_
5	обязанӧсь	обязан	ADJ	A	Case=Nom|Number=Plur	0	root	_	_
6	тышкасьны	тышкасьны	VERB	V	VerbForm=Inf	5	advcl	_	_
7	сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
8	вӧсна	вӧсна	ADP	Po	_	7	case	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	14	punct	_	_
10	медым	медым	SCONJ	CS	_	14	mark	_	_
11	му	му	NOUN	N	Case=Nom|Number=Sing	14	obl:lmod	_	_
12	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	11	case	_	_
13	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	14	aux:neg	_	_
14	коль	кольны	VERB	V	Connegative=Yes	7	acl:relcl	_	_
15	ниӧти	ниӧти	PRON	Pro	Case=Nom|Number=Sing|Polarity=Neg	16	det	_	_
16	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	14	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	CLB	_	20	punct	_	_
18	быдӧнлы	быдӧн	PRON	Pron	Case=Dat|Number=Sing|PronType=Tot	20	obl	_	_
19	должен	должен	ADJ	N	Case=Nom|Number=Sing	20	advmod	_	_
20	лоны	лоны	VERB	V	VerbForm=Inf	5	conj	_	_
21	гӧгӧрвоана	гӧгӧрвоана	ADV	Adv	_	20	advmod	_	SpaceAfter=No
22	,	,	PUNCT	CLB	_	27	punct	_	_
23	мый	мый	SCONJ	CS	_	27	mark	_	_
24	быд	быд	PRON	Pron	PronType=Tot	25	det	_	_
25	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	27	nsubj	_	_
26	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	25	compound	_	_
27	сьӧктаммӧдӧ	сьӧктаммӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	21	acl:relcl	_	_
28	колхозниклысь	колхозник	NOUN	N	Case=Abl|Number=Sing	29	nmod	_	_
29	трудоденьсӧ	трудодень	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	27	obj	_	SpaceAfter=No
30	,	,	PUNCT	CLB	_	32	punct	_	_
31	унджык	унджык	ADV	Adv	_	32	advmod	_	_
32	воӧ	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	27	conj	_	_
33	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	32	nsubj	_	_
34	трудодень	трудодень	NOUN	N	Case=Nom|Number=Sing	32	obl	_	_
35	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	34	case	_	SpaceAfter=No
36	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 27 acl:relcl	color:blue
1	Быд	быд	PRON	Pron	PronType=Tot	2	det	_	_
2	колхозник	колхозник	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	_
3	да	да	CCONJ	CC	_	4	cc	_	_
4	колхозница	колхозница	NOUN	N	Case=Nom|Number=Sing	2	conj	_	_
5	обязанӧсь	обязан	ADJ	A	Case=Nom|Number=Plur	0	root	_	_
6	тышкасьны	тышкасьны	VERB	V	VerbForm=Inf	5	advcl	_	_
7	сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
8	вӧсна	вӧсна	ADP	Po	_	7	case	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	14	punct	_	_
10	медым	медым	SCONJ	CS	_	14	mark	_	_
11	му	му	NOUN	N	Case=Nom|Number=Sing	14	obl:lmod	_	_
12	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	11	case	_	_
13	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	14	aux:neg	_	_
14	коль	кольны	VERB	V	Connegative=Yes	7	acl:relcl	_	_
15	ниӧти	ниӧти	PRON	Pro	Case=Nom|Number=Sing|Polarity=Neg	16	det	_	_
16	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	14	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	CLB	_	20	punct	_	_
18	быдӧнлы	быдӧн	PRON	Pron	Case=Dat|Number=Sing|PronType=Tot	20	obl	_	_
19	должен	должен	ADJ	N	Case=Nom|Number=Sing	20	advmod	_	_
20	лоны	лоны	VERB	V	VerbForm=Inf	5	conj	_	_
21	гӧгӧрвоана	гӧгӧрвоана	ADV	Adv	_	20	advmod	_	SpaceAfter=No
22	,	,	PUNCT	CLB	_	27	punct	_	_
23	мый	мый	SCONJ	CS	_	27	mark	_	_
24	быд	быд	PRON	Pron	PronType=Tot	25	det	_	_
25	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	27	nsubj	_	_
26	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	25	compound	_	_
27	сьӧктаммӧдӧ	сьӧктаммӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	21	acl:relcl	_	_
28	колхозниклысь	колхозник	NOUN	N	Case=Abl|Number=Sing	29	nmod	_	_
29	трудоденьсӧ	трудодень	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	27	obj	_	SpaceAfter=No
30	,	,	PUNCT	CLB	_	32	punct	_	_
31	унджык	унджык	ADV	Adv	_	32	advmod	_	_
32	воӧ	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	27	conj	_	_
33	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	32	nsubj	_	_
34	трудодень	трудодень	NOUN	N	Case=Nom|Number=Sing	32	obl	_	_
35	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	34	case	_	SpaceAfter=No
36	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


