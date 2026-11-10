---
layout: base
title:  'Statistics of compound:prt in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="pcm_nsc-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="pcm_nsc-dep-compound-svc.html">compound:svc</a></tt>.

366 nodes (0%) are attached to their parents as `compound:prt`.

366 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31693989071038.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (351; 96% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (9; 2% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound:prt	color:blue
1	#	#	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=214469|WordAlignmentEnd=215220
2	make	make	AUX	_	Mood=Opt	4	aux	_	Gloss=SBJV|WordAlignmentBegin=215220|WordAlignmentEnd=215310
3	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	Gloss=NOM.PL.3|WordAlignmentBegin=215310|WordAlignmentEnd=215536
4	keep	keep	VERB	_	_	0	root	_	Gloss=keep|WordAlignmentBegin=215536|WordAlignmentEnd=215716
5	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj	_	Gloss=ACC.SG.3|WordAlignmentBegin=215716|WordAlignmentEnd=215887
6	{	{	PUNCT	_	_	7	punct	_	Gloss=PUNCT|WordAlignmentBegin=215887|WordAlignmentEnd=215887
7	up	up	ADP	_	_	4	compound:prt	_	Gloss=up|WordAlignmentBegin=215887|WordAlignmentEnd=216026
8	|r	|r	PUNCT	_	_	10	punct	_	Gloss=PUNCT|WordAlignmentBegin=216026|WordAlignmentEnd=216026
9	#	#	PUNCT	_	_	10	punct	_	Gloss=PUNCT|WordAlignmentBegin=216026|WordAlignmentEnd=216332
10	up	up	ADP	_	_	7	compound:redup	_	Gloss=up|WordAlignmentBegin=216332|WordAlignmentEnd=216699
11	}	}	PUNCT	_	_	7	punct	_	Gloss=PUNCT|WordAlignmentBegin=216699|WordAlignmentEnd=216699
12	as	as	ADP	_	_	14	mark	_	Gloss=as|WordAlignmentBegin=216699|WordAlignmentEnd=216957
13	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=216957|WordAlignmentEnd=217042
14	dey	dey	VERB	_	VerbType=Cop	4	advcl	_	Gloss=be|WordAlignmentBegin=217042|WordAlignmentEnd=217211
15	like	like	ADP	_	_	16	case	_	Gloss=like|WordAlignmentBegin=217211|WordAlignmentEnd=217429
16	dat	dat	PRON	_	Number=Sing	14	xcomp	_	Gloss=SG.DEM|WordAlignmentBegin=217429|WordAlignmentEnd=217616
17	//	//	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=217616|WordAlignmentEnd=217616

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=NOM.SG.1|WordAlignmentBegin=216520|WordAlignmentEnd=216763
2	go	go	AUX	_	Aspect=Prosp	3	aux	_	Gloss=PROSP|WordAlignmentBegin=216763|WordAlignmentEnd=217007
3	come	come	VERB	_	_	0	root	_	Gloss=come|WordAlignmentBegin=217007|WordAlignmentEnd=217250
4	back	back	ADV	_	_	3	compound:prt	_	Gloss=back|WordAlignmentBegin=217250|WordAlignmentEnd=217493
5	>	>	PUNCT	_	_	6	punct	_	Gloss=PUNCT|WordAlignmentBegin=217493|WordAlignmentEnd=217493
6	mama	mama	NOUN	_	_	3	vocative	_	Gloss=mama|WordAlignmentBegin=217493|WordAlignmentEnd=217737
7	oh	oh	INTJ	_	_	6	discourse	_	Gloss=oh|WordAlignmentBegin=217737|WordAlignmentEnd=217980
8	//	//	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=217980|WordAlignmentEnd=217980

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 compound:prt	color:blue
1	#	#	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=230050|WordAlignmentEnd=230710
2	school	school	NOUN	_	_	3	nsubj	_	Gloss=school|WordAlignmentBegin=230710|WordAlignmentEnd=231090
3	dey	dey	VERB	_	VerbType=Cop	12	csubj	_	Gloss=be|WordAlignmentBegin=231090|WordAlignmentEnd=231160
4	only	only	ADJ	_	_	8	advcl	_	Gloss=only|WordAlignmentBegin=231160|WordAlignmentEnd=231328
5	wey	when	SCONJ	_	_	8	mark	_	Gloss=when|WordAlignmentBegin=231328|WordAlignmentEnd=231477
6	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	Gloss=NOM.PL.1|WordAlignmentBegin=231477|WordAlignmentEnd=231590
7	dey	dey	AUX	_	Aspect=Imp	8	aux	_	Gloss=IPFV|WordAlignmentBegin=231590|WordAlignmentEnd=231710
8	go	go	VERB	_	_	3	ccomp	_	Gloss=go|WordAlignmentBegin=231710|WordAlignmentEnd=231960
9	#	#	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=231960|WordAlignmentEnd=232410
10	no	no	AUX	_	Polarity=Neg	12	aux	_	Gloss=NEG|WordAlignmentBegin=232410|WordAlignmentEnd=232560
11	fit	fit	AUX	_	Mood=Pot	12	aux	_	Gloss=ABIL|WordAlignmentBegin=232560|WordAlignmentEnd=232680
12	make	make	VERB	_	_	0	root	_	Gloss=make|WordAlignmentBegin=232680|WordAlignmentEnd=232870
13	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	12	obj	_	Gloss=ACC.PL.1|WordAlignmentBegin=232870|WordAlignmentEnd=233000
14	become	become	VERB	_	_	12	xcomp	_	Gloss=become|WordAlignmentBegin=233000|WordAlignmentEnd=233280
15	better	beta	ADJ	_	Degree=Cmp	16	amod	_	Gloss=good.CMPR|WordAlignmentBegin=233280|WordAlignmentEnd=233490
16	people	people	NOUN	_	Number=Plur	14	xcomp	_	Gloss=people.PL|WordAlignmentBegin=233490|WordAlignmentEnd=233730
17	because	because	SCONJ	_	_	22	mark	_	Gloss=because|WordAlignmentBegin=233730|WordAlignmentEnd=233975
18	dis	dis	DET	_	Number=Sing|PronType=Dem	19	det	_	Gloss=SG.DEM|WordAlignmentBegin=233975|WordAlignmentEnd=234111
19	school	school	NOUN	_	_	22	nsubj	_	Gloss=school|WordAlignmentBegin=234111|WordAlignmentEnd=234280
20	na	na	AUX	_	PartType=Cop	22	cop	_	Gloss=be|WordAlignmentBegin=234280|WordAlignmentEnd=234450
21	{	{	PUNCT	_	_	22	punct	_	Gloss=PUNCT|WordAlignmentBegin=234450|WordAlignmentEnd=234450
22	garbage	garbage	NOUN	_	_	14	advcl	_	Gloss=garbage|WordAlignmentBegin=234450|WordAlignmentEnd=234840
23	in	in	ADP	_	_	22	compound:prt	_	Gloss=in|WordAlignmentBegin=234840|WordAlignmentEnd=235030
24	|c	|c	PUNCT	_	_	25	punct	_	Gloss=PUNCT|WordAlignmentBegin=235030|WordAlignmentEnd=235030
25	garbage	garbage	NOUN	_	_	22	conj	_	Gloss=garbage|WordAlignmentBegin=235030|WordAlignmentEnd=235360
26	out	out	ADP	_	_	25	compound:prt	_	Gloss=out|WordAlignmentBegin=235360|WordAlignmentEnd=235680
27	}	}	PUNCT	_	_	22	punct	_	Gloss=PUNCT|WordAlignmentBegin=235680|WordAlignmentEnd=235680
28	//	//	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=235650|WordAlignmentEnd=235680

~~~


