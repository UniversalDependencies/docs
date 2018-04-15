---
layout: base
title:  'Statistics of case in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `case`

This relation is universal.

2988 nodes (1%) are attached to their parents as `case`.

2586 instances of `case` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36010709504685.

The following 14 pairs of parts of speech are connected with `case`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (2137; 72% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (446; 15% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (308; 10% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (29; 1% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (22; 1% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (20; 1% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (9; 0% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Saavuin	saapua	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	siis	siis	ADV	Adv	_	1	advmod	_	_
3	kaupunkiin	kaupunki	NOUN	N	Case=Ill|Number=Sing	1	obl	_	_
4	kameraryhmäni	kamera#ryhmä	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	obl	_	_
5	kanssa	kanssa	ADP	Adp	AdpType=Post	4	case	_	_
6	jo	jo	ADV	Adv	_	8	advmod	_	_
7	ennen	ennen	ADP	Adp	AdpType=Prep	8	case	_	_
8	yhtätoista	yksi#toista	NUM	Num	Case=Par|Number=Sing|NumType=Card	1	obl	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Voi	voi	INTJ	Interj	_	3	discourse	_	_
2	helvetti	helvetti	INTJ	Interj	_	1	fixed	_	_
3	sun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs|Style=Coll	0	root	_	_
4	kanssas	kanssa	ADP	Adp	AdpType=Post|Number[psor]=Sing|Person[psor]=2|Style=Coll	3	case	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Sallan	Salla	PROPN	N	Case=Gen|Number=Sing	3	obl	_	_
2	kanssa	kanssa	ADP	Adp	AdpType=Post	1	case	_	_
3	tuli	tulla	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	iskettyä	iskeä	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	3	xcomp	_	_
5	silmät	silmä	NOUN	N	Case=Nom|Number=Plur	4	obj	_	_
6	samaan	sama	PRON	Pron	Case=Ill|Number=Sing|PronType=Ind	7	det	_	_
7	turboneuleeseen	turbo#neule	NOUN	N	Case=Ill|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


