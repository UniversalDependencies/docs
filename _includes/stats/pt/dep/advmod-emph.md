

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is a language-specific subtype of [advmod]().

119 nodes (0%) are attached to their parents as `advmod:emph`.

119 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.84873949579832.

The following 14 pairs of parts of speech are connected with `advmod:emph`: [pt-pos/NOUN]()-[pt-pos/ADV]() (71; 60% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (18; 15% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (11; 9% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (4; 3% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (3; 3% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (2; 2% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 2% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (2; 2% instances), [pt-pos/ADP]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/DET]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 1% instances), [pt-pos/PRON]()-[pt-pos/DET]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 advmod:emph	color:blue
1	Um	um	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	2	nummod	_	_
2	talento	talento	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
3	que	que	PRON	pron-indp|<rel>|M|S	Gender=Masc|Number=Sing|PronType=Rel	8	nsubj	_	_
4	,	,	PUNCT	punc	_	8	punct	_	_
5	por	por	ADP	prp	AdpType=Prep	6	case	_	_
6	norma	norma	NOUN	n|F|S	Gender=Fem|Number=Sing	8	nmod	_	_
7	,	,	PUNCT	punc	_	8	punct	_	_
8	cabe	caber	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
9	apenas	apenas	ADV	adv	_	12	advmod:emph	_	_
10	a	a	ADP	prp|<sam->	AdpType=Prep	12	case	_	_
11	os	o	DET	art|<-sam>|<artd>|M|P	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	poetas	poeta	NOUN	n|M|P	Gender=Masc|Number=Plur	8	dobj	_	_
13	.	.	PUNCT	punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod:emph	color:blue
1	Só	só	ADV	adv|<meta>	_	6	advmod:emph	_	_
2	quando	quando	ADV	adv|<rel>|<ks>	PronType=Rel	6	advmod	_	_
3	Moniz	Moniz	PROPN	prop|M|S	_	6	nsubj	_	MWE=Moniz_Pereira|MWEPOS=PROPN
4	Pereira	Pereira	PROPN	PROPN	_	3	name	_	_
5	lhe	ele	PRON	pron-pers|M|3S|DAT	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	dobj	_	_
6	surge	surgir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	advcl	_	_
7	em	em	ADP	prp|<sam->	AdpType=Prep	9	case	_	_
8	a	o	DET	art|<-sam>|<artd>|S	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	frente	frente	NOUN	n|F|S	Gender=Fem|Number=Sing	6	nmod	_	_
10	,	,	PUNCT	punc	_	12	punct	_	_
11	se	se	PRON	pron-pers|<refl>|M|3S|ACC	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	12	iobj	_	_
12	compenetra	compenetrar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
13	de	de	ADP	prp	AdpType=Prep	17	case	_	_
14	que	que	SCONJ	conj-s	_	17	mark	_	_
15	era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	cop	_	_
16	mesmo	mesmo	ADV	adv|<quant>	NumType=Card|PronType=Ind,Neg,Tot	17	advmod	_	_
17	verdade	verdade	NOUN	n|F|S	Gender=Fem|Number=Sing	12	ccomp	_	_
18	.	.	PUNCT	punc	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 advmod:emph	color:blue
1	A	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	revista	revista	NOUN	n|F|S	Gender=Fem|Number=Sing	6	nsubjpass	_	_
3	começou	começar	AUX	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
4	a	a	ADP	prp	AdpType=Prep	6	mark	_	_
5	ser	ser	VERB	v-inf	VerbForm=Inf	6	auxpass	_	_
6	feita	fazer	VERB	v-pcp|F|S	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
7	exclusivamente	exclusivamente	ADV	adv	_	9	advmod:emph	_	_
8	por	por	ADP	prp	AdpType=Prep	9	case	_	_
9	Lourdes	Lourdes	PROPN	prop|F|S	_	6	dobj	_	MWE=Lourdes_Castro|MWEPOS=PROPN
10	Castro	Castro	PROPN	PROPN	_	9	name	_	_
11	e	e	CONJ	conj-c|<co-prparg>	_	9	cc	_	_
12	René	René	PROPN	prop|M|S	_	9	conj	_	MWE=René_Bertholo|MWEPOS=PROPN
13	Bertholo	Bertholo	PROPN	PROPN	_	12	name	_	_
14	.	.	PUNCT	punc	_	6	punct	_	_

~~~


