---
layout: base
title:  'Statistics of csubj in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `csubj`

This relation is universal.

328 nodes (0%) are attached to their parents as `csubj`.

309 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89329268292683.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (305; 93% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	І	і	CCONJ	CCONJ	_	3	cc	_	_
2	не	не	PART	PART	Polarity=Neg	3	advmod:neg	_	_
3	потрібно	потрібно	ADV	ADV	Degree=Pos	0	root	_	_
4	розпалювати	розпалювати	VERB	VERB	Aspect=Imp|VerbForm=Inf	3	csubj	_	_
5	паніку	паніка	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
6	і	і	CCONJ	CCONJ	_	7	cc	_	_
7	насаждати	насаждати	VERB	VERB	Aspect=Perf|VerbForm=Inf	4	conj	_	_
8	її	вона	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	всередині	всередині	ADP	ADP	Case=Gen	10	case	_	_
10	країни	країна	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 csubj	color:blue
1	У	у	ADP	ADP	Case=Gen	2	case	_	_
2	міністра	міністр	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	obl	_	_
3	спорту	спорт	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	голови	голова	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	є	бути	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	що	що	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	9	obj	_	_
9	сказати	сказати	VERB	VERB	Aspect=Perf|VerbForm=Inf	7	csubj	_	_
10	на	на	ADP	ADP	Case=Acc	11	case	_	_
11	завершення	завершення	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	9	obl	_	SpaceAfter=No
12	?	?	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	Хто	хто	PRON	PRON	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	_	NER=O
2	поїхав	поїхати	VERB	VERB	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	5	csubj	_	NER=O
3	–	–	PUNCT	PUNCT	_	5	punct	_	NER=O|PunctType=Dash
4	той	той	DET	DET	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	NER=O
5	зрадник	зрадник	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	NER=O|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	NER=O

~~~


