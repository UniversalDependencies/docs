

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is a language-specific subtype of [compound]().

1927 nodes (1%) are attached to their parents as `compound:prt`.

1106 instances of `compound:prt` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.22781525687597.

The following 27 pairs of parts of speech are connected with `compound:prt`: [nl-pos/VERB]()-[nl-pos/ADV]() (783; 41% instances), [nl-pos/AUX]()-[nl-pos/ADV]() (271; 14% instances), [nl-pos/AUX]()-[nl-pos/X]() (197; 10% instances), [nl-pos/VERB]()-[nl-pos/X]() (187; 10% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (134; 7% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (110; 6% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (58; 3% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (57; 3% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (44; 2% instances), [nl-pos/ADJ]()-[nl-pos/ADV]() (25; 1% instances), [nl-pos/AUX]()-[nl-pos/ADP]() (16; 1% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (12; 1% instances), [nl-pos/VERB]()-[nl-pos/SCONJ]() (7; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (5; 0% instances), [nl-pos/NOUN]()-[nl-pos/X]() (4; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (2; 0% instances), [nl-pos/AUX]()-[nl-pos/SCONJ]() (2; 0% instances), [nl-pos/PRON]()-[nl-pos/X]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 compound:prt	color:blue
1	Voor	voor	ADP	Prep|voor	AdpType=Prep	3	case	_	_
2	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	3	det	_	_
3	oefendrieluik	oefen_drieluik	NOUN	N|soort|ev|neut	Number=Sing	6	nmod	_	_
4	met	met	ADP	Prep|voor	AdpType=Prep	5	case	_	_
5	Pakistan	Pakistan	PROPN	N|eigen|ev|neut	Number=Sing	3	nmod	_	_
6	zette	zet_in	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
7	Bellaart	Bellaart	PROPN	N|eigen|ev|neut	Number=Sing	6	nsubj	_	_
8	hoog	hoog	ADJ	Adj|attr|stell|onverv	Degree=Pos	6	advmod	_	_
9	in	in	ADV	Adv|deelv	PartType=Vbp	6	compound:prt	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 compound:prt	color:blue
1	Het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	2	nsubj	_	_
2	hoorde	hoor	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	bij	bij	ADP	Prep|voor	AdpType=Prep	6	case	_	_
4	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	6	det	_	_
5	warme	warm	ADJ	Adj|attr|stell|vervneut	Case=Nom|Degree=Pos	6	amod	_	_
6	zomerdag	zomerdag	NOUN	N|soort|ev|neut	Number=Sing	2	nmod	_	_
7	die	die	PRON	Pron|betr|neut|zelfst	PronType=Rel	11	mark	_	_
8	ze	ze	PRON	Pron|per|3|evofmv|nom	Case=Nom|Number=Plur,Sing|Person=3|PronType=Prs	12	nsubj	_	_
9	ginds	ginds	ADV	Adv|gew|aanw	PronType=Dem	12	advmod	_	_
10	achter	achter	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	12	compound:prt	_	_
11	had	heb	VERB	V|hulp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Mod	6	acl	_	_
12	gelaten	laat	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	11	aux	_	_
13	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	Ook	ook	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	3	nmod	_	_
2	die	die	PRON	Pron|aanw|neut|attr	PronType=Dem	3	nmod	_	_
3	voorsprong	voorsprong	NOUN	N|soort|ev|neut	Number=Sing	4	nsubj	_	_
4	werd	word	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
5	uit_handen	uit_handen	X	Prep_N|voor_soort|mv|neut	Number=Plur	6	compound:prt	_	_
6	gegeven	geef	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	4	aux	_	_
7	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	_

~~~


