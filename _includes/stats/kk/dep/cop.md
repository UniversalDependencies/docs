

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

174 nodes (3%) are attached to their parents as `cop`.

174 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03448275862069.

The following 7 pairs of parts of speech are connected with `cop`: [kk-pos/ADJ]()-[kk-pos/VERB]() (78; 45% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (70; 40% instances), [kk-pos/ADV]()-[kk-pos/VERB]() (8; 5% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (6; 3% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (6; 3% instances), [kk-pos/PROPN]()-[kk-pos/VERB]() (4; 2% instances), [kk-pos/NUM]()-[kk-pos/VERB]() (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Бастауыш	бастауыш	ADJ	adj	_	2	amod	_	_
2	білім	білім	NOUN	n	_	4	nsubj	_	nom
3	баршаға	барша	PRON	prn	_	4	nmod	_	def|dat
4	міндетті	міндетті	ADJ	adj	_	6	nsubj	_	_
5	болуы	бол	VERB	v	_	4	cop	_	iv|ger|px3sp|nom
6	_	тиіс	ADJ	adj	_	0	root	_	_
7	_	е	VERB	cop	_	6	cop	_	aor|p3|sg
8	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Иран	Иран	PROPN	np	_	4	nsubj	_	top|nom
2	—	—	PUNCT	guio	_	1	punct	_	_
3	діни	діни	ADJ	adj	_	4	amod	_	_
4	_	мемлекет	NOUN	n	_	0	root	_	nom
5	_	е	VERB	cop	_	4	cop	_	aor|p3|sg
6	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Астанаға	Астана	PROPN	np	_	2	nmod	_	top|dat
2	баратын	бар	VERB	v	_	3	acl	_	iv|gpr_impf
3	пойыз	пойыз	NOUN	n	_	4	nsubj	_	nom
4	_	қайда	ADV	adv	_	0	root	_	itg
5	_	е	VERB	cop	_	4	cop	_	aor|p3|sg
6	?	?	PUNCT	sent	_	4	punct	_	_

~~~


