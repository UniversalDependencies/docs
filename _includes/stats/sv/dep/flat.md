

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

301 nodes (0%) are attached to their parents as `flat`.

301 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07308970099668.

The following 8 pairs of parts of speech are connected with `flat`: [sv-pos/PROPN]()-[sv-pos/PROPN]() (271; 90% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (12; 4% instances), [sv-pos/PROPN]()-[sv-pos/NUM]() (6; 2% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (5; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (2; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat	color:blue
1	En	_	DET	SG-IND	_	2	det	_	_
2	sida	_	NOUN	SG-IND-NOM	_	11	nsubj:pass	_	_
3	som	_	SCONJ	REL	_	4	mark	_	_
4	har	_	AUX	PRES-AUX	_	5	aux	_	_
5	skapats	_	VERB	SUP-PASS	_	2	amod	_	_
6	med	_	ADP	_	_	7	case	_	_
7	Microsoft	_	PROPN	SG-NOM	_	5	obl	_	_
8	Access	_	PROPN	SG-NOM	_	7	flat	_	_
9	2000	_	NUM	ID	_	7	flat	_	_
10	måste	_	AUX	AUX	_	11	aux	_	_
11	konverteras	_	VERB	INF-PASS	_	0	root	_	_
12	innan	_	SCONJ	_	_	15	mark	_	_
13	den	_	PRON	PERS-P3SG	_	15	nsubj:pass	_	_
14	kan	_	AUX	PRES-AUX	_	15	aux	_	_
15	användas	_	VERB	INF-PASS	_	11	advcl	_	_
16	i	_	ADP	_	_	17	case	_	_
17	Access	_	PROPN	SG-NOM	_	15	obl	_	_
18	2002	_	NUM	ID	_	17	nummod	_	SpaceAfter=No
19	.	_	PUNCT	Period	_	11	punct	_	_

~~~


