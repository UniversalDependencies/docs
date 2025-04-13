---
layout: base
title:  'Statistics of compound:svc in UD_Kyrgyz-KTMU'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-KTMU: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="ky_ktmu-dep-compound.html">compound</a></tt>.

70 nodes (0%) are attached to their parents as `compound:svc`.

60 instances of `compound:svc` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11428571428571.

The following 6 pairs of parts of speech are connected with `compound:svc`: <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (62; 89% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:svc	color:blue
1	Эртең	Эртең	ADV	ADV	_	4	advmod	_	_
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:svc	color:blue
1	Кыргызстанда	Кыргызстан	PROPN	PROP	Case=Loc|Number=Sing|Person=3	6	obl	_	_
2	доллардын	доллар	NOUN	NN	Case=Gen|Number=Sing|Person=3	3	nmod	_	_
3	курсу	курс	NOUN	NN	Case=Acc|Number=Sing|Person=3	4	nmod	_	_
4	эмне	эмне	PRON	PRP	Case=Nom|PronType=Int	6	nmod	_	_
5	үчүн	үчүн	ADV	ADV	_	4	advmod	_	_
6	төмөндөп	төмөндө	VERB	VB	Polarity=Pos|Tense=Pres|VerbForm=Conv	0	root	_	_
7	жатат	жатат	NOUN	VB	_	6	compound:svc	_	SpaceAfter=No
8	.	.	PUNCT	PCT	_	7	punct	_	_

~~~


