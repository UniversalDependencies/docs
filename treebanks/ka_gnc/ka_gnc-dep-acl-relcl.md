---
layout: base
title:  'Statistics of acl:relcl in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-acl.html">acl</a></tt>.

140 nodes (1%) are attached to their parents as `acl:relcl`.

136 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.03571428571429.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (94; 67% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (16; 11% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	თურმე	თურმე	ADV	Adv_Comm	_	5	advmod	_	LMSeg:თურმე
2	თავხედებად	თავხედი	ADJ	A_Advb_Pl_NewPl	Case=Ess|Number=Plur	5	advmod	_	LMSeg:თავხედ·ი
3	იმდენნი	იმდენი	NOUN	N_Nom_Pl_OldPl_Guess	Case=Nom|Number=Plur	5	nsubj	_	LMSeg:იმდენ·ი
4	არ	არ	ADV	Adv_Neg	_	5	advmod:neg	_	LMSeg:არ
5	იბადებიან	დაბადება	VERB	V_Pass_Pres_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:და·ბადებ[ა]/ბად|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
7	რამდენნიც	რამდენი	PRON	Pron_Rel_Nom_Pl_OldPl_Rel:ც	Case=Nom|Number=Plur|PronType=Rel	9	nsubj	_	LMSeg:რამდენ·ი
8	მერე	მერე	ADV	Adv_Temp	AdvType=Tim	9	advmod	_	LMSeg:მერე
9	ხდებიან	ხდომა	VERB	V_Pass_Pres_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	LMSeg:*·ხდომ[ა]/ხდ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl:relcl	color:blue
1	ვნახოთ	ნახვა	VERB	V_Act_Opt_S:1Pl_DO:3	Mood=Sub|Number[subj]=Plur|Person[obj]=3|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:ნახვ[ა]/ნახ|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
3	თუ	თუ	SCONJ	Cj_Sub	_	5	mark	_	LMSeg:თუ
4	ვისმე	ვინ:მე	PRON	Pron_SIndef_Hum_Dat	Animacy=Anim|Case=Dat|PronType=Ind	5	nsubj	_	LMSeg:ვინ:მე
5	დამართნია	დამართება	VERB	V_MedPass_Inv_Perf_Pv_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=PastPerf|VerbForm=Fin|Voice=Inv	1	ccomp	_	LMSeg:და·მართებ[ა]/მართ
6	იმისი	იმისი	PRON	Pron_Poss_Poss3Sg_Dist_Nom_Att	Case=Nom|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	LMSeg:იმის·ი
7	მსგავსი	მსგავსი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	5	obj	_	LMSeg:მსგავს·ი|SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	11	punct	_	LMSeg:,
9	რაც	რა	PRON	Pron_Rel_Nonhum_Nom_Rel:ც	Case=Nom|PronType=Rel	11	nsubj	_	LMSeg:რ[ა]
10	ჩვენ	ჩვენ	PRON	Pron_Pers_1_Dat_Pl	Case=Dat|Number=Plur|PronType=Prs	11	iobj	_	LMSeg:ჩვენ
11	დაგვატყდა	დატყდომა	VERB	V_Pass_Aor_Pv_LV_S:3Sg_IO:1Pl	Mood=Ind|Number[io]=Plur|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Past|VerbForm=Fin	6	acl:relcl	_	LMSeg:და·ტყდომ[ა]/ტყდ|SpaceAfter=No
12	.	.	PUNCT	Punct_Period	_	1	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	და	და	CCONJ	Cj_Coord	_	3	cc	_	LMSeg:და
2	გულწრფელად	გულწრფელად	ADV	A_Advb_Sg	_	3	advmod	_	LMSeg:გულწრფელად
3	მჯეროდა	ჯერება	VERB	V_MedAct_Impf_S:3Sg_IO:1Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:*·ჯერებ[ა]/ჯერ
4	ყველაფერი	ყველაფერი	DET	A_Quant_Nom_Sg	Case=Nom|Number=Sing|PronType=Tot	3	obj	_	LMSeg:ყველაფ[ე]რ·ი|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
6	რასაც	რა	PRON	Pron_Rel_Nonhum_Dat_Rel:ც	Case=Dat|PronType=Rel	7	iobj	_	LMSeg:რ[ა]
7	ვლაპარაკობდი	ლაპარაკი	VERB	V_MedAct_Impf_S:1Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Imp|VerbForm=Fin	4	acl:relcl	_	LMSeg:ლაპარაკ·ი/ლაპარაკ|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


