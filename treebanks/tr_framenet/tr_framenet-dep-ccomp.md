---
layout: base
title:  'Statistics of ccomp in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `ccomp`

This relation is universal.

155 nodes (1%) are attached to their parents as `ccomp`.

153 instances of `ccomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80645161290323.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (108; 70% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (12; 8% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	O	o	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	çocukların	çocuk	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	3	nsubj	_	_
3	ağlamasına	ağlama	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	ccomp	_	_
4	içi	iç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	compound	_	_
5	sızladı	sızla	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp	color:blue
1	Ona	o	PRON	_	PronType=Prs	3	obl	_	_
2	kötülük	kötülük	NOUN	_	Case=Nom|Number=Sing|Person=3	3	compound	_	_
3	etmeyi	et	NOUN	_	Case=Acc|Number=Sing|Person=3	6	ccomp	_	_
4	hatırımdan	hatır	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	6	compound	_	_
5	bile	bile	ADV	_	_	4	advmod	_	_
6	geçirmiyordum	hatır	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 ccomp	color:blue
1	Ekme	ek	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
2	dedim	de	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	8	parataxis	_	_
3	ama	ama	CCONJ	_	_	4	cc	_	_
4	dinlemedi	dinle	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	conj	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	bütün	bütün	ADJ	_	_	7	amod	_	_
7	parasını	para	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obj	_	_
8	kaybetmiş	kaybet	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


