

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

496 nodes (10%) are attached to their parents as `nmod`.

490 instances of `nmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.53629032258065.

The following 18 pairs of parts of speech are connected with `nmod`: [kk-pos/VERB]()-[kk-pos/NOUN]() (361; 73% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (47; 9% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (26; 5% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (19; 4% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (13; 3% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (9; 2% instances), [kk-pos/ADJ]()-[kk-pos/PRON]() (7; 1% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (3; 1% instances), [kk-pos/NUM]()-[kk-pos/NUM]() (2; 0% instances), [kk-pos/ADJ]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/ADJ]()-[kk-pos/PROPN]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (1; 0% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod	color:blue
1	Таулы	таулы	ADJ	adj	_	2	amod	_	_
2	аудандарда	аудан	NOUN	n	_	5	nmod	_	pl|loc
3	көптеген	көптеген	DET	det	_	4	det	_	qnt
4	көлдер	көл	NOUN	n	_	5	nsubj	_	pl|nom
5	кездеседі	кездес	VERB	v	_	0	root	_	iv|aor|p3|pl
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nmod	color:blue
1	Иран	Иран	PROPN	np	_	2	nmod	_	top|nom
2	жерінде	жер	NOUN	n	_	3	nmod:poss	_	px3sp|loc
3	сақтар	сақ	NOUN	n	_	4	nmod:poss	_	pl|nom
4	тарихына	тарих	NOUN	n	_	7	nmod	_	px3sp|dat
5	қатысты	қатысты	ADP	post	_	4	case	_	_
6	мәдени	мәдени	ADJ	adj	_	7	amod	_	_
7	_	ескерткіш	NOUN	n	_	10	nsubj	_	pl|nom
8	_	да	PART	postadv	_	7	advmod	_	_
9	мол	мол	ADJ	adj	_	10	advmod	_	advl
10	сақталған	сақта	VERB	v	_	0	root	_	tv|pass|past|p3|pl
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Астанаға	Астана	PROPN	np	_	2	nmod	_	top|dat
2	баратын	бар	VERB	v	_	3	acl	_	iv|gpr_impf
3	пойыз	пойыз	NOUN	n	_	4	nsubj	_	nom
4	_	қайда	ADV	adv	_	0	root	_	itg
5	_	е	VERB	cop	_	4	cop	_	aor|p3|sg
6	?	?	PUNCT	sent	_	4	punct	_	_

~~~


