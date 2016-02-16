

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

1120 nodes (1%) are attached to their parents as `neg`.

849 instances of `neg` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.31964285714286.

The following 17 pairs of parts of speech are connected with `neg`: [nl-pos/AUX]()-[nl-pos/ADV]() (448; 40% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (310; 28% instances), [nl-pos/ADJ]()-[nl-pos/ADV]() (216; 19% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (53; 5% instances), [nl-pos/PRON]()-[nl-pos/ADV]() (32; 3% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (29; 3% instances), [nl-pos/DET]()-[nl-pos/ADV]() (13; 1% instances), [nl-pos/X]()-[nl-pos/ADV]() (7; 1% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/ADP]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 neg	color:blue
1	Het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	2	det	_	_
2	resultaat	resultaat	NOUN	N|soort|ev|neut	Number=Sing	3	nsubj	_	_
3	zal	zal	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	0	root	_	_
4	overigens	overigens	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	advmod	_	_
5	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	neg	_	_
6	officieel	officieel	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	10	advmod	_	_
7	in	in	ADP	Prep|voor	AdpType=Prep	9	case	_	_
8	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	9	det	_	_
9	boeken	boek	NOUN	N|soort|mv|neut	Number=Plur	10	nmod	_	_
10	komen	kom	AUX	V|intrans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Pres|VerbForm=Fin	3	aux	_	_
11	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 neg	color:blue
1	schaam	schaam	VERB	V|refl|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	_
2	je	je	PRON	Pron|onbep|neut|zelfst	PronType=Ind	1	nsubj	_	_
3	je	je	PRON	Pron|ref|2|ev	Number=Sing|Person=2|PronType=Prs|Reflex=Yes	1	expl	_	_
4	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	1	neg	_	_
5	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 neg	color:blue
1	De	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	2	det	_	_
2	aanbieding	aanbieding	NOUN	N|soort|ev|neut	Number=Sing	7	nsubj	_	_
3	van	van	ADP	Prep|voor	AdpType=Prep	4	case	_	_
4	Parma	Parma	PROPN	N|eigen|ev|neut	Number=Sing	2	nmod	_	_
5	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	7	cop	_	_
6	heel	heel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	7	advmod	_	_
7	mooi	mooi	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	_
8	,	,	PUNCT	Punc|komma	PunctType=Comm	7	punct	_	_
9	maar	maar	CONJ	Conj|neven	_	7	cc	_	_
10	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	12	neg	_	_
11	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	12	det	_	_
12	enige	enige	ADJ	Adj|zelfst|stell|vervneut	Case=Nom|Degree=Pos	7	conj	_	_
13	.	.	PUNCT	Punc|punt	PunctType=Peri	7	punct	_	_
14	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	7	punct	_	_

~~~


