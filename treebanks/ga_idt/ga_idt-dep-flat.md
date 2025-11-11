---
layout: base
title:  'Statistics of flat in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ga_idt-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ga_idt-dep-flat-name.html">flat:name</a></tt>.

291 nodes (0%) are attached to their parents as `flat`.

291 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3573883161512.

The following 15 pairs of parts of speech are connected with `flat`: <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (92; 32% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (55; 19% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (44; 15% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (31; 11% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (19; 7% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (17; 6% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (12; 4% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (5; 2% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Níor	níor	PART	Vb	PartType=Vb|Polarity=Neg|Tense=Past	2	advmod	_	_
2	rith	rith	VERB	VTI	Mood=Ind|Polarity=Neg|Tense=Past	0	root	_	_
3	Storm	Storm	PROPN	Noun	Case=Nom|Definite=Def|Foreign=Yes|Number=Sing	2	nsubj	_	NamedEntity=Yes
4	Alert	Alert	PROPN	Noun	Case=Nom|Definite=Def|Foreign=Yes|Number=Sing	3	flat	_	NamedEntity=Yes
5	ag	ag	ADP	Simp	_	6	case	_	_
6	Ascot	Ascot	PROPN	Noun	Case=Nom|Definite=Def|Number=Sing	2	obl	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	tseachain	seachtain	NOUN	Noun	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Typo=Yes	2	obl:tmod	_	_
9	seo	seo	DET	Det	PronType=Dem	8	det	_	_
10	caite	caite	ADJ	Adj	VerbForm=Part	9	fixed	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	Campa	campa	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	samhraidh	samhradh	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	NamedEntity=Yes
3	Óg-Eagras	Óg-Eagras	PROPN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	flat	_	NamedEntity=Yes|SpaceAfter=No
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	Ionad	ionad	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	appos	_	NamedEntity=Yes
6	Mosney	Mosney	PROPN	Noun	Definite=Def|Foreign=Yes|Gender=Masc|Number=Sing	5	nmod	_	NamedEntity=Yes|SpaceAfter=No
7	,	,	PUNCT	Punct	_	8	punct	_	_
8	Co.	contae	NOUN	Abr	Abbr=Yes|Definite=Def	1	nmod	_	NamedEntity=Yes
9	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	NamedEntity=Yes
10	Mí	Mí	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	NamedEntity=Yes|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Dé	Dé	PROPN	Subst	Definite=Def|Number=Sing	0	root	_	NamedEntity=Yes
2	Céadaoin	Céadaoin	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	NamedEntity=Yes|SpaceAfter=No
3	,	,	PUNCT	Punct	_	4	punct	_	_
4	28	28	NUM	Num	_	1	nmod	_	NamedEntity=Yes
5	Bealtaine	Bealtaine	PROPN	Noun	Definite=Def|Gender=Fem|Number=Sing	4	flat	_	NamedEntity=Yes
6	1986	1986	NUM	Num	_	4	flat	_	NamedEntity=Yes|SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


