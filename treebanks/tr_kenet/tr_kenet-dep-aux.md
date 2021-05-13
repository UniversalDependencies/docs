---
layout: base
title:  'Statistics of aux in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `aux`

This relation is universal.

868 nodes (0%) are attached to their parents as `aux`.

838 instances of `aux` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11635944700461.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (307; 35% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (297; 34% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (188; 22% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (36; 4% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (28; 3% instances), <tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="tr_kenet-pos-DET.html">DET</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_kenet-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 aux	color:blue
1	Yiğitlik	yiğitlik	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	delikli	delikli	ADJ	_	_	4	amod	_	_
4	demirin	demiri	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	5	nmod	_	_
5	çıkışından	çıkış	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	9	obl	_	_
6	sonra	sonra	ADP	_	_	5	case	_	_
7	mı	mi	AUX	_	PronType=Int	5	aux	_	_
8	hapı	hap	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	compound	_	_
9	yuttu	yut	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	?	?	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	İnsanın	insan	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	_
2	gözü	göz	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	_
3	bir	bir	DET	_	Definite=Ind	4	det	_	_
4	şey	şey	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obj	_	_
5	görmedi	gör	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	10	advcl	_	_
6	mi	mi	AUX	_	PronType=Int	5	aux	_	_
7	dünyanın	dünya	NOUN	_	Case=Gen|Number=Sing|Person=3	8	nmod	_	_
8	altını	alt	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	compound	_	_
9	üstüne	üst	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	compound	_	_
10	getirmeli	getir	VERB	_	Mood=Nec|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Ben	ben	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
2	senin	sen	PRON	_	PronType=Prs	5	nmod	_	_
3	az	az	ADJ	_	_	6	advmod	_	_
4	mı	mi	AUX	_	PronType=Int	3	aux	_	_
5	bezini	bez	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obj	_	_
6	yıkadım	yıka	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


