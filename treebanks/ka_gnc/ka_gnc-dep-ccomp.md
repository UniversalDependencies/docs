---
layout: base
title:  'Statistics of ccomp in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="ka_gnc-dep-ccomp-speech.html">ccomp:speech</a></tt>.

222 nodes (1%) are attached to their parents as `ccomp`.

217 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.00900900900901.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (181; 82% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (19; 9% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (9; 4% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	არ	არ	ADV	Adv_Neg	_	2	advmod:neg	_	LMSeg:არ
2	ვიცი	ცოდნა	VERB	V_MedPass_Pres_S:1Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:ცოდნ[ა]/ც|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
4	ეს	ეს	PRON	Pron_Dem_Nom_Att	Case=Nom|PronType=Dem	5	det	_	LMSeg:ეს
5	კაცი	კაცი	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	7	nsubj	_	LMSeg:კაც·ი
6	რატომ	რატომ	ADV	Adv_Int_Causal	_	7	advmod	_	LMSeg:რატომ
7	მიშლიდა	შლა	VERB	V_Act_Impf_OV_S:3Sg_DO:3_IO:1Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[obj]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	2	ccomp	_	LMSeg:*·შლ[ა]/შლ
8	ნერვებს	ნერვი	NOUN	N_Dat_Pl_NewPl	Case=Dat|Number=Plur	7	obj	_	LMSeg:ნერვ·ი|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	დავუშვათ	დაშვება	VERB	V_Act_Opt_Pv_[OV]_S:1Pl_DO:3	Mood=Sub|Number[subj]=Plur|Person[obj]=3|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:და·შვებ[ა]/შვ|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
3	სიბრძნისა	სიბრძნე	NOUN	N_Gen_Sg_L_PP_PP:თვის	Case=Gen|Number=Sing	7	obl	_	LMSeg:სიბრძნ[ე]|SpaceAfter=No
4	თვის	_თვის	ADP	Pp	_	3	case	_	LMSeg:_თვის
5	ოხუნჯობაც	ოხუნჯობა	NOUN	N_VN_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing|VerbForm=Vnoun	7	nsubj	_	LMSeg:ოხუნჯობ[ა]/ოხუნჯ
6	ზედმეტი	ზედმეტი	ADJ	A_Nom_Att	Case=Nom	7	amod	_	LMSeg:ზედმეტ·ი
7	სიმსუბუქე	სიმსუბუქე	NOUN	N_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	1	ccomp	_	LMSeg:სიმსუბუქ[ე]|SpaceAfter=No
8	ა	ყოფნა	AUX	V_MedPass_Pres_S:3Sg_Encl	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	7	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	1	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	როცა	როცა	SCONJ	Cj_Sub	_	2	mark	_	LMSeg:როცა
2	მიაღწევთ	მიღწევა	VERB	V_Act_Fut_Pv_S:2Pl_IO:3	Mood=Ind|Number[subj]=Plur|Person[io]=3|Person[subj]=2|Tense=Fut|VerbForm=Fin	4	acl:relcl	_	LMSeg:მი·ღწევ[ა]/ღწ[ევ]|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	4	punct	_	LMSeg:,
4	მაშინღა	მაშინ	ADV	Adv_Temp_Encl:ღა_Foc	AdvType=Tim	5	advmod	_	LMSeg:მაშინ
5	მიხვდებით	მიხვდომა	VERB	V_Pass_Fut_Pv_S:2Pl_IO:3	Mood=Ind|Number[subj]=Plur|Person[io]=3|Person[subj]=2|Tense=Fut|VerbForm=Fin	0	root	_	LMSeg:მი·ხვდომ[ა]/ხვდ|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
7	რომ	რომ	SCONJ	Cj_Sub	_	8	mark	_	LMSeg:რომ
8	სხვისი	სხვისი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	5	ccomp	_	LMSeg:სხვის·ი
9	ყოფილა	ყოფნა	AUX	V_Pass_Perf_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=PastPerf|VerbForm=Fin	8	cop	_	LMSeg:ყოფნ[ა]/ყოფ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


