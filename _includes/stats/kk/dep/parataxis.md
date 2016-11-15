

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

48 nodes (1%) are attached to their parents as `parataxis`.

28 instances of `parataxis` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.47916666666667.

The following 10 pairs of parts of speech are connected with `parataxis`: [kk-pos/VERB]()-[kk-pos/VERB]() (29; 60% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (6; 13% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (4; 8% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (2; 4% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (2; 4% instances), [kk-pos/NOUN]()-[kk-pos/ADV]() (1; 2% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (1; 2% instances), [kk-pos/PRON]()-[kk-pos/PRON]() (1; 2% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (1; 2% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Қаш	қаш	VERB	v	Mood=Imper|Number=Sing|Person=2	0	root	_	қаш|v|iv|imp|p2|sg
2	,	,	PUNCT	cm	_	1	punct	_	,|cm
3	маңыма	маң	NOUN	n	Case=Dat|Number[psor]=Sing|Person[psor]=1	4	nmod	_	маң|n|px1sg|dat
4	жолама	жола	VERB	v	Mood=Imper|Number=Sing|Person=2|Polarity=Neg	1	parataxis	_	жола|v|iv|neg|imp|p2|sg
5	!	!	PUNCT	sent	_	1	punct	_	!|sent

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis	color:blue
1	Үй	үй	NOUN	n	_	2	nmod:poss	_	nom
2	міндеті	міндет	NOUN	n	_	4	nsubj	_	px3sp|nom
3	-	-	PUNCT	guio	_	4	punct	_	_
4	_	әйел	NOUN	n	_	0	root	_	loc
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	,	,	PUNCT	cm	_	4	punct	_	_
7	түз	түз	NOUN	n	_	8	nmod:poss	_	nom
8	міндеті	міндет	NOUN	n	_	10	nsubj	_	px3sp|nom
9	—	—	PUNCT	guio	_	10	punct	_	_
10	_	бай	NOUN	n	_	4	parataxis	_	px3sp|loc
11	_	е	AUX	cop	_	10	cop	_	_
12	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 parataxis	color:blue
1	Кірді	кір	VERB	v	_	13	parataxis	_	iv|ifi|p3|sg
2	,	,	PUNCT	cm	_	1	punct	_	_
3	шықты	шық	VERB	v	_	13	parataxis	_	iv|ifi|p3|sg
4	,	,	PUNCT	cm	_	3	punct	_	_
5	ілді	іл	VERB	v	_	13	parataxis	_	tv|ifi|p3|sg
6	,	,	PUNCT	cm	_	5	punct	_	_
7	қайтты	қайт	VERB	v	_	13	parataxis	_	iv|ifi|p3|sg
8	,	,	PUNCT	cm	_	7	punct	_	_
9	түбегейлеп	түбегейлеп	ADV	adv	_	10	advmod	_	_
10	қуған	қу	VERB	v	_	11	acl:relcl	_	tv|gpr_past
11	_	бала	NOUN	n	_	13	nsubj	_	nom
12	_	да	PART	postadv	_	11	advmod	_	_
13	_	жоқ	ADJ	adj	_	0	root	_	subst|nom
14	_	е	AUX	cop	_	13	cop	_	aor|p3|sg
15	.	.	PUNCT	sent	_	13	punct	_	_

~~~


