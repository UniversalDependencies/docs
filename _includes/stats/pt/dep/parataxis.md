

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

200 nodes (0%) are attached to their parents as `parataxis`.

183 instances of `parataxis` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.38.

The following 25 pairs of parts of speech are connected with `parataxis`: [pt-pos/PROPN]()-[pt-pos/VERB]() (60; 30% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (51; 26% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (33; 17% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (11; 6% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (5; 3% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (5; 3% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (5; 3% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (4; 2% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (4; 2% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (4; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (3; 2% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (2; 1% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/ADV]()-[pt-pos/PROPN]() (1; 1% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (1; 1% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (1; 1% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 parataxis	color:blue
1	Folha	Folha	PROPN	prop|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	punc	_	1	punct	_	_
3	o_que	o_que	PRON	pron-indp|<interr>|M|S	Gender=Masc|Number=Sing|PronType=Int	6	dobj	_	_
4	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	mulher	mulher	NOUN	n|F|S	Gender=Fem|Number=Sing	6	nsubj	_	_
6	precisa	precisar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	hoje	hoje	ADV	adv	_	6	advmod	_	_
8	,	,	PUNCT	punc	_	6	punct	_	_
9	em_termos_de	em_termos_de	ADP	prp	AdpType=Prep	10	case	_	_
10	roupas	roupa	NOUN	n|F|P	Gender=Fem|Number=Plur	6	nmod	_	_
11	?	?	PUNCT	punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 parataxis	color:blue
1	P.	P.	NOUN	n|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	punc	_	1	punct	_	_
3	As	o	DET	art|<artd>|F|P	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
4	suas	seu	DET	pron-det|<poss|3S>|F|P	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	_
5	filhas	filha	NOUN	n|F|P	Gender=Fem|Number=Plur	6	nsubj	_	_
6	compreendem	compreender	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	o_que	o_que	PRON	pron-indp|<interr>|M|S	Gender=Masc|Number=Sing|PronType=Int	9	nsubj	_	_
8	se	se	PRON	pron-pers|<refl>|M/F|3S/P|ACC	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	9	dobj	_	_
9	passou	passar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	ccomp	_	_
10	em	em	ADP	prp	AdpType=Prep	11	case	_	_
11	Maio	maio	NOUN	n|<prop>|M|S	Gender=Masc|Number=Sing	9	nmod	_	_
12	68	68	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	11	nummod	_	_
13	?	?	PUNCT	punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 parataxis	color:blue
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


