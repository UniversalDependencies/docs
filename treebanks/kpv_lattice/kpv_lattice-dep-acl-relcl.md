---
layout: base
title:  'Statistics of acl:relcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-acl.html">acl</a></tt>.

36 nodes (0%) are attached to their parents as `acl:relcl`.

33 instances of `acl:relcl` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.83333333333333.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (24; 67% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-DET.html">DET</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl:relcl	color:blue
1	Ми	ме	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	GTtags=Pers,Pl1,Nom|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	зонпосни	зонпосни	NOUN	N	Case=Nom|Number=Sing	1	appos	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	туриясӧн	тури	NOUN	N	Case=Ins|Number=Plur	6	obl:agent	_	GTtags=Pl,Ins
6	вайӧм	вайны	VERB	V	Valency=2|VerbForm=Vnoun	7	acl:relcl	_	GTtags=TV,Der,Der/ӧм,PastPtc
7	шудсӧ	шуд	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	GTtags=Sg,Acc,PxSg3
8	гӧгӧрволім	гӧгӧрволыны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,Pl1
9	ас	ас	PRON	Pron	Case=Nom|Number=Sing	10	det	_	GTtags=Sg,Nom
10	ног	ног	NOUN	N	Case=Nom|Number=Sing	8	obl	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 acl:relcl	color:blue
1	Быд	быд	PRON	Pron	PronType=Tot	2	det	_	_
2	колхозник	колхозник	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	OrigLang=ru
3	да	да	CCONJ	CC	_	4	cc	_	OrigLang=ru
4	колхозница	колхозница	NOUN	N	Case=Nom|Number=Sing	2	conj	_	OrigLang=ru
5	обязанӧсь	обязан	ADJ	A	Case=Nom|Number[subj]=Plur	0	root	_	OrigLang=ru
6	тышкасьны	тышкасьны	VERB	V	VerbForm=Inf	5	advcl	_	_
7	сы	сійӧ	PRON	Pron	Case=Adp|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
8	вӧсна	вӧсна	ADP	Po	_	7	case	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	14	punct	_	_
10	медым	медым	SCONJ	CS	_	14	mark	_	_
11	му	му	NOUN	N	Case=Nom|Number=Sing	14	obl:lmod	_	_
12	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	11	case	_	_
13	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	14	aux:neg	_	_
14	коль	кольны	VERB	V	Connegative=Yes	7	acl:relcl	_	_
15	ниӧти	ниӧти	PRON	Pro	Case=Nom|Number=Sing|Polarity=Neg	16	det	_	_
16	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	14	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	CLB	_	21	punct	_	_
18	быдӧнлы	быдӧн	PRON	Pron	Case=Dat|Number=Sing|PronType=Tot	21	obl	_	_
19	должен	должен	AUX	N	Case=Nom|Number=Sing	21	aux:nec	_	OrigLang=ru
20	лоны	лоны	AUX	V	VerbForm=Inf	21	cop	_	_
21	гӧгӧрвоана	гӧгӧрвоана	ADV	Adv	_	5	conj	_	SpaceAfter=No
22	,	,	PUNCT	CLB	_	27	punct	_	_
23	мый	мый	SCONJ	CS	_	27	mark	_	_
24	быд	быд	PRON	Pron	PronType=Tot	25	det	_	_
25	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	27	nsubj	_	_
26	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	25	compound	_	_
27	сьӧктаммӧдӧ	сьӧктаммӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	21	acl:relcl	_	_
28	колхозниклысь	колхозник	NOUN	N	Case=Abl|Number=Sing	29	nmod	_	OrigLang=ru
29	трудоденьсӧ	трудодень	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	27	obj	_	OrigLang=ru|SpaceAfter=No
30	,	,	PUNCT	CLB	_	32	punct	_	_
31	унджык	унджык	ADV	Adv	_	32	advmod	_	_
32	воӧ	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	27	conj	_	_
33	нянь	нянь	NOUN	N	Case=Nom|Number=Sing	32	nsubj	_	_
34	трудодень	трудодень	NOUN	N	Case=Nom|Number=Sing	32	obl	_	OrigLang=ru
35	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	34	case	_	SpaceAfter=No
36	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 22 acl:relcl	color:blue
1	Тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
2	жӧ	жӧ	ADV	Adv	_	1	advmod:eval	_	_
3	книгаас	книга	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl:lmod	_	_
4	ми	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	висьталам	висьтавны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
6	сӧмын	сӧмын	ADV	Adv	_	5	advmod:foc	_	_
7	нёль	нёль	NUM	Num	Case=Nom|Number=Sing|NumType=Card	11	nummod	_	_
8	самӧй	самӧй	PART	Pcle	_	9	advmod:deg	_	_
9	обыкновеннӧй	обыкновеннӧй	ADJ	A	Case=Nom|Number=Sing	11	amod	_	_
10	боевӧй	боевӧй	ADJ	A	Case=Nom|Number=Sing	11	amod	_	_
11	случай	случай	NOUN	N	Case=Nom|Number=Sing	5	obj	_	_
12	йылысь	йылысь	ADP	Po	Case=Ela|Number=Sing	11	case	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	14	punct	_	_
14	кодъяс	коді	PRON	Pron	Case=Nom|Number=Plur|PronType=Int	22	nsubj:cop	_	_
15	коркӧ	коркӧ	ADV	Adv	PronType=Ind	22	advmod:tmod	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	19	punct	_	_
17	гражданскӧй	гражданскӧй	ADJ	A	Case=Nom|Number=Sing	18	amod	_	_
18	война	война	NOUN	N	Case=Nom|Number=Sing	19	nmod	_	_
19	лунъясын	лун	NOUN	N	Case=Ine|Number=Plur	15	appos	_	SpaceAfter=No
20	,	,	PUNCT	CLB	_	22	punct	_	_
21	вӧвліны	вӧвлыны	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	22	cop	_	_
22	фронт	фронт	NOUN	N	Case=Nom|Number=Sing	11	acl:relcl	_	_
23	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	22	case	_	_
24	Климент	Климент	PROPN	N	Case=Nom|Number=Sing	22	obl	_	_
25	Ефремовичкӧд	Ефрем	PROPN	N	Case=Com|Number=Sing	24	flat:name	_	SpaceAfter=No
26	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


