---
layout: base
title:  'Statistics of advcl:relcl in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="sr_parcolab-dep-advcl.html">advcl</a></tt>.

48 nodes (0%) are attached to their parents as `advcl:relcl`.

41 instances of `advcl:relcl` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.70833333333333.

The following 13 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (20; 42% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (12; 25% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 advcl:relcl	color:blue
1	Požurio	požuriti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
2	sam	biti	AUX	V_aux_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1|OrigLemma=jesam
3	koliko	koliko	ADV	Adv_rel_-	_	6	advmod	_	OrigDep=DepVAdv
4	god	god	PART	Part	_	3	fixed	_	OrigDep=Polylex
5	sam	biti	AUX	V_aux_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1|OrigLemma=jesam
6	mogao	moći	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	1	advcl:relcl	_	OrigDep=PredRel|OrigFeats=g:m;n:sg;t:partact|SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 advcl:relcl	color:blue
1	Udariše	udariti	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:pres;r:3
2	močugom	močuga	NOUN	N_com_ins_sg_f	Case=Ins|Gender=Fem|Number=Sing	1	obl	_	OrigDep=DepVCas|OrigFeats=c:ins;g:f;n:sg
3	po	po	ADP	Prep	_	4	case	_	OrigDep=DepVPrep
4	čunku	čunak	NOUN	N_com_loc_sg_m	Case=Loc|Gender=Masc|Number=Sing	1	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:m;n:sg|SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
6	onako	onako	ADV	Adv_gen_pos	Degree=Pos	1	advmod	_	OrigDep=DepVAdv
7	kako	kako	ADV	Adv_rel_-	_	9	advmod	_	OrigDep=DepVAdv
8	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	9	expl	_	OrigDep=Ref|OrigFeats=c:acc
9	udara	udarati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl:relcl	_	OrigDep=PredRel|OrigFeats=n:sg;t:pres;r:3
10	zmija	zmija	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:sg
11	–	–	PUNCT	Z	_	10	punct	_	OrigDep=Ponct
12	za	za	ADP	Prep	_	13	case	_	OrigDep=DepVPrep
13	vrat	vrat	NOUN	N_com_acc_sg_m	Case=Acc|Gender=Masc|Number=Sing	9	obl	_	OrigDep=ComplPrep|OrigFeats=c:acc;g:m;n:sg|SpaceAfter=No
14	.	.	PUNCT	Z	_	13	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 29 advcl:relcl	color:blue
1	Neće	hteti	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:pres;r:3
2	valjda	valjda	ADV	Part	_	1	advmod	_	OrigDep=ExtraPred
3	da	da	SCONJ	C_sub	_	4	mark	_	OrigDep=Sub
4	naprave	napraviti	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:pl;t:pres;r:3
5	nešto	nešto	PRON	P_indef_-_-_-_acc	Case=Acc	4	obj	_	OrigDep=ObjDir|OrigFeats=c:acc
6	sasvim	sasvim	ADV	Part	_	8	advmod:emph	_	OrigDep=Emph
7	bez	bez	ADP	Prep	_	8	case	_	OrigDep=DepVPrep
8	mene	ja	PRON	P_pers_1_sg_-_gen	Case=Gen|Number=Sing|Person=1	4	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;n:sg;r:1|SpaceAfter=No
9	,	,	PUNCT	Z	_	8	punct	_	OrigDep=Ponct
10	da	da	SCONJ	C_sub	_	12	mark	_	OrigDep=Coord
11	me	ja	PRON	P_pers_1_sg_-_acc	Case=Acc|Number=Sing|Person=1	12	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;n:sg;r:1
12	ostave	ostaviti	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	OrigDep=PredCompletive|OrigFeats=n:pl;t:pres;r:3
13	bez	bez	ADP	Prep	_	14	case	_	OrigDep=DepVPrep
14	materijala	materijal	NOUN	N_com_gen_sg_m	Case=Gen|Gender=Masc|Number=Sing	12	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:m;n:sg
15	za	za	ADP	Prep	_	16	case	_	OrigDep=DepNPrep
16	izveštaj	izveštaj	NOUN	N_com_acc_sg_m	Case=Acc|Gender=Masc|Number=Sing	14	nmod	_	OrigDep=ComplPrep|OrigFeats=c:acc;g:m;n:sg
17	koji	koji	PRON	P_rel_-_sg_m_acc	Case=Acc|Gender=Masc|Number=Sing	19	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:m;n:sg
18	ću	hteti	AUX	V_aux_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	19	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1
19	podneti	podneti	VERB	V_main_inf_-_-_-_-	VerbForm=Inf	16	acl:relcl	_	OrigDep=PredRel|OrigFeats=t:inf
20	pretpostavljenima	pretpostavljeni	NOUN	N_com_dat_pl_m	Case=Dat|Gender=Masc|Number=Plur	19	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:m;n:pl|SpaceAfter=No
21	,	,	PUNCT	Z	_	20	punct	_	OrigDep=Ponct
22	a	a	CCONJ	C_coord	_	23	cc	_	OrigDep=ConjCoord
23	ovi	ovaj	PRON	P_dem_-_pl_m_nom	Case=Nom|Gender=Masc|Number=Plur	19	conj	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:m;n:pl
24	opet	opet	ADV	Adv_gen_pos	Degree=Pos	23	orphan	_	OrigDep=DepEx_DepVAdv|SpaceAfter=No
25	,	,	PUNCT	Z	_	24	punct	_	OrigDep=Ponct
26	preuređen	preuređen	ADJ	A_qual_acc_sg_m_pos	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	23	orphan	_	OrigDep=DepEx_DepNAdj|OrigFeats=c:acc;g:m;n:sg
27	kako	kako	ADV	Adv_rel_-	_	29	advmod	_	OrigDep=DepVAdv
28	im	oni	PRON	P_pers_3_pl_m_dat	Case=Dat|Gender=Masc|Number=Plur|Person=3	29	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:m;n:pl;r:3
29	odgovara	odgovarati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	advcl:relcl	_	OrigDep=PredRel|OrigFeats=n:sg;t:pres;r:3|SpaceAfter=No
30	,	,	PUNCT	Z	_	29	punct	_	OrigDep=Ponct
31	najvišim	visok	ADJ	A_qual_dat_pl_f_sup	Case=Dat|Degree=Sup|Gender=Fem|Number=Plur	32	amod	_	OrigDep=DepNAdj|OrigFeats=c:dat;g:f;n:pl
32	instancama	instanca	NOUN	N_com_dat_pl_f	Case=Dat|Gender=Fem|Number=Plur	23	orphan	_	OrigDep=DepEx_ObjIndirCas|OrigFeats=c:dat;g:f;n:pl|SpaceAfter=No
33	,	,	PUNCT	Z	_	32	punct	_	OrigDep=Ponct
34	možda	možda	ADV	Part	_	37	advmod	_	OrigDep=ExtraPred
35	i	i	ADV	Part	_	37	advmod:emph	_	OrigDep=Emph
36	samom	sam	ADJ	A_qual_dat_sg_m_pos	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	37	amod	_	OrigDep=DepNAdj|OrigFeats=c:dat;g:m;n:sg
37	prvom	prvi	PRON	P_num_-_sg_m_dat	Case=Dat|Gender=Masc|Number=Sing	32	conj	_	OrigDep=DepEx_ObjIndirCas|OrigFeats=c:dat;g:m;n:sg|SpaceAfter=No
38	?	?	PUNCT	Z	_	37	punct	_	OrigDep=Ponct

~~~


