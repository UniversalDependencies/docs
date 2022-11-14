---
layout: base
title:  'Statistics of parataxis:nsubj in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:nsubj`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_postwita-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_postwita-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_postwita-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_postwita-dep-parataxis-obj.html">parataxis:obj</a></tt>.

38 nodes (0%) are attached to their parents as `parataxis:nsubj`.

34 instances of `parataxis:nsubj` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.55263157894737.

The following 10 pairs of parts of speech are connected with `parataxis:nsubj`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (8; 21% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (8; 21% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (7; 18% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (6; 16% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 3% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 parataxis:nsubj	color:blue
1	Bossi	Bossi	PROPN	SP	_	8	parataxis	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	'	'	PUNCT	FB	_	8	punct	_	_
4	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	governo	governo	NOUN	S	Gender=Masc|Number=Sing	8	parataxis:nsubj	_	_
6	Monti	Monti	PROPN	SP	_	5	nmod	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	5	punct	_	_
8	Fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	schifo	schifo	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
10	'	'	PUNCT	FB	_	8	punct	_	_
11	http://t.co/HA1ePo8P	http://t.co/HA1ePo8P	SYM	X	_	8	parataxis	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 parataxis:nsubj	color:blue
1	NOI	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	TIREREMO	tirare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	_
3	DIRITTO	diritto	ADV	B	_	2	advmod	_	_
4	..	..	PUNCT	FS	_	8	punct	_	_
5	chi	chi	PRON	PR	PronType=Rel	8	nsubj	_	_
6	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	8	punct	_	_
10	Mussolini	Mussolini	PROPN	SP	_	8	parataxis:nsubj	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	10	punct	_	_
12	No	No	INTJ	I	_	10	discourse	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_
14	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	governo	governo	NOUN	S	Gender=Masc|Number=Sing	10	parataxis	_	_
16	Monti	Monti	PROPN	SP	_	15	nmod	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 parataxis:nsubj	color:blue
1	Torrington	Torrington	PROPN	SP	_	8	parataxis:nsubj	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	Connecticut	Connecticut	PROPN	SP	_	1	appos	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	_
5	Non	non	ADV	BN	PronType=Neg	6	advmod	_	_
6	esattamente	esattamente	ADV	B	_	8	advmod	_	_
7	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	ombelico	ombelico	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
9	di	di	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	mondo	mondo	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	_

~~~


