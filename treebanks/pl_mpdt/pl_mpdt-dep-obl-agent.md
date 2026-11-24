---
layout: base
title:  'Statistics of obl:agent in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="pl_mpdt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pl_mpdt-dep-obl-cmp.html">obl:cmp</a></tt>.

80 nodes (0%) are attached to their parents as `obl:agent`.

47 instances of `obl:agent` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.3625.

The following 11 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (45; 56% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (16; 20% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (8; 10% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl:agent	color:blue
1	Prawdziwy	prawdziwy	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	Translit=Prawdziwy
2	Bóg	Bóg	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	9	nsubj:pass	9:nsubj:pass	Translit=Bog
3	czy	czy	PART	part	PartType=Int	9	advmod	9:advmod	Translit=czy
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	Translit=był
6	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen|Translit=od
7	kogo	kto	PRON	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing|PronType=Int	9	obl:agent	9:obl:agent	Translit=kogo
8	innego	inny	ADJ	adj:sg:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	Translit=innego
9	Znany	znać	ADJ	ppas:sg:nom:m:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	Translit=Znany
10	tylko	tylko	SCONJ	comp	_	12	mark	12:mark	Translit=tylko
11	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Gen|Translit=od
12	Izraelitów	Izraelita	PROPN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	8	obl:cmp	8:obl:cmp	SpaceAfter=No|Translit=Israelitow
13	?	?	PUNCT	interp	PunctType=Qest	9	punct	9:punct	Translit=?

~~~


