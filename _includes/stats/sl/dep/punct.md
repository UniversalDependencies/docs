

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

16720 nodes (13%) are attached to their parents as `punct`.

9314 instances of `punct` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.17834928229665.

The following 14 pairs of parts of speech are connected with `punct`: [sl-pos/VERB]()-[sl-pos/PUNCT]() (11578; 69% instances), [sl-pos/ADJ]()-[sl-pos/PUNCT]() (2151; 13% instances), [sl-pos/NOUN]()-[sl-pos/PUNCT]() (2101; 13% instances), [sl-pos/PROPN]()-[sl-pos/PUNCT]() (378; 2% instances), [sl-pos/NUM]()-[sl-pos/PUNCT]() (123; 1% instances), [sl-pos/X]()-[sl-pos/PUNCT]() (110; 1% instances), [sl-pos/ADV]()-[sl-pos/PUNCT]() (108; 1% instances), [sl-pos/DET]()-[sl-pos/PUNCT]() (62; 0% instances), [sl-pos/PART]()-[sl-pos/PUNCT]() (62; 0% instances), [sl-pos/INTJ]()-[sl-pos/PUNCT]() (20; 0% instances), [sl-pos/PRON]()-[sl-pos/PUNCT]() (17; 0% instances), [sl-pos/CCONJ]()-[sl-pos/PUNCT]() (6; 0% instances), [sl-pos/ADP]()-[sl-pos/PUNCT]() (3; 0% instances), [sl-pos/PUNCT]()-[sl-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 punct	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 punct	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 punct	color:blue
1	Toda	toda	CCONJ	Cc	_	4	cc	_	Dep=3|Rel=Conj
2	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	nsubj	_	Dep=3|Rel=Sb
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	Dep=0|Rel=Root
4	energija	energija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=3|Rel=Atr
5	"	"	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
6	nacionalizma	nacionalizem	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No|Dep=4|Rel=Atr
7	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root
8	?	?	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

994 nodes (5%) are attached to their parents as `punct`.

746 instances of `punct` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.40241448692153.

The following 25 pairs of parts of speech are connected with `punct`: [sl-pos/VERB]()-[sl-pos/X]() (352; 35% instances), [sl-pos/VERB]()-[sl-pos/PUNCT]() (197; 20% instances), [sl-pos/NOUN]()-[sl-pos/X]() (99; 10% instances), [sl-pos/NOUN]()-[sl-pos/PUNCT]() (49; 5% instances), [sl-pos/ADJ]()-[sl-pos/X]() (38; 4% instances), [sl-pos/ADV]()-[sl-pos/PUNCT]() (36; 4% instances), [sl-pos/ADV]()-[sl-pos/X]() (34; 3% instances), [sl-pos/PART]()-[sl-pos/X]() (22; 2% instances), [sl-pos/PART]()-[sl-pos/PUNCT]() (19; 2% instances), [sl-pos/PRON]()-[sl-pos/PUNCT]() (19; 2% instances), [sl-pos/X]()-[sl-pos/X]() (18; 2% instances), [sl-pos/INTJ]()-[sl-pos/PUNCT]() (16; 2% instances), [sl-pos/PROPN]()-[sl-pos/X]() (16; 2% instances), [sl-pos/ADJ]()-[sl-pos/PUNCT]() (14; 1% instances), [sl-pos/DET]()-[sl-pos/X]() (13; 1% instances), [sl-pos/INTJ]()-[sl-pos/X]() (13; 1% instances), [sl-pos/DET]()-[sl-pos/PUNCT]() (12; 1% instances), [sl-pos/PRON]()-[sl-pos/X]() (10; 1% instances), [sl-pos/CCONJ]()-[sl-pos/X]() (4; 0% instances), [sl-pos/PROPN]()-[sl-pos/PUNCT]() (4; 0% instances), [sl-pos/X]()-[sl-pos/PUNCT]() (4; 0% instances), [sl-pos/NUM]()-[sl-pos/X]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/PUNCT]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/PUNCT]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
1	nismo	biti	AUX	Va-r1p-y	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	aux	_	word=nismo|msd=Gp-spm-d
2	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N
3	zmenili	zmeniti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=zmenil|msd=Ggdd-mm
4	ja	ja	PART	Q	_	3	discourse	_	word=ja|msd=L

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 punct	color:blue
1	torej	torej	CCONJ	Cc	_	5	cc	_	word=torej|msd=Vp
2	bomo	biti	AUX	Va-f1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	5	aux	_	word=bomo|msd=Gp-ppm-n
3	naslednji	naslednji	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	word=naslednji|msd=Ppnmetd
4	teden	teden	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	word=teden|msd=Sometn
5	doživeli	doživeti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=doživeli|msd=Ggdd-mm
6	stotko	stotka	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	word=stotko|msd=Sozet
7	?	?	PUNCT	Z	_	5	punct	_	word=?|msd=U

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	mene	jaz	PRON	Pp1-sa	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	word=mene|msd=Zop-et
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	word=je|msd=Gp-ste-n
3	strah	strah	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=strah|msd=Somei
4	[audience:laughter]	[audience:laughter]	X	X	_	3	punct	_	word=[audience:laughter]|msd=N
5	ker	ker	SCONJ	Cs	_	7	mark	_	word=ker|msd=Vd
6	se	se	PRON	Px------y	PronType=Prs|Variant=Short	7	expl	_	word=se|msd=Zp------k
7	snema	snemati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	word=snema|msd=Ggnste
8	[all:laughter]	[all:laughter]	X	X	_	3	punct	_	word=[all:laughter]|msd=N

~~~


