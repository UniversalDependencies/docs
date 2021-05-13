---
layout: base
title:  'Statistics of aux:nec in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux:nec`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="kpv_lattice-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="kpv_lattice-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="kpv_lattice-dep-aux-pot.html">aux:pot</a></tt>, <tt><a href="kpv_lattice-dep-aux-tense.html">aux:tense</a></tt>.

16 nodes (0%) are attached to their parents as `aux:nec`.

14 instances of `aux:nec` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1875.

The following 3 pairs of parts of speech are connected with `aux:nec`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (14; 88% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:nec	color:blue
1	Сідз	сідз	ADV	Adv	_	4	advmod:mmod	_	_
2	жӧ	жӧ	ADV	Adv	_	1	advmod:eval	_	OrigLang=ru
3	колӧ	ковны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux:nec	_	_
4	сетны	сетны	VERB	V	VerbForm=Inf	0	root	_	_
5	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	6	amod	_	_
6	тӧдчанлун	тӧдчанлун	NOUN	N	Case=Nom|Number=Sing	4	nmod:obj	_	_
7	вошӧмъяскӧд	вошӧм	NOUN	N	Case=Com|Number=Plur	8	obl	_	_
8	тышкасьӧм	тышкасьны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	4	obl	_	_
9	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	8	case	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux:nec	color:blue
1	Сідзкӧ	сідзкӧ	ADV	Adv	_	3	advmod:mmod	_	_
2	нин	нин	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Sem/Time
3	шуны	шуны	VERB	V	Valency=2|VerbForm=Inf	10	advcl	_	GTtags=TV,Inf|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	кыйсьысь	кыйсьыны	VERB	V	Derivation=NomAg|VerbForm=Part|Voice=Act	6	nmod	_	GTtags=Refl,Der,Der/ысь,ActPrsPtc
6	кодьӧн	кодь	ADJ	A	Case=Ins|Number=Sing	10	xcomp	_	GTtags=CompMod,Sg,Ins
7	на	на	ADV	Adv	_	6	advmod:tmod	_	_
8	колӧ	ковны	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	10	aux:nec	_	GTtags=TV,Ind,Prs,Sg3
9	лоны	лоны	AUX	_	Valency=1|VerbForm=Inf	10	cop	_	GTtags=IV,Inf
10	бур	бур	ADJ	A	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom
11	мастерыдлы	мастер	NOUN	N	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=2	10	obl	_	GTtags=Sg,Dat,PxSg2|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	14	punct	_	_
13	бӧра-водза	бӧра-водза	ADV	Adv	_	14	advmod	_	_
14	вежӧраӧн	вежӧра	ADJ	A	Case=Ins|Number=Sing	10	xcomp	_	GTtags=Sg,Ins
15	да	да	CCONJ	CC	_	17	cc	_	_
16	абусьыс	абу	NOUN	N	Case=Ela|Number=Sing|Number[psor]=Sing|Person[psor]=3	17	obl	_	GTtags=Sg,Ela,PxSg3
17	аддзанаӧн	аддзыны	VERB	V	Case=Ins|Derivation=Ana|Number=Sing|Tense=Pres|Valency=2|VerbForm=Part	14	conj	_	GTtags=TV,Der,Der/Ан,PrsPrc,N,Sg,Der|Der/ProprietiveMod|A|Sg|Ins|SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 aux:nec	color:blue
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


