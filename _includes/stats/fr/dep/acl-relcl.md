

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is a language-specific subtype of [acl]().

3398 nodes (1%) are attached to their parents as `acl:relcl`.

3397 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.77045320776928.

The following 34 pairs of parts of speech are connected with `acl:relcl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (2316; 68% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (406; 12% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (319; 9% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (90; 3% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (88; 3% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (30; 1% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (29; 1% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (15; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (15; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (13; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (13; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (10; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (10; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (7; 0% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (6; 0% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (4; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/PART]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/X]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/X]()-[fr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Elle	_	PRON	_	_	2	nsubj	_	_
2	fonce	_	VERB	_	_	0	root	_	_
3	et	_	CONJ	_	_	2	cc	_	_
4	c'	_	PRON	_	_	5	nsubj	_	_
5	est	_	VERB	_	_	2	conj	_	_
6	cette	_	DET	_	_	7	det	_	_
7	audace	_	NOUN	_	_	5	dobj	_	_
8	qui	_	PRON	_	_	10	nsubj	_	_
9	est	_	AUX	_	_	10	aux	_	_
10	récompensée	_	VERB	_	_	7	acl:relcl	_	_
11	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Victor	_	PROPN	_	_	0	root	_	_
2	qui	_	PRON	_	_	3	nsubj	_	_
3	pète	_	VERB	_	_	1	acl:relcl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Qu'	_	PRON	_	_	0	root	_	_
2	est	_	VERB	_	_	1	cop	_	_
3	-ce	_	PRON	_	_	1	expl	_	_
4	qui	_	PRON	_	_	3	mwe	_	_
5	va	_	AUX	_	_	6	aux	_	_
6	augmenter	_	VERB	_	_	3	acl:relcl	_	_
7	?	_	PUNCT	_	_	1	punct	_	_

~~~


