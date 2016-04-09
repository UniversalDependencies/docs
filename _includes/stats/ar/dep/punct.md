

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

22447 nodes (8%) are attached to their parents as `punct`.

18530 instances of `punct` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.7955183320711.

The following 18 pairs of parts of speech are connected with `punct`: [ar-pos/NOUN]()-[ar-pos/PUNCT]() (5911; 26% instances), [ar-pos/CONJ]()-[ar-pos/PUNCT]() (4802; 21% instances), [ar-pos/VERB]()-[ar-pos/PUNCT]() (3531; 16% instances), [ar-pos/X]()-[ar-pos/PUNCT]() (3421; 15% instances), [ar-pos/ADJ]()-[ar-pos/PUNCT]() (2236; 10% instances), [ar-pos/NUM]()-[ar-pos/PUNCT]() (1561; 7% instances), [ar-pos/PRON]()-[ar-pos/PUNCT]() (447; 2% instances), [ar-pos/PUNCT]()-[ar-pos/PUNCT]() (341; 2% instances), [ar-pos/ADV]()-[ar-pos/PUNCT]() (87; 0% instances), [ar-pos/PART]()-[ar-pos/PUNCT]() (62; 0% instances), [ar-pos/DET]()-[ar-pos/PUNCT]() (17; 0% instances), [ar-pos/ADP]()-[ar-pos/PUNCT]() (16; 0% instances), [ar-pos/PROPN]()-[ar-pos/PUNCT]() (8; 0% instances), [ar-pos/AUX]()-[ar-pos/PUNCT]() (2; 0% instances), [ar-pos/INTJ]()-[ar-pos/PUNCT]() (2; 0% instances), [ar-pos/CONJ]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/ADP]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	بُطُولَةُ	_	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	0	root	_	Translit=buṭūlatu
2	مِصرَ	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	1	nmod	_	Translit=miṣra
3	:	_	PUNCT	G---------	_	2	punct	_	Translit=:
4	اَلقَلعَةُ	_	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	1	dep	_	Translit=al-qalʿatu
5	اَلحَمرَاءُ	_	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	amod	_	Translit=al-ḥamrāʾu
6	.	_	PUNCT	G---------	_	1	punct	_	Translit=.
7	.	_	PUNCT	G---------	_	1	punct	_	Translit=.
8	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 punct	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	عَلَّقَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Translit=ʿallaqa
3	عَلَي	_	ADP	P---------	AdpType=Prep	4	case	_	Translit=ʿalay
4	هِ	_	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	dobj	_	Translit=hi
5	بِ	_	ADP	P---------	AdpType=Prep	6	case	_	Translit=bi
6	قَولِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	2	nmod	_	Translit=qawli
7	هِ	_	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod	_	Translit=hi
8	"	_	PUNCT	G---------	_	10	punct	_	Translit="
9	كَانَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	10	cop	_	Translit=kāna
10	خِطَابًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	6	ccomp	_	Translit=ḫiṭāban
11	عَظِيمًا	_	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	10	amod	_	Translit=ʿaẓīman
12	"	_	PUNCT	G---------	_	10	punct	_	Translit="
13	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 punct	color:blue
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


