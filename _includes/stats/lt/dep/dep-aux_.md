

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

10 nodes (0%) are attached to their parents as `dep:aux`.

9 instances of `dep:aux` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 7 pairs of parts of speech are connected with `dep:aux`: [lt-pos/VERB]()-[lt-pos/PART]() (4; 40% instances), [lt-pos/ADV]()-[lt-pos/PART]() (1; 10% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (1; 10% instances), [lt-pos/NUM]()-[lt-pos/X]() (1; 10% instances), [lt-pos/PRON]()-[lt-pos/ADV]() (1; 10% instances), [lt-pos/PRON]()-[lt-pos/PART]() (1; 10% instances), [lt-pos/VERB]()-[lt-pos/ADP]() (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dep:aux	color:blue
1	Europą	Europa	PROPN	Npfsanf	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
2	dar	dar	PART	Qg	_	5	advmod:emph	_	_
3	gal	gal	PART	Qg	_	5	dep:aux	_	_
4	ir	ir	PART	Qg	_	5	advmod:emph	_	_
5	ištrauktų	ištraukti	VERB	Vgm-3p--n--ns-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
6	pro	pro	ADP	Sga	AdpType=Prep	7	case	_	_
7	šalį	šalis	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
8	plaukiantys	plaukti	VERB	Vgpp-pmannnn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	10	acl	_	_
9	menkių	menkė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	10	nmod	_	_
10	žvejai	žvejys	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	5	dep:sub	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	5	punct	_	_
12	jaučio	jautis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	15	obj	_	_
13	niekas	niekas	PRON	Pg--nn	Case=Nom|PronType=Tot	15	dep:sub	_	_
14	nė	nė	PART	Qg	_	15	advmod:emph	_	_
15	negelbėtų	negelbėti	VERB	Vgm-3---y--ns-	Mood=Imp|Person=3|Polarity=Neg|VerbForm=Fin	5	dep:pred_co	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 dep:aux	color:blue
1	Direktoriaus	direktorius	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
2	nuomone	nuomonė	NOUN	Ncfsin-	Case=Ins|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	krovinių	krovinys	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
5	srautas	srautas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	2	dep:sub	_	_
6	per	per	ADP	Sga	AdpType=Prep	7	case	_	_
7	Lietuvą	Lietuva	PROPN	Npfsang	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
8	vis dar	vis dar	ADV	Rgp	Degree=Pos	2	dep:adj	_	_
9	tik	tik	PART	Qg	_	2	dep:aux	_	_
10	dėl	dėl	ADP	Sgg	AdpType=Prep	9	case	_	_
11	to	tas	PRON	Pgmsgn	Case=Nom|PronType=Tot	9	obj	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	_
13	kad	kad	CCONJ	Cg	_	15	mark	_	_
14	Baltarusija	Baltarusija	PROPN	Npfsnng	Case=Nom|Gender=Fem|Number=Sing	15	dep:sub	_	_
15	yra	būti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	dep:pred_adj	_	_
16	uždara	uždaras	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	_
17	valstybė	valstybė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	15	dep:predn	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dep:aux	color:blue
1	Turkevičiai	Turkevičius	PROPN	Npmpnns	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
2	gerai	gerai	ADV	Rgp	Degree=Pos	3	dep:adj	_	_
3	pažįsta	pažinti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_co	_	_
4	Lietuvą	Lietuva	PROPN	Npfsang	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
5	beveik	beveik	ADV	Rgp	Degree=Pos	6	dep:aux	_	_
6	kiekvieną	kiekvienas	PRON	Pgmsan	Case=Nom|PronType=Tot	7	nmod	_	_
7	savaitgalį	savaitgalis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	8	dep:adj	_	_
8	ieško	ieškoti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	dep:pred_co	_	_
9	griūvančių	griūti	VERB	Vgpp-pmanngn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	10	acl	_	_
10	dvarų	dvaras	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	15	dep:obj_co	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	15	punct	_	_
12	istorinių	istorinis	ADJ	Agpfpgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	13	amod	_	_
13	pilių	pilis	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	14	nmod	_	_
14	liekanų	liekana	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	15	dep:obj_co	_	_
15	bei	bei	CCONJ	Cg	_	8	advmod	_	_
16	įspūdingų	įspūdingas	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	17	amod	_	_
17	kraštovaizdžių	kraštovaizdis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	15	dep:obj_co	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


