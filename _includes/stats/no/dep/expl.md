

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

3239 nodes (1%) are attached to their parents as `expl`.

2651 instances of `expl` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96542142636616.

The following 12 pairs of parts of speech are connected with `expl`: [no-pos/VERB]()-[no-pos/PRON]() (1869; 58% instances), [no-pos/ADJ]()-[no-pos/PRON]() (613; 19% instances), [no-pos/NOUN]()-[no-pos/PRON]() (495; 15% instances), [no-pos/PRON]()-[no-pos/PRON]() (93; 3% instances), [no-pos/ADV]()-[no-pos/PRON]() (84; 3% instances), [no-pos/PROPN]()-[no-pos/PRON]() (59; 2% instances), [no-pos/DET]()-[no-pos/PRON]() (10; 0% instances), [no-pos/VERB]()-[no-pos/ADV]() (7; 0% instances), [no-pos/NUM]()-[no-pos/PRON]() (4; 0% instances), [no-pos/ADP]()-[no-pos/PRON]() (3; 0% instances), [no-pos/CONJ]()-[no-pos/PRON]() (1; 0% instances), [no-pos/VERB]()-[no-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	Er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
3	flere	mange	ADJ	_	Degree=Cmp	4	amod	_	_
4	rovdyr	rovdyr	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	1	nsubj	_	_
5	i	i	ADP	_	_	7	case	_	_
6	denne	denne	DET	_	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	sak	sak	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	_
8	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl	color:blue
1	Risikofritt	risikofri	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
4	ikke	ikke	ADV	_	_	1	neg	_	_
5	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 expl	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	cop	_	_
3	nok	nok	ADV	_	_	8	advmod	_	_
4	heller	heller	ADV	_	_	8	advmod	_	_
5	Frps	Frp	PROPN	_	Case=Gen	8	det	_	_
6	økte	øke	ADJ	_	Definite=Def|Number=Sing|VerbForm=Part	8	amod	_	_
7	politiske	politisk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	8	amod	_	_
8	kjøttvekt	kjøttvekt	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
9	som	som	PRON	_	PronType=Rel	10	nsubj	_	_
10	slår	slå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	_
11	ut	ut	ADP	_	_	10	compound:prt	_	_
12	.	$.	PUNCT	_	_	8	punct	_	_

~~~


