

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

3050 nodes (1%) are attached to their parents as `nummod`.

2948 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33311475409836.

The following 17 pairs of parts of speech are connected with `nummod`: [de-pos/NOUN]()-[de-pos/NUM]() (2659; 87% instances), [de-pos/PROPN]()-[de-pos/NUM]() (121; 4% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (53; 2% instances), [de-pos/NUM]()-[de-pos/NUM]() (52; 2% instances), [de-pos/ADJ]()-[de-pos/NUM]() (36; 1% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (35; 1% instances), [de-pos/X]()-[de-pos/NUM]() (31; 1% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (30; 1% instances), [de-pos/ADP]()-[de-pos/NUM]() (13; 0% instances), [de-pos/ADV]()-[de-pos/NUM]() (11; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/ADV]()-[de-pos/X]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/DET]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (1; 0% instances), [de-pos/PUNCT]()-[de-pos/NUM]() (1; 0% instances), [de-pos/X]()-[de-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5	5	NUM	CARD	NumType=Card	2	nummod	_	_
2	Sterne	Stern	NOUN	NN	_	0	root	_	_
3	und	und	CCONJ	KON	_	6	cc	_	_
4	ein	ein	DET	ART	Definite=Ind|PronType=Art	6	det	_	_
5	großes	groß	ADJ	ADJA	Degree=Pos	6	amod	_	_
6	Lob	Lob	NOUN	NN	_	2	conj	_	_
7	an	an	ADP	APPR	_	10	case	_	_
8	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	gesamte	gesamt	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
10	Firma	Firma	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	nmod	_	_
11	Wintergartenbau	Wintergartenbau	PROPN	NN	_	10	appos	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Knapp	knapp	ADV	ADJD	_	2	advmod	_	_
2	20	20	NUM	CARD	NumType=Card	3	nummod	_	_
3	Euro	Euro	PROPN	NN	Case=Acc|Number=Sing	8	obj	_	_
4	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	je	je	ADV	APPR	_	8	advmod	_	_
6	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc,Neut|Number=Sing|PronType=Art	7	det	_	_
7	Teil	Teil	NOUN	NN	Case=Nom|Gender=Masc,Neut|Number=Sing	8	nsubj	_	_
8	gekostet	kosten	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	In	in	ADP	APPR	_	2	case	_	_
2	1997	1997	NUM	CARD	NumType=Card	9	obl	_	_
3	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
4	Graham	Graham	PROPN	NE	Case=Dat|Number=Sing	9	iobj	_	_
5	den	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	Four	Four	PROPN	NN	_	7	nummod	_	_
7	Freedoms	Freedoms	PROPN	NE	_	9	nsubj:pass	_	_
8	Award	Award	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	7	flat	_	_
9	verliehen	verleihen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	9	punct	_	_

~~~


