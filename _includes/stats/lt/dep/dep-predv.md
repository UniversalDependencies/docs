

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

501 nodes (1%) are attached to their parents as `dep:predv`.

483 instances of `dep:predv` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.32534930139721.

The following 12 pairs of parts of speech are connected with `dep:predv`: [lt-pos/VERB]()-[lt-pos/VERB]() (338; 67% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (43; 9% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (39; 8% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (36; 7% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (17; 3% instances), [lt-pos/PART]()-[lt-pos/VERB]() (12; 2% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (4; 1% instances), [lt-pos/NUM]()-[lt-pos/VERB]() (4; 1% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (3; 1% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (2; 0% instances), [lt-pos/X]()-[lt-pos/VERB]() (2; 0% instances), [lt-pos/ADV]()-[lt-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 dep:predv	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	Gidė	gidė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	kad	kad	CCONJ	Cg	_	7	mark	_	_
5	akcijos	akcija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
6	tikslas	tikslas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	7	dep:sub	_	_
7	nebuvo	nebūti	VERB	Vgma3s--y--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	2	dep:pred_obj	_	_
8	surinkti	surinkti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	7	dep:predv	_	_
9	kuo	kuo	PART	Qg	_	10	advmod:emph	_	_
10	daugiau	daug	ADV	Rgc	Degree=Cmp	8	dep:adj	_	_
11	pinigų	pinigai	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
12	:	:	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dep:predv	color:blue
1	Darbas	darbas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	1	dep:adj	_	_
3	tapti	tapti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
4	ir	ir	PART	Qg	_	5	advmod:emph	_	_
5	palaima	palaima	NOUN	Ncfsin-	Case=Ins|Gender=Fem|Number=Sing	6	dep:obj_co	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	3	punct	_	_
7	ir	ir	PART	Qg	_	8	advmod:emph	_	_
8	prakeikimu	prakeikimas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	6	dep:obj_co	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 dep:predv	color:blue
1	Todėl	todėl	ADV	Rgp	Degree=Pos	0	root	_	_
2	kiekvienai	kiekvienas	PRON	Pgfsdn	Case=Nom|Number=Dual|PronType=Tot	5	nmod	_	_
3	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	4	nmod	_	_
4	darbo	darbas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
5	dienai	diena	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	6	obj	_	_
6	sugalvoti	sugalvoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	1	dep:predv	_	_
7	užduotis	užduotis	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	8	dep:obj_co	_	_
8	ir	ir	CCONJ	Cg	_	6	advmod	_	_
9	tikslą	tikslas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	8	dep:obj_co	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


