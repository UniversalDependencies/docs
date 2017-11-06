---
layout: base
title:  'Statistics of parataxis:nsubj in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:nsubj`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 3 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_postwita-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_postwita-dep-parataxis-obj.html">parataxis:obj</a></tt>.

17 nodes (0%) are attached to their parents as `parataxis:nsubj`.

15 instances of `parataxis:nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.88235294117647.

The following 9 pairs of parts of speech are connected with `parataxis:nsubj`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (3; 18% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (3; 18% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (3; 18% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 6% instances).


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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 parataxis:nsubj	color:blue
1	Vaciago	Vaciago	PROPN	SP	_	9	parataxis	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	"	"	PUNCT	FB	_	9	punct	_	_
4	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	governo	governo	NOUN	S	Gender=Masc|Number=Sing	9	parataxis:nsubj	_	_
6	Monti	Monti	PROPN	SP	_	5	nmod	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	5	punct	_	_
8	Deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	piacere	piacere	VERB	V	VerbForm=Inf	0	root	_	_
10	a	a	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	resto	resto	NOUN	S	Gender=Masc|Number=Sing	9	obl	_	_
13	di	di	ADP	E	_	15	case	_	_
14	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	mondo	mondo	NOUN	S	Gender=Masc|Number=Sing	12	nmod	_	_
16	più	più	ADV	B	_	20	advmod	_	_
17	che	che	SCONJ	CS	_	16	fixed	_	_
18	a	a	ADP	E	_	20	case	_	_
19	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	italiani	italiano	NOUN	S	Gender=Masc|Number=Plur	9	obl	_	_
21	"	"	PUNCT	FB	_	9	punct	_	_
22	|	|	SYM	SYM	_	9	dep	_	_
23	#fb	#fb	SYM	SYM	_	9	parataxis:hashtag	_	_

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
4	..	..	PUNCT	FS	_	2	punct	_	_
5	chi	chi	PRON	PR	PronType=Rel	2	parataxis	_	_
6	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	acl:relcl	_	SpaceAfter=No
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


