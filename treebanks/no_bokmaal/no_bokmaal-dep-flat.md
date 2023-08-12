---
layout: base
title:  'Statistics of flat in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="no_bokmaal-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="no_bokmaal-dep-flat-name.html">flat:name</a></tt>.

21 nodes (0%) are attached to their parents as `flat`.

21 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.04761904761905.

The following 10 pairs of parts of speech are connected with `flat`: <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (4; 19% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (3; 14% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (3; 14% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (2; 10% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 flat	color:blue
1	Uroen	uro	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	_
2	og	og	CCONJ	konj	_	3	cc	_	_
3	dramaet	drama	NOUN	subst	Definite=Def|Gender=Neut|Number=Sing	1	conj	_	_
4	1852	1852	NUM	det	Number=Plur|NumType=Card	3	nmod	_	_
5	-	$-	PUNCT	<strek>	_	6	punct	_	_
6	54	54	NUM	det	Number=Plur|NumType=Card	4	flat	_	_
7	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	fortsatt	fortsatt	ADV	adv	_	9	advmod	_	_
9	smertefullt	smertefull	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
10	for	for	ADP	prep	_	12	case	_	_
11	mange	mange	ADJ	adj	Degree=Pos|Number=Plur	12	amod	_	_
12	samer	same	NOUN	subst	Definite=Ind|Gender=Masc|Number=Plur	9	obl	_	SpaceAfter=No
13	.	$.	PUNCT	clb	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 30 flat	color:blue
1	Etter	etter	ADP	prep	_	4	case	_	_
2	at	at	SCONJ	sbu	_	4	mark	_	_
3	TV2	TV2	PROPN	subst	_	4	nsubj	_	_
4	viste	vise	VERB	verb	Mood=Ind|Tense=Past|VerbForm=Fin	18	advcl	_	_
5	dokumentaren	dokumentar	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	4	obj	_	_
6	«	$"	PUNCT	<anf>	_	7	punct	_	SpaceAfter=No
7	Jakten	jakt	PROPN	subst	_	5	appos	_	_
8	på	på	ADP	prep	_	7	flat:name	_	_
9	den	den	DET	det	Gender=Masc|Number=Sing|PronType=Dem	7	flat:name	_	_
10	mistenkte	mistenke	ADJ	adj	Definite=Def|Number=Sing|VerbForm=Part	7	flat:name	_	SpaceAfter=No
11	»	$"	PUNCT	<anf>	_	7	punct	_	_
12	sist	sist	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc|Number=Sing	13	amod	_	_
13	onsdag	onsdag	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
14	,	$,	PUNCT	<komma>	_	4	punct	_	_
15	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	18	aux	_	_
16	120.000	120.000	NUM	det	Number=Plur|NumType=Card	17	nummod	_	_
17	mennesker	menneske	NOUN	subst	Definite=Ind|Gender=Neut|Number=Plur	18	nsubj	_	_
18	meldt	melde	VERB	verb	VerbForm=Part	0	root	_	_
19	seg	seg	PRON	pron	Case=Acc|PronType=Prs|Reflex=Yes	18	obj	_	_
20	inn	inn	ADP	prep	_	22	case	_	_
21	i	i	ADP	prep	_	22	case	_	_
22	Facebook-gruppen	Facebook-gruppe	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	18	obl	_	_
23	«	$"	PUNCT	<anf>	_	24	punct	_	SpaceAfter=No
24	Ta	ta	VERB	verb	Mood=Imp|VerbForm=Fin	22	acl	_	_
25	del	del	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	24	flat	_	_
26	i	i	ADP	prep	_	24	flat	_	_
27	oppklaringen	oppklaring	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	24	flat	_	_
28	av	av	ADP	prep	_	24	flat	_	_
29	drapet	drap	NOUN	subst	Definite=Def|Gender=Neut|Number=Sing	24	flat	_	_
30	på	på	ADP	prep	_	24	flat	_	_
31	Martine	Martine	PROPN	subst	_	24	flat	_	_
32	Vik	Vik	PROPN	subst	_	24	flat	_	_
33	Magnussen	Magnussen	PROPN	subst	_	24	flat	_	SpaceAfter=No
34	»	$"	PUNCT	<anf>	_	24	punct	_	SpaceAfter=No
35	.	$.	PUNCT	clb	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 29 flat	color:blue
1	Etter	etter	ADP	prep	_	4	case	_	_
2	at	at	SCONJ	sbu	_	4	mark	_	_
3	TV2	TV2	PROPN	subst	_	4	nsubj	_	_
4	viste	vise	VERB	verb	Mood=Ind|Tense=Past|VerbForm=Fin	18	advcl	_	_
5	dokumentaren	dokumentar	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	4	obj	_	_
6	«	$"	PUNCT	<anf>	_	7	punct	_	SpaceAfter=No
7	Jakten	jakt	PROPN	subst	_	5	appos	_	_
8	på	på	ADP	prep	_	7	flat:name	_	_
9	den	den	DET	det	Gender=Masc|Number=Sing|PronType=Dem	7	flat:name	_	_
10	mistenkte	mistenke	ADJ	adj	Definite=Def|Number=Sing|VerbForm=Part	7	flat:name	_	SpaceAfter=No
11	»	$"	PUNCT	<anf>	_	7	punct	_	_
12	sist	sist	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc|Number=Sing	13	amod	_	_
13	onsdag	onsdag	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
14	,	$,	PUNCT	<komma>	_	4	punct	_	_
15	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	18	aux	_	_
16	120.000	120.000	NUM	det	Number=Plur|NumType=Card	17	nummod	_	_
17	mennesker	menneske	NOUN	subst	Definite=Ind|Gender=Neut|Number=Plur	18	nsubj	_	_
18	meldt	melde	VERB	verb	VerbForm=Part	0	root	_	_
19	seg	seg	PRON	pron	Case=Acc|PronType=Prs|Reflex=Yes	18	obj	_	_
20	inn	inn	ADP	prep	_	22	case	_	_
21	i	i	ADP	prep	_	22	case	_	_
22	Facebook-gruppen	Facebook-gruppe	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	18	obl	_	_
23	«	$"	PUNCT	<anf>	_	24	punct	_	SpaceAfter=No
24	Ta	ta	VERB	verb	Mood=Imp|VerbForm=Fin	22	acl	_	_
25	del	del	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	24	flat	_	_
26	i	i	ADP	prep	_	24	flat	_	_
27	oppklaringen	oppklaring	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	24	flat	_	_
28	av	av	ADP	prep	_	24	flat	_	_
29	drapet	drap	NOUN	subst	Definite=Def|Gender=Neut|Number=Sing	24	flat	_	_
30	på	på	ADP	prep	_	24	flat	_	_
31	Martine	Martine	PROPN	subst	_	24	flat	_	_
32	Vik	Vik	PROPN	subst	_	24	flat	_	_
33	Magnussen	Magnussen	PROPN	subst	_	24	flat	_	SpaceAfter=No
34	»	$"	PUNCT	<anf>	_	24	punct	_	SpaceAfter=No
35	.	$.	PUNCT	clb	_	18	punct	_	_

~~~


