---
layout: base
title:  'Statistics of obl:iobj in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `obl:iobj`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ka_gnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ka_gnc-dep-obl-final.html">obl:final</a></tt>.

22 nodes (0%) are attached to their parents as `obl:iobj`.

19 instances of `obl:iobj` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86363636363636.

The following 8 pairs of parts of speech are connected with `obl:iobj`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (8; 36% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (4; 18% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (4; 18% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl:iobj	color:blue
1	–	–	PUNCT	Punct_Dash	_	7	punct	_	LMSeg:–
2	ამის	ეს	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	3	nmod	_	LMSeg:ეს
3	ახსნა	ახსნა	NOUN	N_VN_Pv_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	7	obj	_	LMSeg:ა·ხსნ[ა]/ხსნ
4	ჩვენ	ჩვენ	PRON	Pron_Pers_1_Gen_Pl_PP_PP:თვის	Case=Gen|Number=Plur|PronType=Prs	7	obl:iobj	_	LMSeg:ჩვენ|SpaceAfter=No
5	თვის	_თვის	ADP	Pp	_	4	case	_	LMSeg:_თვის
6	არავის	არავინ	PRON	Pron_Neg_Hum_Dat	Animacy=Anim|Case=Dat	7	nsubj	_	LMSeg:არავინ
7	დაუვალებია	დავალება	VERB	V_Act_Perf_Pv_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=PastPerf|VerbForm=Fin	0	root	_	LMSeg:და·ვალებ[ა]/ვალ|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:iobj	color:blue
1	ექთნის	ექთანი	NOUN	N_Hum_Gen_Sg_PP_PP:თვის	Animacy=Anim|Case=Gen|Number=Sing	3	obl:iobj	_	LMSeg:ექთ[ა]ნ·ი|SpaceAfter=No
2	თვის	_თვის	ADP	Pp	_	1	case	_	LMSeg:_თვის
3	მიუცია	მი-ცემა	VERB	V_Act_Perf_Pv_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=PastPerf|VerbForm=Fin	0	root	_	LMSeg:მი-ცემ[ა]/[ე]ც
4	ფული	ფული	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	3	obj	_	LMSeg:ფულ·ი
5	და	და	CCONJ	Cj_Coord	_	7	cc	_	LMSeg:და
6	იმას	ის	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	7	nsubj	_	LMSeg:ის
7	უყიდია	ყიდვა	VERB	V_MedAct_Perf_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=PastPerf|VerbForm=Fin	3	conj	_	LMSeg:ყიდვ[ა]/ყიდ|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:iobj	color:blue
1	სად	სად	ADV	Adv_Int_Loc	AdvType=Loc	2	advmod	_	LMSeg:სად
2	მიეკვლია	მიკვლევა	VERB	V_Act_PluPerf_Pv_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pqp|VerbForm=Fin	0	root	_	LMSeg:მი·კვლევ[ა]/კვლ[ევ]
3	ამ	ეს	PRON	Pron_Dem_Gen_Att	Case=Gen|PronType=Dem	4	det	_	LMSeg:ეს
4	ჰილდეს	ჰილდე	PROPN	N_Prop_Anthr_FirstName_Gen_PP_PP:თვის	Case=Gen|NameType=Prs	2	obl:iobj	_	LMSeg:ჰილდე|SpaceAfter=No
5	თვის	_თვის	ADP	Pp	_	4	case	_	LMSeg:_თვის|SpaceAfter=No
6	?	?	PUNCT	Punct_IntMark	_	2	punct	_	LMSeg:?

~~~


