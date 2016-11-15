

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.
There are 2 language-specific subtypes of `nmod`: [nmod:own](), [nmod:poss]().

598 nodes (10%) are attached to their parents as `nmod`.

592 instances of `nmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.26421404682274.

The following 24 pairs of parts of speech are connected with `nmod`: [kk-pos/VERB]()-[kk-pos/NOUN]() (419; 70% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (54; 9% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (34; 6% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (29; 5% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (17; 3% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (10; 2% instances), [kk-pos/ADJ]()-[kk-pos/PRON]() (9; 2% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (6; 1% instances), [kk-pos/ADV]()-[kk-pos/NOUN]() (2; 0% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (2; 0% instances), [kk-pos/NUM]()-[kk-pos/NUM]() (2; 0% instances), [kk-pos/VERB]()-[kk-pos/NUM]() (2; 0% instances), [kk-pos/ADJ]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/ADJ]()-[kk-pos/PROPN]() (1; 0% instances), [kk-pos/ADV]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/AUX]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/AUX]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/DET]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (1; 0% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/PRON]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nmod	color:blue
1	Ауылда	ауыл	NOUN	n	_	6	nmod	_	loc
2	клуб	клуб	NOUN	n	_	3	nmod:poss	_	nom
3	директоры	директор	NOUN	n	_	6	advcl	_	px3sp|nom
4	болып	бол	VERB	v	_	3	cop	_	iv|gna_perf
5	қызмет	қызмет	NOUN	n	_	6	dobj	_	nom
6	атқарды	атқар	VERB	v	_	0	root	_	tv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod	color:blue
1	Теке	теке	NOUN	n	_	2	compound	_	nom
2	көз	көз	NOUN	n	_	5	nmod	_	attr
3	қазақша	қазақша	ADV	adv	_	4	advmod	_	_
4	білетін	біл	VERB	v	_	5	acl:relcl	_	tv|gpr_impf
5	тілмәш	тілмәш	NOUN	n	_	0	root	_	nom
6	екен	е	AUX	cop	_	5	cop	_	aor|evid|p3|sg
7	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nmod	color:blue
1	Одан	ол	PRON	prn	_	7	nmod	_	dem|abl
2	кейін	кейін	ADP	post	_	1	case	_	_
3	оған	ол	PRON	prn	_	7	nmod	_	dem|dat
4	кішкентай	кішкентай	ADJ	adj	_	6	amod	_	_
5	бір	бір	DET	det	_	6	det	_	ind
6	қол	қол	NOUN	n	_	7	nsubj	_	nom
7	көрінеді	көрін	VERB	v	_	0	root	_	iv|aor|p3|sg
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


