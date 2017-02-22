

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

440 nodes (1%) are attached to their parents as `dep:predn_co`.

271 instances of `dep:predn_co` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.61590909090909.

The following 39 pairs of parts of speech are connected with `dep:predn_co`: [lt-pos/CCONJ]()-[lt-pos/VERB]() (67; 15% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (65; 15% instances), [lt-pos/CCONJ]()-[lt-pos/NOUN]() (56; 13% instances), [lt-pos/CCONJ]()-[lt-pos/ADJ]() (52; 12% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (41; 9% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (23; 5% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (22; 5% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (18; 4% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (12; 3% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (10; 2% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (10; 2% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (8; 2% instances), [lt-pos/NUM]()-[lt-pos/NOUN]() (8; 2% instances), [lt-pos/PUNCT]()-[lt-pos/ADV]() (5; 1% instances), [lt-pos/CCONJ]()-[lt-pos/ADV]() (4; 1% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (4; 1% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (4; 1% instances), [lt-pos/ADV]()-[lt-pos/ADV]() (3; 1% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (2; 0% instances), [lt-pos/CCONJ]()-[lt-pos/PRON]() (2; 0% instances), [lt-pos/CCONJ]()-[lt-pos/PROPN]() (2; 0% instances), [lt-pos/CCONJ]()-[lt-pos/X]() (2; 0% instances), [lt-pos/NOUN]()-[lt-pos/ADV]() (2; 0% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (2; 0% instances), [lt-pos/PROPN]()-[lt-pos/PROPN]() (2; 0% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/ADJ]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/CCONJ]()-[lt-pos/NUM]() (1; 0% instances), [lt-pos/CCONJ]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/PART]()-[lt-pos/ADV]() (1; 0% instances), [lt-pos/PART]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/INTJ]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 dep:predn_co	color:blue
1	Dalis	dalis	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	požiūrių	požiūris	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
3	mums	aš	PRON	Pg-pdn	Case=Nom|Number=Dual|PronType=Tot	5	obj	_	_
4	sunkiai	sunkiai	ADV	Rgp	Degree=Pos	5	dep:adj	_	_
5	priimtini	priimtinas	ADJ	Agpmpnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	dep:predn_co	_	_
6	ir	ir	CCONJ	Cg	_	1	cc	_	_
7	per	per	PART	Qg	_	8	advmod:emph	_	_
8	mažai	mažai	ADV	Rgp	Degree=Pos	9	dep:adj	_	_
9	argumentuoti	argumentuoti	VERB	Vgps-pmpnnnn-p	Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	6	dep:predn_co	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:predn_co	color:blue
1	gal	gal	PART	Qg	_	3	advmod:emph	_	_
2	ne	ne	PART	Qg	_	3	advmod:emph	_	_
3	mašinistė	mašinistė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	4	dep:predn_co	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	0	root	_	_
5	gal	gal	PART	Qg	_	6	advmod:emph	_	_
6	-	-	PUNCT	PUNCT	_	4	punct	_	_
7	semaforas	semaforas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	6	dep:predn	_	_
8	?..	?..	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dep:predn_co	color:blue
1	Siūlomos	siūlyti	VERB	Vgpp-pfpnnnn-p	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	2	acl	_	_
2	korekcijos	korekcija	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
3	neišvengiamybė	neišvengiamybė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:predn_co	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	o	o	CCONJ	Cg	_	2	cc	_	_
6	ne	ne	PART	Qg	_	7	advmod:emph	_	_
7	savižudybė	savižudybė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:predn_co	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


