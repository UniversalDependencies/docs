

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is a language-specific subtype of [compound]().

1466 nodes (1%) are attached to their parents as `compound:prt`.

1439 instances of `compound:prt` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.8431105047749.

The following 10 pairs of parts of speech are connected with `compound:prt`: [de-pos/VERB]()-[de-pos/ADP]() (891; 61% instances), [de-pos/VERB]()-[de-pos/ADV]() (555; 38% instances), [de-pos/NOUN]()-[de-pos/ADP]() (5; 0% instances), [de-pos/NOUN]()-[de-pos/ADV]() (4; 0% instances), [de-pos/VERB]()-[de-pos/PART]() (3; 0% instances), [de-pos/ADJ]()-[de-pos/ADP]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/ADP]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/ADV]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/ADV]() (1; 0% instances), [de-pos/NUM]()-[de-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 compound:prt	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Mittel	Mittel	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
3	sah	sehen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	ein	ein	DET	ART	Definite=Ind|PronType=Art	5	det	_	_
5	Tag	Tag	NOUN	NN	_	6	nmod	_	_
6	später	spät	ADV	ADJD	_	3	advmod	_	_
7	jedoch	jedoch	ADV	ADV	_	3	advmod	_	_
8	ganz	ganz	ADV	ADV	_	9	advmod	_	_
9	komisch	komisch	ADJ	ADJD	Degree=Pos	3	xcomp	_	_
10	aus	aus	ADP	PTKVZ	_	3	compound:prt	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 compound:prt	color:blue
1	Bei	bei	ADP	APPR	_	3	case	_	_
2	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	3	det	_	_
3	Besuch	Besuch	NOUN	NN	Case=Dat|Gender=Masc,Neut|Number=Sing	4	obl	_	_
4	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	dann	dann	ADV	ADV	_	6	advmod	_	_
6	schließlich	schließlich	ADV	ADV	_	4	advmod	_	_
7	keine	kein	PRON	PIAT	PronType=Neg	8	advmod	_	_
8	Vespa	Vespa	PROPN	NN	Case=Nom|Number=Sing	4	nsubj	_	_
9	mehr	mehr	ADV	ADV	_	4	advmod	_	_
10	da	da	ADV	PTKVZ	_	4	compound:prt	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 33 compound:prt	color:blue
1	Er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
3	auf	auf	ADP	APPR	_	4	case	_	_
4	Tournee	Tournee	NOUN	NN	_	0	root	_	_
5	mit	mit	ADP	APPR	_	6	case	_	_
6	Dom	Dom	PROPN	NN	_	4	nmod	_	_
7	Um	um	PROPN	APPR	_	6	flat	_	_
8	Romao	Romao	PROPN	NE	Case=Dat|Number=Sing	6	flat	_	SpaceAfter=No
9	,	,	PUNCT	$,	_	11	punct	_	_
10	mit	mit	ADP	APPR	_	11	case	_	_
11	Christy	Christy	PROPN	NE	_	6	conj	_	_
12	Doran	Doran	PROPN	NE	_	11	flat	_	SpaceAfter=No
13	,	,	PUNCT	$,	_	16	punct	_	_
14	sowie	sowie	CCONJ	KON	_	16	cc	_	_
15	mit	mit	ADP	APPR	_	16	case	_	_
16	Brigeen	Brigeen	PROPN	ADJA	_	6	conj	_	_
17	Doran	Doran	PROPN	NE	_	16	flat	_	_
18	und	und	CCONJ	KON	_	19	cc	_	_
19	trat	treten	VERB	VVFIN	VerbForm=Fin	4	conj	_	_
20	auch	auch	ADV	ADV	_	22	advmod	_	_
21	mit	mit	ADP	APPR	_	22	case	_	_
22	Stu	Stu	PROPN	NE	_	19	obl	_	_
23	Goldberg	Goldberg	PROPN	NE	Case=Dat|Number=Sing	22	flat	_	SpaceAfter=No
24	,	,	PUNCT	$,	_	25	punct	_	_
25	Christoph	Christoph	PROPN	NE	_	22	conj	_	_
26	Spendel	Spendel	PROPN	NE	_	25	flat	_	SpaceAfter=No
27	,	,	PUNCT	$,	_	28	punct	_	_
28	Michael	Michael	PROPN	NE	_	22	conj	_	_
29	Clifton	Clifton	PROPN	NE	_	28	flat	_	_
30	und	und	CCONJ	KON	_	31	cc	_	_
31	Hans	Hans	PROPN	NE	_	22	conj	_	_
32	Hartmann	Hartmann	PROPN	NE	_	31	flat	_	_
33	auf	auf	ADP	PTKVZ	_	4	compound:prt	_	SpaceAfter=No
34	.	.	PUNCT	$.	_	4	punct	_	_

~~~


