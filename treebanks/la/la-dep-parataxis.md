---
layout: base
title:  'Statistics of parataxis in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `parataxis`

This relation is universal.

206 nodes (1%) are attached to their parents as `parataxis`.

176 instances of `parataxis` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.64563106796117.

The following 7 pairs of parts of speech are connected with `parataxis`: <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (184; 89% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="la-pos-X.html">X</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	senatus	senatus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	haec	hic1	PRON	p-p---na-	Case=Acc|Gender=Neut|Number=Plur	3	obj	_	_
3	intellegit	intellego1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	comma1	PUNCT	u--------	_	3	punct	_	_
5	consul	consul1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	videt	video1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	SpaceAfter=No
7	;	punc1	PUNCT	u--------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis	color:blue
1	Quale	qualis	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	inquit	inquam	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
3	caput	caput	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	_
4	est	sum1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	SpaceAfter=No
5	,	,	PUNCT	u--------	_	1	punct	_	_
6	talis	talis	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	xcomp	_	_
7	praestatur	praesto2	VERB	v3spip---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	parataxis	_	_
8	sapor	sapor	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	u--------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	Io	io1	INTJ	e--------	_	2	advmod	_	_
2	Saturnalia	Saturnalia	NOUN	n-s---fv-	Case=Voc|Gender=Fem|Number=Sing	4	vocative	_	SpaceAfter=No
3	,	comma1	PUNCT	u--------	_	4	punct	_	_
4	rogo	rogo1	VERB	v1spia---	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	comma1	PUNCT	u--------	_	4	punct	_	_
6	mensis	mensis1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	december	December1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	parataxis	_	_
8	est	sum1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
9	?	punc1	PUNCT	u--------	_	4	punct	_	_

~~~


