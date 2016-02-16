

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

3144 nodes (1%) are attached to their parents as `ccomp`.

3138 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.55947837150127.

The following 24 pairs of parts of speech are connected with `ccomp`: [ar-pos/VERB]()-[ar-pos/VERB]() (2544; 81% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (228; 7% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (127; 4% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (64; 2% instances), [ar-pos/X]()-[ar-pos/VERB]() (62; 2% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (59; 2% instances), [ar-pos/CONJ]()-[ar-pos/VERB]() (14; 0% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (8; 0% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (6; 0% instances), [ar-pos/ADV]()-[ar-pos/VERB]() (5; 0% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (4; 0% instances), [ar-pos/VERB]()-[ar-pos/PRON]() (4; 0% instances), [ar-pos/X]()-[ar-pos/ADJ]() (4; 0% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (3; 0% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (2; 0% instances), [ar-pos/VERB]()-[ar-pos/X]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/DET]() (1; 0% instances), [ar-pos/ADJ]()-[ar-pos/X]() (1; 0% instances), [ar-pos/DET]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/X]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/SYM]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/X]()-[ar-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	قَالَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Translit=qāla
3	العطية	_	X	U---------	_	2	nsubj	_	Translit=AlETyp
4	"	_	PUNCT	G---------	_	6	punct	_	Translit="
5	لَا	_	PART	F---------	_	6	neg	_	Translit=lā
6	أُؤَيِّدُ	_	VERB	VIIA-1MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	2	ccomp	_	Translit=ʾuʾayyidu
7	تَأجِيلَ	_	NOUN	N------S4R	Case=Acc|Definite=Red|Number=Sing	6	dobj	_	Translit=taʾǧīla
8	اَلخَفضِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	7	nmod	_	Translit=al-ḫafḍi
9	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 ccomp	color:blue
1	مُشِيرًا	_	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	Translit=mušīran
2	إِلَى	_	ADP	P---------	AdpType=Prep	13	mark	_	Translit=ʾilā
3	أَنَّ	_	CONJ	C---------	_	13	mark	_	Translit=ʾanna
4	هُ	_	PRON	SP---3MS4-	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	cc	_	Translit=hu
5	فِي	_	ADP	P---------	AdpType=Prep	6	case	_	Translit=fī
6	حَالَةِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	13	nmod	_	Translit=ḥālati
7	عَدَمِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	6	nmod	_	Translit=ʿadami
8	اَلتَّعدِيلِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	7	nmod	_	Translit=at-taʿdīli
9	فَ	_	CONJ	C---------	_	10	cc	_	Translit=fa
10	إِنَّ	_	PART	F---------	_	13	advmod:emph	_	Translit=ʾinna
11	هَا	_	PRON	SP---3FS4-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Translit=hā
12	لَن	_	PART	F---------	_	13	neg	_	Translit=lan
13	تُصَوِّتَ	_	VERB	VISA-3FS--	Aspect=Imp|Gender=Fem|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	ccomp	_	Translit=tuṣawwita
14	عَلَي	_	ADP	P---------	AdpType=Prep	15	case	_	Translit=ʿalay
15	هِ	_	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	dobj	_	Translit=hi
16	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 ccomp	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	قَالَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Translit=qāla
3	"	_	PUNCT	G---------	_	5	punct	_	Translit="
4	لقد	_	X	U---------	_	5	aux	_	Translit=lqd
5	تلقيت	_	X	U---------	_	2	dobj	_	Translit=tlqyt
6	تَقرِيرًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	5	dobj	_	Translit=taqrīran
7	بِ	_	ADP	P---------	AdpType=Prep	12	mark	_	Translit=bi
8	أَنَّ	_	CONJ	C---------	_	12	mark	_	Translit=ʾanna
9	محاكمته	_	X	U---------	_	12	nsubj	_	Translit=mHAkmth
10	محاكمته	_	X	U---------	_	9	dobj	_	Translit=mHAkmth
11	سَ	_	PART	F---------	_	12	aux	_	Translit=sa
12	تَبدَأُ	_	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	6	ccomp	_	Translit=tabdaʾu
13	فِي	_	ADP	P---------	AdpType=Prep	14	case	_	Translit=fī
14	مُنتَصَفِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	12	nmod	_	Translit=muntaṣafi
15	اَلشَّهرِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	14	nmod	_	Translit=aš-šahri
16	اَلحَالِيِّ	_	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	amod	_	Translit=al-ḥālīyi
17	"	_	PUNCT	G---------	_	5	punct	_	Translit="
18	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


