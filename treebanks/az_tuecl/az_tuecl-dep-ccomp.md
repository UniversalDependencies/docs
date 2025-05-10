---
layout: base
title:  'Statistics of ccomp in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `ccomp`

This relation is universal.

13 nodes (1%) are attached to their parents as `ccomp`.

9 instances of `ccomp` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53846153846154.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (11; 85% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	Fikr	fikr	NOUN	_	Case=Nom|Number=Sing	2	compound:lvc	_	_
2	elirəm	el	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	yağış	yağış	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
4	yağır	yağ	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	ccomp	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 ccomp	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	9	nsubj	_	_
2	tətil	tətil	NOUN	_	Case=Nom|Number=Sing	4	ccomp	_	_
3	olduğunu	ol	AUX	_	Case=Acc|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	2	aux	_	_
4	yadınnan	yad	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	compound	_	_
5	cıxardıp	çıxar	VERB	_	Aspect=Perf|VerbForm=Conv	9	advcl	_	_
6	kifini	kif	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	_
7	götürüb	götür	VERB	_	VerbForm=Conv	5	conj	_	_
8	mədrəsəyə	mədrəsə	NOUN	_	Case=Dat|Number=Sing	9	obl	_	_
9	getmişdi	get	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 ccomp	color:blue
1	Anasının	ana	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nmod	_	_
2	arzusu	arzu	NOUN	_	Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
3	Denizin	Deniz	PROPN	_	Case=Gen|Number=Sing	8	ccomp	_	_
4	yaxçı	yaxçı	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	_	6	det	_	_
6	mədrəsəde	mədrəsə	NOUN	_	Case=Loc|Number=Sing	8	obl	_	_
7	dərs	dərs	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
8	oxumasıydı	oxu	VERB	_	Case=Nom|Mood=Ind|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Tense=Past|VerbForm=Vnoun	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


