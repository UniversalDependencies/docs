

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

938 nodes (7%) are attached to their parents as `nsubj`.

815 instances of `nsubj` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.636460554371.

The following 35 pairs of parts of speech are connected with `nsubj`: [ga-pos/VERB]()-[ga-pos/NOUN]() (403; 43% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (222; 24% instances), [ga-pos/VERB]()-[ga-pos/PART]() (108; 12% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (55; 6% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (37; 4% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (25; 3% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (21; 2% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (11; 1% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (8; 1% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (6; 1% instances), [ga-pos/VERB]()-[ga-pos/X]() (5; 1% instances), [ga-pos/AUX]()-[ga-pos/NOUN]() (4; 0% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (3; 0% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (3; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (2; 0% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/PRON]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/AUX]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/AUX]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/CCONJ]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/CCONJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/CCONJ]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/DET]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/X]()-[ga-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nsubj	color:blue
1	Ansin	ansin	ADV	Loc	_	6	advmod	_	_
2	nach	is	AUX	Cop	Mood=Int|Polarity=Neg|Tense=Pres|VerbForm=Cop	6	cop	_	_
3	deas	deas	ADJ	Adj	Degree=Pos	6	xcomp:pred	_	_
4	mar	mar	SCONJ	Subord	_	6	mark	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	bheadh	bí	VERB	Cond	Form=Len|Mood=Cnd	0	root	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	scéal	scéal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
9	a'm	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
1	Tógann	tóg	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
2	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	amach	amach	ADV	Dir	_	1	advmod	_	_
4	biro	biro	X	Foreign	Foreign=Yes	1	obj	_	_
5	dearg	dearg	ADJ	Adj	Degree=Pos	4	amod	_	SpaceAfter=No
6	)	)	PUNCT	Punct	_	7	punct	_	_
7	MAIDHC	maidhc	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	compound	_	SpaceAfter=No
8	:	:	PUNCT	Punct	_	7	punct	_	_
9	(	(	PUNCT	Punct	_	7	punct	_	SpaceAfter=No
10	Á	do	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	case	_	_
11	stopadh	stopadh	NOUN	Noun	VerbForm=Inf	1	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	beag	beag	ADJ	Adj	Degree=Pos	0	root	_	_
3	planda	planda	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	nsubj	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	nsubj	_	_
5	fhásann	fás	VERB	PresInd	Form=Len|Mood=Ind|Tense=Pres	3	acl:relcl	_	_
6	i	i	ADP	Simp	_	7	case	_	_
7	dteocht	teocht	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	5	obl	_	_
8	faoi	faoi	ADP	Cmpd	PrepForm=Cmpd	10	case	_	_
9	bhun	bhun	ADP	Cmpd	_	8	fixed	_	_
10	4C	4C	X	Abr	Abbr=Yes	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


