---
layout: base
title:  'Statistics of xcomp:ds in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `xcomp:ds`

This relation is a language-specific subtype of <tt><a href="fi_tdt-dep-xcomp.html">xcomp</a></tt>.

1089 nodes (1%) are attached to their parents as `xcomp:ds`.

1027 instances of `xcomp:ds` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.20477502295684.

The following 16 pairs of parts of speech are connected with `xcomp:ds`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (586; 54% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (206; 19% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (161; 15% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (96; 9% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp:ds	color:blue
1	Tutkimuskeskuksen	tutkimus#keskus	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	2:nmod:poss	_
2	siivoojalle	siivooja	NOUN	N	Case=All|Derivation=Ja|Number=Sing	4	obl	4:obl	_
3	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	kuulu	kuulua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	tiskata	tiskata	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	xcomp:ds	4:xcomp:ds	_
6	astioita	astia	NOUN	N	Case=Par|Number=Plur	5	obj	5:obj	SpaceAfter=No
7	.	.	PUNCT	Punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp:ds	color:blue
1	Minttu	Minttu	PROPN	N	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	muuten	muuten	ADV	Adv	_	3	advmod	3:advmod	_
3	väitti	väittää	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	aika	aika	ADV	Adv	_	5	advmod	5:advmod	_
5	hartaasti	hartaasti	ADV	Adv	Derivation=Sti	3	advmod	3:advmod	_
6	tätä	tämä	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	7	det	7:det	_
7	paitaa	paita	NOUN	N	Case=Par|Number=Sing	3	obj	3:obj	_
8	hameeksi	hame	NOUN	N	Case=Tra|Number=Sing	3	xcomp:ds	3:xcomp:ds	SpaceAfter=No
9	!	!	PUNCT	Punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp:ds	color:blue
1	−	−	PUNCT	Punct	_	4	punct	4:punct	_
2	Tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	5	obj	5:obj	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	helppo	helppo	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
5	ymmärtää	ymmärtää	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	xcomp:ds	4:xcomp:ds	_
6	oppimisprosessin	oppimis#prosessi	NOUN	N	Case=Gen|Number=Sing	5	obl	5:obl	_
7	kautta	kautta	ADP	Adp	AdpType=Post	6	case	6:case	SpaceAfter=No
8	.	.	PUNCT	Punct	_	4	punct	4:punct	_

~~~


