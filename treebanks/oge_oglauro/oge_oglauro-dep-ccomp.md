---
layout: base
title:  'Statistics of ccomp in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `ccomp`

This relation is universal.

64 nodes (1%) are attached to their parents as `ccomp`.

63 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5625.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (55; 86% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	უწყი	უწყება	VERB	V_Act_Pres_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|VerbForm=Fin	0	root	_	Preverb=No
2	მე	მე	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	1	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	5	punct	_	_
4	აწ	აწ	ADV	Adv	_	5	advmod	_	_
5	მოავლინნეს	მივლენა	VERB	V_Act_Subj_Pv_AV_S:3Sg_O:3	Mood=Sub|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin|Voice=Cau	1	ccomp	_	Preverb=Yes|Version=A
6	მსახურნი	მსახური	NOUN	N_Nom_Pl	Case=Nom|Number=Plur	5	obj	_	_
7	და	და	CCONJ	Cj_Coord	_	9	cc	_	_
8	თრევით	თრევა	NOUN	N_Ins_Sg	Case=Ins|Number=Sing	9	obl	_	_
9	წარგიყვანოს	წარყვანება	VERB	V_Act_Subj_Pv_S:3Sg_O:2Sg	Mood=Sub|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3|Tense=Past|VerbForm=Fin	5	conj	_	Preverb=Yes
10	შენ	შენ	PRON	Pron_Pers_2Sg	Number=Sing|Person=2|PronType=Prs	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	Punct_FullStop	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	უწყი	უწყება	VERB	V_Act_Pres_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Preverb=No
2	,	,	PUNCT	Punct_Comma	_	4	punct	_	_
3	ვითარმედ	ვითარმედ	SCONJ	Cj_Sub	_	4	mark	_	_
4	დაჲ	დაჲ	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	1	ccomp	_	_
5	ვარ	ყოფა	AUX	V_Act_Pres_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|VerbForm=Fin	4	cop	_	SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	_
7	ერთგან	ერთგან	ADV	Adv	_	8	advmod	_	_
8	განზრდილნი	განზრდა	VERB	V_PastPart_Nom_Pl	Case=Nom|Number=Plur|VerbForm=Part	4	amod	_	SpaceAfter=No|Preverb=No
9	,	,	PUNCT	Punct_Comma	_	13	punct	_	_
10	ხოლო	ხოლო	CCONJ	Cj_Coord	_	13	cc	_	_
11	მაგას	ეგე	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	13	obj	_	_
12	ვერ	ვერ	ADV	Adv_Neg_Pot	Polarity=Neg	13	advmod	_	_
13	ვჰყოფ	ყოფა	VERB	V_Act_Pres_S:1Sg_O:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres|VerbForm=Fin	1	conj	_	SpaceAfter=No|Preverb=No
14	,	,	PUNCT	Punct_Comma	_	18	punct	_	_
15	ვითარ	ვითარ	SCONJ	Cj_Sub	_	18	mark	_	_
16	მცა	მცა	PART	Part	_	18	advmod	_	_
17	მოსისხლეობაჲ	მოსისხლეობაჲ	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	18	nsubj	_	_
18	იქმნა	ქმნა	VERB	V_Pass_Aor_IV_S:3Sg	Mood=Sub|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	13	advcl	_	SpaceAfter=No|Preverb=No
19	,	,	PUNCT	Punct_Comma	_	24	punct	_	_
20	და	და	CCONJ	Cj_Coord	_	24	cc	_	_
21	თქუენ	თქუენ	PRON	Pron_Pers_2Pl	Number=Plur|Person=2|PronType=Prs	24	nsubj	_	_
22	ყოველნი	ყოველი	PRON	Pron_Tot_Nom_Pl	Case=Nom|Number=Plur|PronType=Tot	21	nmod	_	_
23	თანა-მდებ	თანა-მდები	NOUN	N_Abs_Sg	Case=Abs|Number=Sing	24	xcomp	_	_
24	იქმნენით	ქმნა	VERB	V_Pass_Aor_IV_S:2Pl	Mood=Sub|Number[subj]=Plur|Person[subj]=2|Tense=Past|VerbForm=Fin	18	conj	_	SpaceAfter=No|Preverb=No
25	.	.	PUNCT	Punct_FullStop	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 13 ccomp	color:blue
1	მაგის	ეგე	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	2	det	_	_
2	სახისა	სახე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	4	obl	_	_
3	თჳს	თჳს	ADP	Post	AdpType=Post|Case=Gen	2	case	_	_
4	მოვედ	მოსლვა	VERB	V_Act_Aor_Pv_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes
5	მე	მე	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
6	შენდა	შენი	PRON	Pron_Pers_2Sg_Adv	Case=Ess|Number=Sing|Person=2|PronType=Prs	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	18	punct	_	_
8	რაჲთა	რაჲთა	SCONJ	Cj_Sub	_	18	mark	_	SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	13	punct	_	_
10	რომელი-იგი	რომელი-იგი	PRON	Pron_Rel_Nom_Sg	Case=Nom|Number=Sing|PronType=Rel	13	nsubj	_	_
11	არა	არა	ADV	Adv_Neg	Polarity=Neg	13	advmod	_	_
12	რაჲმე	რაჲმე	PRON	Pron_Indef_Nom_Sg	Case=Nom|Number=Sing|PronType=Ind	13	obl	_	_
13	სათნო	სათნო	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	18	ccomp	_	_
14	იყოს	ყოფა	AUX	V_Act_Subj_S:3Sg	Mood=Sub|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	13	cop	_	_
15	ღმრთისა	ღმერთი	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	13	obl	_	SpaceAfter=No
16	,	,	PUNCT	Punct_Comma	_	13	punct	_	_
17	არა	არა	ADV	Adv_Neg	Polarity=Neg	18	advmod	_	_
18	ვქმნე	ქმნა	VERB	V_Act_Subj_S:1Sg_O:3	Mood=Sub|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|VerbForm=Fin	4	advcl	_	SpaceAfter=No|Preverb=No
19	.	.	PUNCT	Punct_FullStop	_	4	punct	_	_

~~~


