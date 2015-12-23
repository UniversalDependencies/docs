

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

521 nodes (0%) are attached to their parents as `csubj`.

521 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.51439539347409.

The following 15 pairs of parts of speech are connected with `csubj`: [ar-pos/VERB]()-[ar-pos/VERB]() (302; 58% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (125; 24% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (45; 9% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (13; 2% instances), [ar-pos/X]()-[ar-pos/VERB]() (10; 2% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (8; 2% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (5; 1% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (3; 1% instances), [ar-pos/ADP]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/CONJ]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/X]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 csubj	color:blue
1	شَافِيز	_	X	X---------	Foreign=Foreign	0	root	_	Translit=šāfīz
2	:	_	PUNCT	G---------	_	1	punct	_	Translit=:
3	عمان	_	X	U---------	_	8	appos	_	Translit=EmAn
4	وَ	_	CONJ	C---------	_	3	nmod	_	Translit=wa
5	رُوسِيَا	_	X	X---------	Foreign=Foreign	3	conj	_	Translit=rūsiyā
6	والنروج	_	X	U---------	_	3	cc	_	Translit=wAlnrwj
7	والنروج	_	X	U---------	_	3	conj	_	Translit=wAlnrwj
8	يُمكِنُ	_	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	parataxis	_	Translit=yumkinu
9	أَن	_	CONJ	C---------	_	10	mark	_	Translit=ʾan
10	تَدخُلَ	_	VERB	VISA-3FS--	Aspect=Imp|Gender=Fem|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	csubj	_	Translit=tadḫula
11	أُوبِك	_	X	X---------	Foreign=Foreign	10	dobj	_	Translit=ʾūbik

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	مِن	_	ADP	P---------	AdpType=Prep	3	case	_	Translit=min
3	اَلمُتَوَقَّعِ	_	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	parataxis	_	Translit=al-mutawaqqaʿi
4	أَن	_	CONJ	C---------	_	5	mark	_	Translit=ʾan
5	يُعلَنَ	_	VERB	VISP-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	3	csubj	_	Translit=yuʿlana
6	عَن	_	ADP	P---------	AdpType=Prep	7	case	_	Translit=ʿan
7	اَلصَّفقَةِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	5	dobj	_	Translit=aṣ-ṣafqati
8	اَلِاثنَينِ	_	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	5	nmod	_	Translit=al-i-ʼṯnayni
9	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	١	_	NUM	Q---------	NumForm=Digit	0	root	_	Translit=1
2	-	_	PUNCT	G---------	_	1	punct	_	Translit=-
3	"	_	PUNCT	G---------	_	1	punct	_	Translit="
4	لَيسَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	6	cop	_	Translit=laysa
5	بِ	_	ADP	P---------	AdpType=Prep	6	case	_	Translit=bi
6	اَلضَّرُورَةِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	1	parataxis	_	Translit=aḍ-ḍarūrati
7	أَن	_	CONJ	C---------	_	8	mark	_	Translit=ʾan
8	يُفَسَّرَ	_	VERB	VISP-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	6	csubj	_	Translit=yufassara
9	اَلكِتَابُ	_	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	8	nsubjpass	_	Translit=al-kitābu
10	اَلمُقَدَّسُ	_	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	Translit=al-muqaddasu
11	تَفسِيرًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	8	nmod	_	Translit=tafsīran
12	حَرفِيًّا	_	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	11	amod	_	Translit=ḥarfīyan
13	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


