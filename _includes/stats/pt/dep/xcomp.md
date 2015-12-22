

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

2814 nodes (1%) are attached to their parents as `xcomp`.

2803 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03269367448472.

The following 16 pairs of parts of speech are connected with `xcomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (2321; 82% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (193; 7% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (175; 6% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (48; 2% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (17; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (17; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (14; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (11; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (5; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	governo	governo	NOUN	n|M|S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
4	usar	usar	VERB	v-inf	VerbForm=Inf	3	xcomp	_	_
5	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	URV	URV	PROPN	prop|F|S	Gender=Fem|Number=Sing	4	dobj	_	_
7	para	para	ADP	prp	AdpType=Prep	8	mark	_	_
8	corrigir	corrigir	VERB	v-inf	VerbForm=Inf	4	advcl	_	_
9	impostos	imposto	NOUN	n|M|P	Gender=Masc|Number=Plur	8	dobj	_	_
10	,	,	PUNCT	punc	_	11	punct	_	_
11	garantiu	garantir	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	FHC	FHC	PROPN	prop|M|S	Gender=Masc|Number=Sing	11	nsubj	_	_
13	.	.	PUNCT	punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	«	«	PUNCT	punc	_	4	punct	_	_
2	Senão	senão	ADV	adv	_	6	advmod	_	_
3	ele	ele	PRON	pron-pers|M|3S|NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	vai	ir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ser	ser	VERB	v-inf	VerbForm=Inf	6	cop	_	_
6	alvo	alvo	NOUN	n|M|S	Gender=Masc|Number=Sing	4	xcomp	_	_
7	fácil	fácil	ADJ	adj|M|S	Gender=Masc|Number=Sing	6	amod	_	_
8	de	de	ADP	prp|<sam->	AdpType=Prep	10	case	_	_
9	as	o	DET	art|<-sam>|<artd>|F|P	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	críticas	crítica	NOUN	n|F|P	Gender=Fem|Number=Plur	6	nmod	_	_
11	se	se	SCONJ	conj-s	_	14	mark	_	_
12	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	time	time	NOUN	n|M|S	Gender=Masc|Number=Sing	14	nsubj	_	_
14	perder	perder	VERB	v-fin|FUT|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	advcl	_	_
15	.	.	PUNCT	punc	_	4	punct	_	_
16	»	»	PUNCT	punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	É	ser	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	de	de	ADP	prp	AdpType=Prep	3	mark	_	_
3	crer	crer	VERB	v-inf	VerbForm=Inf	0	root	_	_
4	que	que	SCONJ	conj-s	_	5	mark	_	_
5	estivesse	estar	VERB	v-fin|IMPF|3S|SUBJ	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
6	a	a	ADP	prp	AdpType=Prep	8	mark	_	_
7	ser	ser	VERB	v-inf	VerbForm=Inf	8	cop	_	_
8	sincero	sincero	ADJ	adj|M|S	Gender=Masc|Number=Sing	5	xcomp	_	_
9	.	.	PUNCT	punc	_	3	punct	_	_

~~~


