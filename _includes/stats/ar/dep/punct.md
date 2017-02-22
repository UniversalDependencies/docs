

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

20392 nodes (8%) are attached to their parents as `punct`.

15997 instances of `punct` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.4252157708905.

The following 16 pairs of parts of speech are connected with `punct`: [ar-pos/NOUN]()-[ar-pos/PUNCT]() (5337; 26% instances), [ar-pos/CCONJ]()-[ar-pos/PUNCT]() (4337; 21% instances), [ar-pos/X]()-[ar-pos/PUNCT]() (3204; 16% instances), [ar-pos/VERB]()-[ar-pos/PUNCT]() (3149; 15% instances), [ar-pos/ADJ]()-[ar-pos/PUNCT]() (2005; 10% instances), [ar-pos/NUM]()-[ar-pos/PUNCT]() (1468; 7% instances), [ar-pos/PRON]()-[ar-pos/PUNCT]() (366; 2% instances), [ar-pos/PUNCT]()-[ar-pos/PUNCT]() (327; 2% instances), [ar-pos/ADV]()-[ar-pos/PUNCT]() (80; 0% instances), [ar-pos/PART]()-[ar-pos/PUNCT]() (56; 0% instances), [ar-pos/DET]()-[ar-pos/PUNCT]() (39; 0% instances), [ar-pos/ADP]()-[ar-pos/PUNCT]() (14; 0% instances), [ar-pos/PROPN]()-[ar-pos/PUNCT]() (4; 0% instances), [ar-pos/INTJ]()-[ar-pos/PUNCT]() (3; 0% instances), [ar-pos/AUX]()-[ar-pos/PUNCT]() (2; 0% instances), [ar-pos/CCONJ]()-[ar-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 punct	color:blue
1	جائزة	جَائِزَة	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	0	root	_	Vform=جَائِزَةُ|Gloss=prize,reward|Root=^g_w_z|Translit=ǧāʾizatu|LTranslit=ǧāʾizat
2	النمسا	اَلنِّمسَا	X	X---------	Foreign=Yes	1	nmod	_	Vform=اَلنِّمسَا|Gloss=Austria|Root=nims|Translit=an-nimsā|LTranslit=an-nimsā
3	الكبرى	أَكبَر	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	amod	_	Vform=اَلكُبرَى|Gloss=great,major,significant|Root=k_b_r|Translit=al-kubrā|LTranslit=ʾakbar
4	:	:	PUNCT	G---------	_	5	punct	_	Vform=:|Translit=:
5	انسحاب	اِنسِحَاب	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	1	conj	_	Vform=اِنسِحَابُ|Gloss=withdrawal,evacuation,pulling_out|Root=s_.h_b|Translit=insiḥābu|LTranslit=insiḥāb
6	الايرلندي	إِيرلَندِيّ	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	5	nmod	_	Vform=اَلإِيرلَندِيِّ|Gloss=Irish|Root='Irland|Translit=al-ʾīrlandīyi|LTranslit=ʾīrlandīy
7	ايرفاين	إِيرفَاين	X	X---------	Foreign=Yes	6	nmod	_	Vform=إِيرفَاين|Gloss=Irvine|Root='IrfAyn|Translit=ʾīrfāyn|LTranslit=ʾīrfāyn

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 punct	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 punct	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	قد	قَد	PART	F---------	_	3	aux	_	Vform=قَد|Gloss=indeed,has_/_have,may_/_might|Root=qad|Translit=qad|LTranslit=qad
3	تحطمت	تَحَطَّم	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Vform=تَحَطَّمَت|Gloss=break,crash|Root=.h_.t_m|Translit=taḥaṭṭamat|LTranslit=taḥaṭṭam
4	الطائرة	طَائِرَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	Vform=اَلطَّائِرَةُ|Gloss=aircraft,airplane|Root=.t_y_r|Translit=aṭ-ṭāʾiratu|LTranslit=ṭāʾirat
5	و	وَ	CCONJ	C---------	_	4	cc	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
6	هي	هُوَ	PRON	SP---3FS1-	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	Vform=هِيَ|Gloss=he,she,it|Translit=hiya|LTranslit=huwa
7	تصميم	تَصمِيم	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	4	xcomp	_	Vform=تَصمِيمٌ|Gloss=plan,sketch,design|Root=.s_m_m|Translit=taṣmīmun|LTranslit=taṣmīm
8	قديم	قَدِيم	ADJ	A-----MS1I	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	7	amod	_	Vform=قَدِيمٌ|Gloss=old,ancient|Root=q_d_m|Translit=qadīmun|LTranslit=qadīm
9	ل	لِ	ADP	P---------	AdpType=Prep	10	case	_	Vform=لِ|Gloss=for,to|Root=l|Translit=li|LTranslit=li
10	طراز	طِرَاز	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	7	nmod	_	Vform=طِرَازِ|Gloss=model,type,calibre|Root=.t_r_z|Translit=ṭirāzi|LTranslit=ṭirāz
11	"	"	PUNCT	G---------	_	12	punct	_	SpaceAfter=No|Vform="|Translit="
12	سي	سِي	X	X---------	Foreign=Yes	10	nmod	_	SpaceAfter=No|Vform=سِي|Gloss=C.|Root=sI|Translit=sī|LTranslit=sī
13	.	.	PUNCT	G---------	_	12	punct	_	SpaceAfter=No|Vform=.|Translit=.
14	ال	إِل	X	X---------	Foreign=Yes	10	nmod	_	SpaceAfter=No|Vform=إِل|Gloss=L.|Root='il|Translit=ʾil|LTranslit=ʾil
15	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic-NYUAD)

This relation is universal.

75057 nodes (10%) are attached to their parents as `punct`.

57777 instances of `punct` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.8584542414432.

The following 15 pairs of parts of speech are connected with `punct`: [ar-pos/VERB]()-[ar-pos/PUNCT]() (34719; 46% instances), [ar-pos/NOUN]()-[ar-pos/PUNCT]() (19460; 26% instances), [ar-pos/PROPN]()-[ar-pos/PUNCT]() (12001; 16% instances), [ar-pos/NUM]()-[ar-pos/PUNCT]() (2713; 4% instances), [ar-pos/ADJ]()-[ar-pos/PUNCT]() (2175; 3% instances), [ar-pos/ADV]()-[ar-pos/PUNCT]() (1803; 2% instances), [ar-pos/PRON]()-[ar-pos/PUNCT]() (728; 1% instances), [ar-pos/CCONJ]()-[ar-pos/PUNCT]() (684; 1% instances), [ar-pos/PUNCT]()-[ar-pos/PUNCT]() (474; 1% instances), [ar-pos/AUX]()-[ar-pos/PUNCT]() (99; 0% instances), [ar-pos/DET]()-[ar-pos/PUNCT]() (82; 0% instances), [ar-pos/PART]()-[ar-pos/PUNCT]() (46; 0% instances), [ar-pos/SCONJ]()-[ar-pos/PUNCT]() (37; 0% instances), [ar-pos/X]()-[ar-pos/PUNCT]() (33; 0% instances), [ar-pos/INTJ]()-[ar-pos/PUNCT]() (3; 0% instances).


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 32 punct	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 punct	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
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


