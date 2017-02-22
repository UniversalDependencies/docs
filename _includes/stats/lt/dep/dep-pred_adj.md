

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [dep]().
There are also 64 other language-specific subtypes of `dep`: [dep:adj](), [dep:adj_co](), [dep:adj_exd](), [dep:adj_exd_adj](), [dep:adj_exd_co](), [dep:adj_exd_obj_co](), [dep:atr_co](), [dep:atr_exd](), [dep:atr_exd_co](), [dep:atr_par](), [dep:aux](), [dep:auxc_exd](), [dep:auxl](), [dep:auxz](), [dep:auxz_co](), [dep:auxz_exd](), [dep:auxz_exd_adj](), [dep:obj_atr](), [dep:obj_co](), [dep:obj_exd](), [dep:obj_exd_adj](), [dep:obj_exd_co](), [dep:obj_exd_obj](), [dep:obj_exd_sub_co](), [dep:obj_par](), [dep:par](), [dep:par_co](), [dep:pred_adj_co](), [dep:pred_adj_par](), [dep:pred_atr](), [dep:pred_atr_co](), [dep:pred_co](), [dep:pred_co_adj](), [dep:pred_obj](), [dep:pred_obj_co](), [dep:pred_obj_par](), [dep:pred_par](), [dep:pred_sub](), [dep:pred_sub_co](), [dep:predn](), [dep:predn_adj](), [dep:predn_adj_co](), [dep:predn_atr](), [dep:predn_atr_co](), [dep:predn_atr_par](), [dep:predn_co](), [dep:predn_obj](), [dep:predn_obj_co](), [dep:predn_par](), [dep:predn_sub](), [dep:predn_sub_co](), [dep:predv](), [dep:predv_adj](), [dep:predv_atr](), [dep:predv_co](), [dep:predv_obj](), [dep:predv_obj_co](), [dep:predv_sub](), [dep:rgp](), [dep:sub](), [dep:sub_co](), [dep:sub_exd](), [dep:sub_exd_co](), [dep:suj]().

235 nodes (1%) are attached to their parents as `dep:pred_adj`.

181 instances of `dep:pred_adj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.42553191489362.

The following 10 pairs of parts of speech are connected with `dep:pred_adj`: [lt-pos/VERB]()-[lt-pos/VERB]() (113; 48% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (58; 25% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (18; 8% instances), [lt-pos/PART]()-[lt-pos/VERB]() (13; 6% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (10; 4% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (8; 3% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (8; 3% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (4; 2% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (2; 1% instances), [lt-pos/PART]()-[lt-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dep:pred_adj	color:blue
1	§	§	PUNCT	PUNCT	_	8	punct	_	_
2	–	–	PUNCT	PUNCT	_	8	punct	_	_
3	Kuo	kuo	CCONJ	Cg	_	5	mark	_	_
4	dažniau	dažnai	ADV	Rgc	Degree=Cmp	5	dep:adj	_	_
5	kerpi	kirpti	VERB	Vgmp2s--n--ni-	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	dep:pred_adj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	greičiau	greitai	ADV	Rgc	Degree=Cmp	8	dep:adj	_	_
8	auga	augti	VERB	Vgmp3p--n--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
9	!	!	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dep:pred_adj	color:blue
1	Tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	0	root	_	_
2	16,2	16,2	NUM	M----d-	NumForm=Digit	5	dep:adj	_	_
3	proc	proc.	X	Ys	Abbr=Yes	2	nmod	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_
5	mažiau	mažai	ADV	Rgc	Degree=Cmp	1	dep:predn	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	negu	negu	CCONJ	Cg	_	8	mark	_	_
8	buvo	būti	VERB	Vgma3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|VerbForm=Fin	5	dep:pred_adj	_	_
9	planuota	planuoti	VERB	Vgps--npnn-n-p	Gender=Neut|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	8	dep:predn	_	_
10	gruodį	gruodis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	9	dep:adj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep:pred_adj	color:blue
1	Pyktis	pyktis	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	jei	jei	CCONJ	Cg	_	4	mark	_	_
4	nepatenkiname	nepatenkinti	VERB	Vgmp1p--y--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	dep:pred_adj	_	_
5	savo	savas	PRON	Pgmsgn	Case=Nom|PronType=Tot	7	nmod	_	_
6	noro	noras	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	dep:obj_co	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	4	punct	_	_
8	poreikio	poreikis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	dep:obj_co	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


