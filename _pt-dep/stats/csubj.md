

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

350 nodes (0%) are attached to their parents as `csubj`.

247 instances of `csubj` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.18285714285714.

The following 16 pairs of parts of speech are connected with `csubj`: [pt-pos/ADJ]()-[pt-pos/VERB]() (148; 42% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (128; 37% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (44; 13% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (7; 2% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (5; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (3; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (3; 1% instances), [pt-pos/DET]()-[pt-pos/VERB]() (2; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (2; 1% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (2; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Mais	mais	ADV	adv|<quant>	NumType=Card|PronType=Ind,Neg,Tot	2	advmod	_	_
2	inesperado	inesperado	ADJ	adj|M|S	Gender=Masc|Number=Sing	0	root	_	_
3	ainda	ainda	ADV	adv	_	2	advmod	_	_
4	é	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
5	encontrar	encontrar	VERB	v-inf	VerbForm=Inf	2	csubj	_	_
6	uma	um	DET	art|<arti>|F|S	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	criança	criança	NOUN	n|F|S	Gender=Fem|Number=Sing	5	dobj	_	_
8	assassina	assassino	ADJ	adj|F|S	Gender=Fem|Number=Sing	7	amod	_	_
9	.	.	PUNCT	punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	Quem	quem	PRON	pron-indp|<rel>|M/F|S	Number=Sing|PronType=Rel	2	nsubj	_	_
2	quiser	querer	VERB	v-fin|FUT|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	csubj	_	_
3	,	,	PUNCT	punc	_	4	punct	_	_
4	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	em	em	ADP	prp	AdpType=Prep	6	case	_	_
6	excursão	excursão	NOUN	n|F|S	Gender=Fem|Number=Sing	4	dobj	_	_
7	até	até	ADP	prp	AdpType=Prep	9	case	_	_
8	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	resort	resort	NOUN	n|M|S	Gender=Masc|Number=Sing	4	nmod	_	_
10	local	local	ADJ	adj|M|S	Gender=Masc|Number=Sing	9	amod	_	_
11	,	,	PUNCT	punc	_	9	punct	_	_
12	Casa_de_Campo	Casa_de_Campo	PROPN	prop|M|S	Gender=Masc|Number=Sing	9	appos	_	_
13	.	.	PUNCT	punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Pena	pena	NOUN	n|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	não	não	ADV	adv	_	3	neg	_	_
3	ter	ter	VERB	v-inf|3S	Number=Sing|Person=3|VerbForm=Inf	1	csubj	_	_
4	mais	mais	DET	pron-det|<quant>|M|S	Gender=Masc|Number=Sing|NumType=Card|PronType=Ind,Neg,Tot	5	det	_	_
5	tempo	tempo	NOUN	n|M|S	Gender=Masc|Number=Sing	3	dobj	_	_
6	para	para	ADP	prp	AdpType=Prep	7	mark	_	_
7	ir	ir	VERB	v-inf	VerbForm=Inf	5	acl	_	_
8	a	a	ADP	prp|<sam->	AdpType=Prep	10	case	_	_
9	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	teatro	teatro	NOUN	n|M|S	Gender=Masc|Number=Sing	7	nmod	_	_

~~~


