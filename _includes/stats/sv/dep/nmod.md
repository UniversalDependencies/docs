

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

3233 nodes (4%) are attached to their parents as `nmod`.

2705 instances of `nmod` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.50541292916796.

The following 33 pairs of parts of speech are connected with `nmod`: [sv-pos/NOUN]()-[sv-pos/NOUN]() (2366; 73% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (173; 5% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (138; 4% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (133; 4% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (58; 2% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (57; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (54; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (43; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (38; 1% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (37; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (23; 1% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (22; 1% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (17; 1% instances), [sv-pos/PROPN]()-[sv-pos/NUM]() (12; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (11; 0% instances), [sv-pos/DET]()-[sv-pos/NOUN]() (9; 0% instances), [sv-pos/NUM]()-[sv-pos/NUM]() (8; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (7; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (4; 0% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (3; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/NUM]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/NUM]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	Kvarstår	kvarstå	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Dem	3	det	_	_
3	försening	försening	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	nsubj	_	_
4	i	i	ADP	PP	_	5	case	_	_
5	utveckling	utveckling	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	_
6	hos	hos	ADP	PP	_	8	case	_	_
7	äldre	gammal	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	8	amod	_	_
8	kibbutzbarn	kibbutzbarn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	1	obl	_	SpaceAfter=No
9	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Publicerad	publicera	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	i	i	ADP	PP	_	3	case	_	_
3	Children	Children	PROPN	PM|NOM	Case=Nom	1	obl	_	_
4	1958	1958	NUM	RG|NOM	Case=Nom|NumType=Card	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	MID	_	4	punct	_	_
6	Vol.	Vol.	NOUN	NN|AN	Abbr=Yes	7	nmod	_	_
7	5	5	NUM	RG|NOM	Case=Nom|NumType=Card	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	MID	_	7	punct	_	_
9	179-184	179-184	NUM	RG|NOM	Case=Nom|NumType=Card	7	nummod	_	_
10	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	1782	1782	NUM	RG|NOM	Case=Nom|NumType=Card	2	nummod	_	_
2	kom	komma	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	bruket	bruk	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
4	i	i	ADP	PP	_	8	case	_	_
5	släkten	släkt	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	nmod	_	_
6	af	af	PROPN	PM|NOM	Case=Nom	8	nmod:poss	_	_
7	Ugglas	Ugglas	PROPN	PM|GEN	Case=Gen	6	flat:name	_	_
8	ägo	ägo	NOUN	NN|-|-|-|-	_	2	obl	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

2799 nodes (4%) are attached to their parents as `nmod`.

2206 instances of `nmod` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63951411218292.

The following 29 pairs of parts of speech are connected with `nmod`: [sv-pos/NOUN]()-[sv-pos/NOUN]() (1623; 58% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (266; 10% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (247; 9% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (211; 8% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (95; 3% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (90; 3% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (69; 2% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (62; 2% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (37; 1% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (25; 1% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (19; 1% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (13; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (6; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (6; 0% instances), [sv-pos/PROPN]()-[sv-pos/PRON]() (5; 0% instances), [sv-pos/SYM]()-[sv-pos/NOUN]() (5; 0% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (3; 0% instances), [sv-pos/INTJ]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/INTJ]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/SCONJ]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod	color:blue
1	SQL	_	PROPN	SG-NOM	_	4	nsubj:pass	_	_
2	Server	_	NOUN	SG-IND-NOM	_	1	flat	_	_
3	måste	_	AUX	AUX	_	4	aux	_	_
4	köras	_	VERB	INF-PASS	_	0	root	_	_
5	på	_	ADP	_	_	7	case	_	_
6	samma	_	ADJ	POS-IND	_	7	amod	_	_
7	dator	_	NOUN	SG-IND-NOM	_	4	obl	_	_
8	som	_	ADP	_	_	9	case	_	_
9	Access-projektet	_	NOUN	SG-DEF-NOM	_	7	nmod	_	SpaceAfter=No
10	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	SQL	_	PROPN	SG-NOM	_	2	nmod	_	_
2	Server-databasen	_	NOUN	SG-DEF-NOM	_	4	nsubj:pass	_	_
3	måste	_	AUX	AUX	_	4	aux	_	_
4	köras	_	VERB	INF-PASS	_	0	root	_	_
5	på	_	ADP	_	_	6	case	_	_
6	Windows	_	PROPN	SG-NOM	_	4	obl	_	_
7	NT	_	PROPN	SG-NOM	_	6	flat	_	SpaceAfter=No
8	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Access	_	PROPN	SG-NOM	_	2	nsubj	_	_
2	stöder	_	VERB	PRES-ACT	_	0	root	_	_
3	XML-schemastandarden	_	NOUN	SG-DEF-NOM	_	4	nmod	_	_
4	XSD	_	PROPN	SG-NOM	_	2	obj	_	SpaceAfter=No
5	.	_	PUNCT	Period	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:pass]().

22 nodes (6%) are attached to their parents as `nmod`.

14 instances of `nmod` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.22727272727273.

The following 6 pairs of parts of speech are connected with `nmod`: [sv-pos/VERB]()-[sv-pos/NOUN]() (9; 41% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (4; 18% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (3; 14% instances), [sv-pos/VERB]()-[sv-pos/X]() (3; 14% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (2; 9% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	MORGON	_	NOUN	NN	_	2	nmod	_	_
2	VAKNA	_	VERB	VB	_	0	root	_	_
3	TITTA-PÅ	_	VERB	VB	_	2	conj	_	_
4	FÖRSVUNNEN	_	VERB	VB	_	3	ccomp	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nmod	color:blue
1	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	5	nmod	_	_
2	FORM(Yb)@p@hd	_	VERB	VBAV	_	1	dep	_	_
3	INUTI	_	VERB	VBPP	_	1	case	_	_
4	GRODA	_	NOUN	NN	_	5	nsubj	_	_
5	STANNA-KVAR	_	VERB	VB	_	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	FÖRSÖKA	_	VERB	VB	_	2	aux	_	_
2	ROPA@ca	_	VERB	VBCA	_	0	root	_	_
3	ENTITET(A)+FÖRFLYTTA@p>näsa	_	VERB	VBAV	_	2	conj	_	_
4	AVGRÄNS	_	X	BOJ	_	3	nmod	_	_
5	MULLVAD@b	_	NOUN	NN	_	3	nsubj	_	_
6	LÅTA-VARA	_	X	G	_	2	discourse	_	_

~~~


