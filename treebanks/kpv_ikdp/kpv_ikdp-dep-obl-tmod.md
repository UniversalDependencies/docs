---
layout: base
title:  'Statistics of obl:tmod in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="kpv_ikdp-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lto.html">obl:lto</a></tt>.

5 nodes (0%) are attached to their parents as `obl:tmod`.

4 instances of `obl:tmod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 3 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (2; 40% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:tmod	color:blue
1	И	и	CCONJ	CC	_	3	cc	_	_
2	дзолясянь	дзоля	ADJ	A	Case=Egr|Number=Sing	3	obl:tmod	_	GTtags=Sg,Egr
3	видзеді	видзӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Err/Dial,Sg3
4	кинояс	кино	NOUN	N	Case=Nom|Number=Plur	3	obj	_	GTtags=Pl,Nom|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	сериалъяс	сериал	NOUN	N	Case=Nom|Number=Plur	4	conj	_	GTtags=Pl,Nom
7	английскей	английскӧй	NOUN	N	Case=Nom|Number=Sing	8	nmod	_	GTtags=Sg,Nom
8	вылын	выв	NOUN	N	Case=Ine|NounType=Relat|Number=Sing	4	acl:relcl	_	GTtags=Relat,Sg,Ine|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	вуджедтэг	вуджӧдны	VERB	V	Derivation=VCar|Valency=2	8	conj	_	GTtags=TV,VCar,Err/Dial|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 obl:tmod	color:blue
1	А	а	CCONJ	CC	_	8	cc	_	_
2	корейскей	корейскӧй	ADJ	A	Case=Nom|Number=Sing	5	reparandum	_	GTtags=Sg,Nom|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	корея	корея	NOUN	N	Case=Nom|Number=Sing	5	nmod:appos	_	GTtags=Sg,Nom
5	кывсэ	кыв	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	GTtags=Err/Dial,Sg,Acc,PxSg3,Err/Dial
6	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg1,Nom
7	куті	кутны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg1
8	велэдны	велӧдны	VERB	V	VerbForm=Inf	7	xcomp	_	GTtags=Err/Dial,Inf
9	кык	кык	NUM	Num	Case=Nom|Number=Sing|NumType=Card	10	nummod	_	GTtags=Card,Sg,Nom
10	во	во	NOUN	N	Case=Nom|Number=Sing	11	nmod	_	GTtags=Sg,Nom
11	сайын	сай	NOUN	N	Case=Ine|NounType=Relat|Number=Sing	7	obl:tmod	_	GTtags=Relat,Sg,Ine
12	ачум	ас	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	6	det	_	GTtags=Refl,Sg1,Err/Dial,Nom|SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	16	punct	_	_
14	но	но	CCONJ	CC	_	16	cc	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	14	punct	_	_
16	кӧсйысис	кӧсйысьны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	7	conj	_	GTtags=Refl,Ind,Prt1,Sg3
17	сідз	сідзи	ADV	Adv	AdvType=Man	16	advmod	_	GTtags=Manner|SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 34 obl:tmod	color:blue
1	Ассюм	Ассюм	PRON	Pron	Case=Ela|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	3	nmod:poss	_	GTtags=Refl,Sg1,Ela
2	кыы	кыв	NOUN	N	Case=Nom|Number=Sing	3	obj	_	GTtags=Err/Dial,Sg,Err/Dial,Nom
3	тӧдэмъяссэ	тӧдны	VERB	V	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	5	obj	_	GTtags=Err/Dial,Der,Der/ӧм,Der/NomAct,N,Pl,Acc|PxSg3|Err/Dial
4	вылэджык	выв	NOUN	N	Case=Ill|Degree=Cmp|NounType=Relat|Number=Sing	5	obl:lmod	_	GTtags=Relat,Sg,Err/Dial,Ill,Comp
5	кыпедны	кыпӧдны	VERB	V	VerbForm=Inf	0	root	_	GTtags=Inf|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	10	punct	_	_
7	медум	медым	SCONJ	CS	_	10	mark	_	_
8	унджык	уна	DET	Det	Case=Nom|Degree=Cmp|Number=Sing	9	det	_	GTtags=Comp,Sg,Nom
9	кыы	кыв	NOUN	N	Case=Nom|Number=Sing	10	obj	_	GTtags=Err/Dial,Sg,Err/Dial,Nom
10	тӧдны	тӧдны	VERB	V	VerbForm=Inf	5	ccomp	_	GTtags=Inf|SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	14	punct	_	_
12	ныес	ныес	PRON	Pron	Case=Acc|Number=Plur	14	obj	_	GTtags=Pl,Acc
13	бурджыка	бурджыка	ADV	Adv	_	14	advmod	_	_
14	велэдны	велӧдны	VERB	V	VerbForm=Inf	10	conj	_	GTtags=Err/Dial,Inf
15	и	и	CCONJ	CC	_	17	cc	_	_
16	бурджыка	бурджыка	ADV	Adv	_	17	advmod	_	_
17	сёрнитны	сёрнитны	VERB	V	VerbForm=Inf	14	conj	_	GTtags=Inf|SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	23	punct	_	_
19	и	и	CCONJ	CC	_	23	cc	_	_
20	кутшем	кутшӧм	ADJ	A	_	21	amod	_	GTtags=Err/Dial
21	кыыяс	кыв	NOUN	N	Case=Nom|Number=Plur	23	obj	_	GTtags=Err/Dial,Pl,Nom
22	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	23	nsubj	_	GTtags=Pers,Sg1,Nom
23	велэда	велӧдны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	14	conj	_	GTtags=Err/Dial,Ind,Prs,Sg1
24	и	и	CCONJ	CC	_	25	cc	_	_
25	тӧда	тӧдны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	23	conj	_	GTtags=Ind,Prs,Sg1|SpaceAfter=No
26	,	,	PUNCT	PUNCT	_	30	punct	_	_
27	сыа	сійӧ	PRON	Pron	PronType=Dem	28	det	_	GTtags=Err/Dial,Dem
28	местаясас	места	NOUN	N	Case=Ill|Number=Plur|Number[psor]=Sing|Person[psor]=3	30	obl:lmod	_	GTtags=Pl,Ill,PxSg3,So/CP
29	бы	бы	AUX	_	_	30	aux:cnd	_	_
30	ветлыны	ветлыны	VERB	V	VerbForm=Inf	23	conj	_	GTtags=Inf|SpaceAfter=No
31	,	,	PUNCT	PUNCT	_	32	punct	_	_
32	вот	вот	ADV	Adv	_	35	discourse	_	GTtags=Parenthetic|SpaceAfter=No
33	,	,	PUNCT	PUNCT	_	32	punct	_	_
34	ӧні	ӧні	ADV	Adv	_	35	obl:tmod	_	_
35	кӧсъя	кӧсйыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	30	parataxis	_	GTtags=Ind,Prs,Sg1
36	Корея	Корея	NOUN	N	Case=Nom|Number=Sing	37	obl:lmod	_	GTtags=Prop,Sem/Plc,Sg,Nom
37	ветлыны	ветлыны	VERB	V	VerbForm=Inf	35	xcomp	_	GTtags=Inf
38	эське	эськӧ	ADV	Adv	_	35	advmod:eval	_	GTtags=Err/Orth
39	корке	коркӧ	ADV	Adv	AdvType=Tim|Definite=Ind|Derivation=Ko	37	advmod:tmod	_	GTtags=Indef,Sem/Time,Der/кӧ|SpaceAfter=No
40	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


