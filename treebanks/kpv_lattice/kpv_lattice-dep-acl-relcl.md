---
layout: base
title:  'Statistics of acl:relcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-acl.html">acl</a></tt>.

24 nodes (0%) are attached to their parents as `acl:relcl`.

24 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.83333333333333.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (14; 58% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 17% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 acl:relcl	color:blue
1	Синъясас	син	NOUN	N	Case=Ine|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	obl	_	GTtags=Pl,Ine,PxSg3
2	жӧ	жӧ	ADV	Adv	_	1	discourse	_	GTtags=Parenthetic
3	тӧдчис	тӧдчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|PronType=Ref|Tense=Past	0	root	_	GTtags=Refl,Ind,Prt1,Sg3
4	на	на	ADV	Adv	_	3	advmod:tmod	_	_
5	кутшӧмкӧ	кутшӧмкӧ	PRON	Pron	Derivation=Ko|PronType=Ind	6	det	_	GTtags=Indef,Der/кӧ
6	вын	вын	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
7	,	,	PUNCT	CLB	_	16	punct	_	_
8	мый	мый	SCONJ	CS	_	16	mark	_	_
9	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	10	det	_	GTtags=Dem,Sg,Nom
10	мортсӧ	морт	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	16	obj	_	GTtags=Sg,Acc,PxSg3
11	эськӧ	эськӧ	ADV	Adv	_	16	advmod	_	_
12	и	и	CCONJ	CC	_	13	advmod	_	_
13	олӧмыс	олӧм	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	16	nsubj	_	GTtags=Sg,Nom,PxSg3
14	ёна	ён	ADJ	A	Derivation=A	16	advmod	_	GTtags=Der,Der/а
15	нин	нин	ADV	Adv	_	16	advmod:tmod	_	_
16	няръялӧма	няръявны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	GTtags=IV,Der,Der/ӧм,PastPtc,N,Cmp
17	-	_	PUNCT	PUNCT	_	16	punct	_	_
18	песӧма	песӧм	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	16	conj	_	GTtags=Der,Der/ӧм,Sg,Der,Der/ProprietiveMod,A,Sg,Nom
19	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 acl:relcl	color:blue
1	Нывъясыс	ныв	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	nsubj:cop	_	GTtags=Pl,Nom,PxSg3
2	тай	тай	ADV	Adv	_	4	advmod	_	_
3	зэв	зэв	ADV	Adv	_	4	advmod	_	_
4	уна	уна	ADV	Adv	_	0	root	_	_
5	эмӧсь	эм	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	4	cop	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	бӧрйы	бӧрйыны	VERB	V	Mood=Imp|Number=Sing|Person=2|Valency=2	4	parataxis	_	GTtags=TV,Imprt,Sg2
8	кодӧс	коді	PRON	Pron	Case=Acc|Number=Sing|PronType=Rel	7	obj	_	GTtags=Rel,Sg,Acc
9	колӧ	ковны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=2	8	acl:relcl	_	GTtags=TV,Ind,Prs,Sg3|SpaceAfter=No
10	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 22 acl:relcl	color:blue
1	Тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
2	жӧ	жӧ	PART	Pcle	_	3	advmod	_	_
3	книгаас	книга	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl:lmod	_	_
4	ми	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	висьталам	висьтавны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
6	сӧмын	сӧмын	ADV	Adv	_	5	advmod	_	_
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


