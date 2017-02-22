

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

8528 nodes (3%) are attached to their parents as `cc`.

8340 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53470919324578.

The following 28 pairs of parts of speech are connected with `cc`: [de-pos/NOUN]()-[de-pos/CCONJ]() (3493; 41% instances), [de-pos/VERB]()-[de-pos/CCONJ]() (2265; 27% instances), [de-pos/PROPN]()-[de-pos/CCONJ]() (1309; 15% instances), [de-pos/ADJ]()-[de-pos/CCONJ]() (878; 10% instances), [de-pos/NUM]()-[de-pos/CCONJ]() (187; 2% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (131; 2% instances), [de-pos/ADV]()-[de-pos/CCONJ]() (75; 1% instances), [de-pos/PRON]()-[de-pos/CCONJ]() (54; 1% instances), [de-pos/ADP]()-[de-pos/CCONJ]() (36; 0% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (21; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (15; 0% instances), [de-pos/AUX]()-[de-pos/CCONJ]() (9; 0% instances), [de-pos/NOUN]()-[de-pos/PART]() (9; 0% instances), [de-pos/NOUN]()-[de-pos/ADV]() (7; 0% instances), [de-pos/CCONJ]()-[de-pos/CCONJ]() (6; 0% instances), [de-pos/PART]()-[de-pos/CCONJ]() (6; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (6; 0% instances), [de-pos/ADJ]()-[de-pos/ADV]() (4; 0% instances), [de-pos/DET]()-[de-pos/CCONJ]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/PUNCT]() (3; 0% instances), [de-pos/PROPN]()-[de-pos/X]() (3; 0% instances), [de-pos/ADJ]()-[de-pos/X]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/PART]() (1; 0% instances), [de-pos/NUM]()-[de-pos/X]() (1; 0% instances), [de-pos/PRON]()-[de-pos/X]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PART]() (1; 0% instances), [de-pos/X]()-[de-pos/CCONJ]() (1; 0% instances), [de-pos/X]()-[de-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc	color:blue
1	Spaß	Spaß	NOUN	NN	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	$,	_	3	punct	_	_
3	Unterhaltung	Unterhaltung	NOUN	NN	_	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	6	punct	_	_
5	gutes	gut	ADJ	ADJA	Degree=Pos	6	amod	_	_
6	Bier	Bier	NOUN	NN	_	1	conj	_	_
7	und	und	CCONJ	KON	_	9	cc	_	_
8	gutes	gut	ADJ	ADJA	Degree=Pos	9	amod	_	_
9	Essen	Essen	NOUN	NN	_	1	conj	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Wurde	werden	AUX	VAFIN	Mood=Ind|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
2	sehr	sehr	ADV	ADV	_	3	advmod	_	_
3	gut	gut	ADV	ADJD	_	8	advmod	_	_
4	von	von	ADP	APPR	_	6	case	_	_
5	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Kanzlei	Kanzlei	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	8	obl	_	_
7	Singewald	Singewald	PROPN	NN	_	6	appos	_	_
8	verteitigt	verteitigt	VERB	VVFIN	VerbForm=Fin	0	root	_	_
9	und	und	CCONJ	KON	_	10	cc	_	_
10	gewonnen	gewinnen	VERB	VVPP	VerbForm=Part	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Liebe	lieb	ADJ	ADJA	Degree=Pos	2	amod	_	_
2	Grüße	Gruß	NOUN	NN	_	0	root	_	_
3	Lutz	Lutz	PROPN	NE	_	2	appos	_	_
4	und	und	CCONJ	KON	_	5	cc	_	_
5	Heike	Heike	PROPN	NE	_	3	conj	_	_

~~~


