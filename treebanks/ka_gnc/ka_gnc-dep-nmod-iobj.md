---
layout: base
title:  'Statistics of nmod:iobj in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `nmod:iobj`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="ka_gnc-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="ka_gnc-dep-nmod-name.html">nmod:name</a></tt>, <tt><a href="ka_gnc-dep-nmod-pred.html">nmod:pred</a></tt>.

4 nodes (0%) are attached to their parents as `nmod:iobj`.

4 instances of `nmod:iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `nmod:iobj`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nmod:iobj	color:blue
1	«	«	PUNCT	Punct_Quote	_	8	punct	_	LMSeg:«
2	სუსტად	სუსტად	ADV	A_Advb_Sg	_	3	advmod	_	LMSeg:სუსტად
3	განვითარებული	განვითარებული	ADJ	A_Part_PastPart_Pv_Gen_Att	Case=Gen|Tense=Past|VerbForm=Part	4	amod	_	LMSeg:გან·ვითარებულ·ი/ვითარ
4	ქვეყნებისა	ქვეყანა	NOUN	N_Gen_Pl_NewPl_L_PP_PP:თვის	Case=Gen|Number=Plur	7	nmod:iobj	_	LMSeg:ქვეყ[ა]ნ[ა]|SpaceAfter=No
5	თვის	_თვის	ADP	Pp	_	4	case	_	LMSeg:_თვის
6	ტექნიკური	ტექნიკური	ADJ	A_Gen_Att	Case=Gen	7	amod	_	LMSeg:ტექნიკურ·ი
7	დახმარების	დახმარება	NOUN	N_VN_Pv_Gen_Sg	Case=Gen|Number=Sing|VerbForm=Vnoun	8	nmod	_	LMSeg:და·ხმარებ[ა]/ხმარ
8	გაწევა	გაწევა	NOUN	N_VN_Pv_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	0	root	_	LMSeg:გა·წევ[ა]/წ
9	»	»	PUNCT	Punct_Quote	_	8	punct	_	LMSeg:»

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 nmod:iobj	color:blue
1	დილით	დილით	ADV	Adv_Temp	AdvType=Tim	5	advmod	_	LMSeg:დილით|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
3	საუზმის	საუზმე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	4	nmod	_	LMSeg:საუზმ[ე]
4	დროს	დრო	NOUN	N_Temp_Dat_Sg	Case=Dat|Number=Sing	5	obl	_	LMSeg:დრო
5	საჭირო	საჭირო	ADJ	A_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	0	root	_	LMSeg:საჭირო|SpaceAfter=No
6	ა	ყოფნა	AUX	V_MedPass_Pres_S:3Sg_Encl	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	5	cop	_	LMSeg:ყოფნ[ა]/არ
7	მის	ის	PRON	Pron_Pers_3_Gen_Sg_PP_PP:თვის	Case=Gen|Number=Sing|PronType=Prs	11	nmod:iobj	_	LMSeg:ის|SpaceAfter=No
8	თვის	_თვის	ADP	Pp	_	7	case	_	LMSeg:_თვის
9	მკაცრი	მკაცრი	ADJ	A_Gen_Att	Case=Gen	10	amod	_	LMSeg:მკაცრ·ი
10	საყვედურის	საყვედური	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	11	nmod	_	LMSeg:საყვედურ·ი
11	თქმა	თქმა	NOUN	N_VN_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	5	nsubj	_	LMSeg:თქმ[ა]/თქმ
12	ქარაფშუტობისა	ქარაფშუტობა	NOUN	N_VN_Gen_Sg_L_PP_PP:თვის	Case=Gen|Number=Sing|VerbForm=Vnoun	11	nmod	_	LMSeg:ქარაფშუტობ[ა]/ქარაფშუტ|SpaceAfter=No
13	თვის	_თვის	ADP	Pp	_	12	case	_	LMSeg:_თვის|SpaceAfter=No
14	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


