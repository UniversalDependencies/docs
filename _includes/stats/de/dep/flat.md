

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

7133 nodes (3%) are attached to their parents as `flat`.

7133 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58460675732511.

The following 8 pairs of parts of speech are connected with `flat`: [de-pos/PROPN]()-[de-pos/PROPN]() (6179; 87% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (873; 12% instances), [de-pos/PROPN]()-[de-pos/ADJ]() (43; 1% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (17; 0% instances), [de-pos/PROPN]()-[de-pos/NUM]() (10; 0% instances), [de-pos/ADP]()-[de-pos/PROPN]() (6; 0% instances), [de-pos/PROPN]()-[de-pos/VERB]() (3; 0% instances), [de-pos/VERB]()-[de-pos/PROPN]() (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Hierfür	hierfür	ADV	PAV	_	2	advmod	_	_
2	verdient	verdienen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
3	Torsten	Torsten	PROPN	NE	_	2	nsubj	_	_
4	Burrichter	Burrichter	PROPN	NE	Case=Nom|Number=Sing	3	flat	_	_
5	meinen	mein	PRON	PPOSAT	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	_
6	besonderen	besonder	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	Respekt	Respekt	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Habe	haben	AUX	VAFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
2	vergangene	vergangen	ADJ	ADJA	Degree=Pos	3	amod	_	_
3	Woche	Woche	NOUN	NN	_	9	obl	_	_
4	einen	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	NLP	NLP	PROPN	NN	_	9	obj	_	_
6	Kurs	Kurs	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	5	flat	_	_
7	bei	bei	ADP	APPR	_	8	case	_	_
8	diedenkweisen	diedenkweisen	PROPN	NN	Case=Dat|Number=Sing	9	obl	_	_
9	besucht	besuchen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
10	!	!	PUNCT	$.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat	color:blue
1	The	The	PROPN	FM	_	2	nmod	_	_
2	Crystals	Crystals	PROPN	NN	Case=Nom|Number=Sing	10	nsubj	_	_
3	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	_	_
4	eine	ein	DET	ART	Definite=Ind|PronType=Art	10	det	_	_
5	US	US	PROPN	NE	_	10	amod	_	_
6	-	-	PUNCT	$(	_	5	punct	_	_
7	amerikanische	amerikanisch	ADJ	ADJA	Degree=Pos	5	flat	_	_
8	Mädchen	Mädchen	NOUN	NN	_	10	compound	_	_
9	-	-	PUNCT	$(	_	10	punct	_	_
10	Gesangsgruppe	Gesangsgruppe	NOUN	NN	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	10	punct	_	_

~~~


