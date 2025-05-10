---
layout: base
title:  'Statistics of obl:final in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `obl:final`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ka_gnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ka_gnc-dep-obl-iobj.html">obl:iobj</a></tt>.

18 nodes (0%) are attached to their parents as `obl:final`.

11 instances of `obl:final` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11111111111111.

The following 2 pairs of parts of speech are connected with `obl:final`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (15; 83% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (3; 17% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:final	color:blue
1	არცა	არ	ADV	Adv_Neg_L_Encl:ც_Foc	Encl=C	7	advmod:neg	_	LMSeg:არ
2	ვარ	არის	AUX	V_MedPass_Pres_S:1Sg	Number[subj]=Sing|Person[subj]=1|Tense=Pres	7	aux	_	LMSeg:ყოფნ[ა]/არ
3	ამ	ეს	PRON	Pron_Dem_Dat_Att	Case=Dat|PronType=Dem	4	det	_	LMSeg:ეს
4	თემა	თემა	NOUN	N_Dat_Sg_PP_PP:ზე	Case=Dat|Number=Sing	6	obl	_	LMSeg:თემ[ა]|SpaceAfter=No
5	ზე	_ზე	ADP	Pp	_	4	case	_	LMSeg:_ზე
6	სასაუბროდ	სასაუბრო	ADJ	A_Part_FutPart_Advb_Sg	Case=Ess|Number=Sing|Tense=Fut|VerbForm=Part	7	obl:final	_	LMSeg:სასაუბრო/საუბრ
7	განწყობილი	განწყობილი	VERB	A_Part_PastPart_Pv_Nom_Sg	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	LMSeg:გან·წყობილ·ი/წყ|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:final	color:blue
1	ძველ	ძველი	ADJ	A_Gen_Att	Case=Gen	2	nmod	_	LMSeg:ძველ·ი
2	ფილოსოფოსთა	ფილოსოფოსი	NOUN	N_Hum_Gen_Pl_OldPl	Animacy=Anim|Case=Gen|Number=Plur	3	nmod	_	LMSeg:ფილოსოფოს·ი
3	აზროვნების	აზროვნება	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	4	nmod	_	LMSeg:აზროვნებ[ა]
4	გასაგებად	გასაგები	ADJ	A_Part_FutPart_Pv_Advb_Sg	Case=Ess|Number=Sing|Tense=Fut|VerbForm=Part	5	obl:final	_	LMSeg:გა·საგებ·ი/გ
5	საჭირო	საჭირო	ADJ	A_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	0	root	_	LMSeg:საჭირო|SpaceAfter=No
6	ა	არის	AUX	V_MedPass_Pres_S:3Sg_Encl	Number[subj]=Sing|Person[subj]=3|Tense=Pres	5	cop	_	LMSeg:ყოფნ[ა]/არ
7	ვიცოდეთ	ცოდნა	VERB	V_MedPass_ConjPres_S:1Pl_DO:3	Mood=Sub|Number[subj]=Plur|Person[obj]=3|Person[subj]=1|Tense=Pres	5	csubj	_	LMSeg:ცოდნ[ა]/ც|SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
9	როგორი	როგორი	PRON	Pron_Int_Nom_Sg	Case=Nom|Number=Sing	7	ccomp	_	LMSeg:როგორ·ი
10	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	9	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]
11	სამყაროს	სამყარო	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	13	nmod	_	LMSeg:სამყარო
12	მითოლოგიური	მითოლოგიური	ADJ	A_Nom_Att	Case=Nom	13	amod	_	LMSeg:მითოლოგიურ·ი
13	სურათი	სურათი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	9	nsubj	_	LMSeg:სურათ·ი|SpaceAfter=No
14	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


