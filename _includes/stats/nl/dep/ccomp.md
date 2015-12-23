

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

104 nodes (0%) are attached to their parents as `ccomp`.

70 instances of `ccomp` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.26923076923077.

The following 18 pairs of parts of speech are connected with `ccomp`: [nl-pos/VERB]()-[nl-pos/VERB]() (35; 34% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (27; 26% instances), [nl-pos/SCONJ]()-[nl-pos/VERB]() (10; 10% instances), [nl-pos/X]()-[nl-pos/VERB]() (4; 4% instances), [nl-pos/AUX]()-[nl-pos/AUX]() (3; 3% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (3; 3% instances), [nl-pos/SCONJ]()-[nl-pos/ADJ]() (3; 3% instances), [nl-pos/SCONJ]()-[nl-pos/AUX]() (3; 3% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (3; 3% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (2; 2% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (2; 2% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (2; 2% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (2; 2% instances), [nl-pos/ADV]()-[nl-pos/ADJ]() (1; 1% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (1; 1% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (1; 1% instances), [nl-pos/SCONJ]()-[nl-pos/NOUN]() (1; 1% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	geef	geef	VERB	V|trans|imp	Mood=Imp|Subcat=Tran|VerbForm=Fin	0	root	_	_
2	het	het	PRON	Pron|per|3|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	1	iobj	_	_
3	aan	aan	ADP	Prep|voor	AdpType=Prep	7	mark	_	_
4	wie	wie	PRON	Pron|betr|neut|zelfst	PronType=Rel	7	nsubj	_	_
5	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	6	dobj	_	_
6	verdiend	verdiend	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	7	aux	_	_
7	heeft	heb	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	1	ccomp	_	_
8	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 ccomp	color:blue
1	In	in	ADP	Prep|voor	AdpType=Prep	3	case	_	_
2	welk	welk	PRON	Pron|vrag|neut|zelfst	PronType=Int	3	nmod	_	_
3	land	land	NOUN	N|soort|ev|neut	Number=Sing	4	nsubj	_	_
4	worden	word	AUX	V|hulpofkopp|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
5	buzkashi-wedstrijden	wedstrijd	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	6	ccomp	_	_
6	gehouden	houd	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	4	aux	_	_
7	?	?	PUNCT	Punc|vraag	PunctType=Qest	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	vertrok	vertrek	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	0	root	_	_
3	zonder	zonder	SCONJ	Conj|onder|metinf	_	2	advmod	_	_
4	dat	dat	SCONJ	Conj|onder|metfin	_	7	mark	_	_
5	zij	zij	PRON	Pron|per|3|evofmv|nom	Case=Nom|Number=Plur,Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	7	dobj	_	_
7	wist	weet	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	3	ccomp	_	_

~~~


