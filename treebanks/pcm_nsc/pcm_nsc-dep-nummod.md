---
layout: base
title:  'Statistics of nummod in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nummod`

This relation is universal.
There are 3 language-specific subtypes of `nummod`: <tt><a href="pcm_nsc-dep-nummod-det.html">nummod:det</a></tt>, <tt><a href="pcm_nsc-dep-nummod-mod.html">nummod:mod</a></tt>, <tt><a href="pcm_nsc-dep-nummod-periph.html">nummod:periph</a></tt>.

7 nodes (0%) are attached to their parents as `nummod`.

7 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.28571428571429.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (4; 57% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 29% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 nummod	color:blue
1	#	#	X	_	_	5	dep	_	AlignBegin=7082|AlignEnd=7379|Gloss=PUNCT
2	and	and	CCONJ	_	_	5	discourse	_	AlignBegin=7379|AlignEnd=7480|Gloss=and
3	{	{	X	_	_	5	dep	_	AlignBegin=7480|AlignEnd=7510|Gloss=PUNCT
4	dat	dat	PRON	_	Number=Sing|PronType=Dem	5	nsubj	_	AlignBegin=7510|AlignEnd=7627|Gloss=SG.DEM
5	was	be	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbType=Cop	0	root	_	AlignBegin=7627|AlignEnd=7780|Gloss=be.IND.SG.1.PST.FIN
6	like	like	ADP	_	_	5	discourse	_	AlignBegin=7780|AlignEnd=8070|Gloss=like
7	||	||	X	_	_	22	dep	_	AlignBegin=8070|AlignEnd=8100|Gloss=PUNCT
8	{	{	X	_	_	9	dep	_	AlignBegin=8070|AlignEnd=8100|Gloss=PUNCT
9	dat	dat	PRON	_	Number=Sing|PronType=Dem	22	nsubj	_	AlignBegin=8100|AlignEnd=8390|Gloss=SG.DEM
10	||	||	X	_	_	11	dep	_	AlignBegin=8390|AlignEnd=8420|Gloss=PUNCT
11	dat	dat	PRON	_	Number=Sing|PronType=Dem	9	reparandum	_	AlignBegin=8420|AlignEnd=8563|Gloss=SG.DEM
12	}	}	X	_	_	9	dep	_	AlignBegin=8563|AlignEnd=8593|Gloss=PUNCT
13	||	||	X	_	_	22	dep	_	AlignBegin=8563|AlignEnd=8593|Gloss=PUNCT
14	na	na	AUX	_	PartType=Cop	22	cop	_	AlignBegin=8593|AlignEnd=8707|Gloss=be
15	}	}	X	_	_	5	dep	_	AlignBegin=8707|AlignEnd=8882|Gloss=PUNCT
16	like	like	ADP	_	_	22	discourse	_	AlignBegin=8707|AlignEnd=8882|Gloss=like
17	around	around	ADP	_	_	22	case	_	AlignBegin=8912|AlignEnd=9344|Gloss=around
18	eh	eh	INTJ	_	_	22	discourse	_	AlignBegin=9344|AlignEnd=9896|Gloss=eh
19	#	#	X	_	_	18	dep	_	AlignBegin=9896|AlignEnd=10354|Gloss=PUNCT
20	nineteen	nineteen	NUM	_	NumType=Card	22	nummod	_	AlignBegin=10354|AlignEnd=10710|Gloss=nineteen.CARD
21	ninety	ninety	NUM	_	NumType=Card	20	flat	_	AlignBegin=10710|AlignEnd=11051|Gloss=ninety.CARD
22	era	era	NOUN	_	_	5	reparandum	_	AlignBegin=11051|AlignEnd=11580|Gloss=ant
23	ehen	ehen	INTJ	_	_	5	discourse	_	AlignBegin=11580|AlignEnd=11954|Gloss=ehen
24	//	//	X	_	_	5	dep	_	AlignBegin=11954|AlignEnd=11984|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nummod	color:blue
1	#	#	X	_	_	12	dep	_	AlignBegin=133080|AlignEnd=133340|Gloss=PUNCT
2	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=133340|AlignEnd=133471|Gloss=SG.1.POSS
3	people	people	NOUN	_	Number=Plur	12	dislocated	_	AlignBegin=133471|AlignEnd=133840|Gloss=people.PL
4	<	<	X	_	_	3	dep	_	AlignBegin=133840|AlignEnd=133870|Gloss=PUNCT
5	#	#	X	_	_	3	dep	_	AlignBegin=133870|AlignEnd=134507|Gloss=PUNCT
6	na	na	AUX	_	PartType=Cop	12	cop	_	AlignBegin=134507|AlignEnd=134560|Gloss=be
7	{	{	X	_	_	8	dep	_	AlignBegin=134560|AlignEnd=134590|Gloss=PUNCT
8	short	short	ADJ	_	_	12	amod	_	AlignBegin=134590|AlignEnd=134715|Gloss=short
9	|r	|r	X	_	_	10	dep	_	AlignBegin=134715|AlignEnd=134745|Gloss=PUNCT
10	short	short	ADJ	_	_	8	compound:redup	_	AlignBegin=134745|AlignEnd=134900|Gloss=short
11	}	}	X	_	_	8	dep	_	AlignBegin=134900|AlignEnd=134930|Gloss=PUNCT
12	story	story	NOUN	_	_	0	root	_	AlignBegin=134930|AlignEnd=135210|Gloss=story
13	as	as	ADP	_	_	15	mark	_	AlignBegin=135210|AlignEnd=135347|Gloss=as
14	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	AlignBegin=135347|AlignEnd=135440|Gloss=NOM.SG.3
15	take	take	VERB	_	_	12	advcl	_	AlignBegin=135440|AlignEnd=135589|Gloss=take
16	concern	concern	VERB	_	_	15	compound:svc	_	AlignBegin=135589|AlignEnd=135980|Gloss=concern
17	five	five	NUM	_	NumType=Card	18	nummod	_	AlignBegin=135980|AlignEnd=136220|Gloss=five.CARD
18	o'clock	o'clock	ADV	_	_	16	obj	_	AlignBegin=136220|AlignEnd=136955|Gloss=o'clock
19	today	today	NOUN	_	_	16	obl:mod	_	AlignBegin=136955|AlignEnd=137500|Gloss=today
20	>+	>+	X	_	_	21	dep	_	AlignBegin=137500|AlignEnd=137530|Gloss=PUNCT
21	be	be	VERB	_	PartType=Cop	12	advcl:cleft	_	AlignBegin=137530|AlignEnd=137710|Gloss=be
22	dat	dat	PRON	_	Number=Sing|PronType=Dem	21	dep:comp	_	AlignBegin=137710|AlignEnd=138054|Gloss=SG.DEM
23	//	//	X	_	_	12	dep	_	AlignBegin=138054|AlignEnd=138084|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 30 nummod	color:blue
1	#	#	X	_	_	6	dep	_	AlignBegin=183040|AlignEnd=183400|Gloss=PUNCT
2	JAMB	JAMB	PROPN	_	_	6	dislocated	_	AlignBegin=183400|AlignEnd=183770|Gloss=JAMB
3	<	<	X	_	_	2	dep	_	AlignBegin=183770|AlignEnd=183800|Gloss=PUNCT
4	recently	recently	ADV	_	_	6	advmod:periph	_	AlignBegin=183800|AlignEnd=184270|Gloss=recently
5	<	<	X	_	_	4	dep	_	AlignBegin=184270|AlignEnd=184300|Gloss=PUNCT
6	na	na	AUX	_	PartType=Cop	0	root	_	AlignBegin=184300|AlignEnd=184480|ExtPos=SCONJ|Gloss=be|PhraseType=Idiom
7	im	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	fixed	_	AlignBegin=184480|AlignEnd=184590|Gloss=NOM.SG.3
8	>+	>+	X	_	_	10	dep	_	AlignBegin=184590|AlignEnd=184620|Gloss=PUNCT
9	dey	dey	AUX	_	Aspect=Imp	10	aux	_	AlignBegin=184620|AlignEnd=184780|Gloss=IPFV
10	yarn	yarn	VERB	_	_	6	advcl:cleft	_	AlignBegin=184780|AlignEnd=185010|Gloss=talk
11	sey	sey	SCONJ	_	_	14	mark	_	AlignBegin=185010|AlignEnd=185260|Gloss=COMP
12	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=185260|AlignEnd=185450|Gloss=NOM.PL.3
13	go	go	AUX	_	Aspect=Prosp	14	aux	_	AlignBegin=185450|AlignEnd=185670|Gloss=PROSP
14	arrange	arrange	VERB	_	_	10	ccomp:obj	_	AlignBegin=185670|AlignEnd=186110|Gloss=arrange
15	one	one	DET	_	Definite=Spec|PronType=Art	19	det	_	AlignBegin=186110|AlignEnd=186260|Gloss=SPEC.ART
16	kind	kind	ADJ	_	_	19	amod	_	AlignBegin=186260|AlignEnd=186580|Gloss=kind
17	optional	optional	ADJ	_	_	19	amod	_	AlignBegin=186580|AlignEnd=187142|Gloss=optional
18	mock	mock	ADJ	_	_	19	amod	_	AlignBegin=187142|AlignEnd=187470|Gloss=mock
19	examination	examination	NOUN	_	_	14	obj	_	AlignBegin=187470|AlignEnd=188315|Gloss=examination
20	#	#	X	_	_	27	dep	_	AlignBegin=188315|AlignEnd=188548|Gloss=PUNCT
21	wey	wey	SCONJ	_	_	27	mark	_	AlignBegin=188548|AlignEnd=188719|Gloss=REL
22	anybody	anybody	PRON	_	_	27	dislocated	_	AlignBegin=188719|AlignEnd=189229|Gloss=anybody
23	wey	wey	SCONJ	_	_	24	mark	_	AlignBegin=189229|AlignEnd=189389|Gloss=REL
24	like	like	VERB	_	_	22	acl:relcl	_	AlignBegin=189389|AlignEnd=189689|Gloss=like
25	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	24	obj	_	AlignBegin=189689|AlignEnd=189839|Gloss=ACC.SG.3
26	fit	fit	AUX	_	Mood=Pot	27	aux	_	AlignBegin=189839|AlignEnd=190059|Gloss=ABIL
27	do	do	VERB	_	_	19	acl:relcl	_	AlignBegin=190059|AlignEnd=190269|Gloss=do
28	before	before	ADP	_	_	32	case	_	AlignBegin=190269|AlignEnd=190619|Gloss=before
29	di	di	DET	_	Definite=Def|PronType=Art	32	det	_	AlignBegin=190619|AlignEnd=190750|Gloss=DEF.ART
30	twenty	twenty	NUM	_	NumType=Card	32	nummod	_	AlignBegin=190750|AlignEnd=191039|Gloss=twenty.CARD
31	seventeen	seventeen	NUM	_	NumType=Card	30	flat	_	AlignBegin=191039|AlignEnd=191538|Gloss=seventeen.CARD
32	UTME	UTME	PROPN	_	_	27	obl:arg	_	AlignBegin=191538|AlignEnd=192430|Gloss=UTME
33	//	//	X	_	_	6	dep	_	AlignBegin=192430|AlignEnd=192460|Gloss=PUNCT

~~~


