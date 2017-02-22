

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is a language-specific subtype of [acl]().

1633 nodes (2%) are attached to their parents as `acl:relcl`.

1583 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.87568891610533.

The following 32 pairs of parts of speech are connected with `acl:relcl`: [da-pos/NOUN]()-[da-pos/VERB]() (668; 41% instances), [da-pos/PRON]()-[da-pos/VERB]() (420; 26% instances), [da-pos/ADJ]()-[da-pos/VERB]() (211; 13% instances), [da-pos/PROPN]()-[da-pos/VERB]() (118; 7% instances), [da-pos/VERB]()-[da-pos/VERB]() (50; 3% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (34; 2% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (30; 2% instances), [da-pos/ADV]()-[da-pos/VERB]() (22; 1% instances), [da-pos/NUM]()-[da-pos/VERB]() (12; 1% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (10; 1% instances), [da-pos/NOUN]()-[da-pos/ADV]() (8; 0% instances), [da-pos/PROPN]()-[da-pos/ADJ]() (7; 0% instances), [da-pos/ADV]()-[da-pos/PROPN]() (6; 0% instances), [da-pos/PRON]()-[da-pos/ADJ]() (6; 0% instances), [da-pos/VERB]()-[da-pos/NOUN]() (6; 0% instances), [da-pos/ADP]()-[da-pos/PROPN]() (3; 0% instances), [da-pos/DET]()-[da-pos/VERB]() (3; 0% instances), [da-pos/PRON]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/PRON]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (2; 0% instances), [da-pos/X]()-[da-pos/VERB]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/PRON]() (1; 0% instances), [da-pos/ADV]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/CCONJ]()-[da-pos/VERB]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/ADP]() (1; 0% instances), [da-pos/PRON]()-[da-pos/ADV]() (1; 0% instances), [da-pos/PRON]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/ADP]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/ADV]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Fakkeltoget	fakkeltog	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
2	sluttede	slutte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ved	ved	ADP	_	AdpType=Prep	4	case	_	_
4	bålet	bål	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	obl	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	der	der	PRON	_	PartType=Inf	8	nsubj	_	_
7	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
8	antændt	antænde	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	4	acl:relcl	_	_
9	af	af	ADP	_	AdpType=Prep	10	case	_	_
10	faklerne	fakkel	NOUN	_	Definite=Def|Gender=Com|Number=Plur	8	obl	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	-	-	PUNCT	_	_	2	punct	_	_
2	Hvad	hvad	PRON	_	Number=Sing|PronType=Int,Rel	0	root	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
7	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Hun	hun	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	anderledes	anderledes	ADJ	_	Degree=Pos	0	root	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	end	end	ADP	_	_	7	mark	_	_
6	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	troede	tro	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


