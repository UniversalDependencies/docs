

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

21931 nodes (9%) are attached to their parents as `amod`.

21886 instances of `amod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.371072910492.

The following 16 pairs of parts of speech are connected with `amod`: [ar-pos/NOUN]()-[ar-pos/ADJ]() (20534; 94% instances), [ar-pos/X]()-[ar-pos/ADJ]() (747; 3% instances), [ar-pos/NUM]()-[ar-pos/ADJ]() (286; 1% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (264; 1% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (33; 0% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (18; 0% instances), [ar-pos/NOUN]()-[ar-pos/DET]() (17; 0% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (12; 0% instances), [ar-pos/DET]()-[ar-pos/ADJ]() (8; 0% instances), [ar-pos/PART]()-[ar-pos/ADJ]() (4; 0% instances), [ar-pos/ADJ]()-[ar-pos/DET]() (2; 0% instances), [ar-pos/PUNCT]()-[ar-pos/ADJ]() (2; 0% instances), [ar-pos/ADP]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/DET]() (1; 0% instances), [ar-pos/PROPN]()-[ar-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	ميراث	مِيرَاث	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	6	nsubj	_	Vform=مِيرَاثٌ|Gloss=inheritance,heritage|Root=w_r__t|Translit=mīrāṯun|LTranslit=mīrāṯ
2	ب	بِ	ADP	P---------	AdpType=Prep	3	case	_	SpaceAfter=No|Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
3	300	300	NUM	Q---------	NumForm=Digit	1	nummod	_	Vform=٣٠٠|Translit=300
4	الف	أَلف	NUM	QM-----S2R	Case=Gen|Definite=Cons|Number=Sing|NumForm=Word	3	nummod	_	Vform=أَلفِ|Gloss=thousand|Root='_l_f|Translit=ʾalfi|LTranslit=ʾalf
5	دولار	دُولَار	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	4	nmod	_	Vform=دُولَارٍ|Gloss=dollar|Root=dUlAr|Translit=dūlārin|LTranslit=dūlār
6	يقلب	قَلَّب	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Vform=يُقَلِّبُ|Gloss=turn_upside_down|Root=q_l_b|Translit=yuqallibu|LTranslit=qallab
7	حياة	حَيَاة	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	6	obj	_	Vform=حَيَاةَ|Gloss=life|Root=.h_y_y|Translit=ḥayāta|LTranslit=ḥayāt
8	متشرد	مُتَشَرِّد	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	7	amod	_	Vform=مُتَشَرِّدٍ|Gloss=homeless,displaced|Root=^s_r_d|Translit=mutašarridin|LTranslit=mutašarrid
9	اميركي	أَمِيرِكِيّ	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	8	amod	_	Vform=أَمِيرِكِيٍّ|Gloss=American|Root='amIrik|Translit=ʾamīrikīyin|LTranslit=ʾamīrikīy

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 amod	color:blue
1	ب	بِ	ADP	P---------	AdpType=Prep	2	case	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
2	معنى	مَعنَى	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	0	root	_	Vform=مَعنًى|Gloss=meaning,sense,concepts,nuances|Root=`_n_y|Translit=maʿnan|LTranslit=maʿnā
3	آخر	آخَر	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	2	amod	_	Vform=آخَرَ|Gloss=other,another|Root='__h_r|Translit=ʾāḫara|LTranslit=ʾāḫar
4	ان	أَنَّ	CCONJ	C---------	_	9	cop	_	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
5	دورنا	دورنا	X	U---------	_	9	nsubj	_	Vform=دورنا|Translit=dwrnA
6	دورنا	دورنا	X	U---------	_	5	nmod	_	Vform=دورنا|Translit=dwrnA
7	الاساسي	أَسَاسِيّ	ADJ	A-----MS4D	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	amod	_	Vform=اَلأَسَاسِيَّ|Gloss=basic,fundamental|Root='_s_s|Translit=al-ʾasāsīya|LTranslit=ʾasāsīy
8	هو	هُوَ	PRON	SP---3MS1-	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	cc	_	Vform=هُوَ|Gloss=he,she,it|Translit=huwa|LTranslit=huwa
9	العرض	عَرض	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	2	dep	_	Vform=اَلعَرضُ|Gloss=presentation,review,show,offer,tenders|Root=`_r_.d|Translit=al-ʿarḍu|LTranslit=ʿarḍ
10	و	وَ	CCONJ	C---------	_	12	cc	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
11	ليس	لَيس	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	12	cop	_	Vform=لَيسَ|Gloss=be_not,is_not|Root=l_y_s|Translit=laysa|LTranslit=lays
12	الانتقاد	اِنتِقَاد	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	9	conj	_	SpaceAfter=No|Vform=اَلِانتِقَادُ|Gloss=criticism,censure|Root=n_q_d|Translit=al-i-ʼntiqādu|LTranslit=intiqād
13	.	.	PUNCT	G---------	_	2	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 amod	color:blue
1	40	40	NUM	Q---------	NumForm=Digit	0	root	_	Vform=٤٠|Translit=40
2	ألف	أَلف	NUM	QM-----S4R	Case=Acc|Definite=Cons|Number=Sing|NumForm=Word	1	nummod	_	Vform=أَلفَ|Gloss=thousand|Root='_l_f|Translit=ʾalfa|LTranslit=ʾalf
3	حالة	حَالَة	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	2	nmod	_	Vform=حَالَةِ|Gloss=condition,case,situation|Root=.h_w_l|Translit=ḥālati|LTranslit=ḥālat
4	اختفاء	اِختِفَاء	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	3	nmod	_	Vform=اِختِفَاءٍ|Gloss=disappearance|Root=_h_f_y|Translit=iḫtifāʾin|LTranslit=iḫtifāʾ
5	ب	بِ	ADP	P---------	AdpType=Prep	6	case	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
6	مصر	مِصر	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	3	nmod	_	Vform=مِصرَ|Gloss=Egypt|Root=m_.s_r|Translit=miṣra|LTranslit=miṣr
7	أشهر	أَشهَر	ADJ	A-----MS1R	Case=Nom|Definite=Cons|Gender=Masc|Number=Sing	1	amod	_	Vform=أَشهَرُ|Gloss=more_/_most_famous,more_/_most_well_-_known|Root=^s_h_r|Translit=ʾašharu|LTranslit=ʾašhar
8	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nmod	_	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
9	الصحافي	صَحَافِيّ	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	Vform=اَلصَّحَافِيُّ|Gloss=journalist,reporter|Root=.s_.h_f|Translit=aṣ-ṣaḥāfīyu|LTranslit=ṣaḥāfīy
10	رضا	رضا	X	U---------	_	11	nmod	_	Vform=رضا|Translit=rDA
11	هلال	هلال	X	U---------	_	9	nmod	_	Vform=هلال|Translit=hlAl

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic-NYUAD)

This relation is universal.

61260 nodes (8%) are attached to their parents as `amod`.

59892 instances of `amod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5024485798237.

