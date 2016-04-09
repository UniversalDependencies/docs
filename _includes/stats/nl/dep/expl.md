

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

467 nodes (0%) are attached to their parents as `expl`.

294 instances of `expl` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.1541755888651.

The following 12 pairs of parts of speech are connected with `expl`: [nl-pos/VERB]()-[nl-pos/PRON]() (229; 49% instances), [nl-pos/AUX]()-[nl-pos/PRON]() (155; 33% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (42; 9% instances), [nl-pos/ADP]()-[nl-pos/PRON]() (17; 4% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (13; 3% instances), [nl-pos/VERB]()-[nl-pos/X]() (3; 1% instances), [nl-pos/AUX]()-[nl-pos/X]() (2; 0% instances), [nl-pos/SCONJ]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/AUX]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/X]()-[nl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl	color:blue
1	De	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	2	det	_	_
2	krant	krant	NOUN	N|soort|ev|neut	Number=Sing	3	nsubj	_	_
3	baseert	baseer	VERB	V|refl|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	_
4	zich	zich	PRON	Pron|ref|3|evofmv	Number=Plur,Sing|Person=3|PronType=Prs|Reflex=Yes	3	expl	_	_
5	op	op	ADP	Prep|voor	AdpType=Prep	6	case	_	_
6	bronnen	bron	NOUN	N|soort|mv|neut	Number=Plur	3	dobj	_	_
7	rond	rond	ADP	Prep|voor	AdpType=Prep	9	case	_	_
8	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	9	det	_	_
9	onderneming	onderneming	NOUN	N|soort|ev|neut	Number=Sing	6	nmod	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl	color:blue
1	Bellaart	Bellaart	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	2	nsubj	_	_
2	weigerde	weiger	VERB	V|hulp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Mod	0	root	_	_
3	zich	zich	PRON	Pron|ref|3|evofmv	Number=Plur,Sing|Person=3|PronType=Prs|Reflex=Yes	5	expl	_	_
4	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	5	mark	_	_
5	verschuilen	verschuil	AUX	V|refl|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Reflex=Yes|Tense=Pres|VerbForm=Fin	2	aux	_	_
6	achter	achter	ADP	Prep|voor	AdpType=Prep	8	case	_	_
7	allerlei	allerlei	PRON	Pron|onbep|neut|attr	PronType=Ind	8	nmod	_	_
8	excuses	excuus	NOUN	N|soort|mv|neut	Number=Plur	5	nmod	_	_
9	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	voelt	voel	VERB	V|refl|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	zich	zich	PRON	Pron|ref|3|evofmv	Number=Plur,Sing|Person=3|PronType=Prs|Reflex=Yes	4	expl	_	_
4	tevreden	tevreden	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	_
5	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	_

~~~


