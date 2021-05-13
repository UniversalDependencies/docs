---
layout: base
title:  'Statistics of aux in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="tr_imst-dep-aux-q.html">aux:q</a></tt>.

62 nodes (0%) are attached to their parents as `aux`.

61 instances of `aux` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20967741935484.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (25; 40% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (23; 37% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (7; 11% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (3; 5% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 aux	color:blue
1	Eski	eski	ADJ	Adj	_	2	amod	_	_
2	abajurun	abajur	NOUN	Noun	Case=Gen|Number=Sing|Person=3	3	nmod:poss	_	_
3	ışığı	ışık	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	_
4	daha	daha	ADV	Adverb	_	5	advmod	_	_
5	sıcak	sıcak	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	tı	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
7	,	,	PUNCT	Punc	_	10	punct	_	_
8	ama	ama	CCONJ	Conj	_	10	cc	_	_
9	daha	daha	ADV	Adverb	_	10	advmod	_	_
10	aydınlık	aydınlık	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	conj	_	_
11	değildi	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Kahve'yi	Kahve	PROPN	Prop	Case=Acc|Number=Sing|Person=3	2	obj	_	_
2	bilmem	bil	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	0	root	_	_
3	ama	ama	CCONJ	Conj	_	6	cc	_	_
4	Ali	Ali	PROPN	Prop	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
5	pek	pek	ADV	Adverb	_	6	advmod	_	_
6	hazır	hazır	ADJ	Adj	_	2	conj	_	_
7	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux	_	_
8	galiba	galiba	ADV	Adverb	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	Kimse	kimse	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
2	sana	sen	PRON	Pers	Case=Dat|Number=Sing|Person=2|PronType=Prs	7	obl	_	_
3	istemediğin	iste	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=2|Polarity=Neg|Tense=Past|VerbForm=Part	5	nmod	_	_
4	bir	bir	DET	ANum	Definite=Ind|PronType=Art	5	det	_	_
5	şeyi	şey	NOUN	Noun	Case=Acc|Number=Sing|Person=3	7	obj	_	_
6	zorla	zor	ADJ	NAdj	Case=Ins|Number=Sing|Person=3	7	amod	_	_
7	yaptıracak	yap	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Fut|VerbForm=Part|Voice=Cau	0	root	_	_
8	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	7	aux	_	_
9	ya	ya	INTJ	Interj	_	7	discourse	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


