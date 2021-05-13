---
layout: base
title:  'Statistics of nmod:poss in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.

1889 nodes (1%) are attached to their parents as `nmod:poss`.

1889 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25516146109052.

The following 10 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1859; 98% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:poss	color:blue
1	#	#	X	_	_	14	dep	_	AlignBegin=58309|AlignEnd=58814|Gloss=PUNCT
2	den	dem	ADV	_	_	14	advmod	_	AlignBegin=58814|AlignEnd=58970|Gloss=den
3	<	<	X	_	_	2	dep	_	AlignBegin=58970|AlignEnd=59000|Gloss=PUNCT
4	ending	ending	NOUN	_	_	14	obl:mod	_	AlignBegin=59000|AlignEnd=59369|Gloss=end
5	of	of	ADP	_	_	7	case	_	AlignBegin=59369|AlignEnd=59585|Gloss=of
6	di	di	DET	_	Definite=Def|PronType=Art	7	det	_	AlignBegin=59585|AlignEnd=59679|Gloss=DEF.ART
7	year	year	NOUN	_	_	4	nmod	_	AlignBegin=59679|AlignEnd=59956|Gloss=year
8	<	<	X	_	_	4	dep	_	AlignBegin=59956|AlignEnd=59986|Gloss=PUNCT
9	#	#	X	_	_	4	dep	_	AlignBegin=59986|AlignEnd=60261|Gloss=PUNCT
10	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=60261|AlignEnd=60331|Gloss=NOM.PL.3
11	go	go	AUX	_	Aspect=Prosp	14	aux	_	AlignBegin=60331|AlignEnd=60391|Gloss=PROSP
12	con	con	AUX	_	Aspect=Cons	14	aux	_	AlignBegin=60391|AlignEnd=60601|Gloss=CONS
13	dey	dey	AUX	_	Aspect=Imp	14	aux	_	AlignBegin=60601|AlignEnd=60771|Gloss=IPFV
14	pay	pay	VERB	_	_	0	root	_	AlignBegin=60771|AlignEnd=60970|Gloss=pay
15	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	obj	_	AlignBegin=60970|AlignEnd=61240|Gloss=ACC.PL.1
16	#	#	X	_	_	18	dep	_	AlignBegin=61240|AlignEnd=61442|Gloss=PUNCT
17	our	our	PRON	_	Number=Plur|Person=1|Poss=Yes	18	nmod:poss	_	AlignBegin=61442|AlignEnd=61671|Gloss=PL.1.POSS
18	money	money	NOUN	_	_	14	obj	_	AlignBegin=61671|AlignEnd=61941|Gloss=money
19	//	//	X	_	_	14	dep	_	AlignBegin=61941|AlignEnd=61971|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	but	but	CCONJ	_	_	5	discourse	_	AlignBegin=145280|AlignEnd=145478|Gloss=but
2	no	no	PART	_	Polarity=Neg	5	advmod	_	AlignBegin=145478|AlignEnd=145675|Gloss=NEG
3	be	be	AUX	_	PartType=Cop	5	cop	_	AlignBegin=145675|AlignEnd=145872|Gloss=be1
4	people	people	NOUN	_	Number=Plur	5	nmod:poss	_	AlignBegin=145872|AlignEnd=146070|Gloss=people.PL
5	fault	fault	NOUN	_	_	0	root	_	AlignBegin=146070|AlignEnd=146268|Gloss=fault
6	like	like	ADP	_	_	7	case	_	AlignBegin=146268|AlignEnd=146465|Gloss=like
7	dat	dat	PRON	_	Number=Sing|PronType=Dem	5	obl:mod	_	AlignBegin=146465|AlignEnd=146662|Gloss=SG.DEM
8	now	now	ADV	_	_	7	advmod	_	AlignBegin=146662|AlignEnd=146860|Gloss=now
9	//	//	X	_	_	5	dep	_	AlignBegin=146860|AlignEnd=146860|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	#	#	X	_	_	3	dep	_	AlignBegin=240030|AlignEnd=240150|Gloss=PUNCT
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=240150|AlignEnd=240270|Gloss=NOM.SG.1
3	buy	buy	VERB	_	_	0	root	_	AlignBegin=240300|AlignEnd=240500|Gloss=buy
4	im	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	AlignBegin=240500|AlignEnd=240616|Gloss=NOM.SG.3
5	own	own	ADJ	_	_	3	obj	_	AlignBegin=240616|AlignEnd=240690|Gloss=own
6	//=	//=	X	_	_	7	dep	_	AlignBegin=240690|AlignEnd=240720|Gloss=PUNCT
7	buy	buy	VERB	_	_	3	parataxis:conj	_	AlignBegin=240720|AlignEnd=240890|Gloss=buy
8	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	9	nmod	_	AlignBegin=240890|AlignEnd=241080|Gloss=SG.1.POSS
9	own	own	ADJ	_	_	7	obj	_	AlignBegin=241080|AlignEnd=241370|Gloss=own
10	//=	//=	X	_	_	13	dep	_	AlignBegin=241370|AlignEnd=241400|Gloss=PUNCT
11	#	#	X	_	_	13	dep	_	AlignBegin=241400|AlignEnd=242040|Gloss=PUNCT
12	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	13	nsubj	_	AlignBegin=242040|AlignEnd=242170|Gloss=NOM.PL.1
13	siddon	siddon	VERB	_	_	7	parataxis:conj	_	AlignBegin=242170|AlignEnd=242460|Gloss=sit_down
14	dey	dey	AUX	_	Aspect=Imp	15	aux	_	AlignBegin=242460|AlignEnd=242580|Gloss=IPFV
15	chop	chop	VERB	_	_	13	advcl	_	AlignBegin=242580|AlignEnd=242830|Gloss=eat
16	//	//	X	_	_	3	dep	_	AlignBegin=242830|AlignEnd=242860|Gloss=PUNCT

~~~


