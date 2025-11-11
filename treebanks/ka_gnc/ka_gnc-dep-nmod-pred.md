---
layout: base
title:  'Statistics of nmod:pred in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `nmod:pred`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="ka_gnc-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="ka_gnc-dep-nmod-iobj.html">nmod:iobj</a></tt>, <tt><a href="ka_gnc-dep-nmod-name.html">nmod:name</a></tt>.

3 nodes (0%) are attached to their parents as `nmod:pred`.

3 instances of `nmod:pred` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod:pred`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:pred	color:blue
1	მუცლად	მუცელი	NOUN	N_Advb_Sg	Case=Ess|Number=Sing	2	nmod:pred	_	LMSeg:მუც[ე]ლ·ი
2	ყოფნის	ყოფნა	NOUN	N_VN_Gen_Sg	Case=Gen|Number=Sing|VerbForm=Vnoun	9	obl	_	LMSeg:ყოფნ[ა]/ყოფნ
3	შემდეგ	შემდეგ	ADP	Pp	_	2	case	_	LMSeg:შემდეგ
4	ისინი	ის	PRON	Pron_Pers_3_Nom_Pl	Case=Nom|Number=Plur|PronType=Prs	9	nsubj	_	LMSeg:ის
5	სრულიად	სრულიად	ADV	Adv_Deg	_	6	advmod	_	LMSeg:სრულიად
6	ახალ	ახალი	ADJ	A_Dat_Att	Case=Dat	7	amod	_	LMSeg:ახ[ა]ლ·ი
7	გარემო	გარემო	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	9	obl	_	LMSeg:გარემო|SpaceAfter=No
8	ში	_ში	ADP	Pp	_	7	case	_	LMSeg:_ში
9	ხვდებიან	ხვდომა	VERB	V_Pass_Pres_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:*·ხვდომ[ა]/ხვდ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:pred	color:blue
1	მარტო	მარტო	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	2	nmod:pred	_	LMSeg:მარტო
2	ყოფნა	ყოფნა	NOUN	N_VN_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	5	obj	_	LMSeg:ყოფნ[ა]/ყოფნ
3	და	და	CCONJ	Cj_Coord	_	4	cc	_	LMSeg:და
4	სიმშვიდე	სიმშვიდე	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	conj	_	LMSeg:სიმშვიდ[ე]
5	მენატრებოდა	ნატრება	VERB	V_MedPass_Inv_Impf_S:1Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Imp|VerbForm=Fin|Voice=Inv	0	root	_	LMSeg:ნატრებ[ა]/ნატრ|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


