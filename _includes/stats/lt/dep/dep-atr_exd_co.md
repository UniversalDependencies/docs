

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

6 nodes (0%) are attached to their parents as `dep:atr_exd_co`.

4 instances of `dep:atr_exd_co` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 5 pairs of parts of speech are connected with `dep:atr_exd_co`: [lt-pos/CCONJ]()-[lt-pos/ADJ]() (2; 33% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (1; 17% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (1; 17% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (1; 17% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 17% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 dep:atr_exd_co	color:blue
1	Sviesto	sviestas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	obj	_	_
2	išvis	išvis	ADV	Rgp	Degree=Pos	3	dep:adj	_	_
3	sveikiau	sveikai	ADV	Rgc	Degree=Cmp	0	root	_	_
4	mažiau	mažai	ADV	Rgc	Degree=Cmp	5	dep:adj	_	_
5	naudoti	naudoti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	3	dep:predv	_	_
6	rinktis	rinktis	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	7	dep:predv	_	_
7	patartina	patarti	VERB	Vgp---nnnn-n-p	Gender=Neut|Polarity=Pos|VerbForm=Part	3	dep:predn_co	_	_
8	natūralų	natūralus	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	10	dep:atr_exd_co	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	o	o	CCONJ	Cg	_	6	advmod	_	_
11	ne	ne	PART	Qg	_	14	advmod:emph	_	_
12	tepų	tepus	ADJ	Agpmsan	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	_
13	riebalų	riebalas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	_
14	mišinį	mišinys	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	10	dep:obj_co	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 dep:atr_exd_co	color:blue
1	mėsos	mėsa	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	gabalėlį	gabalėlis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	6	dep:obj_co	_	_
3	vietoj	vietoj	ADP	Sgg	AdpType=Prep	4	case	_	_
4	jų	jis	PRON	Pgfpgn	Case=Nom|PronType=Tot	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	tačiau	tačiau	CCONJ	Cg	_	0	root	_	_
7	grynos	grynas	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	dep:atr_exd_co	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	sveriamos	sverti	VERB	Vgpp-sfpnngn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	10	dep:atr_exd_co	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	6	punct	_	_
11	ne	ne	PART	Qg	_	12	advmod:emph	_	_
12	pakuotėje	pakuotė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	10	dep:atr_exd_co	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 dep:atr_exd_co	color:blue
1	mėsos	mėsa	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	gabalėlį	gabalėlis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	6	dep:obj_co	_	_
3	vietoj	vietoj	ADP	Sgg	AdpType=Prep	4	case	_	_
4	jų	jis	PRON	Pgfpgn	Case=Nom|PronType=Tot	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	tačiau	tačiau	CCONJ	Cg	_	0	root	_	_
7	grynos	grynas	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	dep:atr_exd_co	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	sveriamos	sverti	VERB	Vgpp-sfpnngn-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	10	dep:atr_exd_co	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	6	punct	_	_
11	ne	ne	PART	Qg	_	12	advmod:emph	_	_
12	pakuotėje	pakuotė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	10	dep:atr_exd_co	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


