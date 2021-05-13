---
layout: base
title:  'Statistics of parataxis:obj in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:obj`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_postwita-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_postwita-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_postwita-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_postwita-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>.

82 nodes (0%) are attached to their parents as `parataxis:obj`.

72 instances of `parataxis:obj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.07317073170732.

The following 16 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (25; 30% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (24; 29% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (7; 9% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (5; 6% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (4; 5% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (4; 5% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 parataxis:obj	color:blue
1	Dimenticavo	dimenticare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
2	..	..	PUNCT	FS	_	1	punct	_	_
3	Che	che	DET	DE	PronType=Exc	4	det	_	_
4	giocata	giocata	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	_
5	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	parataxis:obj	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Quaglia	Quaglia	PROPN	SP	_	6	nsubj	_	_
9	?!	?!	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:obj	color:blue
1	@user	@user	SYM	SYM	_	4	vocative:mention	_	_
2	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	4	nsubj	_	_
3	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	scritto	scrivere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	4	punct	_	_
6	pubblicità	pubblicità	NOUN	S	Gender=Fem	4	parataxis:obj	_	_
7	bagno	bagno	NOUN	S	Gender=Masc|Number=Sing	6	conj	_	_
8	e	e	CCONJ	CC	_	12	cc	_	_
9	poi	poi	ADV	B	_	12	advmod	_	_
10	di	di	ADP	E	_	12	case	_	_
11	nuovo	nuovo	ADJ	A	Gender=Masc|Number=Sing	12	advmod	_	_
12	pc	pc	NOUN	S	_	6	conj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 parataxis:obj	color:blue
1	MARIO	mario	PROPN	SP	_	6	parataxis:obj	_	_
2	MONTI	Monti	PROPN	SP	_	1	flat:name	_	_
3	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	ALIENO	alieno	NOUN	S	Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	4	punct	_	_
6	GODETE	godere	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
7	VE	ve	PRON	PC	Clitic=Yes|Number=Plur|Person=2|PronType=Prs	6	iobj	_	_
8	LO	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
9	ANCORA	ancora	ADV	B	_	6	advmod	_	_
10	PER	per	ADP	E	_	11	case	_	_
11	POCO	poco	ADV	B	_	6	advmod	_	_
12	http://t.co/AkU6DZB4	http://t.co/AkU6DZB4	SYM	X	_	6	dep	_	_

~~~


