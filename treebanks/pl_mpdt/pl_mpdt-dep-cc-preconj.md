---
layout: base
title:  'Statistics of cc:preconj in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-cc.html">cc</a></tt>.

128 nodes (0%) are attached to their parents as `cc:preconj`.

128 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9453125.

The following 13 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (51; 40% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (23; 18% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (16; 13% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (14; 11% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (6; 5% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (4; 3% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (3; 2% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	16	16	NUM	dig	NumForm=Digit	4	list	4:list|7:list|10:list	SpaceAfter=No|Translit=16
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	I	i	CCONJ	conj	_	4	cc:preconj	4:cc:preconj	Translit=Y
4	Raroga	raróg	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Rarogá
5	/	/	PUNCT	interp	PunctType=Slsh	7	punct	7:punct	Translit=/
6	i	i	CCONJ	conj	_	7	cc:preconj	7:cc:preconj	Translit=y
7	Lelka	lelek	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	4	conj	4:conj	SpaceAfter=No|Translit=Lelká
8	/	/	PUNCT	interp	PunctType=Slsh	10	punct	10:punct	Translit=/
9	i	i	CCONJ	conj	_	10	cc	10:cc	Translit=y
10	łabęcia	łabęć	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	4	conj	4:conj	SpaceAfter=No|Translit=łábęćiá
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	A	a	CCONJ	conj	_	3	cc:preconj	3:cc:preconj	Translit=A
2	Pan	pan	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj|10:nsubj	Translit=Pan
3	stworzył	stworzyć	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=stworzył
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
5	wszystko	wszystko	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	3	obj	3:obj	SpaceAfter=No|Translit=wszystko
6	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
7	a	a	CCONJ	conj	_	10	cc	10:cc	Translit=a
8	pobożnie	pobożnie	ADV	adv:pos	Degree=Pos	9	advmod	9:advmod	Translit=pobożnie
9	żyjącym	żyć	ADJ	pact:pl:dat:m:imperf:aff:pos	Aspect=Imp|Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	10	iobj	10:iobj	Translit=żyiącym
10	dał	dać	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	3:conj	Translit=dał
11	mądrość	mądrość	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	10	obj	10:obj	SpaceAfter=No|Translit=mądrość
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 cc:preconj	color:blue
1	Też	tenże	DET	adj:pl:nom:f:pos	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	4	det	4:det	Translit=Też
2	same	sam	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	4	amod	4:amod	Translit=same
3	powietrzne	powietrzny	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	4	amod	4:amod	Translit=powietrzne
4	Komety	kometa	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	7	nsubj	7:nsubj|16:nsubj	SpaceAfter=No|Translit=Komety
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
6	albo	albo	CCONJ	conj	_	7	cc:preconj	7:cc:preconj	Translit=álbo
7	są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=są
8	niżej	nisko	ADV	adv:com	Degree=Cmp	7	advmod	7:advmod	Translit=niżey
9	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Gen|Translit=od
10	ziemi	ziemia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obl:cmpr	8:obl:cmpr	SpaceAfter=No|Translit=źiemi
11	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	Translit=,
12	albo	albo	CCONJ	conj	_	13	cc	13:cc	Translit=álbo
13	wyżej	wysoko	ADV	adv:com	Degree=Cmp	7	conj	7:conj	SpaceAfter=No|Translit=wyżey
14	;	;	PUNCT	interp	PunctType=Semi	16	punct	16:punct	Translit=;
15	lub	lub	CCONJ	conj	_	16	cc:preconj	16:cc:preconj	Translit=lub
16	większe	duży	ADJ	adj:pl:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Plur	7	conj	7:conj	Translit=większe
17	albo	albo	CCONJ	conj	_	19	cc	19:cc	Translit=álbo
18	też	też	PART	part	_	16	advmod:emph	16:advmod:emph|19:advmod:emph	Translit=też
19	mniejsze	mały	ADJ	adj:pl:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Plur	16	conj	7:conj|16:conj	SpaceAfter=No|Translit=mnieysze
20	?	?	PUNCT	interp	PunctType=Qest	7	punct	7:punct	Translit=?

~~~


