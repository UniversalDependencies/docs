

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is a language-specific subtype of [acl]().

601 nodes (1%) are attached to their parents as `acl:relcl`.

601 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.26455906821963.

The following 26 pairs of parts of speech are connected with `acl:relcl`: [nl-pos/NOUN]()-[nl-pos/VERB]() (403; 67% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (67; 11% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (33; 5% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (25; 4% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (14; 2% instances), [nl-pos/NUM]()-[nl-pos/VERB]() (9; 1% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (9; 1% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (8; 1% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (6; 1% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (4; 1% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (3; 0% instances), [nl-pos/X]()-[nl-pos/VERB]() (3; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/PUNCT]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/X]()-[nl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Lijst	lijst	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
2	van	van	ADP	_	_	4	case	_	_
3	Belgische	Belgisch	ADJ	_	Degree=Pos	4	amod	_	_
4	politici	politicus	NOUN	_	Number=Plur	1	nmod	_	_
5	die	die	PRON	_	PronType=Rel	8	nsubj	_	_
6	van	van	ADP	_	_	7	case	_	_
7	partij	partij	NOUN	_	Gender=Com|Number=Sing	8	obl	_	_
8	wisselden	wisselen	VERB	_	Number=Plur|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Zeker	zeker	ADJ	_	Degree=Pos	3	amod	_	_
2	voor	voor	ADP	_	_	3	case	_	_
3	Boudewijn	Boudewijn	PROPN	_	Gender=Com|Number=Sing	0	root	_	_
4	die	die	PRON	_	PronType=Rel	9	nsubj	_	_
5	haar	haar	PRON	_	Case=Acc|Person=3|PronType=Prs	9	obj	_	_
6	als	als	ADP	_	_	8	mark	_	_
7	zijn	zijn	DET	_	_	8	det	_	_
8	moeder	moeder	NOUN	_	Gender=Com|Number=Sing	9	xcomp	_	_
9	beschouwde	beschouwen	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	De	de	DET	_	Definite=Def	3	det	_	_
2	Japanse	Japans	ADJ	_	Degree=Pos	3	amod	_	_
3	Tuin	tuin	NOUN	_	Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	die	die	PRON	_	PronType=Rel	8	nsubj	_	_
6	tevens	tevens	ADV	_	_	8	advmod	_	_
7	de	de	DET	_	Definite=Def	8	det	_	_
8	grootste	groot	ADJ	_	Degree=Sup	3	acl:relcl	_	_
9	van	van	ADP	_	_	11	case	_	_
10	heel	heel	ADJ	_	Degree=Pos	11	amod	_	_
11	Europa	Europa	PROPN	_	Gender=Neut|Number=Sing	8	nmod	_	_
12	is	zijn	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


