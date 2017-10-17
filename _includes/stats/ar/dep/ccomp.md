

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

2863 nodes (1%) are attached to their parents as `ccomp`.

2856 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.5752706950751.

The following 22 pairs of parts of speech are connected with `ccomp`: [ar-pos/VERB]()-[ar-pos/VERB]() (2302; 80% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (203; 7% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (117; 4% instances), [ar-pos/X]()-[ar-pos/VERB]() (60; 2% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (59; 2% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (56; 2% instances), [ar-pos/CCONJ]()-[ar-pos/VERB]() (32; 1% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (7; 0% instances), [ar-pos/X]()-[ar-pos/ADJ]() (4; 0% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (3; 0% instances), [ar-pos/ADV]()-[ar-pos/VERB]() (3; 0% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (3; 0% instances), [ar-pos/VERB]()-[ar-pos/PRON]() (3; 0% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (2; 0% instances), [ar-pos/VERB]()-[ar-pos/X]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/DET]() (1; 0% instances), [ar-pos/CCONJ]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/X]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/SYM]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/X]()-[ar-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	أكد	أَكَّد	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Vform=أَكَّدَ|Gloss=affirm,assure,confirm,guarantee,emphasize|Root='_k_d|Translit=ʾakkada|LTranslit=ʾakkad
3	ان	أَنَّ	CCONJ	C---------	_	7	mark	_	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
4	"	"	PUNCT	G---------	_	7	punct	_	SpaceAfter=No|Vform="|Translit="
5	بطارية	بَطَّارِيَّة	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	7	nsubj	_	Vform=بَطَّارِيَّةَ|Gloss=battery|Root=ba.t.tAr|Translit=baṭṭārīyata|LTranslit=baṭṭārīyat
6	المدفعية	مِدفَعِيَّة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	5	nmod	_	Vform=اَلمِدفَعِيَّةِ|Gloss=artillery|Root=d_f_`|Translit=al-midfaʿīyati|LTranslit=midfaʿīyat
7	قصفت	قَصَف	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	2	ccomp	_	Vform=قَصَفَت|Gloss=bomb,shell|Root=q_.s_f|Translit=qaṣafat|LTranslit=qaṣaf
8	على	عَلَى	ADP	P---------	AdpType=Prep	9	case	_	Vform=عَلَى|Gloss=on,above|Root=`_l_w|Translit=ʿalā|LTranslit=ʿalā
9	الفور	الفور	X	U---------	_	7	advmod	_	SpaceAfter=No|Vform=الفور|Translit=Alfwr
10	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 ccomp	color:blue
1	مشيراً	مُشِير	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	Vform=مُشِيرًا|Gloss=indicative,indicating|Root=^s_w_r|Translit=mušīran|LTranslit=mušīr
2	إلى	إِلَى	ADP	P---------	AdpType=Prep	13	mark	_	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
3	أن	أَنَّ	CCONJ	C---------	_	13	mark	_	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
4	ه	هُوَ	PRON	SP---3MS4-	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	fixed	_	Vform=هُ|Gloss=he,she,it|Translit=hu|LTranslit=huwa
5	في	فِي	ADP	P---------	AdpType=Prep	6	case	_	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
6	حالة	حَالَة	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	13	obl	_	Vform=حَالَةِ|Gloss=condition,case,situation|Root=.h_w_l|Translit=ḥālati|LTranslit=ḥālat
7	عدم	عَدَم	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	6	nmod	_	Vform=عَدَمِ|Gloss=absence_of,lack_of,non_-|Root=`_d_m|Translit=ʿadami|LTranslit=ʿadam
8	التعديل	تَعدِيل	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	7	nmod	_	Vform=اَلتَّعدِيلِ|Gloss=adjustment,change,modification,amendment|Root=`_d_l|Translit=at-taʿdīli|LTranslit=taʿdīl
9	ف	فَ	CCONJ	C---------	_	10	cc	_	Vform=فَ|Gloss=and,so|Root=fa|Translit=fa|LTranslit=fa
10	إن	إِنَّ	PART	F---------	_	13	advmod:emph	_	Vform=إِنَّ|Gloss=indeed|Root='_n|Translit=ʾinna|LTranslit=ʾinna
11	ها	هُوَ	PRON	SP---3FS4-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
12	لن	لَن	PART	F---------	_	13	advmod	_	Vform=لَن|Gloss=not|Root=lan|Translit=lan|LTranslit=lan
13	تصوت	صَوَّت	VERB	VISA-3FS--	Aspect=Imp|Gender=Fem|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	ccomp	_	Vform=تُصَوِّتَ|Gloss=vote|Root=.s_w_t|Translit=tuṣawwita|LTranslit=ṣawwat
14	علي	عَلَى	ADP	P---------	AdpType=Prep	15	case	_	Vform=عَلَي|Gloss=on,above|Root=`_l_w|Translit=ʿalay|LTranslit=ʿalā
15	ه	هُوَ	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	Vform=هِ|Gloss=he,she,it|Translit=hi|LTranslit=huwa
16	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 ccomp	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	قال	قَال	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Vform=قَالَ|Gloss=say,tell|Root=q_w_l|Translit=qāla|LTranslit=qāl
3	"	"	PUNCT	G---------	_	5	punct	_	Vform="|Translit="
4	لقد	لقد	X	U---------	_	5	aux	_	Vform=لقد|Translit=lqd
5	تلقيت	تلقيت	X	U---------	_	2	obj	_	Vform=تلقيت|Translit=tlqyt
6	تقريرا	تَقرِير	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	5	obj	_	Vform=تَقرِيرًا|Gloss=decision,determination|Root=q_r_r|Translit=taqrīran|LTranslit=taqrīr
7	ب	بِ	ADP	P---------	AdpType=Prep	12	mark	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
8	أن	أَنَّ	CCONJ	C---------	_	12	mark	_	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
9	محاكمته	محاكمته	X	U---------	_	12	nsubj	_	Vform=محاكمته|Translit=mHAkmth
10	محاكمته	محاكمته	X	U---------	_	9	obj	_	Vform=محاكمته|Translit=mHAkmth
11	س	سَ	PART	F---------	_	12	aux	_	Vform=سَ|Gloss=will|Root=sa|Translit=sa|LTranslit=sa
12	تبدأ	بَدَأ	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	6	ccomp	_	Vform=تَبدَأُ|Gloss=start,begin|Root=b_d_'|Translit=tabdaʾu|LTranslit=badaʾ
13	فى	فِي	ADP	P---------	AdpType=Prep	14	case	_	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
14	منتصف	مُنتَصَف	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	12	obl	_	Vform=مُنتَصَفِ|Gloss=middle,halfway|Root=n_.s_f|Translit=muntaṣafi|LTranslit=muntaṣaf
15	الشهر	شَهر	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	14	nmod	_	Vform=اَلشَّهرِ|Gloss=month|Root=^s_h_r|Translit=aš-šahri|LTranslit=šahr
16	الحالى	حَالِيّ	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	amod	_	Vform=اَلحَالِيِّ|Gloss=present,current|Root=.h_w_l|Translit=al-ḥālīyi|LTranslit=ḥālīy
17	"	"	PUNCT	G---------	_	5	punct	_	SpaceAfter=No|Vform="|Translit="
18	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic-NYUAD)

This relation is universal.

17975 nodes (2%) are attached to their parents as `ccomp`.

17541 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.77084840055633.

The following 20 pairs of parts of speech are connected with `ccomp`: [ar-pos/NOUN]()-[ar-pos/VERB]() (10261; 57% instances), [ar-pos/VERB]()-[ar-pos/VERB]() (4523; 25% instances), [ar-pos/ADV]()-[ar-pos/VERB]() (1143; 6% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (881; 5% instances), [ar-pos/PROPN]()-[ar-pos/VERB]() (701; 4% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (223; 1% instances), [ar-pos/NUM]()-[ar-pos/VERB]() (64; 0% instances), [ar-pos/DET]()-[ar-pos/VERB]() (56; 0% instances), [ar-pos/SCONJ]()-[ar-pos/VERB]() (25; 0% instances), [ar-pos/CCONJ]()-[ar-pos/VERB]() (20; 0% instances), [ar-pos/AUX]()-[ar-pos/VERB]() (18; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (17; 0% instances), [ar-pos/PUNCT]()-[ar-pos/VERB]() (16; 0% instances), [ar-pos/X]()-[ar-pos/VERB]() (15; 0% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (7; 0% instances), [ar-pos/ADV]()-[ar-pos/AUX]() (1; 0% instances), [ar-pos/ADV]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/ADV]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/AUX]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 ccomp	color:blue
1	_	w	CCONJ	CONJ	_	5	cc	_	_
2	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	5	cop	_	_
3	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	_
4	_	_	ADJ	DET+ADJ+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	amod	_	_
5	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
8	_	b	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	7	nmod	_	_
10	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	9	nmod:poss	_	_
11	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	10	nmod:poss	_	_
12	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	11	nmod:poss	_	_
13	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	appos	_	_
14	_	mArt$nkw	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	13	flat:name	_	_
15	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	5	obj	_	_
16	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nmod:poss	_	_
17	_	_	SCONJ	SUB_CONJ	_	18	mark	_	_
18	_	_	NOUN	DET+NOUN+NSUFF_MASC_PL_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	15	obj	_	_
19	_	_	VERB	PV+PVSUFF_SUBJ:3MP	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Act	18	ccomp	_	_
20	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	19	obj	_	_
21	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	20	amod	_	_
22	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	19	nmod	_	_
24	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	23	nmod:poss	_	_
25	_	qlEp	PROPN	NOUN+NSUFF_FEM_SG	Definite=Ind|Gender=Fem|Number=Sing	24	flat:name	_	_
26	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	23	nmod	_	_
27	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	26	nmod:poss	_	_
28	_	_	PUNCT	PUNC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 20 ccomp	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	NOUN	DET+ADJ+NSUFF_MASC_PL_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	3	nmod:poss	_	_
5	_	_	ADP	PREP	AdpType=Prep	6	case	_	_
6	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
7	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	6	nmod:poss	_	_
8	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	flat:name	_	_
9	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	obj	_	_
10	_	_	NUM	NOUN_NUM	NumForm=Digit	11	compound	_	_
11	_	_	NUM	NOUN_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	12	nummod	_	_
12	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	9	nmod:poss	_	_
13	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	9	advmod	_	_
14	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	13	nmod:poss	_	_
15	_	_	NUM	NOUN_NUM+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing|NumForm=Word	16	compound	_	_
16	_	_	NUM	NOUN_NUM+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	17	nummod	_	_
17	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	13	nmod	_	_
18	_	_	SCONJ	SUB_CONJ	_	20	mark	_	_
19	_	_	PART	NEG_PART	Polarity=Neg	20	aux	_	_
20	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
21	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	20	nsubj	_	_
22	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	amod	_	_
23	_	l	ADP	PREP	AdpType=Prep	24	case	_	_
24	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	21	nmod	_	_
25	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	24	nmod:poss	_	_
26	_	None	PART	NOUN	Definite=Ind|Gender=Masc|Number=Sing	29	dep	_	_
27	_	_	ADP	PREP	AdpType=Prep	29	case	_	_
28	_	_	NUM	NOUN_NUM	NumForm=Digit	29	nummod	_	_
29	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	20	nmod	_	_
30	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 ccomp	color:blue
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


