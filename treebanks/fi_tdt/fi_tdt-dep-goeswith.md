---
layout: base
title:  'Statistics of goeswith in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `goeswith`

This relation is universal.

23 nodes (0%) are attached to their parents as `goeswith`.

23 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04347826086957.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (15; 65% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (5; 22% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (2; 9% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	Kysymys	kysymys	NOUN	N	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	kuulu	kuulua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	EU:	EU	PROPN	N	Abbr=Yes|Case=All|Number=Sing|Typo=Yes	3	obl	3:obl	_
5	lle	_	X	N	_	4	goeswith	4:goeswith	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 goeswith	color:blue
1	Komissio	komissio	NOUN	N	Case=Nom|Number=Sing	2	nsubj	2:nsubj|3:nsubj	_
2	halusi	haluta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	korvata	korvata	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	hintojen	hinta	NOUN	N	Case=Gen|Number=Plur	5	nmod:poss	5:nmod:poss	_
5	laskun	lasku	NOUN	N	Case=Gen|Derivation=U|Number=Sing	3	obj	3:obj	_
6	vain	vain	ADV	Adv	_	7	advmod	7:advmod	_
7	44	44	NUM	Num	NumType=Card	8	nummod	8:nummod	_
8	%:	%	NOUN	Punct	Case=Ade|Number=Sing|Typo=Yes	3	obl	3:obl	_
9	lla	_	X	N	_	8	goeswith	8:goeswith	SpaceAfter=No
10	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 goeswith	color:blue
1	Vanhaa	vanha	ADJ	A	Case=Par|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	tietä	tie	NOUN	N	Case=Par|Number=Sing	4	obj	4:obj	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	käyttänyt	käyttää	VERB	V	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	päivittäin	päivittäin	ADV	Adv	Derivation=Ttain	4	advmod	4:advmod	_
6	noin	noin	ADV	Adv	_	7	advmod	7:advmod	_
7	9 000	9 000	NUM	Num	NumType=Card	8	nummod	8:nummod	_
8	autoilijaa	autoilija	NOUN	N	Case=Par|Derivation=Ja|Number=Sing	4	nsubj	4:nsubj	SpaceAfter=No
9	,	,	PUNCT	Punct	_	14	punct	14:punct	_
10	joista	joka	PRON	Pron	Case=Ela|Number=Plur|PronType=Rel	12	nmod	12:nmod	_
11	nyt	nyt	ADV	Adv	_	14	advmod	14:advmod	_
12	6 000:	6 000	NUM	Num	Case=Gen|Number=Sing|NumType=Card|Typo=Yes	15	nsubj	15:nsubj	_
13	n	_	X	N	_	12	goeswith	12:goeswith	_
14	arvellaan	arvella	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	8:acl:relcl	_
15	siirtyvän	siirtyä	VERB	V	Case=Gen|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	14	xcomp:ds	14:xcomp:ds	_
16	uuden	uusi	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	17	amod	17:amod	_
17	ohitustien	ohitus#tie	NOUN	N	Case=Gen|Number=Sing	18	nmod:poss	18:nmod:poss	_
18	käyttäjiksi	käyttäjä	NOUN	N	Case=Tra|Derivation=Ja|Number=Plur	15	xcomp	15:xcomp	SpaceAfter=No
19	.	.	PUNCT	Punct	_	4	punct	4:punct	_

~~~


