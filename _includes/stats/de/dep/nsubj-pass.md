

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is a language-specific subtype of [nsubj]().

3144 nodes (1%) are attached to their parents as `nsubj:pass`.

3065 instances of `nsubj:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.21087786259542.

The following 26 pairs of parts of speech are connected with `nsubj:pass`: [de-pos/VERB]()-[de-pos/NOUN]() (1892; 60% instances), [de-pos/VERB]()-[de-pos/PRON]() (718; 23% instances), [de-pos/VERB]()-[de-pos/PROPN]() (356; 11% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (35; 1% instances), [de-pos/NOUN]()-[de-pos/PRON]() (30; 1% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (25; 1% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (16; 1% instances), [de-pos/PROPN]()-[de-pos/PRON]() (15; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (13; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (7; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (6; 0% instances), [de-pos/ADJ]()-[de-pos/PROPN]() (5; 0% instances), [de-pos/AUX]()-[de-pos/NOUN]() (4; 0% instances), [de-pos/VERB]()-[de-pos/NUM]() (4; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/VERB]()-[de-pos/X]() (3; 0% instances), [de-pos/ADP]()-[de-pos/PRON]() (2; 0% instances), [de-pos/VERB]()-[de-pos/SCONJ]() (2; 0% instances), [de-pos/ADP]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/AUX]()-[de-pos/PRON]() (1; 0% instances), [de-pos/AUX]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/NUM]() (1; 0% instances), [de-pos/PRON]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADP]() (1; 0% instances), [de-pos/VERB]()-[de-pos/VERB]() (1; 0% instances), [de-pos/X]()-[de-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Video	Video	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	_
3	konnte	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
4	angeblich	angeblich	ADV	ADJD	_	5	advmod	_	_
5	nicht	nicht	PART	PTKNEG	Polarity=Neg	6	advmod	_	_
6	storniert	stornieren	VERB	VVPP	VerbForm=Part	0	root	_	_
7	werden	werden	AUX	VAINF	VerbForm=Inf	6	aux:pass	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj:pass	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
3	absolut	absolut	ADV	ADJD	_	4	advmod	_	_
4	gut	gut	ADV	ADJD	_	7	advmod	_	_
5	und	und	CCONJ	KON	_	6	cc	_	_
6	sauber	sauber	ADV	ADJD	_	4	conj	_	_
7	gearbeitet	arbeiten	VERB	VVPP	VerbForm=Part	0	root	_	_
8	von	von	ADP	APPR	_	10	case	_	_
9	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	Monteuren	Monteur	NOUN	NN	Case=Dat|Number=Plur	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:pass	color:blue
1	Birkut	Birkut	PROPN	NE	Case=Nom|Number=Sing	9	nsubj:pass	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
3	bei	bei	ADP	APPR	_	5	case	_	_
4	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	Arbeiterunruhen	Arbeiterunruhe	NOUN	NN	Case=Dat|Number=Plur	9	obl	_	_
6	1970	1970	NUM	CARD	NumType=Card	9	obl	_	_
7	in	in	ADP	APPR	_	8	case	_	_
8	Danzig	Danzig	PROPN	NE	_	9	obl	_	_
9	erschossen	erschießen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	9	punct	_	_

~~~


