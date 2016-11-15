

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is a language-specific subtype of [det]().

2409 nodes (1%) are attached to their parents as `det:poss`.

2409 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37152345371523.

The following 8 pairs of parts of speech are connected with `det:poss`: [de-pos/NOUN]()-[de-pos/DET]() (1817; 75% instances), [de-pos/NOUN]()-[de-pos/PRON]() (560; 23% instances), [de-pos/PROPN]()-[de-pos/DET]() (19; 1% instances), [de-pos/PROPN]()-[de-pos/PRON]() (9; 0% instances), [de-pos/ADJ]()-[de-pos/DET]() (1; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (1; 0% instances), [de-pos/NUM]()-[de-pos/DET]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	Auf	auf	ADP	APPR	_	3	case	_	_
2	seinem	sein	DET	PPOSAT	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	3	det:poss	_	_
3	Grabstein	Grabstein	NOUN	NN	_	8	nmod	_	_
4	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
5	auch	auch	ADV	ADV	_	8	advmod	_	_
6	sein	sein	DET	PPOSAT	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	_
7	Filmname	Filmname	NOUN	NN	Case=Nom|Number=Sing	8	nsubj	_	_
8	verewigt	verewigen	ADJ	VVPP	_	0	root	_	_
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	hatte	haben	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	_
4	eines	ein	DET	ART	Case=Acc|Definite=Ind|Number=Plur|PronType=Art	6	det	_	_
5	seiner	sein	PRON	PPOSAT	Case=Acc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Seminare	Seminar	NOUN	NN	Case=Acc|Number=Plur	8	dobj	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	besuchen	besuchen	VERB	VVINF	VerbForm=Inf	3	xcomp	_	_
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:poss	color:blue
1	ORAP	ORAP	PROPN	NN	_	6	dep	_	_
2	in	in	ADP	APPR	_	4	case	_	_
3	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	4	det	_	_
4	Kriegseinsatz	Kriegseinsatz	NOUN	NN	Case=Dat|Gender=Masc,Neut|Number=Sing	6	nmod	_	_
5	und	und	CONJ	KON	_	6	cc	_	_
6	ersetzte	ersetzen	VERB	VVFIN	VerbForm=Fin	0	root	_	_
7	1987	1987	NUM	CARD	NumType=Card	6	nmod	_	_
8	seine	sein	DET	PPOSAT	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	9	det:poss	_	_
9	Jak	Jak	PROPN	NN	Case=Acc|Number=Sing	6	dobj	_	_
10	-	-	PUNCT	$(	_	9	punct	_	_
11	28	28	PROPN	CARD	_	9	appos	_	_
12	durch	durch	ADP	APPR	_	13	case	_	_
13	Su	Su	PROPN	NE	Case=Acc|Number=Sing	6	nmod	_	_
14	-	-	PUNCT	$(	_	13	punct	_	_
15	24MR	24MR	PROPN	NE	_	13	appos	_	_
16	.	.	PUNCT	$.	_	6	punct	_	_

~~~


