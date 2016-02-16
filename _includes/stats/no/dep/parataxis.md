

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

1501 nodes (0%) are attached to their parents as `parataxis`.

1462 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.8021319120586.

The following 34 pairs of parts of speech are connected with `parataxis`: [no-pos/VERB]()-[no-pos/VERB]() (863; 57% instances), [no-pos/ADJ]()-[no-pos/VERB]() (190; 13% instances), [no-pos/NOUN]()-[no-pos/VERB]() (154; 10% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (65; 4% instances), [no-pos/VERB]()-[no-pos/NOUN]() (57; 4% instances), [no-pos/VERB]()-[no-pos/PROPN]() (24; 2% instances), [no-pos/PRON]()-[no-pos/VERB]() (18; 1% instances), [no-pos/VERB]()-[no-pos/PUNCT]() (16; 1% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (15; 1% instances), [no-pos/X]()-[no-pos/VERB]() (10; 1% instances), [no-pos/PROPN]()-[no-pos/VERB]() (9; 1% instances), [no-pos/ADV]()-[no-pos/VERB]() (7; 0% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (7; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (7; 0% instances), [no-pos/INTJ]()-[no-pos/PROPN]() (6; 0% instances), [no-pos/VERB]()-[no-pos/ADJ]() (6; 0% instances), [no-pos/NOUN]()-[no-pos/PUNCT]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (4; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/SYM]()-[no-pos/PROPN]() (4; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (4; 0% instances), [no-pos/ADP]()-[no-pos/VERB]() (3; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (3; 0% instances), [no-pos/INTJ]()-[no-pos/VERB]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/ADV]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/VERB]()-[no-pos/INTJ]() (2; 0% instances), [no-pos/X]()-[no-pos/PUNCT]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (1; 0% instances), [no-pos/CONJ]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis	color:blue
1	Han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	forstår	forstå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ingenting	ingenting	PRON	_	Number=Sing	2	dobj	_	_
4	av	av	ADP	_	_	5	case	_	_
5	livet	liv	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	3	nmod	_	_
6	på	på	ADP	_	_	8	case	_	_
7	en	en	DET	_	Gender=Masc|Number=Sing	8	det	_	_
8	pub	pub	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
9	,	$,	PUNCT	_	_	2	punct	_	_
10	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
11	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
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
3	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
5	baby	baby	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	9	advcl	_	_
6	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
7	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
8	mer	mye	ADJ	_	Degree=Cmp	9	advmod	_	_
9	krevende	kreve	ADJ	_	_	0	root	_	_
10	,	$,	PUNCT	_	_	9	punct	_	_
11	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
12	pappa	pappa	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	11	nsubj	_	_
13	.	$.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Hver	hver	DET	_	Gender=Fem|Number=Sing	3	det	_	_
2	eneste	eneste	NUM	_	Definite=Def	3	det	_	_
3	uke	uke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
4	,	$,	PUNCT	_	_	3	punct	_	_
5	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
6	hun	hun	PRON	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	lattermildt	lattermild	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advmod	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


