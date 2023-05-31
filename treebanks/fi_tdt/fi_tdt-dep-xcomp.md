---
layout: base
title:  'Statistics of xcomp in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="fi_tdt-dep-xcomp-ds.html">xcomp:ds</a></tt>.

2357 nodes (1%) are attached to their parents as `xcomp`.

2229 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63597793805685.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (1717; 73% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (403; 17% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (158; 7% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (20; 1% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (18; 1% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (9; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Lopulta	lopulta	ADV	Adv	_	2	advmod	2:advmod	_
2	saatiin	saada	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	halikuva	hali#kuva	NOUN	N	Case=Nom|Number=Sing	4	obj	4:obj	_
4	otettua	ottaa	VERB	V	Case=Par|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	xcomp	2:xcomp	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Siitä	se	PRON	Pron	Case=Ela|Number=Sing|PronType=Dem	2	obl	2:obl	_
2	tulee	tulla	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	vainoharhaiseksi	vaino#harhainen	ADJ	A	Case=Tra|Degree=Pos|Derivation=Inen|Number=Sing	2	xcomp	2:xcomp	SpaceAfter=No
4	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	Eihän	ei	AUX	V	Clitic=Han|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
2	tässä	tämä	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	3	obl	3:obl	_
3	ala	alkaa	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	kuin	kuin	ADV	Adv	_	6	advmod	6:advmod	_
5	kolme	kolme	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	6:nummod	_
6	kuukautta	kuukausi	NOUN	N	Case=Par|Number=Sing	3	nsubj	3:nsubj|8:nsubj:cop	_
7	ekasta	eka	ADJ	A	Case=Ela|Degree=Pos|Number=Sing|Style=Coll	8	amod	8:amod	_
8	matkasta	matka	NOUN	N	Case=Ela|Number=Sing	3	xcomp	3:xcomp	_
9	olemaan	olla	AUX	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	8	cop	8:cop	SpaceAfter=No
10	...	...	PUNCT	Punct	_	3	punct	3:punct	_

~~~


