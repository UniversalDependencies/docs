---
layout: base
title:  'Statistics of advmod:tmod in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="et_edt-dep-advmod-lmod.html">advmod:lmod</a></tt>.

3693 nodes (1%) are attached to their parents as `advmod:tmod`.

2578 instances of `advmod:tmod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08556728946656.

The following 9 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2683; 73% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (411; 11% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (369; 10% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (110; 3% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (67; 2% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (38; 1% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (13; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:tmod	color:blue
1	Mind	mina	PRON	P	Case=Par|Number=Sing|Person=1|PronType=Prs	6	obj	6:obj	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
3	Vermeeri	Vermeer	PROPN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	NE=B-Per
4	looming	looming	NOUN	S	Case=Nom|Number=Sing	6	nsubj	6:nsubj	_
5	alati	alati	ADV	D	_	6	advmod:tmod	6:advmod	_
6	fastsineerinud	fastsineerima	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advmod:tmod	color:blue
1	“	“	PUNCT	Z	_	5	punct	5:punct	_
2	Algul	algul	ADV	D	_	5	advmod:tmod	5:advmod	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	hirmus	hirmus	ADV	D	_	5	advmod	5:advmod	_
5	raske	raske	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:tmod	color:blue
1	Reede	reede	NOUN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	hommikul	hommik	NOUN	S	Case=Ade|Number=Sing	4	obl:tmod	4:obl	_
3	vara	vara	ADV	D	_	2	advmod:tmod	2:advmod	_
4	sõitsid	sõitma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=sõitma_1
5	etnofuturistid	etno_futur=ist	NOUN	S	Case=Nom|Number=Plur	4	nsubj	4:nsubj	Arg=sõitma_Arg_0
6	Võrumaale	Võru_maa	PROPN	S	Case=All|Number=Sing	4	obl:lmod	4:obl	Arg=sõitma_3|NE=B-Loc|SpaceAfter=No
7	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


