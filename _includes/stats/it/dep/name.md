

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

3593 nodes (1%) are attached to their parents as `name`.

3593 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14611745059839.

The following 10 pairs of parts of speech are connected with `name`: [it-pos/PROPN]()-[it-pos/PROPN]() (3498; 97% instances), [it-pos/PROPN]()-[it-pos/NUM]() (56; 2% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (9; 0% instances), [it-pos/PROPN]()-[it-pos/SYM]() (8; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (7; 0% instances), [it-pos/PROPN]()-[it-pos/PART]() (4; 0% instances), [it-pos/X]()-[it-pos/X]() (4; 0% instances), [it-pos/PUNCT]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/X]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/ADP]()-[it-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 name	color:blue
1	Corriere	Corriere	PROPN	SP	_	0	root	_	_
2	Sport	Sport	PROPN	SP	_	1	name	_	_
3	da	da	ADP	E	_	4	case	_	_
4	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	23	23	NUM	N	NumType=Card	4	nummod	_	_
6	a	a	ADP	E	_	7	case	_	_
7	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
8	26	26	NUM	N	NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 name	color:blue
1	Quando	quando	ADV	B	_	3	advmod	_	_
2	venne	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	lanciato	lanciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	Apollo	Apollo	PROPN	SP	_	3	nsubjpass	_	_
6	11	11	NUM	N	NumType=Card	5	name	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 name	color:blue
1	"	"	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	Procollagen	Procollagen	PROPN	SP	_	0	root	_	_
3	Anti	anti	ADJ	A	_	5	amod	_	SpaceAfter=No
4	-	-	PUNCT	FF	_	3	punct	_	SpaceAfter=No
5	Cellulite	Cellulite	NOUN	S	Gender=Fem|Number=Sing	2	nmod	_	_
6	Body	Body	NOUN	S	_	2	nmod	_	_
7	Complex	Complex	NOUN	S	_	6	compound	_	SpaceAfter=No
8	"	"	PUNCT	FB	_	2	punct	_	_
9	di	di	ADP	E	_	10	case	_	_
10	Ultima	Ultima	PROPN	SP	_	2	nmod	_	_
11	II	II	ADJ	NO	Number=Sing|NumType=Ord	10	name	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	2	punct	_	_

~~~


