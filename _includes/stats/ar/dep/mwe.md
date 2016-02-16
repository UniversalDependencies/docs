

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

108 nodes (0%) are attached to their parents as `mwe`.

108 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `mwe`: [ar-pos/ADP]()-[ar-pos/NOUN]() (104; 96% instances), [ar-pos/ADP]()-[ar-pos/CONJ]() (1; 1% instances), [ar-pos/ADP]()-[ar-pos/PRON]() (1; 1% instances), [ar-pos/CONJ]()-[ar-pos/PART]() (1; 1% instances), [ar-pos/X]()-[ar-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	بِ	_	ADP	P---------	AdpType=Prep	4	case	_	Translit=bi
2	اَلنِّسبَةِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	1	mwe	_	Translit=an-nisbati
3	إِلَى	_	ADP	P---------	AdpType=Prep	4	case	_	Translit=ʾilā
4	اَلمَوضُوعِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	0	root	_	Translit=al-mawḍūʿi
5	حَولَ	_	ADP	PI------4-	AdpType=Prep|Case=Acc	6	case	_	Translit=ḥawla
6	فِيلمِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	4	nmod	_	Translit=fīlmi
7	نور	_	X	U---------	_	6	nmod	_	Translit=nwr
8	الشريف	_	X	U---------	_	7	nmod	_	Translit=Al$ryf

~~~


~~~ conllu
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 47	bgColor:blue
# visual-style 47	fgColor:white
# visual-style 47 48 mwe	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	قَد	_	PART	F---------	_	3	cc	_	Translit=qad
3	قَالَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Translit=qāla
4	مَصدَرٌ	_	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	Translit=maṣdarun
5	طِبِّيٌّ	_	ADJ	A-----MS1I	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	4	amod	_	Translit=ṭibbīyun
6	إِنَّ	_	CONJ	C---------	_	8	mark	_	Translit=ʾinna
7	اَلمُوَاطِنِينَ	_	NOUN	N------P4D	Case=Acc|Definite=Def|Number=Plur	8	cop	_	Translit=al-muwāṭinīna
8	شحدة	_	X	U---------	_	3	advcl	_	Translit=$Hdp
9	الغرابلى	_	X	U---------	_	8	nmod	_	Translit=AlgrAblY
10	(	_	PUNCT	G---------	_	11	punct	_	Translit=(
11	٦٧	_	NUM	Q---------	NumForm=Digit	9	dep	_	Translit=67
12	عَامًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	11	nmod	_	Translit=ʿāman
13	)	_	PUNCT	G---------	_	11	punct	_	Translit=)
14	وبكر	_	X	U---------	_	8	cc	_	Translit=wbkr
15	وبكر	_	X	U---------	_	8	conj	_	Translit=wbkr
16	محيسن	_	X	U---------	_	15	nmod	_	Translit=mHysn
17	ومحمد	_	X	U---------	_	8	conj	_	Translit=wmHmd
18	ومحمد	_	X	U---------	_	17	nmod	_	Translit=wmHmd
19	ابو	_	X	U---------	_	18	nmod	_	Translit=Abw
20	زرينة	_	X	U---------	_	19	nmod	_	Translit=zrynp
21	(	_	PUNCT	G---------	_	22	punct	_	Translit=(
22	٢٥	_	NUM	Q---------	NumForm=Digit	20	dep	_	Translit=25
23	عَامًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	22	nmod	_	Translit=ʿāman
24	)	_	PUNCT	G---------	_	22	punct	_	Translit=)
25	وعبد	_	X	U---------	_	8	conj	_	Translit=wEbd
26	وعبد	_	X	U---------	_	25	nmod	_	Translit=wEbd
27	الله	_	X	U---------	_	26	nmod	_	Translit=Allh
28	العمرانى	_	X	U---------	_	27	nmod	_	Translit=AlEmrAnY
29	(	_	PUNCT	G---------	_	30	punct	_	Translit=(
30	١٧	_	NUM	Q---------	NumForm=Digit	28	dep	_	Translit=17
31	عَامًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	30	nmod	_	Translit=ʿāman
32	)	_	PUNCT	G---------	_	30	punct	_	Translit=)
33	قُتِلُوا	_	VERB	VP-P-3MP--	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Voice=Pass	8	cop	_	Translit=qutilū
34	جَرَّاء	_	ADP	P---------	AdpType=Prep	35	case	_	Translit=ǧarrāʾ
35	إِصَابَةِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	8	nmod	_	Translit=ʾiṣābati
36	هِم	_	PRON	SP---3MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	35	dobj	_	Translit=him
37	بِ	_	ADP	P---------	AdpType=Prep	38	case	_	Translit=bi
38	رَصَاصِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	35	nsubj	_	Translit=raṣāṣi
39	اَلجَيشِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	38	nmod	_	Translit=al-ǧayši
40	اَلإِسرَائِيلِيِّ	_	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	42	cop	_	Translit=al-ʾisrāʾīlīyi
41	خِلَالَ	_	ADP	PI------4-	AdpType=Prep|Case=Acc	42	mark	_	Translit=ḫilāla
42	عَمَلِيَّةِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	39	amod	_	Translit=ʿamalīyati
43	اَلتَّوَغُّلِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	42	nmod	_	Translit=at-tawaġġuli
44	فِي	_	ADP	P---------	AdpType=Prep	45	case	_	Translit=fī
45	مِنطَقَةِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	43	nmod	_	Translit=minṭaqati
46	اَلشُّجَاعِيَّةِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	45	nmod	_	Translit=aš-šuǧāʿīyati
47	بَينَمَا	_	CONJ	C---------	_	49	mark	_	Translit=baynamā
48	لَم	_	PART	F---------	_	47	mwe	_	Translit=lam
49	يُتِمَّ	_	VERB	VIJA-3MS--	Aspect=Imp|Gender=Masc|Mood=Jus|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	42	acl	_	Translit=yutimm-a
50	اَلتَّعَرُّفُ	_	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	49	nsubj	_	Translit=at-taʿarrufu
51	عَلَى	_	ADP	P---------	AdpType=Prep	52	case	_	Translit=ʿalā
52	هُوِيَّةِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	50	dobj	_	Translit=huwīyati
53	بَاقِي	_	ADJ	A-----MP2R	Case=Gen|Definite=Red|Gender=Masc|Number=Plur	52	amod	_	Translit=bāqī
54	اَلقَتلَى	_	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	53	nmod	_	Translit=al-qatlā
55	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 mwe	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	أَضَافَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	4	case	_	Translit=ʾaḍāfa
3	"	_	PUNCT	G---------	_	4	punct	_	Translit="
4	اعتقد	_	X	U---------	_	1	parataxis	_	Translit=AEtqd
5	أَنَّ	_	CONJ	C---------	_	10	mark	_	Translit=ʾanna
6	هُم	_	PRON	SP---3MP4-	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	Translit=hum
7	(	_	PUNCT	G---------	_	10	punct	_	Translit=(
8	اَلرُّوسُ	_	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	7	nsubj	_	Translit=ar-rūsu
9	)	_	PUNCT	G---------	_	7	punct	_	Translit=)
10	يُدرِكُونَ	_	VERB	VIIA-3MP--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	4	advcl	_	Translit=yudrikūna
11	اننا	_	X	U---------	_	13	mark	_	Translit=AnnA
12	اننا	_	X	U---------	_	11	mwe	_	Translit=AnnA
13	مُستَعِدُّونَ	_	ADJ	A-----MP1I	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	10	xcomp	_	Translit=mustaʿiddūna
14	لِ	_	ADP	P---------	AdpType=Prep	15	case	_	Translit=li
15	مُسَاعَدَةِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	13	dobj	_	Translit=musāʿadati
16	هِم	_	PRON	SP---3MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	15	nmod	_	Translit=him
17	،	_	PUNCT	G---------	_	16	punct	_	Translit=،
18	لكن	_	X	U---------	_	28	mark	_	Translit=lkn
19	(	_	PUNCT	G---------	_	28	punct	_	Translit=(
20	.	_	PUNCT	G---------	_	19	punct	_	Translit=.
21	.	_	PUNCT	G---------	_	20	punct	_	Translit=.
22	.	_	PUNCT	G---------	_	21	punct	_	Translit=.
23	)	_	PUNCT	G---------	_	19	punct	_	Translit=)
24	بِ	_	ADP	P---------	AdpType=Prep	28	case	_	Translit=bi
25	مَا	_	PRON	S---------	_	28	cc	_	Translit=mā
26	أَنَّ	_	CONJ	C---------	_	28	mark	_	Translit=ʾanna
27	فِي	_	ADP	P---------	AdpType=Prep	28	case	_	Translit=fī
28	حَوزَةِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	4	nmod	_	Translit=ḥawzati
29	هِم	_	PRON	SP---3MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	28	nmod	_	Translit=him
30	اَلآنَ	_	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	29	nmod	_	Translit=al-ʾāna
31	وَسَائِلَ	_	NOUN	N------P4R	Case=Acc|Definite=Red|Number=Plur	28	dobj	_	Translit=wasāʾila
32	اَلإِنقَاذِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	31	nmod	_	Translit=al-ʾinqāḏi
33	فسيقومون	_	X	U---------	_	28	parataxis	_	Translit=fsyqwmwn
34	بِ	_	ADP	P---------	AdpType=Prep	35	case	_	Translit=bi
35	اَلعَمَلِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	33	dobj	_	Translit=al-ʿamali
36	عَلَى	_	ADP	P---------	AdpType=Prep	37	case	_	Translit=ʿalā
37	طَرِيقَةِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	35	nmod	_	Translit=ṭarīqati
38	هِم	_	PRON	SP---3MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	37	nmod	_	Translit=him
39	.	_	PUNCT	G---------	_	10	punct	_	Translit=.
40	ونحن	_	X	U---------	_	28	cc	_	Translit=wnHn
41	ونحن	_	X	U---------	_	40	cc	_	Translit=wnHn
42	نبقى	_	X	U---------	_	40	parataxis	_	Translit=nbqY
43	مُستَعِدِّينَ	_	ADJ	A-----MP4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur	42	xcomp	_	Translit=mustaʿiddīna
44	لِ	_	ADP	P---------	AdpType=Prep	45	case	_	Translit=li
45	اَلقِيَامِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	43	nsubj	_	Translit=al-qiyāmi
46	بِ	_	ADP	P---------	AdpType=Prep	48	case	_	Translit=bi
47	كُلِّ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	48	case	_	Translit=kulli
48	مَا	_	DET	S---------	_	45	aux	_	Translit=mā
49	نستطيعه	_	X	U---------	_	48	parataxis	_	Translit=nstTyEh
50	إِذَا	_	CONJ	C---------	_	43	cc	_	Translit=ʾiḏā
51	مَا	_	PRON	S---------	_	50	cc	_	Translit=mā
52	وَجَّهُوا	_	VERB	VP-A-3MP--	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Voice=Act	50	parataxis	_	Translit=waǧǧahū
53	الينا	_	X	U---------	_	52	iobj	_	Translit=AlynA
54	الينا	_	X	U---------	_	53	dobj	_	Translit=AlynA
55	طَلَبًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	52	dobj	_	Translit=ṭalaban
56	فِي	_	ADP	P---------	AdpType=Prep	57	case	_	Translit=fī
57	هٰذَا	_	PRON	SD----MS2-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	52	cc	_	Translit=hāḏā
58	اَلصَّدَدِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	57	nmod	_	Translit=aṣ-ṣadadi
59	"	_	PUNCT	G---------	_	58	punct	_	Translit="
60	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


