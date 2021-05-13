---
layout: base
title:  'Statistics of nmod:obj in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:obj`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 6 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="kpv_lattice-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lfrom.html">nmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="kpv_lattice-dep-nmod-subj.html">nmod:subj</a></tt>.

44 nodes (1%) are attached to their parents as `nmod:obj`.

40 instances of `nmod:obj` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04545454545455.

The following 3 pairs of parts of speech are connected with `nmod:obj`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (41; 93% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:obj	color:blue
1	Колхозъясын	колхоз	NOUN	N	Case=Ine|Number=Plur	3	obl:lmod	_	OrigLang=ru
2	ӧні	ӧні	ADV	Adv	_	3	advmod:tmod	_	_
3	мунӧ	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
5	воӧм	воны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
6	озыр	озыр	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
7	урожайсӧ	урожай	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nmod:obj	_	OrigLang=ru
8	идралӧм	идравны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:obj	color:blue
1	Шондіыс	шонді	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
2	нем	нем	PRON	Pron	Case=Nom|Number=Sing|Polarity=Neg	3	nmod:obj	_	_
3	жалиттӧг	жалитны	VERB	V	Derivation=VCar|VerbForm=Conv	4	advcl	_	OrigLang=ru
4	пӧжис	пӧжны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:obj	color:blue
1	Волывліс	волывлыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Sg3
2	карта	карта	NOUN	N	Case=Nom|Number=Sing	3	nmod:obj	_	GTtags=Sg,Nom
3	вӧчанінас	вӧчанін	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obl:lmod	_	GTtags=Sg,Ill,PxSg3
4	да	да	CCONJ	CC	_	11	cc	_	_
5	эз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	11	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
6	нин	нин	ADV	Adv	AdvType=Tim	11	advmod:tmod	_	GTtags=Sem/Time
7	ылалӧм	ылавны	VERB	V	Tense=Past|Valency=1|VerbForm=Part	8	acl	_	GTtags=IV,Der,Der/ӧм,PastPtc
8	синмӧн	син	NOUN	N	Case=Ins|Number=Sing	11	xcomp	_	GTtags=Sg,Ins
9	стрӧитчысьясыслысь	стрӧитчыны	VERB	V	Case=Abl|Derivation=NomAg|Number=Plur|Number[psor]=Sing|Person[psor]=3	10	nmod:poss	_	GTtags=Refl,Der,Der/ысь,Der/NomAg,N,Pl,Abl|PxSg3
10	мойдӧмсӧ	мойдны	VERB	V	Clitic=So|Tense=Past|Valency=2|VerbForm=Vnoun	11	obj	_	GTtags=TV,Der,Der/ӧм,PastPtc,Clt/сӧ,?
11	кывзы	кывзыны	VERB	V	Connegative=Yes|Valency=2	1	conj	_	GTtags=TV,ConNeg|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	14	punct	_	_
13	a	а	CCONJ	CC	_	14	cc	_	_
14	вомавліс	вомавлыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	1	conj	_	GTtags=TV,Ind,Prt1,Sg3
15	найӧс	сійӧ	PRON	Pron	Case=Acc|Number=Plur|Person=3|PronType=Prs	14	obj	_	GTtags=Pers,Pl3,Acc|SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	21	punct	_	_
17	и	и	CCONJ	CC	_	21	cc	_	_
18	быттьӧкӧ	быттьӧкӧ	ADV	Adv	_	21	advmod:eval	_	GTtags=Parenthetic
19	сэтшӧма	сэтшӧма	ADV	Adv	_	21	advmod:mmod	_	GTtags=Det,Dem,Sg,Der,Der/ProprietiveMod,A,Sg|Nom
20	нин	нин	ADV	Adv	Case=Nom|Number=Sing	21	advmod:tmod	_	GTtags=Sg,Nom
21	омӧльтчӧма	омӧльтчыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	1	conj	_	GTtags=Refl,Ind,Prt2,Sg3|SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	23	punct	_	_
23	ёсьвидзисны	ёсьвидзны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	1	conj	_	GTtags=IV,Ind,Prt1,Pl3
24	черлыясыс	черлы	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	23	nsubj	_	GTtags=Pl,Nom,PxSg3|SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


