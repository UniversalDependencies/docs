

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

36552 nodes (14%) are attached to their parents as `case`.

36243 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1417706281462.

The following 34 pairs of parts of speech are connected with `case`: [ar-pos/NOUN]()-[ar-pos/ADP]() (28567; 78% instances), [ar-pos/PRON]()-[ar-pos/ADP]() (2228; 6% instances), [ar-pos/X]()-[ar-pos/ADP]() (1963; 5% instances), [ar-pos/NUM]()-[ar-pos/ADP]() (1607; 4% instances), [ar-pos/ADJ]()-[ar-pos/ADP]() (1161; 3% instances), [ar-pos/X]()-[ar-pos/X]() (523; 1% instances), [ar-pos/DET]()-[ar-pos/ADP]() (270; 1% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (70; 0% instances), [ar-pos/ADV]()-[ar-pos/ADP]() (55; 0% instances), [ar-pos/PART]()-[ar-pos/ADP]() (13; 0% instances), [ar-pos/CCONJ]()-[ar-pos/ADP]() (12; 0% instances), [ar-pos/NOUN]()-[ar-pos/CCONJ]() (12; 0% instances), [ar-pos/ADP]()-[ar-pos/ADP]() (11; 0% instances), [ar-pos/NOUN]()-[ar-pos/X]() (10; 0% instances), [ar-pos/PROPN]()-[ar-pos/ADP]() (8; 0% instances), [ar-pos/X]()-[ar-pos/NOUN]() (8; 0% instances), [ar-pos/ADJ]()-[ar-pos/CCONJ]() (4; 0% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (4; 0% instances), [ar-pos/NUM]()-[ar-pos/NOUN]() (4; 0% instances), [ar-pos/DET]()-[ar-pos/NOUN]() (3; 0% instances), [ar-pos/NOUN]()-[ar-pos/NUM]() (2; 0% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (2; 0% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/NUM]()-[ar-pos/X]() (2; 0% instances), [ar-pos/X]()-[ar-pos/CCONJ]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/PART]() (1; 0% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/PART]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/X]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/CCONJ]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/PART]() (1; 0% instances), [ar-pos/X]()-[ar-pos/PART]() (1; 0% instances), [ar-pos/X]()-[ar-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	لن	لَن	PART	F---------	_	3	advmod	_	Vform=لَن|Gloss=not|Root=lan|Translit=lan|LTranslit=lan
2	اكون	كَان	AUX	VISA-1MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	3	cop	_	Vform=أَكُونَ|Gloss=be,is,exist|Root=k_w_n|Translit=ʾakūna|LTranslit=kān
3	متشردا	مُتَشَرِّد	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	Vform=مُتَشَرِّدًا|Gloss=homeless,displaced|Root=^s_r_d|Translit=mutašarridan|LTranslit=mutašarrid
4	بعد	بَعدَ	ADP	PI------4-	AdpType=Prep|Case=Acc	5	case	_	Vform=بَعدَ|Gloss=after,afterward,later,yet|Root=b_`_d|Translit=baʿda|LTranslit=baʿda
5	اليوم	يَوم	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	3	obl	_	SpaceAfter=No|Vform=اَليَومِ|Gloss=day,today|Root=y_w_m|Translit=al-yawmi|LTranslit=yawm
6	"	"	PUNCT	G---------	_	3	punct	_	SpaceAfter=No|Vform="|Translit="
7	.	.	PUNCT	G---------	_	3	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	سقط	سَقَط	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Vform=سَقَطَ|Gloss=fall,drop|Root=s_q_.t|Translit=saqaṭa|LTranslit=saqaṭ
3	ل	لِ	ADP	P---------	AdpType=Prep	4	case	_	Vform=لَ|Gloss=for,to|Root=l|Translit=la|LTranslit=li
4	هم	هُوَ	PRON	SP---3MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	obj	_	Vform=هُم|Gloss=he,she,it|Translit=hum|LTranslit=huwa
5	قتلى	قَتِيل	NOUN	N------P1I	Case=Nom|Definite=Ind|Number=Plur	2	nsubj	_	SpaceAfter=No|Vform=قَتلَى|Gloss=casualty,killed,dead|Root=q_t_l|Translit=qatlā|LTranslit=qatīl
6	"	"	PUNCT	G---------	_	2	punct	_	SpaceAfter=No|Vform="|Translit="
7	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic-NYUAD)

This relation is universal.

91526 nodes (12%) are attached to their parents as `case`.

91441 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13070602888797.

The following 15 pairs of parts of speech are connected with `case`: [ar-pos/NOUN]()-[ar-pos/ADP]() (69452; 76% instances), [ar-pos/PROPN]()-[ar-pos/ADP]() (8557; 9% instances), [ar-pos/PRON]()-[ar-pos/ADP]() (6076; 7% instances), [ar-pos/VERB]()-[ar-pos/ADP]() (2292; 3% instances), [ar-pos/ADV]()-[ar-pos/ADP]() (1810; 2% instances), [ar-pos/ADJ]()-[ar-pos/ADP]() (988; 1% instances), [ar-pos/DET]()-[ar-pos/ADP]() (950; 1% instances), [ar-pos/NUM]()-[ar-pos/ADP]() (816; 1% instances), [ar-pos/SCONJ]()-[ar-pos/ADP]() (381; 0% instances), [ar-pos/X]()-[ar-pos/ADP]() (75; 0% instances), [ar-pos/PUNCT]()-[ar-pos/ADP]() (51; 0% instances), [ar-pos/PART]()-[ar-pos/ADP]() (50; 0% instances), [ar-pos/CCONJ]()-[ar-pos/ADP]() (22; 0% instances), [ar-pos/AUX]()-[ar-pos/ADP]() (5; 0% instances), [ar-pos/INTJ]()-[ar-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 case	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 case	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nsubj	_	_
4	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	3	appos	_	_
5	_	_	PUNCT	PUNC	_	4	punct	_	_
6	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
7	_	_	ADP	PREP	AdpType=Prep	8	case	_	_
8	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
9	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod:poss	_	_
10	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	amod	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
13	_	_	SCONJ	SUB_CONJ	_	14	mark	_	_
14	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	_
15	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	14	amod	_	_
16	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	_
17	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	16	nmod	_	_
18	_	_	ADP	PREP	AdpType=Prep	19	case	_	_
19	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	_
20	_	_	PUNCT	PUNC	_	14	punct	_	_
21	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
22	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	23	mark	_	_
23	_	_	VERB	VERB	Gender=Masc|Number=Sing|Person=3	14	xcomp	_	_
24	_	_	DET	DEM_PRON_MS	Definite=Ind|Gender=Masc|Number=Sing	25	det	_	_
25	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	23	obj	_	_
26	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nmod	_	_
5	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
6	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	5	nmod:poss	_	_
7	_	_	ADV	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	advmod	_	_
8	_	w	ADV	SUB_CONJ	_	10	advmod	_	_
9	_	_	PRON	PRON_3MS	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	_
13	_	_	PUNCT	PUNC	_	15	punct	_	_
14	_	_	ADP	PREP	AdpType=Prep	15	case	_	_
15	_	k	PRON	PRON_2MS	Definite=Def|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nmod	_	_
16	_	_	SCONJ	SUB_CONJ	_	18	mark	_	_
17	_	lA	PART	NEG_PART	Polarity=Neg	18	aux	_	_
18	_	_	VERB	IV2MS+IV+IVSUFF_MOOD:S	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=2|Voice=Act	15	csubj	_	_
19	_	_	SCONJ	SUB_CONJ	_	20	mark	_	_
20	_	k	PRON	PRON_2MS	Definite=Def|Gender=Masc|Number=Sing|Person=2|PronType=Prs	18	obj	_	_
21	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	2	parataxis	_	_
22	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	y	SCONJ	PRON_1S	Definite=Def|Gender=Masc|Number=Sing|Person=1	21	mark	_	_
24	_	b	ADP	PREP	AdpType=Prep	25	case	_	_
25	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	21	nmod	_	_
26	_	_	PUNCT	PUNC	_	15	punct	_	_
27	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


