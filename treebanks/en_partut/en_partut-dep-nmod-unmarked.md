---
layout: base
title:  'Statistics of nmod:unmarked in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_partut-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="en_partut-dep-nmod-poss.html">nmod:poss</a></tt>.

18 nodes (0%) are attached to their parents as `nmod:unmarked`.

16 instances of `nmod:unmarked` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11111111111111.

The following 6 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (7; 39% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (6; 33% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:unmarked	color:blue
1	Test	test	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	simple	simple	ADJ	A	Degree=Pos	3	amod	_	_
3	image	image	NOUN	S	Number=Sing	1	obj	_	_
4	and	and	CCONJ	CC	_	8	cc	_	_
5	text	text	NOUN	S	Number=Sing	7	nmod:unmarked	_	SpaceAfter=No
6	-	-	PUNCT	FF	_	7	punct	_	SpaceAfter=No
7	based	based	VERB	V	Tense=Past|VerbForm=Part	8	amod	_	_
8	adverts	advert	NOUN	S	Number=Plur	3	conj	_	_
9	and	and	CCONJ	CC	_	10	cc	_	_
10	use	use	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
11	what	what	PRON	PR	Number=Sing|PronType=Rel	10	obj	_	_
12	works	work	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:unmarked	color:blue
1	Today	today	NOUN	S	Number=Sing	3	nmod:unmarked	_	_
2	's	's	PART	PART	_	1	case	_	_
3	decision	decision	NOUN	S	Number=Sing	11	nsubj	_	_
4	not	not	PART	PART	Polarity=Neg	6	advmod	_	_
5	to	to	PART	PART	_	6	mark	_	_
6	renew	renew	VERB	V	VerbForm=Inf	3	acl	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	8	det	_	_
8	embargo	embargo	NOUN	S	Number=Sing	6	obj	_	_
9	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	extremely	extremely	ADV	B	_	11	advmod	_	_
11	dangerous	dangerous	ADJ	A	Degree=Pos	0	root	_	_
12	considering	consider	VERB	V	VerbForm=Ger	11	advcl	_	_
13	the	the	DET	RD	Definite=Def|PronType=Art	14	det	_	_
14	situation	situation	NOUN	S	Number=Sing	12	obj	_	_
15	there	there	ADV	B	_	14	advmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 nmod:unmarked	color:blue
1	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	have	have	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	thus	thus	ADV	B	_	4	advmod	_	_
4	proposed	propose	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
5	that	that	SCONJ	CS	_	10	mark	_	_
6	the	the	DET	RD	Definite=Def|PronType=Art	8	det	_	_
7	frost	frost	NOUN	S	Number=Sing	8	nmod	_	_
8	rating	rating	NOUN	S	Number=Sing	10	nsubj:pass	_	_
9	be	be	AUX	VA	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	lowered	lower	VERB	V	Tense=Past|VerbForm=Part	4	ccomp	_	_
11	to	to	ADP	E	_	13	case	_	_
12	-40	-40	NUM	N	NumType=Card	13	nummod	_	SpaceAfter=No
13	°	°	NOUN	S	Number=Plur	10	obl	_	_
14	C	C	PROPN	SP	_	13	nmod:unmarked	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	4	punct	_	_

~~~