The following 19 pairs of parts of speech are connected with `amod`: [ar-pos/NOUN]()-[ar-pos/ADJ]() (55213; 90% instances), [ar-pos/PROPN]()-[ar-pos/ADJ]() (1846; 3% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (1738; 3% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (1263; 2% instances), [ar-pos/ADV]()-[ar-pos/ADJ]() (566; 1% instances), [ar-pos/PUNCT]()-[ar-pos/ADJ]() (205; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (129; 0% instances), [ar-pos/NUM]()-[ar-pos/ADJ]() (91; 0% instances), [ar-pos/SCONJ]()-[ar-pos/ADJ]() (87; 0% instances), [ar-pos/DET]()-[ar-pos/ADJ]() (41; 0% instances), [ar-pos/PART]()-[ar-pos/ADJ]() (30; 0% instances), [ar-pos/X]()-[ar-pos/ADJ]() (27; 0% instances), [ar-pos/AUX]()-[ar-pos/ADJ]() (14; 0% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (4; 0% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (2; 0% instances), [ar-pos/ADV]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/CCONJ]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/SCONJ]()-[ar-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 26 amod	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	PUNCT	PUNC	_	6	punct	_	_
5	_	_	NUM	NOUN_NUM	NumForm=Digit	6	nummod	_	_
6	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
7	_	_	PUNCT	PUNC	_	6	punct	_	_
8	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	nmod	_	_
9	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod:poss	_	_
10	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	2	obj	_	_
11	_	_	ADV	ADJ+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	advmod	_	_
12	_	_	ADP	PREP	AdpType=Prep	13	case	_	_
13	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	11	nmod	_	_
14	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	13	nmod:poss	_	_
15	_	_	PUNCT	PUNC	_	16	punct	_	_
16	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	13	nmod	_	_
17	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	16	nmod	_	_
18	_	_	PUNCT	PUNC	_	16	punct	_	_
19	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	advmod	_	_
20	_	_	SCONJ	SUB_CONJ	_	21	mark	_	_
21	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	19	ccomp	_	_
22	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	21	obj	_	_
23	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	22	nmod:poss	_	_
24	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	23	nmod:poss	_	_
25	_	gryhAwnd	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	24	nmod:poss	_	_
26	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	23	amod	_	_
27	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Fem|Number=Sing	28	mark	_	_
28	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	23	xcomp	_	_
29	_	_	NOUN	NOUN_QUANT+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	28	obj	_	_
30	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	29	nmod:poss	_	_
31	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	30	amod	_	_
32	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	l	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	kAmbws	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
5	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	7	mark	_	_
6	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	7	cop	_	_
7	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	4	xcomp	_	_
8	_	_	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
10	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
13	_	_	ADJ	DET+ADJ	Definite=Def|Gender=Masc|Number=Sing	12	amod	_	_
14	_	_	SCONJ	SUB_CONJ	_	15	mark	_	_
15	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	csubj	_	_
16	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	15	obj	_	_
17	_	_	ADP	PREP	AdpType=Prep	18	case	_	_
18	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	15	nmod	_	_
19	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	18	nmod:poss	_	_
20	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 amod	color:blue
1	_	w	CCONJ	CONJ	_	8	cc	_	_
2	_	_	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	ADJ	DET+ADJ_NUM+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	amod	_	_
4	_	_	ADP	PREP	AdpType=Prep	5	case	_	_
5	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
6	_	_	PUNCT	PUNC	_	5	punct	_	_
7	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	5	appos	_	_
8	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
9	_	_	PROPN	DET+NOUN_PROP+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	nsubj	_	_
10	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Fem|Number=Sing	11	mark	_	_
11	_	_	VERB	IV3FS+IV_PASS+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Pass	9	xcomp	_	_
12	_	_	ADJ	ADJ_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	11	amod	_	_
13	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	_
14	_	_	ADP	PREP	AdpType=Prep	15	case	_	_
15	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	_
16	_	_	ADP	PREP	AdpType=Prep	17	case	_	_
17	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	8	nmod	_	_
18	_	hA	PRON	POSS_PRON_3FS	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	17	nmod:poss	_	_
19	_	l	ADP	PREP	AdpType=Prep	20	case	_	_
20	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	17	nmod	_	_
21	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	20	nmod:poss	_	_
22	_	hA	PRON	POSS_PRON_3FS	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	21	nmod:poss	_	_
23	_	500	ADV	NOUN_NUM	_	24	advmod	_	_
24	_	_	NUM	NOUN_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	25	nummod	_	_
25	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	20	nmod	_	_
26	_	_	ADP	PREP	AdpType=Prep	27	case	_	_
27	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	25	nmod	_	_
28	_	_	PUNCT	PUNC	_	8	punct	_	_

~~~


