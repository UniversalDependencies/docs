

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

314 nodes (1%) are attached to their parents as `dep:sub_co`.

173 instances of `dep:sub_co` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36942675159236.

The following 16 pairs of parts of speech are connected with `dep:sub_co`: [lt-pos/CCONJ]()-[lt-pos/NOUN]() (189; 60% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (70; 22% instances), [lt-pos/CCONJ]()-[lt-pos/PROPN]() (16; 5% instances), [lt-pos/PUNCT]()-[lt-pos/PROPN]() (9; 3% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (6; 2% instances), [lt-pos/CCONJ]()-[lt-pos/X]() (4; 1% instances), [lt-pos/PUNCT]()-[lt-pos/PRON]() (4; 1% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (4; 1% instances), [lt-pos/CCONJ]()-[lt-pos/NUM]() (3; 1% instances), [lt-pos/CCONJ]()-[lt-pos/PRON]() (2; 1% instances), [lt-pos/PART]()-[lt-pos/NOUN]() (2; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/CCONJ]()-[lt-pos/ADV]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/ADV]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/X]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep:sub_co	color:blue
1	Jei	jei	CCONJ	Cg	_	5	mark	_	_
2	namai	namai	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	3	dep:sub_co	_	_
3	ir	ir	CCONJ	Cg	_	5	advmod	_	_
4	biuras	biuras	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	3	dep:sub_co	_	_
5	yra	būti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	ta pati	tas pats	PRON	Pgfsnn	Case=Nom|PronType=Tot	7	nmod	_	_
7	vieta	vieta	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:predn	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	5	punct	_	_
9	pavojus	pavojus	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	5	dep:sub	_	_
10	nuolat	nuolat	ADV	Rgp	Degree=Pos	11	dep:adj	_	_
11	dirbti	dirbti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	9	acl	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:sub_co	color:blue
1	Jos	jis	PRON	Pgfsgn	Case=Nom|PronType=Tot	2	nmod	_	_
2	viduje	vidus	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	0	root	_	_
3	pastoliai	pastoliai	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	4	dep:sub_co	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	statybinės	statybinis	ADJ	Agpfpnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	_
6	atliekos	atliekos	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	4	dep:sub_co	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 dep:sub_co	color:blue
1	Analogiškus	analogiškas	ADJ	Agpmpan	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	žingsnius	žingsnis	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
3	šįmet	šįmet	ADV	Rgp	Degree=Pos	4	dep:adj	_	_
4	žengti	žengti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	0	root	_	_
5	Serbija	Serbija	PROPN	Npfsnng	Case=Nom|Gender=Fem|Number=Sing	6	dep:sub_co	_	_
6	bei	bei	CCONJ	Cg	_	4	cc	_	_
7	Bosnija	Bosnija	PROPN	Npfsnng	Case=Nom|Gender=Fem|Number=Sing	8	dep:sub_co	_	_
8	ir	ir	CCONJ	Cg	_	6	cc	_	_
9	Hercegovina	Hercegovina	PROPN	Npfsnng	Case=Nom|Gender=Fem|Number=Sing	8	dep:sub_co	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


