

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Gothic)

This relation is a language-specific subtype of [nsubj]().

169 nodes (0%) are attached to their parents as `nsubj:pass`.

116 instances of `nsubj:pass` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.46745562130178.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: [got-pos/VERB]()-[got-pos/NOUN]() (72; 43% instances), [got-pos/VERB]()-[got-pos/PRON]() (42; 25% instances), [got-pos/VERB]()-[got-pos/ADJ]() (30; 18% instances), [got-pos/VERB]()-[got-pos/VERB]() (16; 9% instances), [got-pos/VERB]()-[got-pos/PROPN]() (6; 4% instances), [got-pos/VERB]()-[got-pos/NUM]() (2; 1% instances), [got-pos/VERB]()-[got-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	afletanda	af-letan	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	ref=LUKE_7.47
2	frawaurhteis	frawaurhts	NOUN	Nb	Case=Nom|Gender=Fem|Number=Plur	1	nsubj:pass	_	ref=LUKE_7.47
3	izos	is	PRON	Pp	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	det	_	ref=LUKE_7.47
4	þos	sa	DET	Pd	Case=Nom|Gender=Fem|Number=Plur	5	det	_	ref=LUKE_7.47
5	managons	manags	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Strength=Weak	2	nmod	_	ref=LUKE_7.47
6	unte	unte	SCONJ	G-	_	7	mark	_	ref=LUKE_7.47
7	frijoda	frijon	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	ref=LUKE_7.47
8	filu	filu	ADV	Df	Degree=Pos	7	advmod	_	ref=LUKE_7.47

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	jah	jah	CCONJ	C-	_	3	cc	_	ref=LUKE_7.23
2	audags	audags	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Strength=Strong	3	xcomp	_	ref=LUKE_7.23
3	ist	wisan#1	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_7.23
4	saƕazuh	saƕazuh	ADJ	Px	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	ref=LUKE_7.23
5	saei	saei	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj:pass	_	ref=LUKE_7.23
6	ni	ni	ADV	Df	Polarity=Neg	7	advmod	_	ref=LUKE_7.23
7	gamarzjada	ga-marzjan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl	_	ref=LUKE_7.23
8	in	in	ADP	R-	_	9	case	_	ref=LUKE_7.23
9	mis	ik	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	7	obl	_	ref=LUKE_7.23

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	iþ	iþ	CCONJ	C-	_	6	cc	_	ref=LUKE_7.47
2	þammei	saei	PRON	Pr	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	4	iobj	_	ref=LUKE_7.47
3	leitil	leitils	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Strength=Strong	4	nsubj:pass	_	ref=LUKE_7.47
4	fraletada	fra-letan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	nsubj	_	ref=LUKE_7.47
5	leitil	leitils	ADJ	A-	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Strength=Strong	6	advmod	_	ref=LUKE_7.47
6	frijod	frijon	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_7.47

~~~


