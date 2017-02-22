

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

8 nodes (0%) are attached to their parents as `dep:predn_par`.

7 instances of `dep:predn_par` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.875.

The following 7 pairs of parts of speech are connected with `dep:predn_par`: [lt-pos/NOUN]()-[lt-pos/ADJ]() (2; 25% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (1; 13% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (1; 13% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (1; 13% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (1; 13% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (1; 13% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (1; 13% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 16 dep:predn_par	color:blue
1	Keistas	keistas	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
2	valkatos	valkata	NOUN	Nccsgn-	Case=Gen|Number=Sing	6	dep:atr_co	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	prašančio	prašyti	VERB	Vgpp-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	acl	_	_
5	išmaldos	išmalda	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	4	obj	_	_
6	ir	ir	CCONJ	Cg	_	1	cc	_	_
7	gerėjančio	gerėti	VERB	Vgpp-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	8	acl	_	_
8	gyvenimo	gyvenimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
9	pranašo	pranašas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	6	dep:atr_co	_	_
10	(	(	PUNCT	PUNCT	_	16	punct	_	SpaceAfter=No
11	kuo	kuo	CCONJ	Cg	_	12	mark	_	_
12	daugiau	daug	ADV	Rgc	Degree=Cmp	16	dep:predn_adj	_	_
13	paslaugų	paslauga	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	12	punct	_	_
15	tuo	tuo	CCONJ	Cg	_	16	mark	_	_
16	geresnis	geras	ADJ	Agcmsnn	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	9	dep:predn_par	_	_
17	gyvenimas	gyvenimas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	16	dep:sub	_	SpaceAfter=No
18	)	)	PUNCT	PUNCT	_	16	punct	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 dep:predn_par	color:blue
1	Mokymasis	mokymasis	NOUN	Ncmsny-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	nedidelėje	nedidelis	ADJ	Agpfsln	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	grupėje	grupė	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	1	dep:adj	_	_
4	(	(	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
5	šiuo	šis	PRON	Pgmsin	Case=Nom|PronType=Tot	6	nmod	_	_
6	metu	metas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	10	dep:adj	_	_
7	Lietuvoje	Lietuva	PROPN	Npfslng	Case=Loc|Gender=Fem|Number=Sing	10	dep:adj	_	_
8	šis	šis	PRON	Pgmsnn	Case=Nom|PronType=Tot	9	nmod	_	_
9	metodas	metodas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	10	dep:sub	_	_
10	taikomas	taikyti	VERB	Vgpp-smpnnnn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	1	dep:predn_par	_	_
11	kol kas	kol kas	ADV	Rgp	Degree=Pos	10	dep:adj	_	_
12	tik	tik	PART	Qg	_	13	advmod:emph	_	_
13	vaikams	vaikas	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	10	obj	_	SpaceAfter=No
14	)	)	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	16	punct	_	_
16	siekiant	siekti	VERB	Vgap----n--n--	Polarity=Pos|Tense=Pres	1	dep:adj	_	_
17	sujungti	sujungti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	16	ccomp	_	_
18	tris	trys	NUM	Mcm-al-	Case=Acc|Gender=Masc|NumForm=Word|NumType=Card	20	nummod	_	_
19	pagrindinius	pagrindinis	ADJ	Agpmpan	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	20	amod	_	_
20	komponentus	komponentas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	17	obj	_	SpaceAfter=No
21	:	:	PUNCT	PUNCT	_	25	punct	_	_
22	elgesį	elgesys	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	25	dep:atr_co	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	25	punct	_	_
24	emocijas	emocija	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	25	dep:atr_co	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	20	punct	_	_
26	suvokimą	suvokimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	25	dep:atr_co	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep:predn_par	color:blue
1	Išplautas	išplauti	VERB	Vgps-pmsnnnn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
2	Lietuvos	Lietuva	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
3	(	(	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
4	atnaujinta	atnaujinti	VERB	Vgps--npnn-n-p	Gender=Neut|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	1	dep:predn_par	_	_
5	11:49	11:49	NUM	M----d-	NumForm=Digit	4	dep:adj	_	SpaceAfter=No
6	)	)	PUNCT	PUNCT	_	4	punct	_	_

~~~


