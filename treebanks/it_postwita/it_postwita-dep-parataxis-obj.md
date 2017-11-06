---
layout: base
title:  'Statistics of parataxis:obj in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:obj`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 3 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_postwita-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_postwita-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>.

48 nodes (0%) are attached to their parents as `parataxis:obj`.

44 instances of `parataxis:obj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.64583333333333.

The following 12 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (12; 25% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (11; 23% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (5; 10% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (5; 10% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (5; 10% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 4% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 4% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis:obj	color:blue
1	@prfirish	@prfirish	SYM	SYM	_	4	vocative:mention	_	_
2	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	4	nsubj	_	_
3	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	4	iobj	_	_
4	dicono	dire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	4	punct	_	_
6	'	'	PUNCT	FB	_	10	punct	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Prato	Prato	PROPN	SP	_	10	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	8	punct	_	_
10	Soffocherai	soffocare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	4	parataxis:obj	_	_
11	'	'	PUNCT	FB	_	10	punct	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	15	punct	_	_
13	sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	cop	_	_
14	in	in	ADP	E	_	15	case	_	_
15	ansia	ansia	NOUN	S	Gender=Fem|Number=Sing	4	parataxis	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 parataxis:obj	color:blue
1	@AuaDB	@AuaDB	SYM	SYM	_	2	vocative:mention	_	_
2	no	no	INTJ	I	_	4	discourse	_	_
3	anche	anche	ADV	B	_	4	advmod	_	_
4	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	0	root	_	_
5	..	..	PUNCT	FS	_	4	punct	_	_
6	(	(	PUNCT	FB	_	7	punct	_	SpaceAfter=No
7	leggi	leggere	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	7	punct	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	figo	figo	NOUN	S	Gender=Masc|Number=Sing	7	parataxis:obj	_	_
11	di	di	ADP	E	_	13	case	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	madonna	madonna	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
14	)	)	PUNCT	FB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 parataxis:obj	color:blue
1	Non	non	ADV	BN	PronType=Neg	2	advmod	_	_
2	leggere	leggere	VERB	V	VerbForm=Inf	0	root	_	_
3	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	Blog	Blog	PROPN	SP	_	2	obj	_	SpaceAfter=No
5	!	!	PUNCT	FS	_	2	punct	_	SpaceAfter=No
6	:	:	PUNCT	FC	_	2	punct	_	_
7	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	11	nsubj	_	_
9	Monti	Monti	PROPN	SP	_	8	nmod	_	_
10	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	spacciato	spacciato	ADJ	A	Gender=Masc|Number=Sing	2	parataxis:obj	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	2	punct	_	_
13	http://t.co/zawim0yd	http://t.co/zawim0yd	SYM	X	_	2	dep	_	_

~~~


