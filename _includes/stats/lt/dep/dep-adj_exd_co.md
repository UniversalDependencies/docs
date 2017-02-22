

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

3 nodes (0%) are attached to their parents as `dep:adj_exd_co`.

3 instances of `dep:adj_exd_co` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66666666666667.

The following 3 pairs of parts of speech are connected with `dep:adj_exd_co`: [lt-pos/CCONJ]()-[lt-pos/NUM]() (1; 33% instances), [lt-pos/PUNCT]()-[lt-pos/ADV]() (1; 33% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (1; 33% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 dep:adj_exd_co	color:blue
1	Žmonės	žmogus	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	2	dep:sub	_	_
2	renkasi	rinktis	VERB	Vgmp3p--n--yi-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	produktus	produktas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_
4	pagal	pagal	ADP	Sga	AdpType=Prep	5	case	_	_
5	kainą	kaina	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	2	iobj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	2	punct	_	_
7	vieni	vienas	PRON	Pgmpnn	Case=Nom|PronType=Tot	8	dep:sub	_	_
8	moka	mokėti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	dep:pred_co	_	_
9	brangiai	brangiai	ADV	Rgp	Degree=Pos	8	dep:adj	_	_
10	kiti	kitas	PRON	Pgmpnn	Case=Nom|PronType=Tot	11	dep:sub	_	_
11	pigiau	pigiai	ADV	Rgc	Degree=Cmp	2	dep:adj_exd_co	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep:adj_exd_co	color:blue
1	jau	jau	ADV	Rgp	Degree=Pos	10	dep:adj	_	_
2	po	po	ADP	Sgg	AdpType=Prep	1	case	_	_
3	savaitės	savaitė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	4	dep:adj_co	_	_
4	ar	ar	CCONJ	Cg	_	1	cc	_	_
5	dviejų	du	NUM	Mcf-gl-	Case=Gen|Gender=Fem|NumForm=Word|NumType=Card	4	dep:adj_exd_co	_	_
6	klasėn	klasė	NOUN	Ncfsxn-	Gender=Fem|Number=Sing	7	dep:adj	_	_
7	įžengusi	įžengti	VERB	Vgpa-sfannnn-p	Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	10	dep:adj	_	_
8	mokytoja	mokytoja	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	10	dep:sub	_	_
9	iškart	iškart	ADV	Rgp	Degree=Pos	10	dep:adj	_	_
10	pataisė	pataisyti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
11	nuotaiką	nuotaika	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
12	:	:	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 19 dep:adj_exd_co	color:blue
1	Mano	aš	PRON	Pg-sgn	Case=Nom|PronType=Tot	2	nmod	_	_
2	temperamentas	temperamentas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	ne	ne	PART	Qg	_	2	advmod:emph	_	_
4	iš	iš	ADP	Sgg	AdpType=Prep	2	case	_	_
5	lėtųjų	lėtas	ADJ	Agpmpgy	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	2	dep:predn_co	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	2	punct	_	_
7	verslas	verslas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	11	dep:sub	_	_
8	choleriško	choleriškas	ADJ	Agpmsgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	būdo	būdas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	10	obj	_	_
10	reikalauja	reikalauti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	dep:pred_co	_	_
11	ir	ir	CCONJ	Cg	_	15	cc	_	_
12	jį	jis	PRON	Pgmsan	Case=Nom|PronType=Tot	14	obj	_	_
13	dar	dar	PART	Qg	_	14	advmod:emph	_	_
14	sustiprina	sustiprinti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	dep:pred_co	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	2	punct	_	_
16	lietuviškas	lietuviškas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	17	amod	_	_
17	kapitalizmas	kapitalizmas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	19	dep:sub	_	_
18	tai	tai	PART	Qg	_	19	advmod:emph	_	_
19	tikrai	tikrai	ADV	Rgp	Degree=Pos	15	dep:adj_exd_co	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


