---
layout: base
title:  'Statistics of parataxis:insert in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `parataxis:insert`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="pl_pud-dep-parataxis-obj.html">parataxis:obj</a></tt>.

27 nodes (0%) are attached to their parents as `parataxis:insert`.

22 instances of `parataxis:insert` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.77777777777778.

The following 10 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (8; 30% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 parataxis:insert	color:blue
1	Według	według	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	rachuby	rachuba	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	parataxis:insert	8:parataxis:insert	_
3	reżysera	reżyser	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
5	do	do	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen
6	tej	ten	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	7	det	7:det	_
7	pory	pora	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obl	8:obl	_
8	stworzył	stworzyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	osiem	osiem	NUM	num:pl:acc:m3:rec:ncol	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	10	nummod:gov	10:nummod:gov	_
10	filmów	film	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 parataxis:insert	color:blue
1	Jak	jak	SCONJ	comp	_	2	mark	2:mark	_
2	donosi	donosić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	parataxis:insert	10:parataxis:insert	_
3	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	4	punct	4:punct	SpaceAfter=No
4	Le	Le	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	2:nsubj	_
5	Figaro	Figaro	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	4	flat	4:flat	SpaceAfter=No
6	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	4	punct	4:punct	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
8	rządowy	rządowy	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	plan	plan	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
10	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
11	uwolnić	uwolnić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	_
12	ponad	ponad	PART	part	_	13	advmod:emph	13:advmod:emph	_
13	42	42	NUM	num:pl:acc:m3:congr	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	15	nummod	15:nummod	_
14	miliony	milion	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	13	flat	13:flat	_
15	euro	euro	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	11	obj	11:obj	SpaceAfter=No
16	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	_
17	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	18	case	18:case	Case=Loc
18	tym	to	PRON	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	20	nmod	20:nmod	_
19	15,5	15,5	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	20	nummod:gov	20:nummod:gov	_
20	miliona	milion	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	13:nmod	_
21	na	na	ADP	prep:acc	AdpType=Prep	22	case	22:case	Case=Acc
22	cele	cel	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	obl	11:obl	_
23	bezpieczeństwa	bezpieczeństwo	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	22	nmod:arg	22:nmod:arg	SpaceAfter=No
24	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 parataxis:insert	color:blue
1	Na	na	ADP	prep:loc	AdpType=Prep	2	case	2:case	Case=Loc
2	zdjęciu	zdjęcie	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	4	obl	4:obl	_
3	wyraźnie	wyraźnie	ADV	adv:pos	Degree=Pos	4	advmod	4:advmod	_
4	widać	widać	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
5	wąski	wąski	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	6:amod	_
6	wyświetlacz	wyświetlacz	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	iobj	4:iobj	_
7	dotykowy	dotykowy	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	6:amod	_
8	nad	nad	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Ins
9	klawiaturą	klawiatura	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	4	obl	4:obl	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
11	oczekiwany	oczekiwać	ADJ	ppas:sg:acc:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	6	acl	6:acl	_
12	według	według	ADP	prep:gen	AdpType=Prep	13	case	13:case	Case=Gen
13	pogłosek	pogłoska	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	11	parataxis:insert	11:parataxis:insert	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


