

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

487 nodes (0%) are attached to their parents as `csubj`.

487 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44147843942505.

The following 15 pairs of parts of speech are connected with `csubj`: [ar-pos/VERB]()-[ar-pos/VERB]() (278; 57% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (122; 25% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (44; 9% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (9; 2% instances), [ar-pos/X]()-[ar-pos/VERB]() (9; 2% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (7; 1% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (5; 1% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (3; 1% instances), [ar-pos/ADP]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/DET]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/CCONJ]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	يتوقع	تَوَقَّع	VERB	VIIP-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	1	parataxis	_	Vform=يُتَوَقَّعُ|Gloss=expect,count_on,anticipate|Root=w_q_`|Translit=yutawaqqaʿu|LTranslit=tawaqqaʿ
3	ان	أَن	CCONJ	C---------	_	4	mark	_	Vform=أَن|Gloss=to|Root='_n|Translit=ʾan|LTranslit=ʾan
4	يعود	عَاد	VERB	VISA-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	csubj	_	Vform=يَعُودَ|Gloss=return,go_back,no_longer|Root=`_w_d|Translit=yaʿūda|LTranslit=ʿād
5	الى	إِلَى	ADP	P---------	AdpType=Prep	6	case	_	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
6	الولايات	وِلَايَة	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	4	obl	_	Vform=اَلوِلَايَاتِ|Gloss=state,province|Root=w_l_y|Translit=al-wilāyāti|LTranslit=wilāyat
7	المتحدة	مُتَّحِد	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	amod	_	Vform=اَلمُتَّحِدَةِ|Gloss=united|Root=w_.h_d|Translit=al-muttaḥidati|LTranslit=muttaḥid
8	في	فِي	ADP	P---------	AdpType=Prep	9	case	_	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
9	25	25	NUM	Q---------	NumForm=Digit	4	obl	_	Vform=٢٥|Translit=25
10	تموز	تَمُّوز	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	9	nmod	_	SpaceAfter=No|Vform=تَمُّوزَ|Gloss=July|Root=tammUz|Translit=tammūza|LTranslit=tammūz
11	/	/	PUNCT	G---------	_	12	punct	_	SpaceAfter=No|Vform=/|Translit=/
12	يوليو	يُولِيُو	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	10	appos	_	SpaceAfter=No|Vform=يُولِيُو|Gloss=July|Root=yUliyU|Translit=yūliyū|LTranslit=yūliyū
13	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	كان	كَان	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	4	cop	_	Vform=كَانَ|Gloss=be,is,exist|Root=k_w_n|Translit=kāna|LTranslit=kān
3	من	مِن	ADP	P---------	AdpType=Prep	4	case	_	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
4	الممكن	مُمكِن	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	parataxis	_	Vform=اَلمُمكِنِ|Gloss=possible|Root=m_k_n|Translit=al-mumkini|LTranslit=mumkin
5	جدا	جِدّ	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	4	obl	_	Vform=جِدًّا|Gloss=seriousness,earnestness|Root=^g_d_d|Translit=ǧiddan|LTranslit=ǧidd
6	ان	أَن	CCONJ	C---------	_	7	mark	_	Vform=أَن|Gloss=to|Root='_n|Translit=ʾan|LTranslit=ʾan
7	يحصل	حَصَل	VERB	VISA-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	csubj	_	Vform=يَحصُلَ|Gloss=obtain,acquire,get,occur,happen,take_place|Root=.h_.s_l|Translit=yaḥṣula|LTranslit=ḥaṣal
8	هجوم	هُجُوم	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	7	obj	_	Vform=هُجُومٌ|Gloss=attack,charge,assault|Root=h_^g_m|Translit=huǧūmun|LTranslit=huǧūm
9	لو	لَو	CCONJ	C---------	_	11	mark	_	Vform=لَو|Gloss=if|Root=law|Translit=law|LTranslit=law
10	لم	لَم	PART	F---------	_	11	advmod	_	Vform=لَم|Gloss=not|Root=lam|Translit=lam|LTranslit=lam
11	نبدا	بَدَأ	VERB	VIJA-1MP--	Aspect=Imp|Gender=Masc|Mood=Jus|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	7	advcl	_	Vform=نَبدَأ|Gloss=start,begin|Root=b_d_'|Translit=nabdaʾ|LTranslit=badaʾ
12	ب	بِ	ADP	P---------	AdpType=Prep	13	case	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
13	قصف	قَصف	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	11	obj	_	Vform=قَصفِ|Gloss=bombardment,shelling|Root=q_.s_f|Translit=qaṣfi|LTranslit=qaṣf
14	هم	هُوَ	PRON	SP---3MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	13	nmod	_	Vform=هِم|Gloss=he,she,it|Translit=him|LTranslit=huwa
15	"	"	PUNCT	G---------	_	4	punct	_	SpaceAfter=No|Vform="|Translit="
16	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	1	1	NUM	Q---------	NumForm=Digit	0	root	_	SpaceAfter=No|Vform=١|Translit=1
2	-	-	PUNCT	G---------	_	1	punct	_	Vform=-|Translit=-
3	"	"	PUNCT	G---------	_	1	punct	_	SpaceAfter=No|Vform="|Translit="
4	ليس	لَيس	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	6	cop	_	Vform=لَيسَ|Gloss=be_not,is_not|Root=l_y_s|Translit=laysa|LTranslit=lays
5	ب	بِ	ADP	P---------	AdpType=Prep	6	case	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
6	الضرورة	ضَرُورَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	1	parataxis	_	Vform=اَلضَّرُورَةِ|Gloss=necessity,need,imperative|Root=.d_r_r|Translit=aḍ-ḍarūrati|LTranslit=ḍarūrat
7	ان	أَن	CCONJ	C---------	_	8	mark	_	Vform=أَن|Gloss=to|Root='_n|Translit=ʾan|LTranslit=ʾan
8	يفسر	فَسَّر	VERB	VISP-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	6	csubj	_	Vform=يُفَسَّرَ|Gloss=explain,interpret|Root=f_s_r|Translit=yufassara|LTranslit=fassar
9	الكتاب	كِتَاب	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	8	nsubj:pass	_	Vform=اَلكِتَابُ|Gloss=book|Root=k_t_b|Translit=al-kitābu|LTranslit=kitāb
10	المقدس	مُقَدَّس	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	Vform=اَلمُقَدَّسُ|Gloss=holy,sacred|Root=q_d_s|Translit=al-muqaddasu|LTranslit=muqaddas
11	تفسيرا	تَفسِير	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	8	obl	_	Vform=تَفسِيرًا|Gloss=explanation,commentary,exegesis,Quranic_commentary|Root=f_s_r|Translit=tafsīran|LTranslit=tafsīr
12	حرفيا	حَرفِيّ	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No|Vform=حَرفِيًّا|Gloss=literal|Root=.h_r_f|Translit=ḥarfīyan|LTranslit=ḥarfīy
13	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic-NYUAD)

This relation is universal.

1091 nodes (0%) are attached to their parents as `csubj`.

1079 instances of `csubj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.57745187901008.

The following 12 pairs of parts of speech are connected with `csubj`: [ar-pos/VERB]()-[ar-pos/VERB]() (656; 60% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (277; 25% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (66; 6% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (38; 3% instances), [ar-pos/CCONJ]()-[ar-pos/VERB]() (20; 2% instances), [ar-pos/PROPN]()-[ar-pos/VERB]() (15; 1% instances), [ar-pos/ADV]()-[ar-pos/VERB]() (12; 1% instances), [ar-pos/PART]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/SCONJ]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/DET]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/PUNCT]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/X]()-[ar-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 15 csubj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	_	w	CCONJ	CONJ	_	3	cc	_	_
2	_	_	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	_	_	SCONJ	SUB_CONJ	_	5	mark	_	_
5	_	_	VERB	IV3MS+IV_PASS+IVSUFF_MOOD:S	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Voice=Pass	3	csubj	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
8	_	_	NOUN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
9	_	_	PUNCT	PUNC	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 csubj	color:blue
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


