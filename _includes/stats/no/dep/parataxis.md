

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is universal.

1320 nodes (0%) are attached to their parents as `parataxis`.

1289 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.755303030303.

The following 31 pairs of parts of speech are connected with `parataxis`: [no-pos/VERB]()-[no-pos/VERB]() (764; 58% instances), [no-pos/ADJ]()-[no-pos/VERB]() (167; 13% instances), [no-pos/NOUN]()-[no-pos/VERB]() (140; 11% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (64; 5% instances), [no-pos/VERB]()-[no-pos/NOUN]() (53; 4% instances), [no-pos/VERB]()-[no-pos/PROPN]() (23; 2% instances), [no-pos/PRON]()-[no-pos/VERB]() (16; 1% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (14; 1% instances), [no-pos/X]()-[no-pos/VERB]() (10; 1% instances), [no-pos/PROPN]()-[no-pos/VERB]() (8; 1% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (6; 0% instances), [no-pos/VERB]()-[no-pos/ADJ]() (6; 0% instances), [no-pos/ADV]()-[no-pos/VERB]() (5; 0% instances), [no-pos/INTJ]()-[no-pos/PROPN]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/SYM]()-[no-pos/PROPN]() (4; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/ADP]()-[no-pos/VERB]() (3; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/ADV]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/INTJ]()-[no-pos/VERB]() (2; 0% instances), [no-pos/VERB]()-[no-pos/INTJ]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (1; 0% instances), [no-pos/CCONJ]()-[no-pos/VERB]() (1; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis	color:blue
1	Han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	forstår	forstå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ingenting	ingenting	PRON	_	Number=Sing|Polarity=Neg|PronType=Neg	2	obj	_	_
4	av	av	ADP	_	_	5	case	_	_
5	livet	liv	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	3	nmod	_	_
6	på	på	ADP	_	_	8	case	_	_
7	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	pub	pub	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	$,	PUNCT	_	_	2	punct	_	_
10	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
11	han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 parataxis	color:blue
1	Helt	hel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	2	advmod	_	_
2	fra	fra	SCONJ	_	_	5	mark	_	_
3	han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
5	baby	baby	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	9	advcl	_	_
6	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
7	han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
8	mer	mye	ADJ	_	Degree=Cmp	9	advmod	_	_
9	krevende	kreve	ADJ	_	VerbForm=Part	0	root	_	SpaceAfter=No
10	,	$,	PUNCT	_	_	9	punct	_	_
11	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
12	pappa	pappa	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	$.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Hver	hver	DET	_	Gender=Fem|Number=Sing|PronType=Tot	3	det	_	_
2	eneste	eneste	NUM	_	Definite=Def|NumType=Card	3	nummod	_	_
3	uke	uke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
4	,	$,	PUNCT	_	_	3	punct	_	_
5	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
6	hun	hun	PRON	_	Animacy=Hum|Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	lattermildt	lattermild	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advmod	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is universal.

1615 nodes (1%) are attached to their parents as `parataxis`.

1574 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.2235294117647.

The following 36 pairs of parts of speech are connected with `parataxis`: [no-pos/VERB]()-[no-pos/VERB]() (878; 54% instances), [no-pos/ADJ]()-[no-pos/VERB]() (279; 17% instances), [no-pos/NOUN]()-[no-pos/VERB]() (167; 10% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (50; 3% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (34; 2% instances), [no-pos/ADV]()-[no-pos/VERB]() (28; 2% instances), [no-pos/NOUN]()-[no-pos/NUM]() (28; 2% instances), [no-pos/VERB]()-[no-pos/NUM]() (26; 2% instances), [no-pos/PRON]()-[no-pos/VERB]() (15; 1% instances), [no-pos/VERB]()-[no-pos/NOUN]() (15; 1% instances), [no-pos/VERB]()-[no-pos/PROPN]() (13; 1% instances), [no-pos/X]()-[no-pos/VERB]() (13; 1% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (9; 1% instances), [no-pos/VERB]()-[no-pos/ADJ]() (8; 0% instances), [no-pos/NUM]()-[no-pos/PROPN]() (7; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (6; 0% instances), [no-pos/ADP]()-[no-pos/VERB]() (5; 0% instances), [no-pos/PROPN]()-[no-pos/VERB]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/INTJ]()-[no-pos/VERB]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/INTJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/VERB]()-[no-pos/ADV]() (1; 0% instances), [no-pos/VERB]()-[no-pos/CCONJ]() (1; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (1; 0% instances), [no-pos/VERB]()-[no-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Men	men	CCONJ	_	_	2	cc	_	_
2	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ikkje	ikkje	ADV	_	Polarity=Neg	2	advmod	_	_
4	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
5	brødbakemaskin	brødbakemaskin	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	2	punct	_	_
7	tenker	tenke	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
8	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
9	kanskje	kanskje	ADV	_	_	7	advmod	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Men	men	CCONJ	_	_	4	cc	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	skitnervøs	skitnervøs	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
5	,	$,	PUNCT	_	_	4	punct	_	_
6	seier	seie	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
7	Tone	Tone	NOUN	_	Gender=Fem	6	nsubj	_	_
8	Damli	Damli	PROPN	_	_	7	flat:name	_	_
9	Aaberge	Aaberge	PROPN	_	_	7	flat:name	_	_
10	til	til	ADP	_	_	11	case	_	_
11	NRK	NRK	PROPN	_	_	6	obl	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Heller	heller	ADV	_	_	2	advmod	_	_
2	ikkje	ikkje	ADV	_	Polarity=Neg	3	advmod	_	_
3	nynorsk	nynorsk	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	$,	PUNCT	_	_	3	punct	_	_
5	sa	seie	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	parataxis	_	_
6	Viken	Viken	PROPN	_	_	5	nsubj	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	3	punct	_	_

~~~


