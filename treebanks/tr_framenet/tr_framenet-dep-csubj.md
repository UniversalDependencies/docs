---
layout: base
title:  'Statistics of csubj in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `csubj`

This relation is universal.

36 nodes (0%) are attached to their parents as `csubj`.

36 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47222222222222.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (23; 64% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (5; 14% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	Uçağın	uçak	NOUN	_	Case=Gen|Number=Sing	3	nsubj	_	_
2	sorti	sorti	NOUN	_	Case=Nom|Number=Sing	3	compound	_	_
3	yapması	yap	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun	6	csubj	_	_
4	kulenin	kule	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	_
5	ilgisini	ilgi	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	compound	_	_
6	çekmişti	çek	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	Sırtüstü	sırtüstü	ADV	_	_	2	compound	_	_
2	yatmak	yat	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	csubj	_	_
3	omurga	omurga	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	sağlığı	sağlık	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nmod	_	_
5	açısından	açı	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
6	oldukça	oldukça	ADV	_	_	7	advmod	_	_
7	önemlidir	önemli	ADJ	_	Number=Sing|Person=3	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	Yer	yer	NOUN	_	Case=Nom|Number=Sing	2	compound	_	_
2	öpmek	öp	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	csubj	_	_
3	yaşına	yaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	_
4	hiç	hiç	ADV	_	_	5	advmod	_	_
5	yakıştırmadığı	yakıştır	VERB	_	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	7	advcl	_	_
6	bir	bir	DET	_	Definite=Ind|PronType=Art	7	det	_	_
7	şeydi	şey	NOUN	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


