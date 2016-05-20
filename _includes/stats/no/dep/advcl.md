

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

5280 nodes (2%) are attached to their parents as `advcl`.

4329 instances of `advcl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.69450757575758.

The following 38 pairs of parts of speech are connected with `advcl`: [no-pos/VERB]()-[no-pos/VERB]() (3426; 65% instances), [no-pos/ADJ]()-[no-pos/VERB]() (744; 14% instances), [no-pos/ADV]()-[no-pos/VERB]() (298; 6% instances), [no-pos/NOUN]()-[no-pos/VERB]() (176; 3% instances), [no-pos/VERB]()-[no-pos/ADJ]() (164; 3% instances), [no-pos/VERB]()-[no-pos/NOUN]() (136; 3% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (45; 1% instances), [no-pos/ADP]()-[no-pos/VERB]() (41; 1% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (37; 1% instances), [no-pos/DET]()-[no-pos/VERB]() (36; 1% instances), [no-pos/ADV]()-[no-pos/ADJ]() (27; 1% instances), [no-pos/PROPN]()-[no-pos/VERB]() (24; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (20; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (20; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (13; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (10; 0% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (8; 0% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (8; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (7; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (7; 0% instances), [no-pos/NUM]()-[no-pos/VERB]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (3; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADP]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/DET]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/INTJ]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/VERB]()-[no-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 advcl	color:blue
1	Som	som	SCONJ	_	_	3	dobj	_	_
2	vi	vi	PRON	_	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	spør	spørre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	advcl	_	_
4	,	$,	PUNCT	_	_	3	punct	_	_
5	vil	ville	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
6	vi	vi	PRON	_	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
7	også	også	ADV	_	_	8	advmod	_	_
8	få	få	VERB	_	VerbForm=Inf	0	root	_	_
9	svar	svar	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	8	dobj	_	_
10	.	$.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	høre	høre	VERB	_	VerbForm=Inf	3	advcl	_	_
6	på	på	ADP	_	_	5	compound:prt	_	_
7	.	$.	PUNCT	_	_	3	punct	_	_
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 advcl	color:blue
1	Men	men	CONJ	_	_	4	cc	_	_
2	jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	bli	bli	VERB	_	VerbForm=Inf	0	root	_	_
5	så	så	ADV	_	_	6	advmod	_	_
6	frisk	frisk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	4	xcomp	_	_
7	jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	kan	kunne	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	advcl	_	_
9	,	$,	PUNCT	_	_	4	punct	_	_
10	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
11	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
12	.	$.	PUNCT	_	_	4	punct	_	_

~~~


