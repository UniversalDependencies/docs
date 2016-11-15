

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

7413 nodes (2%) are attached to their parents as `name`.

7320 instances of `name` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54444894104951.

The following 8 pairs of parts of speech are connected with `name`: [de-pos/PROPN]()-[de-pos/PROPN]() (6302; 85% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (1039; 14% instances), [de-pos/ADJ]()-[de-pos/PROPN]() (44; 1% instances), [de-pos/NUM]()-[de-pos/PROPN]() (13; 0% instances), [de-pos/ADP]()-[de-pos/PROPN]() (8; 0% instances), [de-pos/VERB]()-[de-pos/PROPN]() (5; 0% instances), [de-pos/DET]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/PRON]()-[de-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 name	color:blue
1	Hierfür	hierfür	ADV	PAV	_	2	advmod	_	_
2	verdient	verdienen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
3	Torsten	Torsten	PROPN	NE	_	4	name	_	_
4	Burrichter	Burrichter	PROPN	NE	Case=Nom|Number=Sing	2	nsubj	_	_
5	meinen	mein	PRON	PPOSAT	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	_
6	besonderen	besonder	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	Respekt	Respekt	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	_
8	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 name	color:blue
1	Bester	gut	ADJ	ADJA	Degree=Sup	2	amod	_	_
2	Friseur	Friseur	NOUN	NN	_	0	root	_	_
3	in	in	ADP	APPR	_	5	case	_	_
4	ganzen	ganz	ADJ	ADJA	Degree=Pos	5	amod	_	_
5	Landkreis	Landkreis	NOUN	NN	_	2	nmod	_	_
6	Rosenheim	Rosenheim	PROPN	NE	_	5	name	_	_
7	!	!	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 name	color:blue
1	The	The	PROPN	FM	_	2	nmod	_	_
2	Crystals	Crystals	PROPN	NN	Case=Nom|Number=Sing	10	nsubj	_	_
3	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	_	_
4	eine	ein	DET	ART	Definite=Ind|PronType=Art	10	det	_	_
5	US	US	PROPN	NE	_	7	name	_	_
6	-	-	PUNCT	$(	_	7	punct	_	_
7	amerikanische	amerikanisch	ADJ	ADJA	Degree=Pos	10	amod	_	_
8	Mädchen	Mädchen	NOUN	NN	_	10	compound	_	_
9	-	-	PUNCT	$(	_	10	punct	_	_
10	Gesangsgruppe	Gesangsgruppe	NOUN	NN	_	0	root	_	_
11	.	.	PUNCT	$.	_	10	punct	_	_

~~~


