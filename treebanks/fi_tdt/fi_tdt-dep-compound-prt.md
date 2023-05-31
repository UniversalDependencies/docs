---
layout: base
title:  'Statistics of compound:prt in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="fi_tdt-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fi_tdt-dep-compound-nn.html">compound:nn</a></tt>.

281 nodes (0%) are attached to their parents as `compound:prt`.

225 instances of `compound:prt` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40213523131673.

The following 6 pairs of parts of speech are connected with `compound:prt`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (259; 92% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (11; 4% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound:prt	color:blue
1	Ottakaa	ottaa	VERB	V	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	minut	minä	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	1:obj	_
3	mukaan	mukaan	ADV	Adv	_	1	compound:prt	1:compound:prt	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	6:punct	_
5	niin	niin	ADV	Adv	_	6	mark	6:mark	_
6	saatte	saada	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	1:advcl	_
7	luotettavan	luotettava	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	8	amod	8:amod	_
8	turvamiehen	turva#mies	NOUN	N	Case=Gen|Number=Sing	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:prt	color:blue
1	Päätimme	päättää	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	myös	myös	ADV	Adv	_	3	advmod	3:advmod	_
3	säilyttää	säilyttää	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
4	kuuden	kuusi	NUM	Num	Case=Gen|Number=Sing|NumType=Card	5	nummod	5:nummod	_
5	kuukauden	kuukausi	NOUN	N	Case=Gen|Number=Sing	6	nmod:poss	6:nmod:poss	_
6	siirtymäkauden	siirtymä#kausi	NOUN	N	Case=Gen|Number=Sing	3	obj	3:obj	_
7	direktiivin	direktiivi	NOUN	N	Case=Gen|Number=Sing	9	nmod:gsubj	9:nmod:gsubj	_
8	voimaan	voimaan	ADV	Adv	_	9	compound:prt	9:compound:prt	_
9	astumisen	astuminen	NOUN	N	Case=Gen|Derivation=Minen|Number=Sing	3	obl	3:obl	_
10	jälkeen	jälkeen	ADP	Adp	AdpType=Post	9	case	9:case	SpaceAfter=No
11	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Moni	moni	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	2	det	2:det	_
2	yhtiö	yhtiö	NOUN	N	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
3	ottikin	ottaa	VERB	V	Clitic=Kin|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	vaarin	vaari	NOUN	N	Case=Gen|Number=Sing	3	compound:prt	3:compound:prt	_
5	analyytikkojen	analyytikko	NOUN	N	Case=Gen|Number=Plur	6	nmod:poss	6:nmod:poss	_
6	ohjeista	ohje	NOUN	N	Case=Ela|Number=Plur	3	obl	3:obl	SpaceAfter=No
7	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


