

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

5298 nodes (2%) are attached to their parents as `acl`.

5283 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40052850132125.

The following 26 pairs of parts of speech are connected with `acl`: [ar-pos/NOUN]()-[ar-pos/VERB]() (4012; 76% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (475; 9% instances), [ar-pos/X]()-[ar-pos/VERB]() (281; 5% instances), [ar-pos/DET]()-[ar-pos/VERB]() (191; 4% instances), [ar-pos/NUM]()-[ar-pos/VERB]() (99; 2% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (90; 2% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (46; 1% instances), [ar-pos/VERB]()-[ar-pos/VERB]() (29; 1% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (28; 1% instances), [ar-pos/X]()-[ar-pos/NOUN]() (9; 0% instances), [ar-pos/CONJ]()-[ar-pos/VERB]() (6; 0% instances), [ar-pos/NOUN]()-[ar-pos/X]() (5; 0% instances), [ar-pos/X]()-[ar-pos/ADJ]() (5; 0% instances), [ar-pos/PRON]()-[ar-pos/NOUN]() (4; 0% instances), [ar-pos/PROPN]()-[ar-pos/VERB]() (4; 0% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (3; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (2; 0% instances), [ar-pos/DET]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/INTJ]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/NUM]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/NUM]()-[ar-pos/PRON]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/X]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/X]()-[ar-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	بِدَايَةٌ	_	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	Translit=bidāyatun
2	،	_	PUNCT	G---------	_	3	punct	_	Translit=،
3	كَلِمَةٌ	_	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=kalimatun
4	ابو	_	X	U---------	_	3	nmod	_	Translit=Abw
5	كسم	_	X	U---------	_	4	nmod	_	Translit=ksm
6	جَاءَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	3	acl	_	Translit=ǧāʾa
7	فِي	_	ADP	P---------	AdpType=Prep	8	case	_	Translit=fī
8	هَا	_	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	dobj	_	Translit=hā
9	:	_	PUNCT	G---------	_	3	punct	_	Translit=:

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	فِي	_	ADP	P---------	AdpType=Prep	3	case	_	Translit=fī
3	مَا	_	PRON	S---------	_	1	nmod	_	Translit=mā
4	يَلِي	_	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	acl	_	Translit=yalī
5	أَسمَاءُ	_	NOUN	N------P1R	Case=Nom|Definite=Red|Number=Plur	3	nsubj	_	Translit=ʾasmāʾu
6	اَلوُزَرَاءِ	_	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	5	nmod	_	Translit=al-wuzarāʾi
7	اَلجُدُدِ	_	ADJ	A-----MP2D	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	6	amod	_	Translit=al-ǧududi

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	وَقَعَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	Translit=waqaʿa
2	اَلِانفِجَارُ	_	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	1	nsubj	_	Translit=al-i-ʼnfiǧāru
3	فِي	_	ADP	P---------	AdpType=Prep	4	case	_	Translit=fī
4	قاع	_	X	U---------	_	1	advmod	_	Translit=qAE
5	احد	_	X	U---------	_	4	nmod	_	Translit=AHd
6	المناجم	_	X	U---------	_	5	nmod	_	Translit=AlmnAjm
7	حَيثُ	_	CONJ	C---------	_	4	cc	_	Translit=ḥayṯu
8	كَانَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	4	acl	_	Translit=kāna
9	يَعمَلُ	_	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	xcomp	_	Translit=yaʿmalu
10	اَلضَّحَايَا	_	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	Translit=aḍ-ḍaḥāyā
11	اَلأَربَعَةُ	_	NUM	QV----M-1D	Case=Nom|Definite=Def|Gender=Masc|NumForm=Word|NumValue=3	10	nummod	_	Translit=al-ʾarbaʿatu
12	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


