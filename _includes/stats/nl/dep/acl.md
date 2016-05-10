

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

3432 nodes (2%) are attached to their parents as `acl`.

2120 instances of `acl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.22086247086247.

The following 31 pairs of parts of speech are connected with `acl`: [nl-pos/NOUN]()-[nl-pos/VERB]() (2623; 76% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (373; 11% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (113; 3% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (95; 3% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (78; 2% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (53; 2% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (16; 0% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (16; 0% instances), [nl-pos/NOUN]()-[nl-pos/X]() (10; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (7; 0% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (6; 0% instances), [nl-pos/X]()-[nl-pos/VERB]() (6; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (5; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (4; 0% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (3; 0% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/PRON]()-[nl-pos/NOUN]() (3; 0% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/ADP]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/CONJ]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl	color:blue
1	Volgende	volg	VERB	V|intrans|tegdw|vervneut	Case=Nom|Subcat=Intr|Tense=Pres|VerbForm=Part	2	acl	_	_
2	week	week	NOUN	N|soort|ev|neut	Number=Sing	3	nmod	_	_
3	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
4	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	5	det	_	_
5	return	return	PROPN	N|eigen|ev|neut	Number=Sing	3	nsubj	_	_
6	in	in	ADP	Prep|voor	AdpType=Prep	8	case	_	_
7	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	8	det	_	_
8	Abe	Abe	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	3	advmod	_	MWE=Abe_Lenstra-stadion|MWEPOS=X
9	Lenstra-stadion	Lenstra-stadion	PROPN	PROPN	_	8	name	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	2	det	_	_
2	bedrijf	bedrijf	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	_
3	waar	waar	ADV	Adv|gew|vrag	PronType=Int	5	mark	_	_
4	varkenspest	pest	NOUN	N|soort|ev|neut	Number=Sing	6	nsubj	_	_
5	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	2	acl	_	_
6	uitgebroken	breek	AUX	V|intrans|verldw|onverv	Subcat=Intr|Tense=Past|VerbForm=Part	2	aux	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	wij	wij	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	0	root	_	_
2	drieën	drie	VERB	V|intrans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Pres|VerbForm=Fin	1	acl	_	_
3	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

1146 nodes (1%) are attached to their parents as `acl`.

1056 instances of `acl` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.61169284467714.

The following 50 pairs of parts of speech are connected with `acl`: [nl-pos/NOUN]()-[nl-pos/VERB]() (615; 54% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (102; 9% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (82; 7% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (55; 5% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (45; 4% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (30; 3% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (25; 2% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (21; 2% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (20; 2% instances), [nl-pos/DET]()-[nl-pos/NUM]() (18; 2% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (18; 2% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (15; 1% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (13; 1% instances), [nl-pos/NUM]()-[nl-pos/VERB]() (12; 1% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (11; 1% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (5; 0% instances), [nl-pos/X]()-[nl-pos/VERB]() (5; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (4; 0% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/ADP]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (3; 0% instances), [nl-pos/DET]()-[nl-pos/VERB]() (3; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/DET]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/X]() (2; 0% instances), [nl-pos/X]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/SCONJ]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/SYM]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/X]() (1; 0% instances), [nl-pos/PUNCT]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	Ze	ze	PRON	_	Person=3|PronType=Prs	2	nsubj	_	_
2	creëren	creëren	VERB	_	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
3	een	een	DET	_	Definite=Ind	4	det	_	_
4	rookgordijn	rookgordijn	NOUN	_	Gender=Neut|Number=Sing	2	dobj	_	_
5	om	om	PART	_	_	8	mark	_	_
6	ons	ons	PRON	_	Case=Acc|Person=1|PronType=Prs	8	dobj	_	_
7	te	te	PART	_	_	8	mark	_	_
8	misleiden	misleiden	VERB	_	VerbForm=Inf	4	acl	_	_
9	.	.	PUNCT	_	_	2	punct	_	_
10	"	"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	Sidonia	Sidonia	PROPN	_	Gender=Com|Number=Sing	0	root	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	Jeroen	Jeroen	PROPN	_	_	1	parataxis	_	_
4	Maes	Maes	PROPN	_	_	3	name	_	_
5	,	,	PUNCT	_	_	1	punct	_	_
6	vervangen	vervangen	VERB	_	VerbForm=Part	3	acl	_	_
7	door	door	ADP	_	_	8	case	_	_
8	Frank	Frank	PROPN	_	_	6	nmod	_	_
9	De	De	PROPN	_	_	8	name	_	_
10	Peuter	Peuter	PROPN	_	_	8	name	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Zijn	zijn	DET	_	_	3	det	_	_
2	echte	echt	ADJ	_	Degree=Pos	3	amod	_	_
3	loopbaan	loopbaan	NOUN	_	Gender=Com|Number=Sing	6	nsubj	_	_
4	als	als	PART	_	_	5	mark	_	_
5	schrijver	schrijver	NOUN	_	Gender=Com|Number=Sing	3	acl	_	_
6	begon	beginnen	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
7	in	in	ADP	_	_	8	case	_	_
8	Rotterdam	Rotterdam	PROPN	_	Gender=Neut|Number=Sing	6	nmod	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


