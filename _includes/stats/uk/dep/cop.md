

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

27 nodes (2%) are attached to their parents as `cop`.

19 instances of `cop` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18518518518519.

The following 4 pairs of parts of speech are connected with `cop`: [uk-pos/ADJ]()-[uk-pos/VERB]() (17; 63% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (5; 19% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (4; 15% instances), [uk-pos/VERB]()-[uk-pos/VERB]() (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Він	він	PRON	noun:m:v_naz:&pron:pers:3	Case=Nom|Gender=Masc|Person=3|PronType=Prs	3	nsubj	_	_
2	є	бути	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	чесний	чесний	ADJ	adj:m:v_naz:compb	Case=Nom|Degree=Pos|Gender=Masc	0	root	_	SpaceAfter=No
4	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Це	це	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	4	nsubj	_	_
2	не	не	PART	part	_	4	neg	_	_
3	є	бути	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	потрібно	потрібно	ADV	adv:compb	Degree=Pos	0	root	_	_
5	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Він	він	PRON	noun:m:v_naz:&pron:pers:3	Case=Nom|Gender=Masc|Person=3|PronType=Prs	2	nsubj	_	_
2	є	бути	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	найкращий	найкращий	ADJ	adj:m:v_naz:super	Case=Nom|Degree=Sup|Gender=Masc	4	amod	_	_
4	співак	співак	NOUN	noun:anim:m:v_naz	Animacy=Anim|Case=Nom|Gender=Masc	0	root	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	4	punct	_	_

~~~


