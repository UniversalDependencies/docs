

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

15 nodes (0%) are attached to their parents as `dep:atr_exd`.

8 instances of `dep:atr_exd` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6.

The following 7 pairs of parts of speech are connected with `dep:atr_exd`: [lt-pos/VERB]()-[lt-pos/ADJ]() (6; 40% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (3; 20% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (2; 13% instances), [lt-pos/PRON]()-[lt-pos/ADJ]() (1; 7% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (1; 7% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (1; 7% instances), [lt-pos/X]()-[lt-pos/NOUN]() (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dep:atr_exd	color:blue
1	alveokokinė	alveokokinis	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	dep:atr_exd	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	5	punct	_	_
3	kaip	kaip	CCONJ	Cg	_	5	mark	_	_
4	ir	ir	PART	Qg	_	5	advmod:emph	_	_
5	vėžys	vėžys	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	gali	galėti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
8	išplisti	išplisti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	7	dep:predv	_	_
9	į	į	ADP	Sga	AdpType=Prep	11	case	_	_
10	kitus	kitas	PRON	Pgmpan	Case=Nom|PronType=Tot	11	nmod	_	_
11	organus	organas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep:atr_exd	color:blue
1	Tokius	toks	PRON	Pgmpan	Case=Nom|PronType=Tot	3	dep:atr_exd	_	_
2	galite	galėti	VERB	Vgmp2p--n--ni-	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pasiruošti	pasiruošti	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	2	dep:predv	_	_
4	ir	ir	PART	Qg	_	7	advmod:emph	_	_
5	prieš	prieš	ADP	Sga	AdpType=Prep	7	case	_	_
6	kelias	keli	PRON	Pgf-an	Case=Nom|PronType=Tot	7	nmod	_	_
7	dienas	diena	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	2	dep:adj	_	_
8	tikrai	tikrai	ADV	Rgp	Degree=Pos	9	dep:adj	_	_
9	nesuges	nesugesti	VERB	Vgmf3p--y--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	2	dep:pred_co	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dep:atr_exd	color:blue
1	Nederėtų	nederėti	VERB	Vgm-3---y--ns-	Mood=Imp|Person=3|Polarity=Neg|VerbForm=Fin	0	root	_	_
2	užmiršti	užmiršti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
3	ir	ir	PART	Qg	_	5	advmod:emph	_	_
4	pieno	pienas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	dep:obj_co	_	_
5	bei	bei	CCONJ	Cg	_	2	advmod	_	_
6	jo	jis	PRON	Pgmsgn	Case=Nom|PronType=Tot	7	nmod	_	_
7	produktų	produktas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	5	dep:obj_co	_	_
8	ypač	ypač	ADV	Rgp	Degree=Pos	9	dep:adj	_	_
9	sveika	sveikas	ADJ	Agpn--n	Degree=Pos|Gender=Neut	1	dep:predn_co	_	_
10	rūgštūs	rūgštus	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	dep:atr_exd	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


