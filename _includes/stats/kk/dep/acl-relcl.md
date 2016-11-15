

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is a language-specific subtype of [acl]().

95 nodes (2%) are attached to their parents as `acl:relcl`.

94 instances of `acl:relcl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74736842105263.

The following 7 pairs of parts of speech are connected with `acl:relcl`: [kk-pos/NOUN]()-[kk-pos/VERB]() (83; 87% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (3; 3% instances), [kk-pos/PROPN]()-[kk-pos/VERB]() (3; 3% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (2; 2% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (2; 2% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (1; 1% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
1	Теке	теке	NOUN	n	_	2	compound	_	nom
2	көз	көз	NOUN	n	_	5	nmod	_	attr
3	қазақша	қазақша	ADV	adv	_	4	advmod	_	_
4	білетін	біл	VERB	v	_	5	acl:relcl	_	tv|gpr_impf
5	тілмәш	тілмәш	NOUN	n	_	0	root	_	nom
6	екен	е	AUX	cop	_	5	cop	_	aor|evid|p3|sg
7	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl:relcl	color:blue
1	Олар	олар	PRON	prn	_	8	nsubj	_	pers|p3|pl|nom
2	елде	ел	NOUN	n	_	8	nmod	_	loc
3	Хулагу	Хулагу	PROPN	np	_	4	nmod:poss	_	al|nom
4	әулетіне	әулет	NOUN	n	_	5	dobj	_	px3sp|dat
5	қарайтын	қара	VERB	v	_	6	acl:relcl	_	tv|gpr_impf
6	ильхандар	ильхан	PROPN	np	_	7	nmod:poss	_	al|pl|nom
7	мемлекетін	мемлекет	NOUN	n	_	8	dobj	_	px3sp|acc
8	құрды	құр	VERB	v	_	0	root	_	tv|ifi|p3|sg
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 acl:relcl	color:blue
1	Алып	ал	VERB	v	Aspect=Perf|VerbForm=Trans	2	advcl	_	ал|v|tv|gnaperf
2	келген	кел	VERB	v	Tense=Past|VerbForm=Part	4	acl:relcl	_	кел|v|iv|gprpast
3	манағы	манағы	DET	det	PronType=Dem	4	det	_	манағы|det|dem
4	қолын	қол	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	5	dobj	_	қол|n|px3sp|acc
5	артып	арт	VERB	v	Aspect=Perf|VerbForm=Coverb	7	acl:relcl	_	арт|v|iv|prcperf
6	жатқан	жат	AUX	vaux	Tense=Past|VerbForm=Part	5	aux	_	жат|vaux|gprpast
7	жирен	жирен	ADJ	adj	_	8	amod	_	жирен|adj
8	орыс	орыс	NOUN	n	Case=Nom	0	root	_	орыс|n|nom
9	екен	е	AUX	cop	Evidentiality=Fh|Number=Sing|Person=3|Tense=Aor	8	cop	_	е|cop|aor|evid|p3|sg
10	.	.	PUNCT	sent	_	8	punct	_	.|sent

~~~


