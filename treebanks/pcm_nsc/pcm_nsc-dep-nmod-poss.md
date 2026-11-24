---
layout: base
title:  'Statistics of nmod:poss in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.

1893 nodes (1%) are attached to their parents as `nmod:poss`.

1893 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21500264131009.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1859; 98% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:poss	color:blue
1	#	#	PUNCT	_	_	14	punct	_	Gloss=PUNCT|WordAlignmentBegin=58309|WordAlignmentEnd=58814
2	den	den	ADV	_	_	14	advmod	_	Gloss=den|WordAlignmentBegin=58814|WordAlignmentEnd=59000
3	<	<	PUNCT	_	_	2	punct	_	Gloss=PUNCT|WordAlignmentBegin=59000|WordAlignmentEnd=59000
4	ending	ending	NOUN	_	_	14	obl:mod	_	Gloss=end|WordAlignmentBegin=59000|WordAlignmentEnd=59369
5	of	of	ADP	_	_	7	case	_	Gloss=of|WordAlignmentBegin=59369|WordAlignmentEnd=59585
6	di	di	DET	_	Definite=Def|PronType=Art	7	det	_	Gloss=DEF.ART|WordAlignmentBegin=59585|WordAlignmentEnd=59679
7	year	year	NOUN	_	_	4	nmod	_	Gloss=year|WordAlignmentBegin=59679|WordAlignmentEnd=59986
8	<	<	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=59986|WordAlignmentEnd=59986
9	#	#	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=59986|WordAlignmentEnd=60261
10	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	Gloss=NOM.PL.3|WordAlignmentBegin=60261|WordAlignmentEnd=60331
11	go	go	AUX	_	Aspect=Prosp	14	aux	_	Gloss=PROSP|WordAlignmentBegin=60331|WordAlignmentEnd=60391
12	con	con	AUX	_	Aspect=Cons	14	aux	_	Gloss=CONS|WordAlignmentBegin=60391|WordAlignmentEnd=60601
13	dey	dey	AUX	_	Aspect=Imp	14	aux	_	Gloss=IPFV|WordAlignmentBegin=60601|WordAlignmentEnd=60771
14	pay	pay	VERB	_	_	0	root	_	Gloss=pay|WordAlignmentBegin=60771|WordAlignmentEnd=60970
15	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	iobj	_	Gloss=ACC.PL.1|WordAlignmentBegin=60970|WordAlignmentEnd=61240
16	#	#	PUNCT	_	_	18	punct	_	Gloss=PUNCT|WordAlignmentBegin=61240|WordAlignmentEnd=61442
17	our	our	PRON	_	Number=Plur|Person=1|Poss=Yes	18	nmod:poss	_	Gloss=PL.1.POSS|WordAlignmentBegin=61442|WordAlignmentEnd=61671
18	money	money	NOUN	_	_	14	obj	_	Gloss=money|WordAlignmentBegin=61671|WordAlignmentEnd=61971
19	//	//	PUNCT	_	_	14	punct	_	Gloss=PUNCT|WordAlignmentBegin=61971|WordAlignmentEnd=61971

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	your	your	ADJ	_	Person=2|Poss=Yes	3	nmod:poss	_	Gloss=POSS.2|WordAlignmentBegin=88830|WordAlignmentEnd=89071
2	own	own	ADJ	_	_	3	amod	_	Gloss=own|WordAlignmentBegin=89071|WordAlignmentEnd=89313
3	level	level	NOUN	_	_	4	nsubj	_	Gloss=level|WordAlignmentBegin=89313|WordAlignmentEnd=89554
4	high	high	ADJ	_	ExtPos=VERB	0	root	_	Gloss=high|WordAlignmentBegin=89554|WordAlignmentEnd=89796
5	o	o	PART	_	PartType=Disc	4	advmod	_	Gloss=EMPH|WordAlignmentBegin=89796|WordAlignmentEnd=90037
6	//	//	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=90037|WordAlignmentEnd=90037

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	but	but	CCONJ	_	_	5	discourse	_	Gloss=but|WordAlignmentBegin=145280|WordAlignmentEnd=145478
2	no	no	AUX	_	Polarity=Neg	5	aux	_	Gloss=NEG|WordAlignmentBegin=145478|WordAlignmentEnd=145675
3	be	be	AUX	_	PartType=Cop	5	cop	_	Gloss=be1|WordAlignmentBegin=145675|WordAlignmentEnd=145872
4	people	people	NOUN	_	Number=Plur	5	nmod:poss	_	Gloss=people.PL|WordAlignmentBegin=145872|WordAlignmentEnd=146070
5	fault	fault	NOUN	_	_	0	root	_	Gloss=fault|WordAlignmentBegin=146070|WordAlignmentEnd=146268
6	like	like	ADP	_	_	7	case	_	Gloss=like|WordAlignmentBegin=146268|WordAlignmentEnd=146465
7	dat	dat	PRON	_	Number=Sing	5	obl:mod	_	Gloss=SG.DEM|WordAlignmentBegin=146465|WordAlignmentEnd=146662
8	now	now	ADV	_	_	7	advmod	_	Gloss=now|WordAlignmentBegin=146662|WordAlignmentEnd=146860
9	//	//	PUNCT	_	_	5	punct	_	Gloss=PUNCT|WordAlignmentBegin=146860|WordAlignmentEnd=146860

~~~


