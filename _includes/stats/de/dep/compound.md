

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

1372 nodes (0%) are attached to their parents as `compound`.

1290 instances of `compound` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.03644314868805.

The following 32 pairs of parts of speech are connected with `compound`: [de-pos/NOUN]()-[de-pos/NOUN]() (866; 63% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (206; 15% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (100; 7% instances), [de-pos/NOUN]()-[de-pos/NUM]() (36; 3% instances), [de-pos/NUM]()-[de-pos/NUM]() (28; 2% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (18; 1% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (16; 1% instances), [de-pos/X]()-[de-pos/X]() (15; 1% instances), [de-pos/NOUN]()-[de-pos/X]() (12; 1% instances), [de-pos/ADJ]()-[de-pos/NUM]() (11; 1% instances), [de-pos/ADP]()-[de-pos/NOUN]() (10; 1% instances), [de-pos/NUM]()-[de-pos/NOUN]() (7; 1% instances), [de-pos/PRON]()-[de-pos/NOUN]() (6; 0% instances), [de-pos/VERB]()-[de-pos/NOUN]() (5; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (4; 0% instances), [de-pos/ADV]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/CONJ]() (3; 0% instances), [de-pos/NUM]()-[de-pos/X]() (3; 0% instances), [de-pos/PROPN]()-[de-pos/CONJ]() (3; 0% instances), [de-pos/ADJ]()-[de-pos/X]() (2; 0% instances), [de-pos/NOUN]()-[de-pos/DET]() (2; 0% instances), [de-pos/PRON]()-[de-pos/PRON]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/ADJ]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/ADP]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/NUM]() (2; 0% instances), [de-pos/X]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/ADV]()-[de-pos/ADV]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PRON]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/DET]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/PUNCT]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/X]() (1; 0% instances), [de-pos/X]()-[de-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Für	für	ADP	APPR	_	2	case	_	_
2	mich	ich	PRON	PPER	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	nmod	_	_
3	die	der	DET	ART	Definite=Def|PronType=Art	6	det	_	_
4	Anwaltskanzlei	Anwaltskanzlei	NOUN	NN	_	6	cop	_	_
5	Nummer	Nummer	NOUN	NN	_	6	compound	_	_
6	EINS	EINS	NOUN	VVFIN	_	0	root	_	_
7	in	in	ADP	APPR	_	8	case	_	_
8	Dresden	Dresden	PROPN	NE	_	6	nmod	_	_
9	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Dr.	Dr.	NOUN	NN	_	2	compound	_	_
2	Sieben	sieben	PROPN	CARD	Case=Nom|Number=Sing	8	nsubj	_	_
3	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
4	wirklich	wirklich	ADV	ADJD	_	5	advmod	_	_
5	hervorragend	hervorragend	ADV	ADJD	_	8	advmod	_	_
6	mit	mit	ADP	APPR	_	7	case	_	_
7	mir	ich	PRON	PPER	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	nmod	_	_
8	umgegangen	umgehen	VERB	VVPP	VerbForm=Part	0	root	_	_
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 compound	color:blue
1	In	in	ADP	APPR	_	2	case	_	_
2	Rot	Rot	NOUN	NN	_	8	nmod	_	_
3	ein	ein	DET	ART	Definite=Ind|PronType=Art	8	det	_	_
4	blau	blau	ADJ	ADJD	Degree=Pos	6	compound	_	_
5	-	-	PUNCT	$(	_	6	punct	_	_
6	gerandeter	gerandeter	ADJ	ADJD	Degree=Pos	8	amod	_	_
7	silberner	silbern	ADJ	ADJA	Degree=Cmp,Pos	8	amod	_	_
8	Schild	Schild	NOUN	NN	_	0	root	_	_
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


