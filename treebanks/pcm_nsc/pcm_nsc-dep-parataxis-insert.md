---
layout: base
title:  'Statistics of parataxis:insert in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-parataxis.html">parataxis</a></tt>.
There are also 4 other language-specific subtypes of `parataxis`: <tt><a href="pcm_nsc-dep-parataxis-conj.html">parataxis:conj</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-dislocated.html">parataxis:dislocated</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

5 nodes (0%) are attached to their parents as `parataxis:insert`.

5 instances of `parataxis:insert` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.2.

The following 3 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 27 parataxis:insert	color:blue
1	ehm	ehm	INTJ	_	_	38	discourse	_	AlignBegin=1664|AlignEnd=1970|Gloss=ehm
2	#	#	X	_	_	1	dep	_	AlignBegin=2000|AlignEnd=2210|Gloss=PUNCT
3	di	di	DET	_	Definite=Def|PronType=Art	4	det	_	AlignBegin=2210|AlignEnd=2410|Gloss=DEF.ART
4	time	time	NOUN	_	_	38	obl:mod	_	AlignBegin=2410|AlignEnd=2707|Gloss=time
5	wey	wey	SCONJ	_	_	7	mark	_	AlignBegin=2707|AlignEnd=2845|Gloss=REL
6	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	AlignBegin=2845|AlignEnd=2960|Gloss=NOM.SG.1
7	dey	dey	VERB	_	VerbType=Cop	4	acl:relcl	_	AlignBegin=2960|AlignEnd=3150|Gloss=be
8	with	wit	ADP	_	_	11	case	_	AlignBegin=3150|AlignEnd=3290|Gloss=with
9	{	{	X	_	_	11	dep	_	AlignBegin=3290|AlignEnd=3320|Gloss=PUNCT
10	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	11	nmod:poss	_	AlignBegin=3320|AlignEnd=3550|Gloss=SG.1.POSS
11	moder	moder	NOUN	_	_	7	xcomp:pred	_	AlignBegin=3550|AlignEnd=3880|Gloss=mother
12	|c	|c	X	_	_	14	dep	_	AlignBegin=3880|AlignEnd=3910|Gloss=PUNCT
13	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	14	nmod:poss	_	AlignBegin=3910|AlignEnd=4050|Gloss=SG.1.POSS
14	fader	fader	NOUN	_	_	11	conj	_	AlignBegin=4050|AlignEnd=4340|Gloss=fader
15	}	}	X	_	_	11	dep	_	AlignBegin=4340|AlignEnd=4370|Gloss=PUNCT
16	for	for	ADP	_	_	17	case	_	AlignBegin=4370|AlignEnd=4564|Gloss=for
17	village	village	NOUN	_	_	11	conj	_	AlignBegin=4564|AlignEnd=4970|Gloss=village
18	<	<	X	_	_	4	dep	_	AlignBegin=4970|AlignEnd=5000|Gloss=PUNCT
19	#	#	X	_	_	4	dep	_	AlignBegin=5000|AlignEnd=5610|Gloss=PUNCT
20	after	after	ADP	_	_	23	mark	_	AlignBegin=5610|AlignEnd=6010|Gloss=after
21	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	23	nsubj	_	AlignBegin=6010|AlignEnd=6060|Gloss=NOM.SG.1
22	con	con	AUX	_	Aspect=Cons	23	aux	_	AlignBegin=6060|AlignEnd=6270|Gloss=CONS
23	grow	grow	VERB	_	_	38	advcl:periph	_	AlignBegin=6270|AlignEnd=6459|Gloss=grow
24	(	(	X	_	_	27	dep	_	AlignBegin=6459|AlignEnd=6489|Gloss=PUNCT
25	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	27	nsubj	_	AlignBegin=6489|AlignEnd=6600|Gloss=NOM.SG.1
26	con	con	AUX	_	Aspect=Cons	27	aux	_	AlignBegin=6600|AlignEnd=6820|Gloss=CONS
27	dey	dey	VERB	_	VerbType=Cop	23	parataxis:insert	_	AlignBegin=6820|AlignEnd=6930|Gloss=be
28	like	like	ADP	_	_	30	case	_	AlignBegin=6930|AlignEnd=7300|Gloss=like
29	eight	eight	NUM	_	NumType=Card	30	nummod:det	_	AlignBegin=7300|AlignEnd=7600|Gloss=eight.CARD
30	years	year	NOUN	_	Number=Plur	27	xcomp:pred	_	AlignBegin=7600|AlignEnd=7866|Gloss=year.PL
31	//)	//)	X	_	_	27	dep	_	AlignBegin=7866|AlignEnd=7896|Gloss=PUNCT
32	<	<	X	_	_	23	dep	_	AlignBegin=7866|AlignEnd=7896|Gloss=PUNCT
33	#	#	X	_	_	23	dep	_	AlignBegin=7896|AlignEnd=8437|Gloss=PUNCT
34	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	36	nmod:poss	_	AlignBegin=8437|AlignEnd=8585|Gloss=SG.1.POSS
35	grand	grand	NOUN	_	_	36	compound	_	AlignBegin=8585|AlignEnd=8815|Gloss=grand
36	moder	moder	NOUN	_	_	38	nsubj	_	AlignBegin=8815|AlignEnd=9075|Gloss=mother
37	con	con	AUX	_	Aspect=Cons	38	aux	_	AlignBegin=9075|AlignEnd=9285|Gloss=CONS
38	come	come	VERB	_	_	0	root	_	AlignBegin=9285|AlignEnd=9495|Gloss=come
39	visit	visit	VERB	_	_	38	xcomp:obj	_	AlignBegin=9495|AlignEnd=9935|Gloss=visit
40	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	39	obj	_	AlignBegin=9935|AlignEnd=10115|Gloss=ACC.PL.1
41	//	//	X	_	_	38	dep	_	AlignBegin=10145|AlignEnd=10516|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis:insert	color:blue
1	#	#	X	_	_	3	dep	_	AlignBegin=104360|AlignEnd=105080|Gloss=PUNCT
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=105080|AlignEnd=105180|Gloss=NOM.SG.1
3	get	get	VERB	_	_	0	root	_	AlignBegin=105180|AlignEnd=105618|Gloss=get
4	job	job	NOUN	_	_	3	obj	_	AlignBegin=105618|AlignEnd=105920|Gloss=job
5	as	as	ADP	_	_	3	dep	_	AlignBegin=105920|AlignEnd=106290|Gloss=as
6	[	[	X	_	_	10	dep	_	AlignBegin=106290|AlignEnd=106840|Gloss=PUNCT
7	ehm	ehm	INTJ	_	_	10	discourse	_	AlignBegin=106290|AlignEnd=106840|Gloss=ehm
8	#	#	X	_	_	10	dep	_	AlignBegin=106840|AlignEnd=107310|Gloss=PUNCT
9	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	AlignBegin=107363|AlignEnd=107513|Gloss=NOM.PL.3
10	call	call	VERB	_	_	5	parataxis:insert	_	AlignBegin=107513|AlignEnd=107671|Gloss=call
11	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	10	obj	_	AlignBegin=107671|AlignEnd=107763|Gloss=ACC.SG.3
12	call	call	NOUN	_	_	13	compound	_	AlignBegin=107793|AlignEnd=107991|Gloss=call
13	screener	screener	NOUN	_	_	10	xcomp:pred	_	AlignBegin=107991|AlignEnd=108379|Gloss=screener
14	for	for	ADP	_	_	15	case	_	AlignBegin=108379|AlignEnd=108573|Gloss=for
15	radio	radio	NOUN	_	_	10	obl:arg	_	AlignBegin=108573|AlignEnd=108934|Gloss=radio
16	//]	//]	X	_	_	10	dep	_	AlignBegin=108934|AlignEnd=108964|Gloss=PUNCT
17	//	//	X	_	_	3	dep	_	AlignBegin=108934|AlignEnd=108964|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis:insert	color:blue
1	and	and	CCONJ	_	_	3	discourse	_	AlignBegin=238373|AlignEnd=238513|Gloss=and
2	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	AlignBegin=238513|AlignEnd=238584|Gloss=NOM.SG.3
3	get	get	VERB	_	_	0	root	_	AlignBegin=238584|AlignEnd=238855|Gloss=get
4	one	one	NUM	_	NumType=Card	3	nsubj	_	AlignBegin=238855|AlignEnd=239136|Gloss=one
5	sef	sef	PART	_	PartType=Disc	4	advmod:emph	_	AlignBegin=239136|AlignEnd=239474|Gloss=FOC
6	(	(	X	_	_	10	dep	_	AlignBegin=239474|AlignEnd=239504|Gloss=PUNCT
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	AlignBegin=239504|AlignEnd=239590|Gloss=NOM.SG.1
8	no	no	PART	_	Polarity=Neg	10	advmod	_	AlignBegin=239590|AlignEnd=239758|Gloss=NEG
9	even	even	ADV	_	_	10	advmod	_	AlignBegin=239758|AlignEnd=239990|Gloss=even
10	remember	remember	VERB	_	_	4	parataxis:insert	_	AlignBegin=239990|AlignEnd=240370|Gloss=remember
11	di	di	DET	_	Definite=Def|PronType=Art	12	det	_	AlignBegin=240370|AlignEnd=240483|Gloss=DEF.ART
12	name	name	NOUN	_	_	10	obj	_	AlignBegin=240483|AlignEnd=240694|Gloss=name
13	sef	sef	PART	_	PartType=Disc	12	advmod:emph	_	AlignBegin=240694|AlignEnd=241002|Gloss=FOC
14	)	)	X	_	_	10	dep	_	AlignBegin=241002|AlignEnd=241032|Gloss=PUNCT
15	#	#	X	_	_	19	dep	_	AlignBegin=241032|AlignEnd=241487|Gloss=PUNCT
16	wey	wey	SCONJ	_	_	19	mark	_	AlignBegin=241487|AlignEnd=241628|Gloss=REL
17	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	AlignBegin=241628|AlignEnd=241769|Gloss=NOM.PL.3
18	don	don	AUX	_	Aspect=Perf	19	aux	_	AlignBegin=241769|AlignEnd=242012|Gloss=PRF
19	create	create	VERB	_	_	4	acl:relcl	_	AlignBegin=242012|AlignEnd=242626|Gloss=create
20	#	#	X	_	_	28	dep	_	AlignBegin=242626|AlignEnd=243067|Gloss=PUNCT
21	for	for	ADP	_	_	28	case	_	AlignBegin=243067|AlignEnd=243440|Gloss=for
22	all	all	DET	_	_	28	det	_	AlignBegin=243440|AlignEnd=243523|Gloss=all
23	dis	dis	DET	_	Number=Sing|PronType=Dem	28	det	_	AlignBegin=243523|AlignEnd=243738|Gloss=SG.DEM
24	ehn	ehn	INTJ	_	_	28	discourse	_	AlignBegin=243768|AlignEnd=244079|Gloss=ehn
25	ehn	ehn	INTJ	_	_	28	discourse	_	AlignBegin=244079|AlignEnd=244726|Gloss=ehn
26	#	#	X	_	_	28	dep	_	AlignBegin=244756|AlignEnd=245795|Gloss=PUNCT
27	{	{	X	_	_	28	dep	_	AlignBegin=245765|AlignEnd=245795|Gloss=PUNCT
28	demoralising	demoralise	VERB	_	Tense=Pres|VerbForm=Part	19	obl:arg	_	AlignBegin=245795|AlignEnd=246944|Gloss=demoralise.PRS.PTCP
29	ehn	ehn	INTJ	_	_	31	discourse	_	AlignBegin=246974|AlignEnd=247200|Gloss=ehn
30	di	di	DET	_	Definite=Def|PronType=Art	31	det	_	AlignBegin=247230|AlignEnd=247360|Gloss=DEF.ART
31	woman	woman	NOUN	_	_	28	obj	_	AlignBegin=247360|AlignEnd=247668|Gloss=woman
32	||	||	X	_	_	34	dep	_	AlignBegin=247668|AlignEnd=247698|Gloss=PUNCT
33	ehn	ehn	INTJ	_	_	34	discourse	_	AlignBegin=247698|AlignEnd=247894|Gloss=ehn
34	demoralisation	demoralisation	NOUN	_	_	28	reparandum	_	AlignBegin=247924|AlignEnd=248751|Gloss=demoralisation
35	of	of	ADP	_	_	38	case	_	AlignBegin=248751|AlignEnd=248835|Gloss=of
36	eh	eh	INTJ	_	_	38	discourse	_	AlignBegin=248865|AlignEnd=249121|Gloss=eh
37	{	{	X	_	_	38	dep	_	AlignBegin=248865|AlignEnd=249121|Gloss=PUNCT
38	women	woman	NOUN	_	Number=Plur	34	nmod	_	AlignBegin=249151|AlignEnd=249547|Gloss=woman.PL
39	|c	|c	X	_	_	43	dep	_	AlignBegin=249547|AlignEnd=249577|Gloss=PUNCT
40	#	#	X	_	_	43	dep	_	AlignBegin=249577|AlignEnd=250476|Gloss=PUNCT
41	and	and	CCONJ	_	_	43	cc	_	AlignBegin=250476|AlignEnd=250664|Gloss=and
42	even	even	ADV	_	_	43	advmod	_	AlignBegin=250664|AlignEnd=250917|Gloss=even
43	children	child	NOUN	_	Number=Plur	38	conj	_	AlignBegin=250917|AlignEnd=251340|Gloss=child.PL
44	}	}	X	_	_	38	dep	_	AlignBegin=251340|AlignEnd=251370|Gloss=PUNCT
45	}	}	X	_	_	28	dep	_	AlignBegin=251340|AlignEnd=251370|Gloss=PUNCT
46	//	//	X	_	_	3	dep	_	AlignBegin=251340|AlignEnd=251370|Gloss=PUNCT

~~~


