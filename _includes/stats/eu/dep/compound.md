

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

1317 nodes (1%) are attached to their parents as `compound`.

1317 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01442672741078.

The following 18 pairs of parts of speech are connected with `compound`: [eu-pos/VERB]()-[eu-pos/NOUN]() (778; 59% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (231; 18% instances), [eu-pos/PROPN]()-[eu-pos/NOUN]() (80; 6% instances), [eu-pos/NOUN]()-[eu-pos/PROPN]() (66; 5% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (40; 3% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (24; 2% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (21; 2% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (16; 1% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (14; 1% instances), [eu-pos/CCONJ]()-[eu-pos/PART]() (10; 1% instances), [eu-pos/ADV]()-[eu-pos/DET]() (9; 1% instances), [eu-pos/NOUN]()-[eu-pos/CCONJ]() (8; 1% instances), [eu-pos/CCONJ]()-[eu-pos/VERB]() (7; 1% instances), [eu-pos/PROPN]()-[eu-pos/PROPN]() (4; 0% instances), [eu-pos/AUX]()-[eu-pos/ADJ]() (3; 0% instances), [eu-pos/AUX]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (2; 0% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	Susanari	Susana	PROPN	_	Case=Dat|Definite=Def|Number=Sing	7	iobj	_	_
2	ere	ere	CCONJ	_	_	4	advmod	_	_
3	ez	ez	PART	_	Polarity=Neg	4	advmod	_	_
4	zirudien	iruditu	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	0	root	_	_
5	asko	asko	ADV	_	_	7	advmod	_	_
6	axola	axola	NOUN	_	Case=Abs|Definite=Ind	7	compound	_	_
7	zitzaionik	izan	VERB	_	_	4	ccomp	_	SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Euskal	euskal	NOUN	_	_	3	compound	_	_
3	Herrian	herri	NOUN	_	Case=Ine|Definite=Def|Number=Sing	4	obl	_	_
4	jaio	jaio	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	dira	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	4	aux	_	_
6	eta	eta	CCONJ	_	_	9	cc	_	_
7	guraso	guraso	NOUN	_	_	9	obj	_	_
8	euskaldunak	euskaldun	ADJ	_	Case=Abs|Definite=Def|Number=Plur	7	amod	_	_
9	dituzte	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=3|Person[erg]=3	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Hego	hego	NOUN	_	_	2	compound	_	_
2	Koreako	Korea	PROPN	_	Case=Loc|Definite=Def|Number=Sing	3	nmod	_	_
3	baliabide	baliabide	NOUN	_	_	7	obj	_	_
4	naturalak	natural	ADJ	_	Case=Abs|Definite=Def|Number=Plur	3	amod	_	_
5	ari	ari	AUX	_	_	6	aux	_	_
6	dira	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	0	root	_	_
7	ikasten	ikasi	VERB	_	Case=Ine	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


