---
layout: base
title:  'Statistics of xcomp in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="fi-dep-xcomp-ds.html">xcomp:ds</a></tt>.

2357 nodes (1%) are attached to their parents as `xcomp`.

2229 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63555366991939.

The following 17 pairs of parts of speech are connected with `xcomp`: <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1710; 73% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (402; 17% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (158; 7% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (20; 1% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (19; 1% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (9; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Lopulta	lopulta	ADV	Adv	_	2	advmod	_	_
2	saatiin	saada	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	halikuva	hali#kuva	NOUN	N	Case=Nom|Number=Sing	4	obj	_	_
4	otettua	ottaa	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Siitä	se	PRON	Pron	Case=Ela|Number=Sing|PronType=Dem	2	obl	_	_
2	tulee	tulla	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	vainoharhaiseksi	vaino#harhainen	ADJ	A	Case=Tra|Degree=Pos|Derivation=Inen|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	Eihän	ei	AUX	V	Clitic=Han|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	tässä	tämä	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	3	obl	_	_
3	ala	alkaa	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	kuin	kuin	ADV	Adv	_	6	advmod	_	_
5	kolme	kolme	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	kuukautta	kuu#kausi	NOUN	N	Case=Par|Number=Sing	3	nsubj	8:nsubj:cop	_
7	ekasta	eka	ADJ	A	Case=Ela|Degree=Pos|Number=Sing|Style=Coll	8	nummod	_	_
8	matkasta	matka	NOUN	N	Case=Ela|Number=Sing	3	xcomp	_	_
9	olemaan	olla	AUX	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	8	cop	_	SpaceAfter=No
10	...	...	PUNCT	Punct	_	3	punct	_	_

~~~


