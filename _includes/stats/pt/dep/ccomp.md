

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

3357 nodes (2%) are attached to their parents as `ccomp`.

2987 instances of `ccomp` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.57134346142389.

The following 20 pairs of parts of speech are connected with `ccomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (2647; 79% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (317; 9% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (169; 5% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (166; 5% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (18; 1% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (10; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (6; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (3; 0% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	bombeiro	bombeiro	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	suspeita	suspeitar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	conj-s	_	7	mark	_	_
5	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	golfinho	golfinho	NOUN	n|M|S	Gender=Masc|Number=Sing	7	nsubj	_	_
7	tenha	ter	VERB	v-fin|PR|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
8	morrido	morrer	VERB	v-pcp	VerbForm=Part	7	ccomp	_	_
9	afogado	afogar	VERB	v-pcp|M|S	Gender=Masc|Number=Sing|VerbForm=Part	8	advcl	_	_
10	.	.	PUNCT	punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 ccomp	color:blue
1	Em	em	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
2	o	o	DET	art|<-sam>|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	projeto	projeto	NOUN	n|M|S	Gender=Masc|Number=Sing	5	nmod	_	_
4	não	não	ADV	adv	_	5	neg	_	_
5	há	haver	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	definição	definição	NOUN	n|F|S	Gender=Fem|Number=Sing	5	dobj	_	_
7	de	de	ADP	prp	AdpType=Prep	9	mark	_	_
8	quantos	quanto	PRON	pron-det|<interr>|M|S	Gender=Masc|Number=Sing|PronType=Int	9	nsubj	_	_
9	podem	poder	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	_
10	ser	ser	AUX	v-inf	VerbForm=Inf	9	aux	_	_
11	construídos	construir	VERB	v-pcp|M|P	Gender=Masc|Number=Plur|VerbForm=Part	10	ccomp	_	_
12	.	.	PUNCT	punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 ccomp	color:blue
1	Enganei-	enganar	VERB	v-fin|PS|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
2	me	eu	PRON	pron-pers|<refl>|M/F|1S|ACC	Case=Acc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	1	dobj	_	_
3	:	:	PUNCT	punc	_	1	punct	_	_
4	não	não	ADV	adv	_	8	neg	_	_
5	serie	seriar	VERB	v-fin|COND|3S	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	8	cop	_	_
6	nem	nem	CONJ	conj-c|<co-vfin>|<co-fmc>	_	8	cc	_	_
7	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	primeiro	primeiro	ADJ	adj|<n>|<NUM-ord>|M|S	Gender=Masc|Number=Sing|NumType=Ord	13	ccomp	_	_
9	nem	nem	CONJ	conj-c|<co-sc>	_	8	cc	_	_
10	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	último	último	ADJ	adj|<n>|<NUM-ord>|M|S	Gender=Masc|Number=Sing|NumType=Ord	8	conj	_	_
12	,	,	PUNCT	punc	_	13	punct	_	_
13	espero	esperar	VERB	v-fin|PR|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
14	..	..	PUNCT	punc	_	1	punct	_	_

~~~


