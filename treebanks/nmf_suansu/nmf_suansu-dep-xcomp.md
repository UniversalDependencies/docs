---
layout: base
title:  'Statistics of xcomp in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `xcomp`

This relation is universal.

52 nodes (2%) are attached to their parents as `xcomp`.

50 instances of `xcomp` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (47; 90% instances), <tt><a href="nmf_suansu-pos-AUX.html">AUX</a></tt>-<tt><a href="nmf_suansu-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Mazokwoan	mazokwoan	VERB	_	VerbForm=Inf	2	xcomp	2:xcomp	_
2	ngamme	ngamme	VERB	_	VerbForm=Inf	6	csubj	6:csubj	_
3	di	di	SCONJ	NMLZ	_	2	mark	2:mark	_
4	li	li	ADV	ASC	_	2	advmod:emph	2:advmod:emph	_
5	kumda	kum	NOUN	_	Case=Abl|Number=Sing	6	obl	6:obl	_
6	phungle	phung	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Tye	tye	DET	_	Deixis=Remt|PronType=Dem	2	det	2:det	_
2	neodi	neo	NOUN	_	Case=Top|Number=Sing	4	nsubj	3:nsubj:xsubj|4:nsubj	_
3	kathe	kathe	ADJ	_	Degree=Pos	4	xcomp	4:xcomp	_
4	late	la	AUX	COMPL	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Miszu	miszu	NOUN	_	Number=Sing	7	nsubj	7:nsubj	_
2	mazohn	mazohn	DET	_	PronType=Tot	1	det	1:det	_
3	szuka	szuka	ADJ	_	_	4	amod	4:amod	_
4	legal	legal	NOUN	_	Number=Sing	7	obl	7:obl	OrigLang=en
5	representationnahn	representation	NOUN	_	Case=Loc|Number=Sing	4	flat	4:flat	OrigLang=en
6	right	right	ADJ	_	_	7	xcomp	7:xcomp	OrigLang=en
7	laszu	laszu	VERB	ADV	VerbForm=Inf	0	root	0:root	_
8	re	re	ADV	_	_	7	advmod	7:advmod	_
9	lagu	lagu	PART	be-EVD	_	7	discourse	7:discourse	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	7:punct	SpacesAfter=\n

~~~


