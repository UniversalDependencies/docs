---
layout: base
title:  'Statistics of dep in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `dep`

This relation is universal.

14 nodes (0%) are attached to their parents as `dep`.

11 instances of `dep` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.85714285714286.

The following 10 pairs of parts of speech are connected with `dep`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (3; 21% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (2; 14% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (2; 14% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (1; 7% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 21 dep	color:blue
1	Państwa	państwo	NOUN	subst:pl:nom:n:ncol	Case=Nom|Gender=Neut|Number=Plur	13	nsubj	13:nsubj	_
2	oraz	oraz	CCONJ	conj	_	4	cc	4:cc	_
3	regionalne	regionalny	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	4	amod	4:amod	_
4	organizacje	organizacja	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	1	conj	1:conj|13:nsubj	_
5	integracji	integracja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod:arg	4:nmod:arg	_
6	gospodarczej	gospodarczy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	5:amod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
8	określone	określić	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl	4:acl	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
10	artykule	artykuł	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	obl	8:obl	_
11	2	2	X	dig	NumForm=Digit	10	amod	10:amod	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
13	mogą	móc	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
14	stać	stać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	13	xcomp	13:xcomp	_
15	się	się	PRON	part	PronType=Prs|Reflex=Yes	14	expl:pv	14:expl:pv	_
16	Umawiającymi	umawiać	ADJ	pact:pl:inst:f:imperf:aff	Aspect=Imp|Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	18	acl	18:acl	_
17	się	się	PRON	part	PronType=Prs|Reflex=Yes	16	expl:pv	16:expl:pv	_
18	Stronami	strona	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	14	xcomp:pred	14:xcomp:pred	_
19	niniejszego	niniejszy	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	20	amod	20:amod	_
20	Porozumienia	porozumienie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	18	nmod:arg	18:nmod:arg	_
21	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	14	dep	14:dep	Case=Acc|SpaceAfter=No
22	:	:	PUNCT	interp	PunctType=Colo	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 dep	color:blue
1	Była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
2	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Gen
3	agenta	agent	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	0	root	0:root	_
4	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Gen
5	Kopenhagi	Kopenhaga	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	3	nmod	3:nmod	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	a	a	CCONJ	conj	_	8	cc	8:cc	_
8	zawierała	zawierać	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	_
9	następującą	następujący	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	_
10	wiadomość	wiadomość	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	8	iobj	8:iobj	SpaceAfter=No
11	:	:	PUNCT	interp	PunctType=Colo	10	punct	10:punct	_
12	PRZYKRO	przykro	ADV	adv:pos	Degree=Pos	10	parataxis:obj	10:parataxis:obj	_
13	MI	ja	PRON	ppron12:sg:dat:m1:pri:nakc	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Variant=Short	12	iobj	12:iobj	_
14	PANU	pan	NOUN	subst:sg:dat:m1	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing	15	iobj	15:iobj	_
15	DONIEŚĆ	donieść	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	12	xcomp	12:xcomp	SpaceAfter=No
16	,	,	PUNCT	interp	PunctType=Comm	28	punct	28:punct	_
17	ŻE	że	SCONJ	comp	_	28	mark	28:mark	_
18	T	Turbine	ADV	brev:pun	Abbr=Yes	28	xcomp:subj	28:xcomp:subj	SpaceAfter=No
19	.	.	PUNCT	interp	PunctType=Peri	18	punct	18:punct	SpaceAfter=No
20	S	Steam	ADV	brev:pun	Abbr=Yes	18	dep	18:dep	SpaceAfter=No
21	.	.	PUNCT	interp	PunctType=Peri	20	punct	20:punct	SpaceAfter=No
22	S	Ship	ADV	brev:pun	Abbr=Yes	20	dep	20:dep	SpaceAfter=No
23	.	.	PUNCT	interp	PunctType=Peri	22	punct	22:punct	_
24	KOŚCIUSZKO	Kościuszko	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	18	appos	18:appos	_
25	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	27	case	27:case	Case=Loc
26	TEJ	ten	DET	adj:sg:loc:f:pos	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	27	det	27:det	_
27	PODRÓŻY	podróż	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	28	obl	28:obl	_
28	PRZYWIÓZŁ	przywieźć	VERB	praet:sg:m3:perf:nagl	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	15	ccomp:obj	15:ccomp:obj	_
29	Z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	31	case	31:case	Case=Gen
30	NOWEGO	Nowy	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	31	amod:flat	31:amod:flat	_
31	JORKU	Jork	PROPN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	28	obl	28:obl	_
32	PASAŻERÓW	pasażer	NOUN	subst:pl:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur	28	obj	28:obj	_
33	NA	na	ADP	prep:acc	AdpType=Prep	28	advmod	28:advmod	Case=Acc
34	GAPĘ	gapa	NOUN	subst:sg:acc:m2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	33	fixed	33:fixed	SpaceAfter=No
35	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 dep	color:blue
1	Robotnicy	robotnik	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj|27:nsubj	_
2	zrzucają	zrzucać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	30	parataxis:obj	30:parataxis:obj	_
3	asfalt	asfalt	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	_
4	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Gen
5	samochodu	samochód	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl	2:obl	_
6	tam	tam	ADV	adv	PronType=Dem	2	advmod	2:advmod	_
7	gdzie	gdzie	ADV	adv	PronType=Rel	9	advmod	9:advmod	_
8	już	już	PART	part	_	9	advmod:emph	9:advmod:emph	_
9	zdążył	zdążyć	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	acl:relcl	6:acl:relcl	_
10	popękać	popękać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	9	xcomp	9:xcomp	_
11	albo	albo	CCONJ	conj	_	12	cc	12:cc	_
12	tam	tam	ADV	adv	PronType=Dem	6	conj	2:advmod|6:conj	_
13	gdzie	gdzie	ADV	adv	PronType=Rel	19	advmod	19:advmod	_
14	go	on	PRON	ppron3:sg:acc:m3:ter:nakc:npraep	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	19	nsubj	19:nsubj	_
15	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	19	advmod:emph	19:advmod:emph	Case=Loc
16	ogóle	ogół	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	fixed	15:fixed	_
17	go	on	PRON	ppron3:sg:gen:m3:ter:nakc:npraep	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	19	dep	19:dep	_
18	nie	nie	PART	part	Polarity=Neg	19	advmod:neg	19:advmod:neg	_
19	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	12	acl:relcl	12:acl:relcl	_
20	między	między	ADP	prep:inst	AdpType=Prep	21	case	21:case|23:case	Case=Ins
21	jezdnią	jezdnia	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	19	obl	19:obl	_
22	i	i	CCONJ	conj	_	23	cc	23:cc	_
23	chodnikiem	chodnik	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	21	conj	19:obl|21:conj	SpaceAfter=No
24	,	,	PUNCT	interp	PunctType=Comm	27	punct	27:punct	_
25	a	a	CCONJ	conj	_	27	cc	27:cc	_
26	potem	potem	ADV	adv	_	27	advmod	27:advmod	_
27	udeptują	udeptywać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	2:conj|30:parataxis:obj	_
28	nogami	noga	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	27	iobj	27:iobj	_
29	-	-	PUNCT	interp	PunctType=Dash	30	punct	30:punct	_
30	opowiada	opowiadać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
31	Trela	Trela	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	30	nsubj	30:nsubj	SpaceAfter=No
32	.	.	PUNCT	interp	PunctType=Peri	30	punct	30:punct	_

~~~


