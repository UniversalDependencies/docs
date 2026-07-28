---
layout: base
title:  'Statistics of obl:agent in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="pl_mpdt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pl_mpdt-dep-obl-cmp.html">obl:cmp</a></tt>.

91 nodes (0%) are attached to their parents as `obl:agent`.

47 instances of `obl:agent` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.98901098901099.

The following 11 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (34; 37% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (18; 20% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (14; 15% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (7; 8% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (7; 8% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 obl:agent	color:blue
1	Podczas	podczas	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen|Translit=Pod czas
2	Mszy	msza	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	obl	4:obl	Translit=Mszy
3	Świętej	święty	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	Translit=Swiętey
4	śpiewa	śpiewać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=śpiewa
5	lud	lud	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Translit=lud
6	po	po	ADP	prep:dat	AdpType=Prep	7	case	7:case	Case=Dat|Translit=po
7	Polsku	polski	ADJ	adjb:sg:dat:n:pos	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	4	obl	4:obl	Translit=Polsku
8	pieśni	pieśń	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	4	obj	4:obj	Translit=pieśni
9	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Gen|Translit=od
10	zwierzchności	zwierzchność	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	12	obl:agent	12:obl:agent	Translit=zwierzchności
11	kościelnej	kościelny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	Translit=kościelney
12	ułożone	ułożyć	ADJ	ppas:pl:acc:f:perf:aff:pos	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	8	acl	8:acl	SpaceAfter=No|Translit=ułożone
13	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Uważano	uważać	VERB	imps:imperf	Aspect=Imp|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Uważano
2	przy	przy	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc|SpaceAfter=No|Translit=przy
3	tym	to	PRON	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	1	obl	1:obl	Translit=tym
4	ruszanie	ruszać	NOUN	ger:sg:acc:n:imperf:aff	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	1	obj	1:obj	Translit=ruszanie
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	Translit=się
6	wody	woda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	obl:agent	4:obl:agent	SpaceAfter=No|Translit=wody
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
8	bąbele	bąbel	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	4	conj	1:obj|4:conj	SpaceAfter=No|Translit=bąbele
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
10	kolor	kolor	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	4	conj	1:obj|4:conj	SpaceAfter=No|Translit=kolor
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:agent	color:blue
1	1	1	NUM	dig	NumForm=Digit	3	list	3:list	SpaceAfter=No|Translit=1
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	Salem	Salem	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Salem
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
5	potym	potym	ADV	adv:pos	Degree=Pos	7	advmod	7:advmod	Translit=potym
6	Akra	Akra	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	iobj	7:iobj	Translit=Akra
7	zwaną	zwać	ADJ	ppas:sg:acc:f:imperf:aff:pos	Aspect=Imp|Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	acl	3:acl	SpaceAfter=No|Translit=zwaną
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
9	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Gen|Translit=od
10	Melchisedecha	Melchisedech	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	11	obl:agent	11:obl:agent	Translit=Melchisedecha
11	założoną	założyć	ADJ	ppas:sg:acc:f:perf:aff:pos	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	conj	3:acl|7:conj	SpaceAfter=No|Translit=założoną
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


