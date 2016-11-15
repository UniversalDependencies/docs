

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is a language-specific subtype of [nmod]().
There are also 1 other language-specific subtypes of `nmod`: [nmod:own]().

455 nodes (7%) are attached to their parents as `nmod:poss`.

454 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44175824175824.

The following 14 pairs of parts of speech are connected with `nmod:poss`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (302; 66% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (105; 23% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (21; 5% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (7; 2% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (5; 1% instances), [kk-pos/PRON]()-[kk-pos/NOUN]() (4; 1% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (3; 1% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (2; 0% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/NUM]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/PRON]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/PRON]()-[kk-pos/PROPN]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Кейінірек	кейін	ADV	adv	_	6	advmod	_	comp
2	ФИФА	ФИФА	PROPN	np	_	6	nsubj	_	org|nom
3	ротация	ротация	NOUN	n	_	4	nmod:poss	_	nom
4	принципі	принцип	NOUN	n	_	5	nsubj	_	px3sp|nom
5	өзгеретінін	өзгер	VERB	v	_	6	ccomp	_	iv|ger_impf|px3sp|acc
6	жариялады	жарияла	VERB	v	_	0	root	_	tv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Ал	ал	CONJ	cnjcoo	_	4	cc	_	_
2	Айгүлдің	Айгүл	PROPN	np	_	3	nmod:poss	_	ant|f|gen
3	күшігі	күшік	NOUN	n	_	4	nsubj	_	px3sp|nom
4	_	бар	ADJ	adj	_	0	root	_	_
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	_	ма	PART	qst	_	4	discourse	_	_
7	?	?	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Сіздің	сіз	PRON	prn	_	2	nmod:poss	_	pers|p2|sg|frm|gen
2	атыңыз	ат	NOUN	n	_	3	nsubj	_	px2sg|frm|nom
3	_	кім	PRON	prn	_	0	root	_	itg|nom
4	_	е	AUX	cop	_	3	cop	_	aor|p3|sg
5	?	?	PUNCT	sent	_	3	punct	_	_

~~~


