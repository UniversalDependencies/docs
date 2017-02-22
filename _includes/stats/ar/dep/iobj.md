

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

1457 nodes (1%) are attached to their parents as `iobj`.

1437 instances of `iobj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.22168840082361.

The following 9 pairs of parts of speech are connected with `iobj`: [ar-pos/VERB]()-[ar-pos/NOUN]() (1068; 73% instances), [ar-pos/VERB]()-[ar-pos/PRON]() (147; 10% instances), [ar-pos/VERB]()-[ar-pos/X]() (132; 9% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (57; 4% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (32; 2% instances), [ar-pos/VERB]()-[ar-pos/ADV]() (9; 1% instances), [ar-pos/VERB]()-[ar-pos/DET]() (7; 0% instances), [ar-pos/VERB]()-[ar-pos/CCONJ]() (4; 0% instances), [ar-pos/VERB]()-[ar-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 iobj	color:blue
1	طهران	طَهرَان	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	2	nsubj	_	Vform=طَهرَانُ|Gloss=Tehran|Root=.tahrAn|Translit=ṭahrānu|LTranslit=ṭahrān
2	تدعو	دَعَا	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Vform=تَدعُو|Gloss=call,invite|Root=d_`_w|Translit=tadʿū|LTranslit=daʿā
3	المهاجرين	مُهَاجِر	NOUN	N------P4D	Case=Acc|Definite=Def|Number=Plur	2	obj	_	Vform=اَلمُهَاجِرِينَ|Gloss=emigrant|Root=h_^g_r|Translit=al-muhāǧirīna|LTranslit=muhāǧir
4	الايرانيين	إِيرَانِيّ	ADJ	A-----MP4D	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	3	amod	_	Vform=اَلإِيرَانِيِّينَ|Gloss=Iranian|Root='IrAn|Translit=al-ʾīrānīyīna|LTranslit=ʾīrānīy
5	الى	إِلَى	ADP	P---------	AdpType=Prep	6	case	_	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
6	العودة	عَودَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	2	iobj	_	Vform=اَلعَودَةِ|Gloss=return|Root=`_w_d|Translit=al-ʿawdati|LTranslit=ʿawdat
7	الى	إِلَى	ADP	P---------	AdpType=Prep	8	case	_	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
8	البلاد	بَلَد	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	6	nmod	_	Vform=اَلبِلَادِ|Gloss=country|Root=b_l_d|Translit=al-bilādi|LTranslit=balad

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	نريد	أَرَاد	VERB	VIIA-1MP--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	1	parataxis	_	Vform=نُرِيدُ|Gloss=want,desire,intend|Root=r_w_d|Translit=nurīdu|LTranslit=ʾarād
3	من	مَن	DET	S---------	_	2	obj	_	Vform=مَن|Gloss=who|Root=man|Translit=man|LTranslit=man
4	يحسب	حَسَب	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	acl	_	Vform=يَحسُبُ|Gloss=compute,charge|Root=.h_s_b|Translit=yaḥsubu|LTranslit=ḥasab
5	ل	لِ	ADP	P---------	AdpType=Prep	6	case	_	Vform=لَ|Gloss=for,to|Root=l|Translit=la|LTranslit=li
6	نا	هُوَ	PRON	SP---1MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	4	iobj	_	Vform=نَا|Gloss=he,she,it|Translit=nā|LTranslit=huwa
7	كم	كَم	PRON	S---------	_	8	obl	_	Vform=كَم|Gloss=how_many_/_much|Root=k_m_m|Translit=kam|LTranslit=kam
8	تتكلف	تَكَلَّف	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	ccomp	_	Vform=تَتَكَلَّفُ|Gloss=be_burdened,be_charged|Root=k_l_f|Translit=tatakallafu|LTranslit=takallaf
9	هذه	هٰذَا	DET	SD----FS1-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	Vform=هٰذِهِ|Gloss=this,these|Root=h|Translit=hāḏihi|LTranslit=hāḏā
10	العمليات	عَمَلِيَّة	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	SpaceAfter=No|Vform=اَلعَمَلِيَّاتُ|Gloss=operation,mission,process|Root=`_m_l|Translit=al-ʿamalīyātu|LTranslit=ʿamalīyat
11	.	.	PUNCT	G---------	_	1	punct	_	SpaceAfter=No|Vform=.|Translit=.
12	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 iobj	color:blue
1	بيل	بِيل	X	X---------	Foreign=Yes	2	flat:foreign	_	Vform=بِيل|Gloss=Bill|Root=bIl|Translit=bīl|LTranslit=bīl
2	كلينتون	كلِينتُون	X	X---------	Foreign=Yes	3	nsubj	_	Vform=كلِينتُون|Gloss=Clinton|Root=klIntUn|Translit=klīntūn|LTranslit=klīntūn
3	سلم	سَلَّم	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	Vform=سَلَّمَ|Gloss=hand_over,surrender,greet|Root=s_l_m|Translit=sallama|LTranslit=sallam
4	الشعلة	شُعلَة	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	3	obj	_	Vform=اَلشُّعلَةَ|Gloss=fire,flame,torches|Root=^s_`_l|Translit=aš-šuʿlata|LTranslit=šuʿlat
5	الى	إِلَى	ADP	P---------	AdpType=Prep	7	case	_	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
6	آل	آل	X	X---------	Foreign=Yes	7	flat:foreign	_	Vform=آل|Gloss=Al|Root='Al|Translit=ʾāl|LTranslit=ʾāl
7	غور	غُور	X	X---------	Foreign=Yes	3	iobj	_	Vform=غُور|Gloss=Gore|Root=.gUr|Translit=ġūr|LTranslit=ġūr

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic-NYUAD)

This relation is universal.

463 nodes (0%) are attached to their parents as `iobj`.

463 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.524838012959.

The following 21 pairs of parts of speech are connected with `iobj`: [ar-pos/VERB]()-[ar-pos/NOUN]() (253; 55% instances), [ar-pos/VERB]()-[ar-pos/PRON]() (92; 20% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (47; 10% instances), [ar-pos/VERB]()-[ar-pos/PROPN]() (17; 4% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (10; 2% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (9; 2% instances), [ar-pos/VERB]()-[ar-pos/ADV]() (9; 2% instances), [ar-pos/VERB]()-[ar-pos/CCONJ]() (7; 2% instances), [ar-pos/ADV]()-[ar-pos/NOUN]() (4; 1% instances), [ar-pos/VERB]()-[ar-pos/X]() (3; 1% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (2; 0% instances), [ar-pos/ADV]()-[ar-pos/PRON]() (1; 0% instances), [ar-pos/CCONJ]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/ADV]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/AUX]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/PROPN]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/PROPN]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/AUX]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 19 iobj	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nsubj	_	_
4	_	_	PUNCT	PUNC	_	5	punct	_	_
5	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	3	nmod:poss	_	_
6	_	_	PUNCT	PUNC	_	5	punct	_	_
7	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Fem|Number=Sing	8	mark	_	_
8	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	3	ccomp	_	_
9	_	_	ADP	PREP	AdpType=Prep	10	case	_	_
10	_	hA	PRON	PRON_3FS	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nmod	_	_
11	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	nsubj	_	_
12	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	11	flat:name	_	_
13	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	11	flat:name	_	_
14	_	_	PUNCT	PUNC	_	2	punct	_	_
15	_	_	NOUN	DET+NOUN+NSUFF_MASC_PL_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	2	obj	_	_
16	_	_	ADP	PREP	AdpType=Prep	17	case	_	_
17	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	15	nmod	_	_
18	_	_	SCONJ	SUB_CONJ	_	19	mark	_	_
19	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Fem|Number=Sing	2	iobj	_	_
20	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	19	nmod:poss	_	_
21	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	20	amod	_	_
22	_	_	AUX	PV+PVSUFF_SUBJ:3FS	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	19	dep	_	_
23	_	w	CCONJ	CONJ	_	19	cc	_	_
24	_	s	PART	FUT_PART	_	2	parataxis	_	_
25	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	24	xcomp	_	_
26	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	19	advmod	_	_
27	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	26	nmod:poss	_	_
28	_	_	PUNCT	PUNC	_	2	punct	_	_
29	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 iobj	color:blue
1	_	w	CCONJ	CONJ	_	6	cc	_	_
2	_	_	ADP	PREP	AdpType=Prep	4	case	_	_
3	_	_	NUM	NOUN_NUM	NumForm=Digit	4	nummod	_	_
4	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	6	flat	_	_
5	_	_	PUNCT	PUNC	_	6	punct	_	_
6	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
7	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	6	nsubj	_	_
8	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	7	nmod:poss	_	_
9	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	6	obj	_	_
10	_	_	ADJ	DET+ADJ+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	_
11	_	_	SCONJ	SUB_CONJ	_	12	mark	_	_
12	_	hA	PRON	PRON_3FS	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	iobj	_	_
13	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	12	ccomp	_	_
14	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	13	obj	_	_
15	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	14	nmod:poss	_	_
16	_	hA	PRON	POSS_PRON_3FS	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	nmod:poss	_	_
17	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	13	nmod	_	_
18	_	b	ADP	PREP	AdpType=Prep	19	case	_	_
19	_	_	NOUN	NOUN+NSUFF_MASC_DU_ACC_POSS	Case=Acc|Definite=Com|Gender=Masc|Number=Dual	17	nmod	_	_
20	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	19	nmod:poss	_	_
21	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	20	nmod:poss	_	_
22	_	_	ADJ	DET+ADJ+NSUFF_MASC_DU_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Dual	19	amod	_	_
23	_	_	PUNCT	PUNC	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 iobj	color:blue
1	_	_	ADP	PREP	AdpType=Prep	2	case	_	_
2	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	5	nmod	_	_
3	_	hA	PRON	POSS_PRON_3FS	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
4	_	_	PUNCT	PUNC	_	5	punct	_	_
5	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
6	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
7	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	5	obj	_	_
8	_	_	ADJ	ADJ+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	7	amod	_	_
9	_	_	ADV	ADJ+NSUFF_FEM_SG+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	5	advmod	_	_
10	_	_	ADJ	ADJ_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	5	iobj	_	_
11	_	_	ADJ	ADJ_COMP+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	12	amod	_	_
12	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	10	nmod	_	_
13	_	_	ADP	PREP	AdpType=Prep	14	case	_	_
14	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	parataxis	_	_
15	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	amod	_	_
16	_	_	PUNCT	PUNC	_	5	punct	_	_

~~~


