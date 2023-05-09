---
layout: base
title:  'Statistics of flat:foreign in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="no_nynorsk-dep-flat-name.html">flat:name</a></tt>.

874 nodes (0%) are attached to their parents as `flat:foreign`.

874 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.14302059496567.

The following 7 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-X.html">X</a></tt> (785; 90% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-X.html">X</a></tt> (81; 9% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Det	Det	X	ukjent	_	0	root	_	_
2	problemet	problemet	X	ukjent	_	1	flat:foreign	_	_
3	får	får	X	ukjent	_	1	flat:foreign	_	_
4	en	en	X	ukjent	_	1	flat:foreign	_	_
5	ikke	ikke	X	ukjent	_	1	flat:foreign	_	_
6	løst	løst	X	ukjent	_	1	flat:foreign	_	_
7	så	så	X	ukjent	_	1	flat:foreign	_	_
8	lenge	lenge	X	ukjent	_	1	flat:foreign	_	_
9	vi	vi	X	ukjent	_	1	flat:foreign	_	_
10	er	er	X	ukjent	_	1	flat:foreign	_	_
11	utenfor	utenfor	X	ukjent	_	1	flat:foreign	_	_
12	EU	EU	X	ukjent	_	1	flat:foreign	_	SpaceAfter=No
13	.	$.	PUNCT	clb	_	1	punct	_	SpaceAfter=No
14	»	$"	PUNCT	<anf>	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:foreign	color:blue
1	Human	Human	PROPN	subst	_	0	root	_	_
2	Nature	Nature	PROPN	subst	_	1	flat:name	_	_
3	and	and	X	ukjent	_	1	flat:foreign	_	_
4	the	the	X	ukjent	_	1	flat:foreign	_	_
5	Limits	Limits	PROPN	subst	_	1	flat:name	_	_
6	of	of	X	ukjent	_	1	flat:foreign	_	_
7	Science	Science	PROPN	subst	_	1	flat:name	_	SpaceAfter=No
8	.	$.	PUNCT	clb	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 17 flat:foreign	color:blue
1	«	$"	PUNCT	<anf>	_	2	punct	_	SpaceAfter=No
2	Det	Det	X	ukjent	_	20	ccomp	_	_
3	legemeldte	legemeldte	X	ukjent	_	2	flat:foreign	_	_
4	sykefraværet	sykefraværet	X	ukjent	_	2	flat:foreign	_	_
5	gikk	gikk	X	ukjent	_	2	flat:foreign	_	_
6	opp	opp	X	ukjent	_	2	flat:foreign	_	_
7	med	med	X	ukjent	_	2	flat:foreign	_	_
8	2,8	2,8	NUM	det	Number=Plur|NumType=Card	2	flat:foreign	_	_
9	prosent	prosent	X	ukjent	_	2	flat:foreign	_	_
10	fra	fra	X	ukjent	_	2	flat:foreign	_	_
11	2.	2.	ADJ	adj	Number=Plur	2	flat:foreign	_	_
12	kvartal	kvartal	X	ukjent	_	2	flat:foreign	_	_
13	2010	2010	NUM	det	Number=Plur|NumType=Card	2	flat:foreign	_	_
14	til	til	X	ukjent	_	2	flat:foreign	_	_
15	2.	2.	ADJ	adj	Number=Plur	2	flat:foreign	_	_
16	kvartal	kvartal	X	ukjent	_	2	flat:foreign	_	_
17	2011	2011	NUM	det	Number=Plur|NumType=Card	2	flat:foreign	_	SpaceAfter=No
18	»	$"	PUNCT	<anf>	_	2	punct	_	SpaceAfter=No
19	,	$,	PUNCT	<komma>	_	2	punct	_	_
20	skriv	skrive	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
21	NAV	NAV	PROPN	subst	_	20	nsubj	_	_
22	i	i	ADP	prep	_	24	case	_	_
23	ei	ein	DET	det	Gender=Fem|PronType=Art	24	compound	_	_
24	pressemelding	pressemelding	NOUN	subst	Definite=Ind|Gender=Fem	20	obl	_	_
25	som	som	SCONJ	sbu	_	28	mark	_	_
26	nett	nett	ADV	adv	_	28	compound	_	_
27	vart	verte	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	28	aux:pass	_	_
28	send	sende	ADJ	adj	Definite=Ind|Gender=Fem,Masc|VerbForm=Part	24	acl:relcl	_	_
29	ut	ut	ADV	prep	_	28	advmod	_	SpaceAfter=No
30	.	$.	PUNCT	clb	_	20	punct	_	_

~~~


