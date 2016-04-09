

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

1278 nodes (0%) are attached to their parents as `neg`.

1261 instances of `neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12910798122066.

The following 9 pairs of parts of speech are connected with `neg`: [ar-pos/VERB]()-[ar-pos/PART]() (1115; 87% instances), [ar-pos/X]()-[ar-pos/PART]() (83; 6% instances), [ar-pos/ADJ]()-[ar-pos/PART]() (39; 3% instances), [ar-pos/NOUN]()-[ar-pos/PART]() (29; 2% instances), [ar-pos/ADV]()-[ar-pos/PART]() (4; 0% instances), [ar-pos/PART]()-[ar-pos/NOUN]() (4; 0% instances), [ar-pos/PRON]()-[ar-pos/PART]() (2; 0% instances), [ar-pos/AUX]()-[ar-pos/PART]() (1; 0% instances), [ar-pos/NUM]()-[ar-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	لَم	_	PART	F---------	_	3	neg	_	Translit=lam
3	تُفِد	_	VERB	VIJA-3FS--	Aspect=Imp|Gender=Fem|Mood=Jus|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	parataxis	_	Translit=tufid
4	مَعلُومَاتٌ	_	NOUN	N------P1I	Case=Nom|Definite=Ind|Number=Plur	3	nsubj	_	Translit=maʿlūmātun
5	عَن	_	ADP	P---------	AdpType=Prep	6	case	_	Translit=ʿan
6	أَضرَارٍ	_	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	3	dobj	_	Translit=ʾaḍrārin
7	أَو	_	CONJ	C---------	_	6	cc	_	Translit=ʾaw
8	ضَحَايَا	_	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	6	conj	_	Translit=ḍaḥāyā
9	حَتَّى	_	ADP	P---------	AdpType=Prep	10	case	_	Translit=ḥattā
10	اَلآنِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	3	nmod	_	Translit=al-ʾāni
11	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 neg	color:blue
1	طوائف	_	X	U---------	_	0	root	_	Translit=TwA}f
2	لَا	_	PART	F---------	_	1	neg	_	Translit=lā
3	دِينِيَّةٌ	_	ADJ	A-----FS1I	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	2	amod	_	Translit=dīnīyatun
4	وَ	_	CONJ	C---------	_	2	nmod	_	Translit=wa
5	لَا	_	PART	F---------	_	2	conj	_	Translit=lā
6	سِيَاسِيَّةٌ	_	ADJ	A-----FS1I	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	amod	_	Translit=siyāsīyatun
7	وَ	_	CONJ	C---------	_	2	cc	_	Translit=wa
8	لَا	_	PART	F---------	_	2	conj	_	Translit=lā
9	إِدَارِيَّةٌ	_	ADJ	A-----FS1I	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	amod	_	Translit=ʾidārīyatun

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 neg	color:blue
1	لَن	_	PART	F---------	_	3	neg	_	Translit=lan
2	أَكُونَ	_	VERB	VISA-1MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	3	cop	_	Translit=ʾakūna
3	مُتَشَرِّدًا	_	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	Translit=mutašarridan
4	بَعدَ	_	ADP	PI------4-	AdpType=Prep|Case=Acc	5	case	_	Translit=baʿda
5	اَليَومِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	3	nmod	_	Translit=al-yawmi
6	"	_	PUNCT	G---------	_	3	punct	_	Translit="
7	.	_	PUNCT	G---------	_	3	punct	_	Translit=.

~~~


