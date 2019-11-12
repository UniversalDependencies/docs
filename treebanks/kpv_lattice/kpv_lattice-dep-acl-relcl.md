---
layout: base
title:  'Statistics of acl:relcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-acl.html">acl</a></tt>.

18 nodes (1%) are attached to their parents as `acl:relcl`.

18 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (12; 67% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 acl:relcl	color:blue
1	Одсӧ	од	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obj	_	_
2	чинтытӧг	чинтыны	VERB	V	Derivation=Tog|VerbForm=Conv	6	advcl	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	шоферыс	шофёр	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
5	машинасӧ	машина	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
6	веськӧдіс	веськӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	ӧти	ӧти	NUM	Num	NumType=Card	9	nummod	_	_
8	татшӧм	татшӧм	DET	Det	Case=Nom|Number=Sing|PronType=Dem	9	det	_	_
9	переулокӧ	переулок	NOUN	N	Case=Ill|Number=Sing	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	коді	коді	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	15	nsubj	_	_
12	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	15	aux	_	_
13	зэв	зэв	ADV	Adv	_	14	advmod	_	_
14	крутӧя	крутӧя	ADV	Adv	_	15	advmod	_	_
15	кежӧ	кежны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 acl:relcl	color:blue
1	Быд	быд	PRON	Pron	PronType=Qnt	2	det	_	_
2	колхозник	колхозник	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	_
3	да	да	CCONJ	CC	_	4	cc	_	_
4	колхозница	колхозница	NOUN	N	Case=Nom|Number=Sing	2	conj	_	_
5	обязанӧсь	обязан	ADJ	A	Case=Nom|Number=Plur	0	root	_	_
6	тышкасьны	тышкасьны	VERB	V	VerbForm=Inf	5	advcl	_	_
7	сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
8	вӧсна	вӧсна	ADP	Po	_	7	case	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	медым	медым	SCONJ	CS	_	14	mark	_	_
11	му	му	NOUN	N	Case=Nom|Number=Sing	14	obl	_	_
12	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	11	case	_	_
13	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	14	aux:neg	_	_
14	коль	кольны	VERB	V	Connegative=Yes	7	acl:relcl	_	_
15	ниӧти	ниӧти	PRON	Pro	Case=Nom|Number=Sing|Polarity=Neg	16	det	_	_
16	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	14	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	CLB	_	18	punct	_	_
18	быдӧнлы	быдӧн	PRON	Pron	Case=Dat|Number=Sing	20	obl	_	_
19	должен	должен	ADJ	N	Case=Nom|Number=Sing	5	conj	_	_
20	лоны	лоны	VERB	V	VerbForm=Inf	19	xcomp	_	_
21	гӧгӧрвоана	гӧгӧрвоана	ADV	Adv	_	20	advmod	_	SpaceAfter=No
22	,	,	PUNCT	CLB	_	27	punct	_	_
23	мый	мый	SCONJ	CS	_	27	mark	_	_
24	быд	быд	PRON	Pron	PronType=Qnt	25	det	_	_
25	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	27	nsubj	_	_
26	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	25	compound	_	_
27	сьӧктаммӧдӧ	сьӧктаммӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	_
28	колхозниклысь	колхозник	NOUN	N	Case=Abl|Number=Sing	29	nmod	_	_
29	трудоденьсӧ	трудодень	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	27	obj	_	SpaceAfter=No
30	,	,	PUNCT	CLB	_	32	punct	_	_
31	унджык	унджык	ADV	Adv	_	32	advmod	_	_
32	воӧ	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	conj	_	_
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
1	Быд	быд	PRON	Pron	PronType=Qnt	2	det	_	_
2	колхозник	колхозник	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	_
3	да	да	CCONJ	CC	_	4	cc	_	_
4	колхозница	колхозница	NOUN	N	Case=Nom|Number=Sing	2	conj	_	_
5	обязанӧсь	обязан	ADJ	A	Case=Nom|Number=Plur	0	root	_	_
6	тышкасьны	тышкасьны	VERB	V	VerbForm=Inf	5	advcl	_	_
7	сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
8	вӧсна	вӧсна	ADP	Po	_	7	case	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	медым	медым	SCONJ	CS	_	14	mark	_	_
11	му	му	NOUN	N	Case=Nom|Number=Sing	14	obl	_	_
12	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	11	case	_	_
13	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	14	aux:neg	_	_
14	коль	кольны	VERB	V	Connegative=Yes	7	acl:relcl	_	_
15	ниӧти	ниӧти	PRON	Pro	Case=Nom|Number=Sing|Polarity=Neg	16	det	_	_
16	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	14	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	CLB	_	18	punct	_	_
18	быдӧнлы	быдӧн	PRON	Pron	Case=Dat|Number=Sing	20	obl	_	_
19	должен	должен	ADJ	N	Case=Nom|Number=Sing	5	conj	_	_
20	лоны	лоны	VERB	V	VerbForm=Inf	19	xcomp	_	_
21	гӧгӧрвоана	гӧгӧрвоана	ADV	Adv	_	20	advmod	_	SpaceAfter=No
22	,	,	PUNCT	CLB	_	27	punct	_	_
23	мый	мый	SCONJ	CS	_	27	mark	_	_
24	быд	быд	PRON	Pron	PronType=Qnt	25	det	_	_
25	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	27	nsubj	_	_
26	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	25	compound	_	_
27	сьӧктаммӧдӧ	сьӧктаммӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	_
28	колхозниклысь	колхозник	NOUN	N	Case=Abl|Number=Sing	29	nmod	_	_
29	трудоденьсӧ	трудодень	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	27	obj	_	SpaceAfter=No
30	,	,	PUNCT	CLB	_	32	punct	_	_
31	унджык	унджык	ADV	Adv	_	32	advmod	_	_
32	воӧ	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	conj	_	_
33	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	32	nsubj	_	_
34	трудодень	трудодень	NOUN	N	Case=Nom|Number=Sing	32	obl	_	_
35	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	34	case	_	SpaceAfter=No
36	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


