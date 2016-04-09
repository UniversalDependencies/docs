

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

141 nodes (0%) are attached to their parents as `compound`.

92 instances of `compound` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0354609929078.

The following 3 pairs of parts of speech are connected with `compound`: [nl-pos/NUM]()-[nl-pos/NUM]() (98; 70% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (26; 18% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (17; 12% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	vier_komma_drie	vier_komma_drie	NUM	Num_N_Num	Definite=Def|Number=Sing|NumType=Card	2	compound	_	_
2	miljoen	miljoen	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 compound	color:blue
1	hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	zette	zet	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	het	het	PRON	Pron|per|3|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	2	dobj	_	_
4	op	op	ADP	Prep|voor	AdpType=Prep	6	mark	_	_
5	een	een	PRON	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	6	nmod	_	_
6	lopen	loop	VERB	V|intrans|inf|subst	Subcat=Intr|VerbForm=Inf	2	compound	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound	color:blue
1	Frelimo	Frelimo	PROPN	N|eigen|ev|neut	Number=Sing	2	nsubj	_	_
2	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
3	volledig	volledig	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	9	advmod	_	_
4	in	in	ADP	Prep|voor	AdpType=Prep	7	case	_	_
5	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	7	det	_	_
6	communistische	communistisch	ADJ	Adj|attr|stell|vervneut	Case=Nom|Degree=Pos	7	amod	_	_
7	kamp	kamp	NOUN	N|soort|ev|neut	Number=Sing	9	dobj	_	_
8	verzeild	verzeild	VERB	V|intrans|verldw|onverv	Subcat=Intr|Tense=Past|VerbForm=Part	9	compound	_	_
9	geraakt	raak	AUX	V|hulpofkopp|verldw|onverv	Tense=Past|VerbForm=Part	2	aux	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


