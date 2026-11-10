---
layout: base
title:  'Statistics of nummod in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nummod`

This relation is universal.

556 nodes (0%) are attached to their parents as `nummod`.

485 instances of `nummod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70323741007194.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (538; 97% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod	color:blue
1	#	#	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=27115|WordAlignmentEnd=27579
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=NOM.SG.1|WordAlignmentBegin=27579|WordAlignmentEnd=27670
3	dey	dey	VERB	_	VerbType=Cop	0	root	_	Gloss=be|WordAlignmentBegin=27670|WordAlignmentEnd=27840
4	dere	dere	ADV	_	_	3	xcomp	_	Gloss=there|WordAlignmentBegin=27840|WordAlignmentEnd=27980
5	o	o	PART	_	PartType=Disc	4	advmod	_	Gloss=EMPH|WordAlignmentBegin=27980|WordAlignmentEnd=28270
6	//=	//=	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=28270|WordAlignmentEnd=28270
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	Gloss=NOM.SG.1|WordAlignmentBegin=28270|WordAlignmentEnd=28450
8	school	school	VERB	_	_	3	parataxis:conj	_	Gloss=school|WordAlignmentBegin=28450|WordAlignmentEnd=28830
9	o	o	PART	_	PartType=Disc	8	advmod	_	Gloss=EMPH|WordAlignmentBegin=28830|WordAlignmentEnd=29030
10	//=	//=	PUNCT	_	_	11	punct	_	Gloss=PUNCT|WordAlignmentBegin=28830|WordAlignmentEnd=29030
11	setay	sotay	ADV	_	_	8	parataxis:conj	_	Gloss=such_that|WordAlignmentBegin=29060|WordAlignmentEnd=29610
12	four	four	NUM	_	NumType=Card	13	nummod	_	Gloss=four.CARD|WordAlignmentBegin=29610|WordAlignmentEnd=29950
13	years	year	NOUN	_	Number=Plur	11	obl:mod	_	Gloss=year.PL|WordAlignmentBegin=29950|WordAlignmentEnd=30300
14	//	//	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=30300|WordAlignmentEnd=30300

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod	color:blue
1	#	#	PUNCT	_	_	7	punct	_	Gloss=PUNCT|WordAlignmentBegin=287862|WordAlignmentEnd=289080
2	and	and	CCONJ	_	_	7	discourse	_	Gloss=and|WordAlignmentBegin=289080|WordAlignmentEnd=289150
3	after	after	ADP	_	_	7	dep	_	Gloss=after|WordAlignmentBegin=289150|WordAlignmentEnd=289370
4	<	<	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=289370|WordAlignmentEnd=289370
5	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	Gloss=NOM.PL.3|WordAlignmentBegin=289370|WordAlignmentEnd=289454
6	go	go	AUX	_	Aspect=Prosp	7	aux	_	Gloss=PROSP|WordAlignmentBegin=289454|WordAlignmentEnd=289542
7	say	say	VERB	_	_	0	root	_	Gloss=say|WordAlignmentBegin=289542|WordAlignmentEnd=289750
8	[	[	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=289750|WordAlignmentEnd=289750
9	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	Gloss=NOM.PL.1|Lang=en|WordAlignmentBegin=289750|WordAlignmentEnd=289840
10	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	12	cop	_	Gloss=be.IND.PRS.FIN|Lang=en|WordAlignmentBegin=289840|WordAlignmentEnd=289950
11	one	one	NUM	_	NumType=Card	12	nummod	_	Gloss=one|Lang=en|WordAlignmentBegin=289950|WordAlignmentEnd=290080
12	Nigeria	Nigeria	PROPN	_	_	7	parataxis	_	Gloss=Nigeria|Lang=en|WordAlignmentBegin=290080|WordAlignmentEnd=290710
13	//]	//]	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=290710|WordAlignmentEnd=290710
14	//	//	PUNCT	_	_	7	punct	_	Gloss=PUNCT|WordAlignmentBegin=290680|WordAlignmentEnd=290710

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nummod	color:blue
1	#	#	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=133080|WordAlignmentEnd=133340
2	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	Gloss=SG.1.POSS|WordAlignmentBegin=133340|WordAlignmentEnd=133471
3	people	people	NOUN	_	Number=Plur	12	dislocated	_	Gloss=people.PL|WordAlignmentBegin=133471|WordAlignmentEnd=133870
4	<	<	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=133870|WordAlignmentEnd=133870
5	#	#	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=133870|WordAlignmentEnd=134507
6	na	na	AUX	_	PartType=Cop	12	cop	_	Gloss=be|WordAlignmentBegin=134507|WordAlignmentEnd=134590
7	{	{	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=134590|WordAlignmentEnd=134590
8	short	short	ADJ	_	_	12	amod	_	Gloss=short|WordAlignmentBegin=134590|WordAlignmentEnd=134745
9	|r	|r	PUNCT	_	_	10	punct	_	Gloss=PUNCT|WordAlignmentBegin=134745|WordAlignmentEnd=134745
10	short	short	ADJ	_	_	8	compound:redup	_	Gloss=short|WordAlignmentBegin=134745|WordAlignmentEnd=134930
11	}	}	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=134930|WordAlignmentEnd=134930
12	story	story	NOUN	_	_	0	root	_	Gloss=story|WordAlignmentBegin=134930|WordAlignmentEnd=135210
13	as	as	ADP	_	_	15	mark	_	Gloss=as|WordAlignmentBegin=135210|WordAlignmentEnd=135347
14	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=135347|WordAlignmentEnd=135440
15	take	take	VERB	_	_	12	acl:relcl	_	Gloss=take|WordAlignmentBegin=135440|WordAlignmentEnd=135589
16	concern	concern	VERB	_	_	15	compound:svc	_	Gloss=concern|WordAlignmentBegin=135589|WordAlignmentEnd=135980
17	five	five	NUM	_	NumType=Card	18	nummod	_	Gloss=five.CARD|WordAlignmentBegin=135980|WordAlignmentEnd=136220
18	o'clock	o'clock	ADV	_	_	16	obj	_	Gloss=o'clock|WordAlignmentBegin=136220|WordAlignmentEnd=136955
19	today	today	NOUN	_	_	16	obl:mod	_	Gloss=today|WordAlignmentBegin=136955|WordAlignmentEnd=137530
20	>+	>+	PUNCT	_	_	21	punct	_	Gloss=PUNCT|WordAlignmentBegin=137530|WordAlignmentEnd=137530
21	be	be	VERB	_	PartType=Cop	12	advcl:cleft	_	Gloss=be|WordAlignmentBegin=137530|WordAlignmentEnd=137710
22	dat	dat	PRON	_	Number=Sing	21	nsubj	_	Gloss=SG.DEM|WordAlignmentBegin=137710|WordAlignmentEnd=138084
23	//	//	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=138084|WordAlignmentEnd=138084

~~~


