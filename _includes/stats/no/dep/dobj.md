

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

13923 nodes (4%) are attached to their parents as `dobj`.

13163 instances of `dobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97507721037133.

The following 26 pairs of parts of speech are connected with `dobj`: [no-pos/VERB]()-[no-pos/NOUN]() (9883; 71% instances), [no-pos/VERB]()-[no-pos/PRON]() (2869; 21% instances), [no-pos/VERB]()-[no-pos/PROPN]() (563; 4% instances), [no-pos/VERB]()-[no-pos/ADJ]() (338; 2% instances), [no-pos/VERB]()-[no-pos/DET]() (89; 1% instances), [no-pos/VERB]()-[no-pos/NUM]() (45; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (40; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (35; 0% instances), [no-pos/VERB]()-[no-pos/ADV]() (11; 0% instances), [no-pos/VERB]()-[no-pos/SCONJ]() (11; 0% instances), [no-pos/VERB]()-[no-pos/X]() (9; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (7; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/DET]() (1; 0% instances), [no-pos/ADP]()-[no-pos/PRON]() (1; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/DET]()-[no-pos/DET]() (1; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/NUM]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 dobj	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
2	uaktet	uaktet	ADP	_	_	8	mark	_	_
3	at	at	SCONJ	_	_	8	mark	_	_
4	også	også	ADV	_	_	5	advmod	_	_
5	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
6	selv	selv	DET	_	PronType=Prs	5	det	_	_
7	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	underskrevet	underskrive	VERB	_	VerbForm=Part	1	advcl	_	_
9	dommen	dom	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	dobj	_	_
10	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dobj	color:blue
1	Jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	føler	føle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	meg	jeg	PRON	_	Animacy=Anim|Case=Acc|Number=Sing|Person=1|PronType=Prs	2	dobj	_	_
4	også	også	ADV	_	_	2	advmod	_	_
5	selv	selv	ADV	_	_	2	advmod	_	_
6	litt	litt	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	advmod	_	_
7	smittet	smitte	ADJ	_	Definite=Ind|Number=Sing|VerbForm=Part	2	xcomp	_	_
8	;	$;	PUNCT	_	_	2	punct	_	_
9	jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	spør	spørre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	conj	_	_
11	:	$:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dobj	color:blue
1	Nord-Korea	Nord-Korea	PROPN	_	_	2	nsubj	_	_
2	fornærmet	fornærme	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	Hillary	Hillary	PROPN	_	_	2	dobj	_	_
4	Clinton	Clinton	PROPN	_	_	3	name	_	_
5	|	$|	PUNCT	_	_	2	punct	_	_

~~~


