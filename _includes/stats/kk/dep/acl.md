

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

23 nodes (0%) are attached to their parents as `acl`.

22 instances of `acl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39130434782609.

The following 4 pairs of parts of speech are connected with `acl`: [kk-pos/NOUN]()-[kk-pos/VERB]() (18; 78% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (3; 13% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (1; 4% instances), [kk-pos/PROPN]()-[kk-pos/ADJ]() (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 acl	color:blue
1	Ел	ел	NOUN	n	_	2	nmod:poss	_	nom
2	экономикасының	экономика	NOUN	n	_	3	nmod:poss	_	px3sp|gen
3	негізі	негіз	NOUN	n	_	10	nsubj	_	px3sp|nom
4	мұнай	мұнай	NOUN	n	_	9	conj	_	nom
5	және	және	CONJ	cnjcoo	_	9	cc	_	_
6	мұнай	мұнай	NOUN	n	_	8	conj	_	nom
7	мен	мен	CONJ	cnjcoo	_	8	cc	_	_
8	газ	газ	NOUN	n	_	9	dobj	_	nom
9	өңдеу	өңде	VERB	v	_	10	acl	_	tv|ger|nom
10	_	өнеркәсіп	NOUN	n	_	0	root	_	pl|px3sp|nom
11	_	е	AUX	cop	_	10	cop	_	aor|p3|sg
12	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	Мұның	бұл	PRON	prn	Case=Gen|PronType=Dem	5	nmod:poss	_	бұл|prn|dem|gen
2	арты	арт	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	3	nsubj	_	арт|n|px3sp|nom
3	үлкен	үлкен	ADJ	adj	_	4	acl	_	үлкен|adj
4	дүрбелеңге	дүрбелең	NOUN	n	Case=Dat	5	nmod	_	дүрбелең|n|dat
5	шаппасын	шаппа	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	7	dobj	_	шаппа|n|px3sp|acc
6	кім	кім	PRON	prn	Case=Nom|PronType=Itg	7	nsubj	_	кім|prn|itg|nom
7	біледі	біл	VERB	v	Number=Sing|Person=3|Tense=Aor	0	root	_	біл|v|tv|aor|p3|sg
8	?	?	PUNCT	sent	_	7	punct	_	?|sent

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	Құлдық	құлдық	NOUN	n	_	4	conj	_	nom
2	пен	мен	CONJ	cnjcoo	_	4	cc	_	_
3	құл	құл	NOUN	n	_	4	nmod:poss	_	nom
4	саудасына	сауда	NOUN	n	_	12	nmod	_	px3sp|dat
5	,	,	PUNCT	cm	_	4	punct	_	_
6	қандай	қандай	DET	det	_	7	det	_	itg
7	түрде	түр	NOUN	n	_	4	acl	_	loc
8	_	бол	VERB	v	_	7	cop	_	iv|gna_cond|p3|sg
9	_	да	PART	postadv	_	8	advmod	_	_
10	,	,	PUNCT	cm	_	8	punct	_	_
11	тыйым	тыйым	NOUN	n	_	12	dobj	_	nom
12	салынады	сал	VERB	v	_	0	root	_	tv|pass|aor|p3|sg
13	.	.	PUNCT	sent	_	12	punct	_	_

~~~


