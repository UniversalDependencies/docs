

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

153 nodes (2%) are attached to their parents as `aux`.

153 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07843137254902.

The following 4 pairs of parts of speech are connected with `aux`: [kk-pos/VERB]()-[kk-pos/AUX]() (142; 93% instances), [kk-pos/NOUN]()-[kk-pos/AUX]() (5; 3% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (4; 3% instances), [kk-pos/ADJ]()-[kk-pos/AUX]() (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Мен	мен	PRON	prn	_	2	nsubj	_	pers|p1|sg|nom
2	адасып	адас	VERB	v	_	0	root	_	iv|prc_perf
3	кеттім	кет	AUX	vaux	_	2	aux	_	ifi|p1|sg
4	.	.	PUNCT	sent	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 aux	color:blue
1	Малына	мал	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	3	conj	_	мал|n|px3sp|dat
2	,	,	PUNCT	cm	_	3	punct	_	,|cm
3	жанына	жан	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	4	nmod	_	жан|n|px3sp|dat
4	ие	ие	NOUN	n	Case=Nom	8	acl:relcl	_	ие|n|nom
5	болып	бол	VERB	v	Aspect=Perf|VerbForm=Coverb	4	cop	_	бол|v|iv|prcperf
6	отырған	отыр	AUX	vaux	Tense=Past|VerbForm=Part	4	aux	_	отыр|vaux|gprpast
7	қай	қай	DET	det	PronType=Itg	8	det	_	қай|det|itg
8	қазақ	қазақ	NOUN	n	Case=Nom	9	nsubj	_	қазақ|n|nom
9	_	бар	ADJ	adj	_	0	root	_	бар|adj
10	_	е	AUX	cop	Number=Sing|Person=3|Tense=Aor	9	cop	_	е|cop|aor|p3|sg
11	?	?	PUNCT	sent	_	9	punct	_	?|sent

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Шайларын	шай	NOUN	n	Case=Acc|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	2	dobj	_	шай|n|pl|px3sp|acc
2	ішіп	іш	VERB	v	Aspect=Perf|VerbForm=Trans	5	conj	_	іш|v|tv|gnaperf
3	,	,	PUNCT	cm	_	5	punct	_	,|cm
4	шылымдарын	шылым	NOUN	n	Case=Acc|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	5	dobj	_	шылым|n|pl|px3sp|acc
5	тартысып	тарт	VERB	v	Aspect=Perf|VerbForm=Trans|Voice=Coop	11	advcl	_	тарт|v|tv|coop|gnaperf
6	болған	бол	VERB	v	Case=Nom|Tense=Past|VerbForm=Ger	5	aux	_	бол|v|iv|gerpast|nom
7	соң	соң	ADP	post	_	5	case	_	соң|post
8	,	,	PUNCT	cm	_	11	punct	_	,|cm
9	өзгелері	өзге	ADJ	adj	Case=Nom|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	11	nsubj	_	өзге|adj|subst|pl|px3sp|nom
10	тысқа	тыс	NOUN	n	Case=Dat	11	nmod	_	тыс|n|dat
11	шықты	шық	VERB	v	Number=Sing|Person=3|Tense=Past	0	root	_	шық|v|tv|ifi|p3|sg
12	.	.	PUNCT	sent	_	11	punct	_	.|sent

~~~


