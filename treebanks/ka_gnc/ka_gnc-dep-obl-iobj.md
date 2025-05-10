---
layout: base
title:  'Statistics of obl:iobj in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `obl:iobj`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ka_gnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ka_gnc-dep-obl-final.html">obl:final</a></tt>.

19 nodes (0%) are attached to their parents as `obl:iobj`.

16 instances of `obl:iobj` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.84210526315789.

The following 7 pairs of parts of speech are connected with `obl:iobj`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (7; 37% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (4; 21% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (3; 16% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obl:iobj	color:blue
1	ეს	ეს	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	8	nsubj	_	LMSeg:ეს
2	თქვენ	თქვენ	PRON	Pron_Pers_2_Gen_Pl_PP_PP:თვის	Case=Gen|Number=Plur|PronType=Prs	8	obl:iobj	_	LMSeg:თქვენ|SpaceAfter=No
3	თვის	_თვის	ADP	Pp	_	2	case	_	LMSeg:_თვის
4	სამედიცინო	სამედიცინო	ADJ	A_Gen_Att	Case=Gen	5	amod	_	LMSeg:სამედიცინო
5	ექსპერტიზის	ექსპერტიზა	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	6	nmod	_	LMSeg:ექსპერტიზ[ა]
6	დასკვნითაც	დასკვნა	NOUN	N_VN_Pv_Inst_Sg_Encl:ც_Foc	Case=Ins|Encl=C|Number=Sing|VerbForm=Vnoun	8	obl	_	LMSeg:და·სკვნ[ა]/სკვნ
7	არის	არის	AUX	V_MedPass_Pres_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Pres	8	aux	_	LMSeg:ყოფნ[ა]/არ
8	ცნობილი	ცნობილი	VERB	A_Part_PastPart_Nom_Sg	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	LMSeg:ცნობილ·ი/ცნ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:iobj	color:blue
1	სად	სად	ADV	Adv_Int_Loc	AdvType=Loc	2	advmod	_	LMSeg:სად
2	მიეკვლია	მიკვლევა	VERB	V_Act_PluPerf_Pv_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pqp	0	root	_	LMSeg:მი·კვლევ[ა]/კვლ[ევ]
3	ამ	ეს	PRON	Pron_Dem_Gen_Att	Case=Gen|PronType=Dem	4	det	_	LMSeg:ეს
4	ჰილდეს	ჰილდე	PROPN	N_Prop_Anthr_FirstName_Gen_PP_PP:თვის	Case=Gen|NameType=Prs	2	obl:iobj	_	LMSeg:ჰილდე|SpaceAfter=No
5	თვის	_თვის	ADP	Pp	_	4	case	_	LMSeg:_თვის|SpaceAfter=No
6	?	?	PUNCT	Punct_IntMark	_	2	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:iobj	color:blue
1	ექთნის	ექთანი	NOUN	N_Hum_Gen_Sg_PP_PP:თვის	Animacy=Anim|Case=Gen|Number=Sing	3	obl:iobj	_	LMSeg:ექთ[ა]ნ·ი|SpaceAfter=No
2	თვის	_თვის	ADP	Pp	_	1	case	_	LMSeg:_თვის
3	მიუცია	მი-ცემა	VERB	V_Act_Perf_Pv_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=PastPerf	0	root	_	LMSeg:მი-ცემ[ა]/[ე]ც
4	ფული	ფული	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	3	obj	_	LMSeg:ფულ·ი
5	და	და	CCONJ	Cj_Coord	_	7	cc	_	LMSeg:და
6	იმას	ის	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	7	nsubj	_	LMSeg:ის
7	უყიდია	ყიდვა	VERB	V_MedAct_Perf_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=PastPerf	3	conj	_	LMSeg:ყიდვ[ა]/ყიდ|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


