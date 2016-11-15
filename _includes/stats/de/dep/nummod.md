

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

3223 nodes (1%) are attached to their parents as `nummod`.

3114 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34284827800186.

The following 17 pairs of parts of speech are connected with `nummod`: [de-pos/NOUN]()-[de-pos/NUM]() (2819; 87% instances), [de-pos/PROPN]()-[de-pos/NUM]() (102; 3% instances), [de-pos/NUM]()-[de-pos/NUM]() (59; 2% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (54; 2% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (51; 2% instances), [de-pos/ADJ]()-[de-pos/NUM]() (38; 1% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (31; 1% instances), [de-pos/X]()-[de-pos/NUM]() (31; 1% instances), [de-pos/ADP]()-[de-pos/NUM]() (17; 1% instances), [de-pos/ADV]()-[de-pos/NUM]() (11; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/DET]() (2; 0% instances), [de-pos/ADV]()-[de-pos/X]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (1; 0% instances), [de-pos/PUNCT]()-[de-pos/NUM]() (1; 0% instances), [de-pos/X]()-[de-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5	5	NUM	CARD	NumType=Card	2	nummod	_	_
2	Sterne	Stern	NOUN	NN	_	0	root	_	_
3	und	und	CONJ	KON	_	2	cc	_	_
4	ein	ein	DET	ART	Definite=Ind|PronType=Art	6	det	_	_
5	großes	groß	ADJ	ADJA	Degree=Pos	6	amod	_	_
6	Lob	Lob	NOUN	NN	_	2	conj	_	_
7	an	an	ADP	APPR	_	10	case	_	_
8	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	gesamte	gesamt	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
10	Firma	Firma	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	nmod	_	_
11	Wintergartenbau	Wintergartenbau	PROPN	NN	_	10	appos	_	_
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
3	Euro	Euro	PROPN	NN	Case=Acc|Number=Sing	8	dobj	_	_
4	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	je	je	ADV	APPR	_	8	advmod	_	_
6	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc,Neut|Number=Sing|PronType=Art	7	det	_	_
7	Teil	Teil	NOUN	NN	Case=Nom|Gender=Masc,Neut|Number=Sing	8	nsubj	_	_
8	gekostet	kosten	VERB	VVPP	VerbForm=Part	0	root	_	_
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	15	15	NUM	CARD	NumType=Card	2	nummod	_	_
2	000	000	NUM	CARD	NumType=Card	3	nummod	_	_
3	Einwohner	Einwohner	NOUN	NN	Case=Nom|Number=Sing	4	nsubj	_	_
4	flüchteten	flüchten	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
5	in	in	ADP	APPR	_	7	case	_	_
6	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	Umland	Umland	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	4	nmod	_	_
8	oder	oder	CONJ	KON	_	4	cc	_	_
9	wurden	werden	AUX	VAFIN	VerbForm=Fin	10	auxpass	_	_
10	evakuiert	evakuieren	VERB	VVPP	VerbForm=Part	4	conj	_	_
11	.	.	PUNCT	$.	_	4	punct	_	_

~~~


