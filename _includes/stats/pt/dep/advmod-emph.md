

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is a language-specific subtype of [advmod]().

96 nodes (0%) are attached to their parents as `advmod:emph`.

95 instances of `advmod:emph` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.70833333333333.

The following 9 pairs of parts of speech are connected with `advmod:emph`: [pt-pos/NOUN]()-[pt-pos/ADV]() (57; 59% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (18; 19% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (9; 9% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (4; 4% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 2% instances), [pt-pos/NUM]()-[pt-pos/ADV]() (2; 2% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (2; 2% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/DET]()-[pt-pos/ADV]() (1; 1% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advmod:emph	color:blue
1	Só	só	ADV	adv|<meta>	_	5	advmod:emph	_	_
2	quando	quando	ADV	adv|<rel>|<ks>	PronType=Rel	5	advmod	_	_
3	Moniz_Pereira	Moniz_Pereira	PROPN	prop|M|S	Gender=Masc|Number=Sing	5	nsubj	_	_
4	lhe	ele	PRON	pron-pers|M|3S|DAT	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
5	surge	surgir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl	_	_
6	em	em	ADP	prp|<sam->	AdpType=Prep	8	case	_	_
7	a	o	DET	art|<-sam>|<artd>|S	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	frente	frente	NOUN	n|F|S	Gender=Fem|Number=Sing	5	nmod	_	_
9	,	,	PUNCT	punc	_	11	punct	_	_
10	se	se	PRON	pron-pers|<refl>|M|3S|ACC	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	11	iobj	_	_
11	compenetra	compenetrar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	de	de	ADP	prp	AdpType=Prep	16	case	_	_
13	que	que	SCONJ	conj-s	_	16	mark	_	_
14	era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	cop	_	_
15	mesmo	mesmo	ADV	adv|<quant>	NumType=Card|PronType=Ind,Neg,Tot	16	advmod	_	_
16	verdade	verdade	NOUN	n|F|S	Gender=Fem|Number=Sing	11	ccomp	_	_
17	.	.	PUNCT	punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 advmod:emph	color:blue
1	A	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	revista	revista	NOUN	n|F|S	Gender=Fem|Number=Sing	3	nsubj	_	_
3	começou	começar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	a	a	ADP	prp	AdpType=Prep	5	mark	_	_
5	ser	ser	AUX	v-inf	VerbForm=Inf	3	aux	_	_
6	feita	fazer	VERB	v-pcp|F|S	Gender=Fem|Number=Sing|VerbForm=Part	5	ccomp	_	_
7	exclusivamente	exclusivamente	ADV	adv	_	9	advmod:emph	_	_
8	por	por	ADP	prp	AdpType=Prep	9	case	_	_
9	Lourdes_Castro	Lourdes_Castro	PROPN	prop|F|S	Gender=Fem|Number=Sing	6	dobj	_	_
10	e	e	CONJ	conj-c|<co-prparg>	_	9	cc	_	_
11	René_Bertholo	René_Bertholo	PROPN	prop|M|S	Gender=Masc|Number=Sing	9	conj	_	_
12	.	.	PUNCT	punc	_	3	punct	_	_

~~~


