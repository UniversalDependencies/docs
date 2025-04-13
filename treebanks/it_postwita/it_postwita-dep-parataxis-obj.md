---
layout: base
title:  'Statistics of parataxis:obj in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:obj`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_postwita-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_postwita-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_postwita-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_postwita-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>.

22 nodes (0%) are attached to their parents as `parataxis:obj`.

16 instances of `parataxis:obj` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.63636363636364.

The following 7 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (11; 50% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (4; 18% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 9% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 5% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:obj	color:blue
1	@user	@user	SYM	SYM	_	4	vocative	_	_
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
12	http://t.co/AkU6DZB4	http://t.co/AkU6DZB4	SYM	X	_	6	parataxis	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis:obj	color:blue
1	Controlla	controllare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	video	video	NOUN	S	Gender=Masc	1	obj	_	_
4	Ecco	ecco	ADV	B	_	5	advmod	_	_
5	chi	chi	PRON	PR	PronType=Rel	1	parataxis:obj	_	_
6	davvero	davvero	ADV	B	_	8	advmod	_	_
7	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	Mario	mario	PROPN	SP	_	5	acl:relcl	_	_
9	Monti	Monti	PROPN	SP	_	8	flat:name	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	8	punct	_	_
11	servo	servo	NOUN	S	Gender=Masc|Number=Sing	8	appos	_	_
12	fedele	fedele	ADJ	A	Number=Sing	11	amod	_	_
13	di	di	ADP	E	_	14	case	_	_
14	Mr.	Mr.	X	SW	Foreign=Yes	11	nmod	_	_
15	Rockefeller	Rockefeller	PROPN	SP	_	14	flat:name	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	1	punct	_	_
17	Fuori	fuori	ADP	E	_	18	case	_	_
18	d...	d...	X	X	_	1	parataxis	_	_
19	http://t.co/iegtDz5e	http://t.co/iegtDz5e	SYM	X	_	1	parataxis	_	_
20	via	via	ADP	E	_	21	case	_	_
21	@user	@user	SYM	SYM	_	1	vocative	_	_

~~~


