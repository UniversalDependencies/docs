---
layout: base
title:  'Statistics of parataxis in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="pl_mpdt-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="pl_mpdt-dep-parataxis-obj.html">parataxis:obj</a></tt>.

1 nodes (0%) are attached to their parents as `parataxis`.

1 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.

The following 1 pairs of parts of speech are connected with `parataxis`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 parataxis	color:blue
1	Te	ten	DET	adj:pl:nom:m:pos	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	2	det	2:det	Translit=Te
2	pieniądze	pieniądz	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	3:nsubj	Translit=pieniądze
3	posłużą	posłużyć	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=posłużą
4	mi	ja	PRON	ppron12:sg:dat:pri:nakc	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	3	iobj	3:iobj	Translit=mi
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|ExtPos=ADV|Variant=Short	3	advmod	3:advmod	Case=Loc|Translit=w
6	razie	raz	NOUN	subst:sg:loc:m	Case=Loc|Gender=Masc|Number=Sing	5	fixed	5:fixed	Translit=razie
7	Ladajaki	ladajaki	ADJ	adj:sg:voc:m:pos	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	Translit=Ladaiaki
8	kruszcu	kruszec	NOUN	subst:sg:voc:m	Case=Voc|Gender=Masc|Number=Sing	13	vocative	13:vocative	SpaceAfter=No|Translit=kruszcu
9	!	!	PUNCT	interp	PunctType=Excl	8	punct	8:punct	Translit=!
10	do	do	ADP	prep:gen	AdpType=Prep	11	case	11:case	Case=Gen|Translit=do
11	tego	to	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	13	obl	13:obl	Translit=tego
12	ż	ż	PART	part:nwok	_	11	advmod:emph	11:advmod:emph	Translit=ż
13	przychodzi	przychodzić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	3:parataxis	SpaceAfter=No|Translit=przychodzi
14	,	,	PUNCT	interp	PunctType=Comm	19	punct	19:punct	Translit=,
15	że	że	SCONJ	comp	_	19	mark	19:mark	Translit=że
16	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	17	case	17:case	Case=Gen|Translit=od
17	ciebie	ty	PRON	ppron12:sg:gen:sec:akc	Case=Gen|Number=Sing|Person=2|PronType=Prs|Variant=Long	20	obl:arg	20:obl:arg	Translit=ciebie
18	mojego	mój	DET	adj:sg:gen:n:pos	Case=Gen|Gender=Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	21	det:poss	21:det:poss	Translit=moiego
19	mam	mieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp:cleft	11:ccomp:cleft	Translit=mam
20	czekać	czekać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	19	xcomp	19:xcomp	Translit=czekać
21	szczęścia	szczęście	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	20	iobj	20:iobj	SpaceAfter=No|Translit=szczęścia
22	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


