

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd_co](), [dep:suj]().

2 nodes (0%) are attached to their parents as `dep:sub_exd`.

2 instances of `dep:sub_exd` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `dep:sub_exd`: [lt-pos/ADV]()-[lt-pos/NOUN]() (1; 50% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (1; 50% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 dep:sub_exd	color:blue
1	Turintis	turėti	VERB	Vgpp-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	11	dep:atr_co	_	_
2	smulkų	smulkus	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	3	dep:atr_co	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	9	punct	_	_
4	kad	kad	PART	Qg	_	6	advmod:emph	_	_
5	ir	ir	PART	Qg	_	4	advmod:emph	_	_
6	labai	labai	ADV	Rgp	Degree=Pos	7	dep:adj	_	_
7	pelningą	pelningas	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	3	dep:atr_co	_	_
8	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
9	versliuką	versliukas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	1	obj	_	SpaceAfter=No
10	"	"	PUNCT	PUNCT	_	9	punct	_	_
11	ir	ir	CCONJ	Cg	_	14	cc	_	_
12	dirbantis	dirbti	VERB	Vgpp-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	11	dep:atr_co	_	_
13	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	12	dep:adj	_	_
14	žmogus	žmogus	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
15	niekada	niekada	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
16	tiek	tiek	ADV	Rgp	Degree=Pos	14	dep:adj	_	_
17	aplinkinių	aplinkinis	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	18	amod	_	_
18	pagarbos	pagarba	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	20	punct	_	_
20	kiek	kiek	ADV	Rgp	Degree=Pos	16	dep:adj	_	_
21	didelės	didelis	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	_
22	įmonės	įmonė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
23	vadovas	vadovas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	20	dep:sub_exd	_	SpaceAfter=No
24	.	.	PUNCT	PUNCT	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:sub_exd	color:blue
1	Liko	likti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	antrasis	antras	ADJ	Momsnly	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	1	dep:sub_exd	_	_
3	kirpėjas	kirpėjas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	4	dep:sub	_	_
4	susikaupė	susikaupti	VERB	Vgma3s--n--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	6	dep:pred_co	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	1	punct	_	_
6	bet	bet	CCONJ	Cg	_	1	cc	_	_
7	tuo	tas	PRON	Pgmsin	Case=Nom|PronType=Tot	8	nmod	_	_
8	metu	metas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	13	dep:adj	_	_
9	į	į	ADP	Sga	AdpType=Prep	10	case	_	_
10	duris	durys	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	13	obj	_	_
11	kažkas	kažkas	PRON	Pg--nn	Case=Nom|PronType=Tot	13	dep:sub	_	_
12	mandagiai	mandagiai	ADV	Rgp	Degree=Pos	13	dep:adj	_	_
13	pasibeldė	pasibelsti	VERB	Vgma3---n--yi-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	15	dep:pred_co	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	6	punct	_	_
15	ir	ir	CCONJ	Cg	_	6	cc	_	_
16	į	į	ADP	Sga	AdpType=Prep	17	case	_	_
17	kambarį	kambarys	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	18	obj	_	_
18	įžengė	įžengti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	15	dep:pred_co	_	_
19	visai	visai	ADV	Rgp	Degree=Pos	20	dep:adj	_	_
20	netolimas	netolimas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	22	amod	_	_
21	mūsų	aš	PRON	Pg-pgn	Case=Nom|PronType=Tot	22	nmod	_	_
22	kaimynas	kaimynas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	24	nmod	_	_
23	Konstantinas	Konstantinas	PROPN	Npmsnnf	Case=Nom|Gender=Masc|Number=Sing	24	nmod	_	_
24	Mažuolis	Mažuolis	PROPN	Npmsnns	Case=Nom|Gender=Masc|Number=Sing	18	dep:sub	_	_
25	–	–	PUNCT	PUNCT	_	29	punct	_	_
26	aukštas	aukštas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	30	dep:atr_co	_	SpaceAfter=No
27	,	,	PUNCT	PUNCT	_	30	punct	_	_
28	prakaulus	prakaulus	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	30	dep:atr_co	_	_
29	vyriškis	vyriškis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	24	nmod	_	SpaceAfter=No
30	,	,	PUNCT	PUNCT	_	29	punct	_	_
31	praplikęs	praplikti	VERB	Vgpa-smannnn-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	30	dep:atr_co	_	_
32	kaip	kaip	CCONJ	Cg	_	34	mark	_	_
33	ir	ir	PART	Qg	_	34	advmod:emph	_	_
34	tėvas	tėvas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	31	nmod	_	_
35	–	–	PUNCT	PUNCT	_	31	punct	_	_
36	jokių	joks	PRON	Pgfpgn	Case=Nom|PronType=Tot	37	nmod	_	_
37	garbanų	garbana	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	38	dep:obj_co	_	_
38	ir	ir	CCONJ	Cg	_	35	cc	_	_
39	verpetų	verpetas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	38	dep:obj_co	_	SpaceAfter=No
40	!	!	PUNCT	PUNCT	_	1	punct	_	_

~~~


