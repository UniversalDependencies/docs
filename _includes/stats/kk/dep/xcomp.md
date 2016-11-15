

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

7 nodes (0%) are attached to their parents as `xcomp`.

7 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14285714285714.

The following 3 pairs of parts of speech are connected with `xcomp`: [kk-pos/VERB]()-[kk-pos/NOUN]() (3; 43% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (2; 29% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (2; 29% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Бұл	бұл	PRON	prn	Case=Nom|PronType=Dem	4	nsubj	_	бұл|prn|dem|nom
2	сені	сен	PRON	prn	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	dobj	_	сен|prn|pers|p2|sg|acc
3	қатын	қатын	NOUN	n	Case=Nom	4	xcomp	_	қатын|n|nom
4	қылады	қыл	VERB	v	Number=Sing|Person=3|Tense=Aor	0	root	_	қыл|v|tv|aor|p3|sg
5	.	.	PUNCT	sent	_	4	punct	_	.|sent

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Біреу	біреу	PRON	prn	Case=Nom|PronType=Ind	4	nsubj	_	біреу|prn|ind|nom
2	қазақ	қазақ	NOUN	n	Case=Nom	4	dobj	_	қазақ|n|nom
3	жақсы	жақсы	ADJ	adj	_	4	xcomp	_	жақсы|adj
4	деді	де	VERB	v	Number=Sing|Person=3|Tense=Past	9	parataxis	_	де|v|tv|ifi|p3|sg
5	,	,	PUNCT	cm	_	4	punct	_	,|cm
6	біреу	біреу	PRON	prn	Case=Nom|PronType=Ind	9	nsubj	_	біреу|prn|ind|nom
7	орыс	орыс	NOUN	n	Case=Nom	9	dobj	_	орыс|n|nom
8	жақсы	жақсы	ADJ	adj	_	9	xcomp	_	жақсы|adj
9	деді	де	VERB	v	Number=Sing|Person=3|Tense=Past	0	root	_	де|v|tv|ifi|p3|sg
10	.	.	PUNCT	sent	_	9	punct	_	.|sent

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Әлі__де__болса	әлі__де__болса	ADV	adv	_	4	advmod	_	_
2	Азаматты	Азамат	PROPN	np	_	3	dobj	_	ant|m|acc
3	табуға	тап	VERB	v	_	4	xcomp	_	tv|ger|dat
4	әрекет__етіп	әрекет__ет	VERB	v	_	0	root	_	iv|prc_perf
5	жүр	жүр	AUX	vaux	_	4	aux	_	pres|p3|sg
6	.	.	PUNCT	sent	_	4	punct	_	_

~~~


