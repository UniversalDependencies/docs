

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

30172 nodes (11%) are attached to their parents as `case`.

29697 instances of `case` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96324406734721.

The following 31 pairs of parts of speech are connected with `case`: [de-pos/NOUN]()-[de-pos/ADP]() (19603; 65% instances), [de-pos/PROPN]()-[de-pos/ADP]() (6824; 23% instances), [de-pos/NUM]()-[de-pos/ADP]() (1229; 4% instances), [de-pos/PRON]()-[de-pos/ADP]() (955; 3% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (733; 2% instances), [de-pos/VERB]()-[de-pos/ADP]() (301; 1% instances), [de-pos/ADJ]()-[de-pos/ADP]() (180; 1% instances), [de-pos/ADV]()-[de-pos/ADP]() (163; 1% instances), [de-pos/NOUN]()-[de-pos/CCONJ]() (51; 0% instances), [de-pos/PROPN]()-[de-pos/PUNCT]() (20; 0% instances), [de-pos/X]()-[de-pos/ADP]() (17; 0% instances), [de-pos/ADP]()-[de-pos/ADP]() (15; 0% instances), [de-pos/PROPN]()-[de-pos/CCONJ]() (15; 0% instances), [de-pos/X]()-[de-pos/X]() (12; 0% instances), [de-pos/PRON]()-[de-pos/CCONJ]() (10; 0% instances), [de-pos/ADJ]()-[de-pos/CCONJ]() (7; 0% instances), [de-pos/AUX]()-[de-pos/ADP]() (6; 0% instances), [de-pos/CCONJ]()-[de-pos/ADP]() (4; 0% instances), [de-pos/DET]()-[de-pos/ADP]() (4; 0% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (4; 0% instances), [de-pos/ADV]()-[de-pos/CCONJ]() (3; 0% instances), [de-pos/PART]()-[de-pos/ADP]() (3; 0% instances), [de-pos/PROPN]()-[de-pos/PART]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (2; 0% instances), [de-pos/VERB]()-[de-pos/CCONJ]() (2; 0% instances), [de-pos/ADV]()-[de-pos/PRON]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PART]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PUNCT]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (1; 0% instances), [de-pos/NUM]()-[de-pos/CCONJ]() (1; 0% instances), [de-pos/X]()-[de-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 case	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	_
3	für	für	ADP	APPR	_	4	case	_	_
4	mich	ich	PRON	PPER	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	nmod	_	_
5	Ausgangspunkt	Ausgangspunkt	NOUN	NN	_	0	root	_	_
6	zu	zu	ADP	APPR	_	8	case	_	_
7	einer	ein	DET	ART	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Parfümkreation	Parfümkreation	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Für	für	ADP	APPR	_	2	case	_	_
2	mich	ich	PRON	PPER	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	nmod	_	_
3	die	der	DET	ART	Definite=Def|PronType=Art	6	det	_	_
4	Anwaltskanzlei	Anwaltskanzlei	NOUN	NN	_	6	cop	_	_
5	Nummer	Nummer	NOUN	NN	_	6	compound	_	_
6	EINS	EINS	NOUN	VVFIN	_	0	root	_	_
7	in	in	ADP	APPR	_	8	case	_	_
8	Dresden	Dresden	PROPN	NE	_	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Seit	seit	ADP	APPR	_	2	case	_	_
2	1964	1964	NUM	CARD	NumType=Card	11	nmod	_	_
3	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
4	mein	mein	PRON	PPOSAT	Case=Nom|Gender=Masc,Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	5	det:poss	_	_
5	Mann	Mann	NOUN	NN	Case=Nom|Gender=Masc,Neut|Number=Sing	11	nsubj	_	_
6	rund	rund	ADV	ADV	_	7	advmod	_	_
7	1	1	NUM	CARD	NumType=Card	8	nummod	_	_
8	mal	mal	ADV	ADV	_	11	advmod	_	_
9	pro	pro	ADP	APPR	_	10	case	_	_
10	Jahr	Jahr	NOUN	NN	_	8	nmod	_	_
11	Gast	Gast	NOUN	NN	_	0	root	_	_
12	in	in	ADP	APPR	_	14	case	_	_
13	diesem	dies	PRON	PDAT	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	14	det	_	_
14	Hotel	Hotel	NOUN	NN	Case=Dat|Gender=Masc,Neut|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	$.	_	11	punct	_	_

~~~


