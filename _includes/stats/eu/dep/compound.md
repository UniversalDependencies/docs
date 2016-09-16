

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

1609 nodes (1%) are attached to their parents as `compound`.

1609 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01367308887508.

The following 16 pairs of parts of speech are connected with `compound`: [eu-pos/VERB]()-[eu-pos/NOUN]() (963; 60% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (283; 18% instances), [eu-pos/PROPN]()-[eu-pos/NOUN]() (94; 6% instances), [eu-pos/NOUN]()-[eu-pos/PROPN]() (80; 5% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (51; 3% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (29; 2% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (22; 1% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (20; 1% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (18; 1% instances), [eu-pos/ADV]()-[eu-pos/DET]() (10; 1% instances), [eu-pos/CONJ]()-[eu-pos/PART]() (10; 1% instances), [eu-pos/CONJ]()-[eu-pos/VERB]() (10; 1% instances), [eu-pos/NOUN]()-[eu-pos/CONJ]() (10; 1% instances), [eu-pos/PROPN]()-[eu-pos/PROPN]() (5; 0% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (2; 0% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	Susanari	Susana	PROPN	_	Case=Dat|Definite=Def|Number=Sing	7	iobj	_	_
2	ere	ere	CONJ	_	_	4	advmod	_	_
3	ez	ez	PART	_	Negative=Neg	4	neg	_	_
4	zirudien	iruditu	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	0	root	_	_
5	asko	asko	ADV	_	_	7	advmod	_	_
6	axola	axola	NOUN	_	Case=Abs|Definite=Ind	7	compound	_	_
7	zitzaionik	izan	VERB	_	_	4	ccomp	_	_
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
3	Herrian	herri	NOUN	_	Case=Ine|Definite=Def|Number=Sing	4	nmod	_	_
4	jaio	jaio	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	dira	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	4	aux	_	_
6	eta	eta	CONJ	_	_	4	cc	_	_
7	guraso	guraso	NOUN	_	_	9	dobj	_	_
8	euskaldunak	euskaldun	ADJ	_	Case=Abs|Definite=Def|Number=Plur	7	amod	_	_
9	dituzte	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=3|Person[erg]=3	4	conj	_	_
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
3	baliabide	baliabide	NOUN	_	_	7	dobj	_	_
4	naturalak	natural	ADJ	_	Case=Abs|Definite=Def|Number=Plur	3	amod	_	_
5	ari	ari	AUX	_	_	6	aux	_	_
6	dira	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	0	root	_	_
7	ikasten	ikasi	VERB	_	Case=Ine	6	xcomp	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


