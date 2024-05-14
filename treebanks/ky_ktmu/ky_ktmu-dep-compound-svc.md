---
layout: base
title:  'Statistics of compound:svc in UD_Kyrgyz-KTMU'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-KTMU: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="ky_ktmu-dep-compound.html">compound</a></tt>.

55 nodes (1%) are attached to their parents as `compound:svc`.

45 instances of `compound:svc` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14545454545455.

The following 5 pairs of parts of speech are connected with `compound:svc`: <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (50; 91% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:svc	color:blue
1	Эртең	Эртең	NOUN	NN	Case=Nom|Number=Sing|Person=3	4	obl	_	_
2	Бишкектин	Бишкек	PROPN	PROP	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod	_	_
3	көпчүлүк	көп	ADJ	ADJ	_	4	amod	_	_
4	бөлүгүндө	бөлүк	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
5	жарык	жарык	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	csubj	_	_
6	жок	жок	VERB	VB	_	7	compound:svc	_	_
7	болот	бол	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:svc	color:blue
1	Акыл	Акыл	NOUN	NN	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	атага	ата	NOUN	NN	Case=Dat|Number=Sing|Person=3	4	nmod	_	_
3	баруучу	баруу	VERB	VB	Polarity=Pos|Tense=Pres|VerbForm=Vnoun	4	acl	_	_
4	жол	жол	NOUN	NN	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
5	өтө	өтө	ADJ	ADJ	_	6	amod	_	_
6	татаал	татаал	NOUN	NN	Case=Nom|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	эле	эле	VERB	VB	_	6	compound:svc	_	SpaceAfter=No
8	.	.	PUNCT	PCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:svc	color:blue
1	Мен	Мен	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
2	жалаң	жалаң	NOUN	NN	Case=Nom|Number=Sing|Person=3	14	nmod	_	_
3	гана	гана	ADV	ADV	_	5	advmod	_	_
4	«	«	PUNCT	PCT	_	5	punct	_	SpaceAfter=No
5	Индеецтер	Индеецтер	PROPN	PROP	Case=Nom|Number=Sing|Person=3	14	nmod	_	SpaceAfter=No
6	»	»	PUNCT	PCT	_	5	punct	_	_
7	эмес	эмес	VERB	VB	_	5	compound:svc	_	SpaceAfter=No
8	,	,	PUNCT	PCT	_	7	punct	_	_
9	детройттук	детройт	NOUN	NOUN	Case=Nom|Number=Sing|Person=3	11	nmod	_	_
10	«	«	PUNCT	PCT	_	11	punct	_	SpaceAfter=No
11	Жолборстордон	Жолборстор	PROPN	PROP	Case=Abl|Number=Sing|Person=3	14	nmod	_	SpaceAfter=No
12	»	»	PUNCT	PCT	_	11	punct	_	_
13	да	да	CCONJ	CCONJ	_	11	mark	_	_
14	корком	корк	VERB	VB	Aspect=Perf|Number=Sing|Person=1|Person[psor]=1|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
15	.	.	PUNCT	PCT	_	14	punct	_	_

~~~


