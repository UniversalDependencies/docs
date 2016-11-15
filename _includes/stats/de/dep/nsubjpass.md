

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

3259 nodes (1%) are attached to their parents as `nsubjpass`.

3178 instances of `nsubjpass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.13224915618288.

The following 25 pairs of parts of speech are connected with `nsubjpass`: [de-pos/VERB]()-[de-pos/NOUN]() (2001; 61% instances), [de-pos/VERB]()-[de-pos/PRON]() (746; 23% instances), [de-pos/VERB]()-[de-pos/PROPN]() (329; 10% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (35; 1% instances), [de-pos/NOUN]()-[de-pos/PRON]() (31; 1% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (29; 1% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (15; 0% instances), [de-pos/PROPN]()-[de-pos/PRON]() (14; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (13; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (7; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (6; 0% instances), [de-pos/ADJ]()-[de-pos/PROPN]() (6; 0% instances), [de-pos/VERB]()-[de-pos/NUM]() (5; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (4; 0% instances), [de-pos/AUX]()-[de-pos/NOUN]() (4; 0% instances), [de-pos/VERB]()-[de-pos/X]() (3; 0% instances), [de-pos/ADP]()-[de-pos/PRON]() (2; 0% instances), [de-pos/VERB]()-[de-pos/SCONJ]() (2; 0% instances), [de-pos/AUX]()-[de-pos/PRON]() (1; 0% instances), [de-pos/AUX]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/NUM]() (1; 0% instances), [de-pos/PRON]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADP]() (1; 0% instances), [de-pos/VERB]()-[de-pos/VERB]() (1; 0% instances), [de-pos/X]()-[de-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubjpass	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Video	Video	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	6	nsubjpass	_	_
3	konnte	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
4	angeblich	angeblich	ADV	ADJD	_	5	advmod	_	_
5	nicht	nicht	PART	PTKNEG	_	6	neg	_	_
6	storniert	stornieren	VERB	VVPP	VerbForm=Part	0	root	_	_
7	werden	werden	AUX	VAINF	VerbForm=Inf	6	auxpass	_	_
8	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubjpass	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubjpass	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	auxpass	_	_
3	absolut	absolut	ADV	ADJD	_	4	advmod	_	_
4	gut	gut	ADV	ADJD	_	7	advmod	_	_
5	und	und	CONJ	KON	_	4	cc	_	_
6	sauber	sauber	ADV	ADJD	_	4	conj	_	_
7	gearbeitet	arbeiten	VERB	VVPP	VerbForm=Part	0	root	_	_
8	von	von	ADP	APPR	_	10	case	_	_
9	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	Monteuren	Monteur	NOUN	NN	Case=Dat|Number=Plur	7	nmod	_	_
11	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubjpass	color:blue
1	Birkut	Birkut	PROPN	NE	Case=Nom|Number=Sing	9	nsubjpass	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	auxpass	_	_
3	bei	bei	ADP	APPR	_	5	case	_	_
4	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	Arbeiterunruhen	Arbeiterunruhe	NOUN	NN	Case=Dat|Number=Plur	9	nmod	_	_
6	1970	1970	NUM	CARD	NumType=Card	9	nmod	_	_
7	in	in	ADP	APPR	_	8	case	_	_
8	Danzig	Danzig	PROPN	NE	_	9	nmod	_	_
9	erschossen	erschießen	VERB	VVPP	VerbForm=Part	0	root	_	_
10	.	.	PUNCT	$.	_	9	punct	_	_

~~~


