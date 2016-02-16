

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

552 nodes (0%) are attached to their parents as `nsubjpass`.

360 instances of `nsubjpass` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74275362318841.

The following 14 pairs of parts of speech are connected with `nsubjpass`: [ar-pos/VERB]()-[ar-pos/NOUN]() (389; 70% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (50; 9% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (31; 6% instances), [ar-pos/VERB]()-[ar-pos/X]() (28; 5% instances), [ar-pos/VERB]()-[ar-pos/PRON]() (20; 4% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (11; 2% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (9; 2% instances), [ar-pos/NOUN]()-[ar-pos/X]() (5; 1% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (3; 1% instances), [ar-pos/ADJ]()-[ar-pos/X]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/PRON]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/DET]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubjpass	color:blue
1	قِمَّةُ	_	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	4	nsubjpass	_	Translit=qimmatu
2	أُوبِك	_	X	X---------	Foreign=Foreign	1	nmod	_	Translit=ʾūbik
3	سَ	_	PART	F---------	_	4	auxpass	_	Translit=sa
4	تُعقَدُ	_	VERB	VIIP-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	0	root	_	Translit=tuʿqadu
5	مِن	_	ADP	P---------	AdpType=Prep	6	case	_	Translit=min
6	٢٦	_	NUM	Q---------	NumForm=Digit	4	advmod	_	Translit=26
7	إِلَى	_	ADP	P---------	AdpType=Prep	8	case	_	Translit=ʾilā
8	٢٨	_	NUM	Q---------	NumForm=Digit	4	advmod	_	Translit=28
9	أَيلُولَ	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	8	nmod	_	Translit=ʾaylūla
10	/	_	PUNCT	G---------	_	11	punct	_	Translit=/
11	سِبتَمبِرَ	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	9	appos	_	Translit=sibtambira

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubjpass	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	بَينَ	_	ADP	PI------4-	AdpType=Prep|Case=Acc	3	case	_	Translit=bayna
3	اَلجَرحَى	_	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	5	nmod	_	Translit=al-ǧarḥā
4	،	_	PUNCT	G---------	_	3	punct	_	Translit=،
5	اُعتُبِرَ	_	VERB	VP-P-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Pass	1	parataxis	_	Translit=uʿtubira
6	١٦	_	NUM	Q---------	NumForm=Digit	5	nsubjpass	_	Translit=16
7	أَنَّ	_	CONJ	C---------	_	8	mark	_	Translit=ʾanna
8	هُم	_	PRON	SP---3MP4-	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	Translit=hum
9	فِي	_	ADP	P---------	AdpType=Prep	8	case	_	Translit=fī
10	حَالٍ	_	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	8	nmod	_	Translit=ḥālin
11	خَطِرَةٍ	_	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	10	amod	_	Translit=ḫaṭiratin
12	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 6 nsubjpass	color:blue
1	وَ	_	CONJ	C---------	_	0	root	_	Translit=wa
2	أَضَافَ	_	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Translit=ʾaḍāfa
3	حمدين	_	X	U---------	_	2	nsubj	_	Translit=Hmdyn
4	إِنَّ	_	CONJ	C---------	_	14	mark	_	Translit=ʾinna
5	"	_	PUNCT	G---------	_	6	punct	_	Translit="
6	مُثِيرِينَ	_	ADJ	A-----MP4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur	14	nsubjpass	_	Translit=muṯīrīna
7	لِ	_	ADP	P---------	AdpType=Prep	8	case	_	Translit=li
8	اَلشَّغَبِ	_	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	6	dobj	_	Translit=aš-šaġabi
9	"	_	PUNCT	G---------	_	6	punct	_	Translit="
10	لَم	_	PART	F---------	_	11	neg	_	Translit=lam
11	يُحَدَّد	_	VERB	VIJP-3MS--	Aspect=Imp|Gender=Masc|Mood=Jus|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	6	acl	_	Translit=yuḥaddad
12	عَدَدُ	_	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	11	nsubjpass	_	Translit=ʿadadu
13	هُم	_	PRON	SP---3MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	nmod	_	Translit=hum
14	أُوقِفُوا	_	VERB	VP-P-3MP--	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Voice=Pass	2	ccomp	_	Translit=ʾūqifū
15	وَ	_	CONJ	C---------	_	14	cc	_	Translit=wa
16	"	_	PUNCT	G---------	_	18	punct	_	Translit="
17	سَ	_	PART	F---------	_	18	aux	_	Translit=sa
18	تَجرِي	_	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	14	conj	_	Translit=taǧrī
19	مُحَاكَمَةُ	_	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	18	nsubj	_	Translit=muḥākamatu
20	هُم	_	PRON	SP---3MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	19	nmod	_	Translit=hum
21	فَورًا	_	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	18	nmod	_	Translit=fawran
22	"	_	PUNCT	G---------	_	18	punct	_	Translit="
23	.	_	PUNCT	G---------	_	1	punct	_	Translit=.

~~~


