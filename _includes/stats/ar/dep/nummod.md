

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

3712 nodes (1%) are attached to their parents as `nummod`.

3700 instances of `nummod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67133620689655.

The following 12 pairs of parts of speech are connected with `nummod`: [ar-pos/NOUN]()-[ar-pos/NUM]() (1857; 50% instances), [ar-pos/NUM]()-[ar-pos/NUM]() (1493; 40% instances), [ar-pos/ADJ]()-[ar-pos/NUM]() (157; 4% instances), [ar-pos/X]()-[ar-pos/NUM]() (137; 4% instances), [ar-pos/PRON]()-[ar-pos/NUM]() (25; 1% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (21; 1% instances), [ar-pos/DET]()-[ar-pos/NUM]() (14; 0% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (4; 0% instances), [ar-pos/ADP]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/PROPN]()-[ar-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 nummod	color:blue
1	دَورَةُ	_	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	0	root	_	Translit=dawratu
2	قَطَرَ	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	1	nmod	_	Translit=qaṭara
3	اَلدُّوَلِيَّةُ	_	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	amod	_	Translit=ad-duwalīyatu
4	:	_	PUNCT	G---------	_	1	punct	_	Translit=:
5	فَوزُ	_	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	1	dep	_	Translit=fawzu
6	إِيرَانَ	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	5	nmod	_	Translit=ʾīrāna
7	عَلَى	_	ADP	P---------	AdpType=Prep	8	case	_	Translit=ʿalā
8	مِصرَ	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	5	nmod	_	Translit=miṣra
9	٣	_	NUM	Q---------	NumForm=Digit	5	nummod	_	Translit=3
10	-	_	PUNCT	G---------	_	9	punct	_	Translit=-
11	٢	_	NUM	Q---------	NumForm=Digit	9	conj	_	Translit=2

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nummod	color:blue
1	جَرِيدَةُ	_	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	0	root	_	Translit=ǧarīdatu
2	مَعَارِيف	_	X	X---------	Foreign=Foreign	1	nmod	_	Translit=maʿārīf
3	٢١	_	NUM	Q---------	NumForm=Digit	1	nummod	_	Translit=21
4	/	_	PUNCT	G---------	_	3	punct	_	Translit=/
5	٦	_	NUM	Q---------	NumForm=Digit	3	nummod	_	Translit=6
6	/	_	PUNCT	G---------	_	5	punct	_	Translit=/
7	٢٠٠٣	_	NUM	Q---------	NumForm=Digit	5	nummod	_	Translit=2003
8	"	_	PUNCT	G---------	_	1	punct	_	Translit="
9	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nummod	color:blue
1	اِنخِفَاضُ	_	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	0	root	_	Translit=inḫifāḍu
2	أَسعَارِ	_	NOUN	N------P2R	Case=Gen|Definite=Red|Number=Plur	1	nmod	_	Translit=ʾasʿāri
3	نَفطِ	_	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	2	nmod	_	Translit=nafṭi
4	الاوبك	_	X	U---------	_	3	nmod	_	Translit=AlAwbk
5	إِلَى	_	ADP	P---------	AdpType=Prep	6	case	_	Translit=ʾilā
6	أَقَلَّ	_	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	1	amod	_	Translit=ʾaqalla
7	مِن	_	ADP	P---------	AdpType=Prep	8	case	_	Translit=min
8	٢٤	_	NUM	Q---------	NumForm=Digit	6	nummod	_	Translit=24
9	دُولَارًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	8	nmod	_	Translit=dūlāran
10	لِ	_	ADP	P---------	AdpType=Prep	11	case	_	Translit=li
11	اَلبَرمِيلِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	6	nmod	_	Translit=al-barmīli
12	اَلوَاحِدِ	_	NUM	QI----M-2D	Case=Gen|Definite=Def|Gender=Masc|NumForm=Word|NumValue=1	11	nummod	_	Translit=al-wāḥidi

~~~


