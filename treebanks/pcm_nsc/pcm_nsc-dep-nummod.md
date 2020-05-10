---
layout: base
title:  'Statistics of nummod in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nummod`

This relation is universal.
There are 3 language-specific subtypes of `nummod`: <tt><a href="pcm_nsc-dep-nummod-det.html">nummod:det</a></tt>, <tt><a href="pcm_nsc-dep-nummod-mod.html">nummod:mod</a></tt>, <tt><a href="pcm_nsc-dep-nummod-periph.html">nummod:periph</a></tt>.

3 nodes (0%) are attached to their parents as `nummod`.

3 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 67% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	AlignBegin=425888|AlignEnd=425998|Gloss=NOM.SG.3
2	con	con	AUX	_	Aspect=Cons	3	aux	_	AlignBegin=425998|AlignEnd=426165|Gloss=CONS
3	reach	reach	VERB	_	_	0	root	_	AlignBegin=426165|AlignEnd=426405|Gloss=reach
4	{	{	PUNCT	_	_	7	punct	_	AlignBegin=426405|AlignEnd=426435|Gloss=PUNCT
5	one	one	DET	_	Definite=Spec|PronType=Art	7	det	_	AlignBegin=426435|AlignEnd=426852|Gloss=SPEC.ART
6	certain	certain	ADJ	_	_	7	amod	_	AlignBegin=426852|AlignEnd=427255|Gloss=certain
7	time	time	NOUN	_	_	3	obj	_	AlignBegin=427255|AlignEnd=427515|Gloss=time
8	||	||	PUNCT	_	_	11	punct	_	AlignBegin=427515|AlignEnd=427545|Gloss=PUNCT
9	last	last	ADJ	_	_	11	amod	_	AlignBegin=427545|AlignEnd=427845|Gloss=last
10	two	two	NUM	_	NumType=Card	11	nummod	_	AlignBegin=427845|AlignEnd=428020|Gloss=two.CARD
11	month	month	NOUN	_	_	7	conj:dicto	_	AlignBegin=428020|AlignEnd=428245|Gloss=month
12	}	}	PUNCT	_	_	11	punct	_	AlignBegin=428245|AlignEnd=428275|Gloss=PUNCT
13	weh	wey	SCONJ	_	_	16	mark	_	AlignBegin=428275|AlignEnd=428385|Gloss=REL
14	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	16	nsubj	_	AlignBegin=428385|AlignEnd=428475|Gloss=NOM.PL.3
15	dey	dey	AUX	_	Aspect=Imp	16	aux	_	AlignBegin=428475|AlignEnd=428665|Gloss=IPFV
16	write	write	VERB	_	_	11	acl:relcl	_	AlignBegin=428665|AlignEnd=428995|Gloss=write
17	JAMB	JAMB	PROPN	_	_	16	obj	_	AlignBegin=428995|AlignEnd=429177|Gloss=JAMB
18	//	//	PUNCT	_	_	3	punct	_	AlignBegin=429177|AlignEnd=429207|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nummod	color:blue
1	#	#	PUNCT	_	_	12	punct	_	AlignBegin=133080|AlignEnd=133340|Gloss=PUNCT
2	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=133340|AlignEnd=133471|Gloss=SG.1.POSS
3	people	people	NOUN	_	Number=Plur	12	dislocated	_	AlignBegin=133471|AlignEnd=133840|Gloss=people.PL
4	<	<	PUNCT	_	_	3	punct	_	AlignBegin=133840|AlignEnd=133870|Gloss=PUNCT
5	#	#	PUNCT	_	_	3	punct	_	AlignBegin=133870|AlignEnd=134507|Gloss=PUNCT
6	na	na	AUX	_	PartType=Cop	12	cop	_	AlignBegin=134507|AlignEnd=134560|Gloss=be
7	{	{	PUNCT	_	_	8	punct	_	AlignBegin=134560|AlignEnd=134590|Gloss=PUNCT
8	short	short	ADJ	_	_	12	amod	_	AlignBegin=134590|AlignEnd=134715|Gloss=short
9	|r	|r	PUNCT	_	_	10	punct	_	AlignBegin=134715|AlignEnd=134745|Gloss=PUNCT
10	short	short	ADJ	_	_	8	compound:redup	_	AlignBegin=134745|AlignEnd=134900|Gloss=short
11	}	}	PUNCT	_	_	8	punct	_	AlignBegin=134900|AlignEnd=134930|Gloss=PUNCT
12	story	story	NOUN	_	_	0	root	_	AlignBegin=134930|AlignEnd=135210|Gloss=story
13	as	as	ADP	_	_	15	mark	_	AlignBegin=135210|AlignEnd=135347|Gloss=as
14	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	AlignBegin=135347|AlignEnd=135440|Gloss=NOM.SG.3
15	take	take	VERB	_	_	12	advcl	_	AlignBegin=135440|AlignEnd=135589|Gloss=take
16	concern	concern	VERB	_	_	15	compound:svc	_	AlignBegin=135589|AlignEnd=135980|Gloss=concern
17	five	five	NUM	_	NumType=Card	18	nummod	_	AlignBegin=135980|AlignEnd=136220|Gloss=five.CARD
18	o'clock	o'clock	ADV	_	_	16	obj	_	AlignBegin=136220|AlignEnd=136955|Gloss=o'clock
19	today	today	NOUN	_	_	16	obl:mod	_	AlignBegin=136955|AlignEnd=137500|Gloss=today
20	>+	>+	PUNCT	_	_	21	punct	_	AlignBegin=137500|AlignEnd=137530|Gloss=PUNCT
21	be	be	VERB	_	PartType=Cop	12	advcl:cleft	_	AlignBegin=137530|AlignEnd=137710|Gloss=be
22	dat	dat	PRON	_	Number=Sing|PronType=Dem	21	dep	_	AlignBegin=137710|AlignEnd=138054|Gloss=SG.DEM
23	//	//	PUNCT	_	_	12	punct	_	AlignBegin=138054|AlignEnd=138084|Gloss=PUNCT

~~~


