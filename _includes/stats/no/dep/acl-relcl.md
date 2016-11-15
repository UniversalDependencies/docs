

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is a language-specific subtype of [acl]().

4317 nodes (1%) are attached to their parents as `acl:relcl`.

4314 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.60481816075979.

The following 35 pairs of parts of speech are connected with `acl:relcl`: [no-pos/NOUN]()-[no-pos/VERB]() (2644; 61% instances), [no-pos/PRON]()-[no-pos/VERB]() (728; 17% instances), [no-pos/PROPN]()-[no-pos/VERB]() (253; 6% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (194; 4% instances), [no-pos/ADJ]()-[no-pos/VERB]() (131; 3% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (80; 2% instances), [no-pos/PRON]()-[no-pos/ADJ]() (57; 1% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (41; 1% instances), [no-pos/PRON]()-[no-pos/NOUN]() (37; 1% instances), [no-pos/DET]()-[no-pos/VERB]() (32; 1% instances), [no-pos/NUM]()-[no-pos/VERB]() (25; 1% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (15; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (14; 0% instances), [no-pos/PRON]()-[no-pos/ADV]() (10; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (8; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (7; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (5; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (3; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/PRON]()-[no-pos/DET]() (2; 0% instances), [no-pos/PROPN]()-[no-pos/ADP]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/ADV]() (1; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/X]()-[no-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	rører	røre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ved	ved	ADP	_	_	6	case	_	_
4	de	de	DET	_	Number=Plur|PronType=Dem	6	det	_	_
5	dypeste	dyp	ADJ	_	Definite=Def|Degree=Sup	6	amod	_	_
6	verdiene	verdi	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	2	nmod	_	_
7	og	og	CONJ	_	_	6	cc	_	_
8	holdningene	holdning	NOUN	_	Definite=Def|Gender=Fem|Number=Plur	6	conj	_	_
9	vi	vi	PRON	_	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
10	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	2	punct	_	SpaceAfter=No
12	»	$"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
1	-	$-	PUNCT	_	_	4	punct	_	_
2	Men	men	CONJ	_	_	4	cc	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubjpass	_	_
4	innføres	innføre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	jo	jo	ADV	_	_	4	advmod	_	_
6	for	for	ADP	_	_	8	mark	_	_
7	å	å	PART	_	_	8	mark	_	_
8	beskytte	beskytte	VERB	_	VerbForm=Inf	4	advcl	_	_
9	dere	dere	PRON	_	Animacy=Anim|Case=Acc|Number=Plur|Person=2|PronType=Prs	8	dobj	_	_
10	som	som	PRON	_	PronType=Rel	11	nsubj	_	_
11	jobber	jobbe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
12	her	her	ADV	_	_	11	advmod	_	SpaceAfter=No
13	?	$?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Eller	eller	CONJ	_	_	4	cc	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	Sacha	Sacha	PROPN	_	_	0	root	_	_
5	Baron	Baron	PROPN	_	_	4	name	_	_
6	Cohen	Cohen	PROPN	_	_	4	name	_	_
7	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	siktet	sikte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
9	til	til	ADP	_	_	8	compound:prt	_	SpaceAfter=No
10	?	$?	PUNCT	_	_	4	punct	_	_

~~~


