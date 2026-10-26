---
layout: base
title:  'Statistics of compound:idiom in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `compound:idiom`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="et_edt-dep-compound-prt.html">compound:prt</a></tt>.

335 nodes (0%) are attached to their parents as `compound:idiom`.

170 instances of `compound:idiom` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67164179104478.

The following 9 pairs of parts of speech are connected with `compound:idiom`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (301; 90% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (18; 5% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:idiom	color:blue
1	Tahtsin	tahtma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=tahtma
2	elus	elu	NOUN	S	Case=Ine|Number=Sing	1	obl	1:obl	_
3	midagi	miski	PRON	P	Case=Par|Number=Sing|PronType=Ind	5	obj	5:obj	Arg=saatma_Arg_1
4	korda	kord	NOUN	S	Case=Add|Number=Sing	5	compound:idiom	5:obl	Arg=saatma_Arg_3
5	saata	saatma	VERB	V	VerbForm=Inf	1	xcomp	1:xcomp	Arg=tahtma_Arg_1|SpaceAfter=No|Verb=saatma_4
6	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:idiom	color:blue
1	Ärkasin	ärkama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Verb=ärkama
2	,	,	PUNCT	Z	_	3	punct	3:punct	_
3	tundes	tundma	VERB	V	VerbForm=Conv	1	advcl	1:advcl	Verb=tundma
4	seljas	selg	NOUN	S	Case=Ine|Number=Sing	3	obl:lmod	3:obl	_
5	kontideni	kont	NOUN	S	Case=Ter|Number=Plur	6	compound:idiom	6:obl	_
6	lõikavat	lõikav	ADJ	A	Case=Par|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	7	acl	7:acl	_
7	külma	külm	NOUN	S	Case=Par|Number=Sing	3	obj	3:obj	Arg=tundma_Arg_1|SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:idiom	color:blue
1	"	"	PUNCT	Z	_	3	punct	3:punct	SpaceAfter=No
2	Koos	koos	ADV	D	_	3	advmod	3:advmod	_
3	lähevad	minema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
5	arust	aru	NOUN	S	Case=Ela|Number=Sing	6	compound:idiom	6:obl	_
6	ära	ära	ADV	D	_	3	compound:prt	3:compound	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	SpaceAfter=No
8	"	"	PUNCT	Z	_	3	punct	3:punct	_

~~~


