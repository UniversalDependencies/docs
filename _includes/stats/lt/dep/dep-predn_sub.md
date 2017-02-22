

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

8 nodes (0%) are attached to their parents as `dep:predn_sub`.

8 instances of `dep:predn_sub` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.75.

The following 7 pairs of parts of speech are connected with `dep:predn_sub`: [lt-pos/PRON]()-[lt-pos/VERB]() (2; 25% instances), [lt-pos/ADV]()-[lt-pos/ADJ]() (1; 13% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (1; 13% instances), [lt-pos/PRON]()-[lt-pos/ADJ]() (1; 13% instances), [lt-pos/PRON]()-[lt-pos/PRON]() (1; 13% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (1; 13% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (1; 13% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 dep:predn_sub	color:blue
1	Kita vertus	kita vertus	PART	Qg	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	1	dep:sub	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	9	punct	_	_
5	kad	kad	CCONJ	Cg	_	9	mark	_	_
6	pagal	pagal	ADP	Sga	AdpType=Prep	8	case	_	_
7	Sanglaudos	sanglauda	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	politiką	politika	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	9	obj	_	_
9	skirta	skirti	VERB	Vgps-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	3	dep:predn_sub	_	_
10	didesnė	didis	ADJ	Agcfsnn	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	14	amod	_	_
11	investicijų	investicija	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	14	nmod	_	_
12	į	į	ADP	Sga	AdpType=Prep	13	case	_	_
13	inovacijas	inovacija	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	11	obj	_	_
14	dalis	dalis	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	9	dep:sub	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	9	punct	_	_
16	labai	labai	ADV	Rgp	Degree=Pos	17	dep:adj	_	_
17	svarbu	svarbus	ADJ	Agpn--n	Degree=Pos|Gender=Neut	1	dep:predn	_	_
18	stiprinant	stiprinti	VERB	Vgap----n--n--	Polarity=Pos|Tense=Pres	17	dep:adj	_	_
19	mokslinių	mokslinis	ADJ	Agpmpgn	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	20	amod	_	_
20	tyrimų	tyrimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	21	dep:atr_co	_	_
21	ir	ir	CCONJ	Cg	_	23	cc	_	_
22	inovacijų	inovacija	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	21	dep:atr_co	_	_
23	srities	sritis	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	24	nmod	_	_
24	pajėgumus	pajėgumas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	18	obj	_	_
25	konvergencijos	konvergencija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	_
26	regionuose	regionas	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	18	dep:adj	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 21 dep:predn_sub	color:blue
1	Taip pat	taip pat	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	21	punct	_	_
3	kad	kad	CCONJ	Cg	_	21	mark	_	_
4	asmeniui	asmuo	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	21	obj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	7	punct	_	_
6	iš	iš	ADP	Sgg	AdpType=Prep	7	case	_	_
7	kurio	kuris	PRON	Pgmsgn	Case=Nom|PronType=Tot	13	obj	_	_
8	teisė	teisė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	12	dep:sub	_	_
9	vairuoti	vairuoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	8	acl	_	_
10	transporto	transportas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
11	priemonę	priemonė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	9	obj	_	_
12	buvo	būti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	4	dep:pred_atr	_	_
13	atimta	atimti	VERB	Vgps-sfpnnnn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	12	dep:predn	_	_
14	ilgiau	ilgai	ADV	Rgc	Degree=Cmp	13	dep:adj	_	_
15	negu	negu	CCONJ	Cg	_	17	mark	_	_
16	vieneriems	vienas	ADV	Mmm-dln	Case=Dat|Gender=Masc|NumForm=Word|NumType=Mult	17	advmod	_	_
17	metams	metai	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	14	dep:adj	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	21	punct	_	_
19	vairuotojo	vairuotojas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	_
20	pažymėjimas	pažymėjimas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	21	dep:sub	_	_
21	grąžinamas	grąžinti	VERB	Vgpp-smpnnnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	1	dep:predn_sub	_	_
22	tik	tik	PART	Qg	_	23	advmod:emph	_	_
23	pasibaigus	pasibaigti	VERB	Vgaa----n--y--	Polarity=Pos	28	dep:adj_co	_	_
24	šios	šis	PRON	Pgfsgn	Case=Nom|PronType=Tot	25	nmod	_	_
25	teisės	teisė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	_
26	atėmimo	atėmimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	27	nmod	_	_
27	laikui	laikas	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	23	dep:sub	_	_
28	ir	ir	CCONJ	Cg	_	21	advmod	_	_
29	iš naujo	iš naujo	ADV	Rgp	Degree=Pos	30	dep:adj	_	_
30	išlaikius	išlaikyti	VERB	Vgaa----n--n--	Polarity=Pos	28	dep:adj_co	_	_
31	egzaminą	egzaminas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	30	obj	_	SpaceAfter=No
32	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 dep:predn_sub	color:blue
1	Neišgirsite	neišgirsti	VERB	Vgmf2p--y--ni-	Mood=Imp|Number=Plur|Person=2|Polarity=Neg|Tense=Fut|VerbForm=Fin	0	root	_	_
2	dainų	daina	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	kuriose	kuris	PRON	Pgfpln	Case=Nom|PronType=Tot	5	nmod	_	_
5	diskutuojama	diskutuoti	VERB	Vgpp--npnn-n-p	Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	2	dep:predn_atr	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	kokia	koks	PRON	Pgfsnn	Case=Nom|PronType=Tot	9	nmod	_	_
8	prostitutės	prostitutė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
9	kaina	kaina	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:predn_sub	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	1	punct	_	_
11	tokią	toks	PRON	Pgfsan	Case=Nom|PronType=Tot	12	obj	_	_
12	išgirdau	išgirsti	VERB	Vgma1s--n--ni-	Mood=Imp|Number=Sing|Person=1|Polarity=Pos|VerbForm=Fin	1	dep:pred_co	_	_
13	vienoje	vienas	PRON	Pgfsln	Case=Nom|PronType=Tot	15	nmod	_	_
14	Kauno	Kaunas	PROPN	Npmsgng	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
15	kavinėje	kavinė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	12	dep:adj	_	_
16	pietų	pietūs	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	17	nmod	_	_
17	metu	metas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	12	dep:adj	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


