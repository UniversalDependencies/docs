

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

1041 nodes (0%) are attached to their parents as `appos`.

839 instances of `appos` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.10374639769452.

The following 45 pairs of parts of speech are connected with `appos`: [ar-pos/NOUN]()-[ar-pos/NOUN]() (396; 38% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (139; 13% instances), [ar-pos/NUM]()-[ar-pos/NUM]() (89; 9% instances), [ar-pos/NOUN]()-[ar-pos/X]() (65; 6% instances), [ar-pos/PART]()-[ar-pos/NOUN]() (54; 5% instances), [ar-pos/X]()-[ar-pos/NOUN]() (37; 4% instances), [ar-pos/X]()-[ar-pos/X]() (35; 3% instances), [ar-pos/VERB]()-[ar-pos/X]() (23; 2% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (20; 2% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (18; 2% instances), [ar-pos/NOUN]()-[ar-pos/NUM]() (18; 2% instances), [ar-pos/PART]()-[ar-pos/X]() (13; 1% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (13; 1% instances), [ar-pos/CONJ]()-[ar-pos/NOUN]() (12; 1% instances), [ar-pos/PRON]()-[ar-pos/NOUN]() (11; 1% instances), [ar-pos/NUM]()-[ar-pos/PRON]() (10; 1% instances), [ar-pos/NUM]()-[ar-pos/NOUN]() (9; 1% instances), [ar-pos/VERB]()-[ar-pos/VERB]() (9; 1% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (8; 1% instances), [ar-pos/VERB]()-[ar-pos/PRON]() (8; 1% instances), [ar-pos/PART]()-[ar-pos/ADJ]() (7; 1% instances), [ar-pos/X]()-[ar-pos/NUM]() (7; 1% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (6; 1% instances), [ar-pos/ADJ]()-[ar-pos/NUM]() (3; 0% instances), [ar-pos/ADP]()-[ar-pos/NOUN]() (3; 0% instances), [ar-pos/CONJ]()-[ar-pos/X]() (2; 0% instances), [ar-pos/NOUN]()-[ar-pos/PROPN]() (2; 0% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/NUM]()-[ar-pos/ADJ]() (2; 0% instances), [ar-pos/NUM]()-[ar-pos/X]() (2; 0% instances), [ar-pos/PRON]()-[ar-pos/X]() (2; 0% instances), [ar-pos/X]()-[ar-pos/ADJ]() (2; 0% instances), [ar-pos/X]()-[ar-pos/PRON]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/ADJ]()-[ar-pos/PRON]() (1; 0% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/ADP]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/ADV]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/ADP]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/ADP]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/PROPN]() (1; 0% instances), [ar-pos/X]()-[ar-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	هٰذَا	_	DET	SD----MS1-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	Translit=hāḏā
2	اَليَومُ	_	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=al-yawmu
3	فِي	_	ADP	P---------	AdpType=Prep	4	case	_	Translit=fī
4	اَلتَّارِيخِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	2	nmod	_	Translit=at-tārīḫi
5	١٦	_	NUM	Q---------	NumForm=Digit	2	nummod	_	Translit=16
6	تَمُّوزَ	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	5	nmod	_	Translit=tammūza
7	/	_	PUNCT	G---------	_	8	punct	_	Translit=/
8	يُولِيُو	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	6	appos	_	Translit=yūliyū

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 appos	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	اَلمَكَانُ	_	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	8	appos	_	Translit=al-makānu
3	اَلَّذِي	_	PRON	SR----MS1-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	cc	_	Translit=allaḏī
4	كَانَت	_	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	2	acl	_	Translit=kānat
5	تُقَامُ	_	VERB	VIIP-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	4	xcomp	_	Translit=tuqāmu
6	فِي	_	ADP	P---------	AdpType=Prep	7	case	_	Translit=fī
7	هِ	_	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	dobj	_	Translit=hi
8	أُقِيمَت	_	VERB	VP-P-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Pass	1	parataxis	_	Translit=ʾuqīmat
9	عَلَي	_	ADP	P---------	AdpType=Prep	10	case	_	Translit=ʿalay
10	هِ	_	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	dobj	_	Translit=hi
11	عِمَارَةٌ	_	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	8	nsubjpass	_	Translit=ʿimāratun
12	سَكَنِيَّةٌ	_	ADJ	A-----FS1I	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	11	amod	_	Translit=sakanīyatun
13	ضَخمَةٌ	_	ADJ	A-----FS1I	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	11	amod	_	Translit=ḍaḫmatun
14	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 appos	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	يَدفَعُ	_	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	parataxis	_	Translit=yadfaʿu
3	اَلزَّائِرُ	_	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	Translit=az-zāʾiru
4	مُقَابِلَ	_	ADP	PI------4-	AdpType=Prep|Case=Acc	5	case	_	Translit=muqābila
5	اَلمَنَامَةِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	2	nmod	_	Translit=al-manāmati
6	وَ	_	CONJ	C---------	_	5	cc	_	Translit=wa
7	اَلطَّعَامِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	5	conj	_	Translit=aṭ-ṭaʿāmi
8	اَلكَامِلِ	_	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	amod	_	Translit=al-kāmili
9	١٥٠	_	NUM	Q---------	NumForm=Digit	2	dobj	_	Translit=150
10	روبلا	_	X	U---------	_	9	nmod	_	Translit=rwblA
11	أَي	_	CONJ	C---------	_	12	cc	_	Translit=ʾay
12	خَمسَةَ	_	NUM	QV----M-4R	Case=Acc|Definite=Red|Gender=Masc|NumForm=Word|NumValue=3	9	appos	_	Translit=ḫamsata
13	دُولَارَاتٍ	_	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	12	nmod	_	Translit=dūlārātin
14	يَومِيًّا	_	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	12	advmod	_	Translit=yawmīyan
15	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


