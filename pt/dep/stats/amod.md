

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

8694 nodes (4%) are attached to their parents as `amod`.

6143 instances of `amod` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23809523809524.

The following 10 pairs of parts of speech are connected with `amod`: [pt-pos/NOUN]()-[pt-pos/ADJ]() (8356; 96% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (204; 2% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (53; 1% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (21; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (19; 0% instances), [pt-pos/SYM]()-[pt-pos/ADJ]() (13; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (12; 0% instances), [pt-pos/NUM]()-[pt-pos/ADJ]() (9; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (6; 0% instances), [pt-pos/ADP]()-[pt-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 amod	color:blue
1	Horário	horário	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
2	:	:	PUNCT	punc	_	1	punct	_	_
3	em	em	ADP	prp|<sam->	AdpType=Prep	5	case	_	_
4	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	dia	dia	NOUN	n|M|S	Gender=Masc|Number=Sing	1	nmod	_	_
6	12	12	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	5	nummod	_	_
7	,	,	PUNCT	punc	_	1	punct	_	_
8	de	de	ADP	prp|<sam->	AdpType=Prep	10	case	_	_
9	as	o	DET	art|<-sam>|<artd>|F|P	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	19h	19h	NOUN	n|F|P	Gender=Fem|Number=Plur	1	nmod	_	_
11	a	a	ADP	prp|<sam->	AdpType=Prep	14	case	_	_
12	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	último	último	ADJ	adj|<NUM-ord>|M|S	Gender=Masc|Number=Sing|NumType=Ord	14	amod	_	_
14	cliente	cliente	NOUN	n|M|S	Gender=Masc|Number=Sing	10	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Um	um	DET	art|<arti>|M|S	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Godard	Godard	PROPN	prop|M|S	Gender=Masc|Number=Sing	0	root	_	_
3	intergaláctico	intergaláctico	ADJ	adj|M|S	Gender=Masc|Number=Sing	2	amod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	jovem	jovem	ADJ	adj|<n>|M|S	Gender=Masc|Number=Sing	5	nsubj	_	_
3	sportinguista	sportinguista	ADJ	adj|M|S	Gender=Masc|Number=Sing	2	amod	_	_
4	Nélson	Nélson	PROPN	prop|M|S	Gender=Masc|Number=Sing	2	nmod	_	_
5	terá	ter	VERB	v-fin|FUT|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
6	de	de	ADP	prp	AdpType=Prep	7	mark	_	_
7	esperar	esperar	VERB	v-inf	VerbForm=Inf	5	xcomp	_	_
8	.	.	PUNCT	punc	_	5	punct	_	_

~~~


