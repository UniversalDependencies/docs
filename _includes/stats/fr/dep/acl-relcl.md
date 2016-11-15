

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is a language-specific subtype of [acl]().

3400 nodes (1%) are attached to their parents as `acl:relcl`.

3399 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.74794117647059.

The following 30 pairs of parts of speech are connected with `acl:relcl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (2378; 70% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (405; 12% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (327; 10% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (85; 3% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (72; 2% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (26; 1% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (17; 1% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (12; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (11; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (11; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (9; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (9; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (6; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (5; 0% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (5; 0% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/X]()-[fr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	fonce	foncer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	et	et	CONJ	_	_	2	cc	_	_
4	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
5	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
6	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	audace	audace	NOUN	_	Gender=Fem|Number=Sing	5	dobj	_	_
8	qui	qui	PRON	_	PronType=Rel	10	nsubj	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	récompensée	récompenser	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Victor	Victor	PROPN	_	_	0	root	_	_
2	qui	qui	PRON	_	PronType=Rel	3	nsubj	_	_
3	pète	péter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Qu'	que	PRON	_	_	0	root	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	1	expl	_	_
4	qui	qui	PRON	_	_	3	mwe	_	_
5	va	aller	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	augmenter	augmenter	VERB	_	VerbForm=Inf	3	acl:relcl	_	_
7	?	?	PUNCT	_	_	1	punct	_	_

~~~


